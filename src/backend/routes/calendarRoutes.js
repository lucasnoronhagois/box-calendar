const express = require('express');
const router = express.Router();
const CalendarController = require('../controllers/CalendarController');

// Rota principal - renderiza o calendário
router.get('/', CalendarController.renderCalendar);

// Rotas da API
router.get('/api/events', CalendarController.getAllEvents);
router.get('/api/events/month/:year/:month', CalendarController.getEventsByMonth);
router.get('/api/events/date/:date', CalendarController.getEventsByDate);
router.get('/api/events/:id', CalendarController.getEventById);

module.exports = router;
