class Event {
  constructor(id, title, description, date, type = 'default') {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.type = type;
  }

  // Gerar eventos a cada 3 dias a partir de 18/08/2025
  static generateEvents() {
    const events = [];
    const startDate = new Date('2025-08-18');
    const eventTitles = [
      'Box 01',
      'Box 02',
      'Box 03',
      'Box 04',
      'Box 05',
      'Box 06',
      'Box 07',
      'Box 08',
      'Box 09',
      'Box 10',
      'Box 11',
      'Box 12',
      'Box 13',
      'Box 14',
      'Box 15',
      'Box 16'
    ];

    const eventDescriptions = [
      '500k Adena + 40 Lcoin',
      '600k Adena + 50 Lcoin',
      '700k Adena + 50 Lcoin',
      '800k Adena + 50 Lcoin',
      '800k Adena + 60 Lcoin',
      '1kk Adena + 70 Lcoin',
      '1kk Adena + 150 Lcoin',
      '3kk Adena + 80 Lcoin',
      '3kk500k Adena + 90 Lcoin',
      '4kk Adena + 180 Lcoin',
      '5kk Adena + 200 Lcoin',
      '6kk Adena + 220 Lcoin',
      '7kk Adena + 240 Lcoin',
      '7kk Adena + 280 Lcoin',
      '7kk Adena + 320 Lcoin',
      '8kk Adena + 360 Lcoin'
    ];

    const eventTypes = [
      '500k Adena + 40 Lcoin',
      '600k Adena + 50 Lcoin',
      '700k Adena + 50 Lcoin',
      '800k Adena + 50 Lcoin',
      '800k Adena + 60 Lcoin',
      '1kk Adena + 70 Lcoin',
      '1kk Adena + 150 Lcoin',
      '3kk Adena + 80 Lcoin',
      '3kk500k Adena + 90 Lcoin',
      '4kk Adena + 180 Lcoin',
      '5kk Adena + 200 Lcoin',
      '6kk Adena + 220 Lcoin',
      '7kk Adena + 240 Lcoin',
      '7kk Adena + 280 Lcoin',
      '7kk Adena + 320 Lcoin',
      '8kk Adena + 360 Lcoin'
    ];

    for (let i = 0; i < 16; i++) {
      const eventDate = new Date(startDate);
      eventDate.setDate(startDate.getDate() + (i * 3));
      
      const event = new Event(
        i + 1,
        eventTitles[i],
        eventDescriptions[i],
        eventDate.toISOString().split('T')[0],
        eventTypes[i]
      );
      
      events.push(event);
    }

    return events;
  }

  // Buscar eventos por mês
  static getEventsByMonth(year, month) {
    const allEvents = this.generateEvents();
    return allEvents.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month;
    });
  }

  // Buscar eventos por data específica
  static getEventsByDate(date) {
    const allEvents = this.generateEvents();
    return allEvents.filter(event => event.date === date);
  }

  // Buscar evento por ID
  static getEventById(id) {
    const allEvents = this.generateEvents();
    return allEvents.find(event => event.id === id);
  }
}

module.exports = Event;
