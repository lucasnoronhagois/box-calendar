import { format, getDay, isSameDay, isSameMonth } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import CalendarDay from './CalendarDay'

const CalendarGrid = ({ monthDays, currentDate, events, onEventClick }) => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  // Adicionar dias vazios no início para alinhar com o primeiro dia da semana
  // getDay() retorna 0 para domingo, 1 para segunda, etc.
  // Agosto 2025 começa em sexta-feira (5)
  const firstDayOfWeek = getDay(monthDays[0])
  const emptyDays = Array(firstDayOfWeek).fill(null)

  const getEventsForDate = (date) => {
    return events.filter(event => {
      const eventDate = new Date(event.date + 'T00:00:00')
      return isSameDay(eventDate, date)
    })
  }

  return (
    <div className="calendar-grid-container">
      <div className="calendar-header">
        {weekDays.map(day => (
          <div key={day} className="day-header">{day}</div>
        ))}
      </div>
      
      <div className="calendar-grid">
        {/* Dias vazios no início */}
        {emptyDays.map((_, index) => (
          <div key={`empty-${index}`} className="calendar-day empty"></div>
        ))}
        
        {/* Dias do mês */}
        {monthDays.map(day => (
          <CalendarDay
            key={day.toISOString()}
            date={day}
            events={getEventsForDate(day)}
            isCurrentMonth={isSameMonth(day, currentDate)}
            onEventClick={onEventClick}
          />
        ))}
      </div>
    </div>
  )
}

export default CalendarGrid
