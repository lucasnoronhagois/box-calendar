class Calendar {
    constructor() {
        this.currentYear = currentYear;
        this.currentMonth = currentMonth;
        this.events = events;
        this.init();
    }

    init() {
        this.renderCalendar();
        this.bindEvents();
        this.highlightEvents();
    }

    renderCalendar() {
        const grid = document.getElementById('calendarGrid');
        grid.innerHTML = '';

        const firstDay = new Date(this.currentYear, this.currentMonth, 1);
        const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());

        const today = new Date();
        const isCurrentMonth = this.currentYear === today.getFullYear() && this.currentMonth === today.getMonth();

        for (let i = 0; i < 42; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);

            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            
            const dayNumber = document.createElement('div');
            dayNumber.className = 'day-number';
            dayNumber.textContent = date.getDate();
            
            dayElement.appendChild(dayNumber);

            // Verificar se é hoje
            if (isCurrentMonth && date.getDate() === today.getDate()) {
                dayElement.classList.add('today');
            }

            // Verificar se é de outro mês
            if (date.getMonth() !== this.currentMonth) {
                dayElement.classList.add('other-month');
            }

            // Verificar se tem evento
            const dateString = date.toISOString().split('T')[0];
            const dayEvents = this.events.filter(event => event.date === dateString);
            
            if (dayEvents.length > 0) {
                dayElement.classList.add('has-event');
                dayElement.setAttribute('data-date', dateString);
                dayElement.setAttribute('data-events', JSON.stringify(dayEvents));
                
                const indicator = document.createElement('div');
                indicator.className = 'event-indicator';
                dayElement.appendChild(indicator);
            }

            dayElement.addEventListener('click', () => this.handleDayClick(dateString, dayEvents));
            grid.appendChild(dayElement);
        }

        this.updateMonthDisplay();
    }

    updateMonthDisplay() {
        const monthNames = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        
        const monthDisplay = document.getElementById('currentMonth');
        monthDisplay.textContent = `${monthNames[this.currentMonth]} ${this.currentYear}`;
    }

    bindEvents() {
        document.getElementById('prevMonth').addEventListener('click', () => {
            this.currentMonth--;
            if (this.currentMonth < 0) {
                this.currentMonth = 11;
                this.currentYear--;
            }
            this.loadMonthData();
        });

        document.getElementById('nextMonth').addEventListener('click', () => {
            this.currentMonth++;
            if (this.currentMonth > 11) {
                this.currentMonth = 0;
                this.currentYear++;
            }
            this.loadMonthData();
        });

        // Modal events
        const modal = document.getElementById('eventModal');
        const closeBtn = document.querySelector('.close');
        const modalBoxImage = document.getElementById('modalBoxImage');
        
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            modalBoxImage.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
                modalBoxImage.style.display = 'none';
            }
        });
    }

    async loadMonthData() {
        try {
            const response = await fetch(`/api/events/month/${this.currentYear}/${this.currentMonth}`);
            const data = await response.json();
            
            if (data.success) {
                this.events = data.data;
                this.renderCalendar();
                this.updateEventsSidebar();
            }
        } catch (error) {
            console.error('Erro ao carregar dados do mês:', error);
        }
    }

    updateEventsSidebar() {
        const eventsList = document.getElementById('eventsList');
        
        if (this.events.length === 0) {
            eventsList.innerHTML = '<p class="no-events">Nenhum evento neste mês</p>';
            return;
        }

        eventsList.innerHTML = this.events.map(event => `
            <div class="event-item" data-date="${event.date}">
                <div class="event-date">${new Date(event.date + 'T00:00:00').toLocaleDateString('pt-BR')}</div>
                <div class="event-title">${event.title}</div>
                <div class="event-type ${event.type}">${event.type}</div>
            </div>
        `).join('');

        // Adicionar eventos de clique aos itens
        document.querySelectorAll('.event-item').forEach(item => {
            item.addEventListener('click', () => {
                const date = item.getAttribute('data-date');
                const dayEvents = this.events.filter(event => event.date === date);
                this.showEventModal(dayEvents[0]);
            });
        });
    }

    handleDayClick(dateString, dayEvents) {
        if (dayEvents && dayEvents.length > 0) {
            this.showEventModal(dayEvents[0]);
        }
    }

    showEventModal(event) {
        const modal = document.getElementById('eventModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalDate = document.getElementById('modalDate');
        const modalDescription = document.getElementById('modalDescription');
        const modalType = document.getElementById('modalType');
        const modalBoxImage = document.getElementById('modalBoxImage');

        modalTitle.textContent = event.title;
        
        // Corrigir problema de fuso horário - adicionar 'T00:00:00' para garantir que seja interpretado como data local
        const eventDate = new Date(event.date + 'T00:00:00');
        modalDate.textContent = eventDate.toLocaleDateString('pt-BR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        modalDescription.textContent = event.description;
        
        modalType.textContent = event.type;
        modalType.className = `event-type ${event.type}`;

        // Mostrar imagem da box correspondente
        const boxNumber = event.id.toString().padStart(2, '0');
        modalBoxImage.src = `/boxes/box${boxNumber}.png`;
        modalBoxImage.style.display = 'block';
        modalBoxImage.alt = `${event.title} - Box ${boxNumber}`;

        modal.style.display = 'block';
    }

    highlightEvents() {
        // Destacar eventos na sidebar
        document.querySelectorAll('.event-item').forEach(item => {
            item.addEventListener('click', () => {
                const date = item.getAttribute('data-date');
                const dayEvents = this.events.filter(event => event.date === date);
                this.showEventModal(dayEvents[0]);
            });
        });
    }
}

// Inicializar calendário quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    new Calendar();
});

// Função para formatar data
function formatDate(date) {
    return date.toLocaleDateString('pt-BR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
