import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props){
  const { ticket , onClickingDelete , onClickingEdit} = props;
  //we use object destructuring here to derive the ticket object from our props (which is the ticket we passed in - the selected ticket to be specific)

  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <button onClick={()=> onClickingEdit() }>Update Ticket</button> { /* new code */ }
      <button onClick={()=> onClickingDelete(ticket.id) }>Close Ticket</button>

      <hr/>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TicketDetail;