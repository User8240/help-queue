import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";
//ADDED FROM LESSON 27
//STEP 2: Pass New Props to TicketList Component and Add propTypes
//import PropTypes from "prop-types";

// remove const mainTicketList = [ ... ]. We no longer want these.

function TicketList(props){
  return (
   <React.Fragment> 
    <hr/>
    {props.ticketList.map((ticket, index) =>
      <Ticket 
        //secondPassDown={props.ticketList}
        names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        key={index}
      />
    )}
   </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;



