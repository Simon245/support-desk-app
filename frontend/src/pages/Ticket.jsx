import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeTicket, getTicket, reset } from '../features/tickets/ticketSlice';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getNotes, reset as notesReset } from '../features/notes/noteSlice';
import NoteItem from '../components/NoteItem';

function Ticket() {
  const { ticket, isError, isLoading, isSuccess } = useSelector(
    (state) => state.tickets,
  );
  const { notes, isLoading: notesIsLoading } = useSelector(
    (state) => state.notes,
  );
  const dispatch = useDispatch();
  const { ticketId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
        dispatch(notesReset());
      }
    };
  }, [isSuccess]);

  useEffect(() => {
    dispatch(getTicket(ticketId));
    dispatch(getNotes(ticketId));
  }, [ticketId]);

  const onTicketClose = () => {
    dispatch(closeTicket(ticketId));
    toast.success('Ticket closed');
    navigate('/tickets');
  };

  if (isLoading || notesIsLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h3>Something Went Wrong</h3>;
  }

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url="/tickets" />
        <h2>
          Ticket ID: {ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>
          Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-GB')}
        </h3>
        <hr />
        <div className="ticket-desc">
          <h3>Description of Issue</h3>
          <p>{ticket.description}</p>
        </div>
        <h2>Notes</h2>
      </header>
      {notes.map((note) => (
        <NoteItem key={note._id} note={note} />
      ))}
      {ticket.status !== 'closed' && (
        <button className="btn btn-block btn-danger" onClick={onTicketClose}>
          Close Ticket
        </button>
      )}
    </div>
  );
}

export default Ticket;
