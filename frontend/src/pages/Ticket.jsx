import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeTicket, getTicket, reset } from '../features/tickets/ticketSlice';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Ticket() {
  const { ticket, isError, isLoading, isSuccess } = useSelector(
    (state) => state.tickets,
  );
  const dispatch = useDispatch();
  const { ticketId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [isSuccess]);

  useEffect(() => {
    dispatch(getTicket(ticketId));
  }, [ticketId]);

  const onTicketClose = () => {
    dispatch(closeTicket(ticketId));
    toast.success('Ticket closed');
    navigate('/tickets');
  };

  if (isLoading) {
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
      </header>
      {ticket.status !== 'closed' && (
        <button className="btn btn-block btn-danger" onClick={onTicketClose}>
          Close Ticket
        </button>
      )}
    </div>
  );
}

export default Ticket;
