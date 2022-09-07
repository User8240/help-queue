import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";
//ADDED FROM LESSON 27
//STEP 2: Pass New Props to TicketList Component and Add propTypes

// remove const mainTicketList = [ ... ]. We no longer want these.

function TicketList(){
  return (
   <React.Fragment> 
    <hr/>
    {mainTicketList.map((ticket, index) =>
      <Ticket names={ticket.names}
      location={ticket.location}
      issue={ticket.issue}
      key={index}/>
    )}
   </React.Fragment>
  );
}

export default TicketList;



