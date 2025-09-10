import React from 'react'
import { format, isSameDay, isToday } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Event } from '../types'

interface CalendarDayProps {
  date: Date
  events: Event[]
  isCurrentMonth: boolean
  onEventClick: (event: Event) => void
}

const CalendarDay: React.FC<CalendarDayProps> = ({ date, events, isCurrentMonth, onEventClick }) => {
  const dayNumber = format(date, 'd')
  const isCurrentDay = isToday(date)
  
  return (
    <div 
      className={`calendar-day ${!isCurrentMonth ? 'other-month' : ''} ${isCurrentDay ? 'today' : ''} ${events.length > 0 ? 'has-events' : ''}`}
      onClick={events.length > 0 ? () => onEventClick(events[0]) : undefined}
      style={{ cursor: events.length > 0 ? 'pointer' : 'default' }}
      title={events.length > 0 ? events[0].title : ''}
    >
      <div className="day-number">{dayNumber}</div>
      
      {events.length > 0 && (
        <div className="event-indicator" onClick={(e) => {
          e.stopPropagation() // Evita duplo clique
          onEventClick(events[0])
        }} title={events[0].title}>
          <div className="event-dot"></div>
        </div>
      )}
    </div>
  )
}

export default CalendarDay
