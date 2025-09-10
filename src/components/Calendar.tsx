import React, { useState, useEffect } from 'react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, addMonths, subMonths } from 'date-fns'
import CalendarGrid from './CalendarGrid'
import EventsSidebar from './EventsSidebar'
import EventModal from './EventModal'
import { Event } from '../types'
import '../styles/Calendar.css'
import '../styles/Discord.css'

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [events, setEvents] = useState<Event[]>([])
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [showModal, setShowModal] = useState<boolean>(false)

  // Dados de exemplo dos eventos
  const sampleEvents: Event[] = [
    {
      id: 1,
      title: "Box 1",
      date: "2025-08-18",      
      type: "New box",
      description: "500k Adena + 40 Lcoin"
    },
    {
      id: 2,
      title: "Box 2",
      date: "2025-08-21",
      type: "New box",
      description: "700k Adena + 50 Lcoin"
    },
    {
      id: 3,
      title: "Box 3",
      date: "2025-08-24",
      type: "New box",
      description: "700k Adena + 50 Lcoin"
    },
    {
      id: 4,
      title: "Box 4",
      date: "2025-08-27",
      type: "New box",
      description: "800k Adena + 50 Lcoin"
    },
    {
      id: 5,
      title: "Box 5",
      date: "2025-08-30",
      type: "New box",
      description: "800k Adena + 60 Lcoin"
    },
    {
      id: 6,
      title: "Box 6",
      date: "2025-09-02",
      type: "New box",
      description: "1kk Adena + 70 Lcoin"
    },
    {
      id: 7,
      title: "Box 7",
      date: "2025-09-05",
      type: "New box",
      description: "1kk Adena + 150 Lcoin"
    },
    {
      id: 8,
      title: "Box 8",
      date: "2025-09-08",
      type: "New box",
      description: "3kk Adena + 80 Lcoin"
    },
    {
      id: 9,
      title: "Box 9",
      date: "2025-09-11",
      type: "New box",
      description: "3kk500k Adena + 90 Lcoin"
    },
    {
      id: 10,
      title: "Box 10",
      date: "2025-09-14",
      type: "New box",
      description: "4kk Adena + 180 Lcoin"
    },
    {
      id: 11,
      title: "Box 11",
      date: "2025-09-17",
      type: "New box",
      description: "5kk Adena + 200 Lcoin"
    },
    {
      id: 12,
      title: "Box 12",
      date: "2025-09-20",
      type: "New box",
      description: "6kk Adena + 220 Lcoin"
    },
    {
      id: 13,
      title: "Box 13",
      date: "2025-09-23",
      type: "New box",
      description: "7kk Adena + 240 Lcoin"
    },
    {
      id: 14,
      title: "Box 14",
      date: "2025-09-26",
      type: "New box",
      description: "7kk Adena + 280 Lcoin"
    },
    {
      id: 15,
      title: "Box 15",
      date: "2025-09-29",
      type: "New box",
      description: "7kk Adena + 320 Lcoin"
    },
    {
      id: 16,
      title: "Box 16",
      date: "2025-10-02",
      type: "New box",
      description: "8kk Adena + 360 Lcoin"
    }
  ]

  useEffect(() => {
    setEvents(sampleEvents)
  }, [])

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1))
  }

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1))
  }

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedEvent(null)
  }


  const monthDays = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate)
  })

  return (
    <div className="calendar-container">
      {/* Header */}
      <header className="header text-center py-4">
        <h1 className="fw-bold text-white title-calendar">📅 Box Calendar</h1>
        <div className="calendar-nav d-flex align-items-center justify-content-center gap-3">
          <button 
            onClick={prevMonth}
            className="nav-btn btn btn-outline-light rounded-circle"
          >
            ←
          </button>
          <h2 className="text-white month-title">
            {format(currentDate, 'MMMM yyyy')}
          </h2>
          <button 
            onClick={nextMonth}
            className="nav-btn btn btn-outline-light rounded-circle"
          >
            →
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-8">
            <CalendarGrid 
              monthDays={monthDays}
              currentDate={currentDate}
              events={events}
              onEventClick={handleEventClick}
            />
          </div>
          
          <div className="col-12 col-lg-4">
            <EventsSidebar 
              events={events.filter(event => 
                isSameMonth(new Date(event.date), currentDate)
              )}
              onEventClick={handleEventClick}
            />
          </div>
        </div>
      </div>

           {/* Discord Section */}
           <div className="text-center mt-3">
             <a 
               href="https://discord.com/users/335859108425236493" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-decoration-none"
             >
               <div className="discord-simple">
                 <i className="fab fa-discord text-primary me-2"></i>
                 <span className="discord-text">
                   <img src="/discord.png" alt="Discord" className="discord-icon me-1" />
                   lucasng
                 </span>
               </div>
             </a>
           </div>

      {/* Modal */}
      <EventModal 
        show={showModal}
        event={selectedEvent}
        onClose={closeModal}
      />
    </div>
  )
}

export default Calendar
