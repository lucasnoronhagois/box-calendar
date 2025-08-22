import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const EventsSidebar = ({ events, onEventClick }) => {
  const getTypeBadgeClass = (type) => {
    switch (type) {
      case 'New box':
        return 'event-type newbox'
      case 'celebration':
        return 'badge bg-success'
      case 'deadline':
        return 'badge bg-danger'
      default:
        return 'badge bg-secondary'
    }
  }

  return (
    <div className="events-sidebar">
      <h3 className="h5 text-center mb-3">Next Events</h3>
      
      <div className="events-list">
        {events.length > 0 ? (
          events.map(event => (
            <div 
              key={event.id} 
              className="event-item card mb-2"
              onClick={() => onEventClick(event)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-body p-3">
                <div className="event-date small text-primary fw-bold mb-1">
                  {format(new Date(event.date + 'T00:00:00'), 'dd/MM/yyyy', { locale: ptBR })}
                </div>
                <div className="event-title fw-medium mb-2">{event.title}</div>
                <div className={getTypeBadgeClass(event.type)}>
                  {event.type}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-events text-muted text-center">
            Nenhum evento neste mês
          </p>
        )}
      </div>
    </div>
  )
}

export default EventsSidebar
