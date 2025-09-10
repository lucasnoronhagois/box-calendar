import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Event } from '../types'

interface EventModalProps {
  show: boolean
  event: Event | null
  onClose: () => void
}

const EventModal: React.FC<EventModalProps> = ({ show, event, onClose }) => {
  if (!event) return null

  const getTypeBadgeClass = (type: string): string => {
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

  const getBoxImage = (): string => {
    const boxNumber = event.id
    return `/box${boxNumber.toString().padStart(2, '0')}.png`
  }

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{event.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-primary fw-bold mb-3">
          {format(new Date(event.date + 'T00:00:00'), 'dd/MM/yyyy', { locale: ptBR })}
        </p>
        <p className="mb-3">{event.description}</p>
        <div className="mb-3">
          <span className={getTypeBadgeClass(event.type)}>
            {event.type}
          </span>
        </div>
        <div className="text-center">
          <img 
            src={getBoxImage()} 
            alt="Box Image" 
            className="img-fluid rounded"
            style={{ maxWidth: '600px', width: '100%', height: 'auto' }}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EventModal
