const Event = require('../models/Event');

class CalendarController {
  // Renderizar página principal do calendário
  static async renderCalendar(req, res) {
    try {
      const currentDate = new Date();
      const year = parseInt(req.query.year) || currentDate.getFullYear();
      const month = parseInt(req.query.month) || currentDate.getMonth();
      
      const events = Event.getEventsByMonth(year, month);
      
      res.render('calendar', {
        title: 'Calendário de Boxes',
        year,
        month,
        events,
        currentDate: currentDate.toISOString().split('T')[0]
      });
    } catch (error) {
      console.error('Erro ao renderizar calendário:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  // API para buscar eventos por mês
  static async getEventsByMonth(req, res) {
    try {
      const { year, month } = req.params;
      const events = Event.getEventsByMonth(parseInt(year), parseInt(month));
      
      res.json({
        success: true,
        data: events
      });
    } catch (error) {
      console.error('Erro ao buscar eventos por mês:', error);
      res.status(500).json({ 
        success: false, 
        error: 'Erro interno do servidor' 
      });
    }
  }

  // API para buscar eventos por data específica
  static async getEventsByDate(req, res) {
    try {
      const { date } = req.params;
      const events = Event.getEventsByDate(date);
      
      res.json({
        success: true,
        data: events
      });
    } catch (error) {
      console.error('Erro ao buscar eventos por data:', error);
      res.status(500).json({ 
        success: false, 
        error: 'Erro interno do servidor' 
      });
    }
  }

  // API para buscar evento por ID
  static async getEventById(req, res) {
    try {
      const { id } = req.params;
      const event = Event.getEventById(parseInt(id));
      
      if (!event) {
        return res.status(404).json({
          success: false,
          error: 'Evento não encontrado'
        });
      }
      
      res.json({
        success: true,
        data: event
      });
    } catch (error) {
      console.error('Erro ao buscar evento por ID:', error);
      res.status(500).json({ 
        success: false, 
        error: 'Erro interno do servidor' 
      });
    }
  }

  // API para buscar todos os eventos
  static async getAllEvents(req, res) {
    try {
      const events = Event.generateEvents();
      
      res.json({
        success: true,
        data: events
      });
    } catch (error) {
      console.error('Erro ao buscar todos os eventos:', error);
      res.status(500).json({ 
        success: false, 
        error: 'Erro interno do servidor' 
      });
    }
  }
}

module.exports = CalendarController;
