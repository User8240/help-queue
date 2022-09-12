import React from "react";
import { v4 } from 'uuid';
//ABOVE: gives us the ability to assign unique IDs to new tickets
//v4() will create a random 32 character string (guarantees a unique ID pretty much)
import PropTypes from "prop-types";

function NewTicketForm(props){

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      //props is representing anything we passed down from the parent component 
      //props.onNewTicketCreation represents the method from ticket control (handleAddingNewTicketToList)
      names: event.target.names.value, 
      //event.target probably represents what we submitted - in this case the form (because event is the action of *submitted* and we *targeted* the form)
      location: event.target.location.value, 
      issue: event.target.issue.value, 
      id: v4()
      //this whole object will be viewed as newTicket in the parameters of our handleAddingNewTicketToList method - REMEMBER this will get passed to TicketControl because our method needs to execute inside of the parent component so we are able to update state
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        {/* what we add after the = does whatever we want to form to do on submit (when the button below is clicked)*/}
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
        <button type='submit'>Help</button>
      </form>
    </React.Fragment>
  );

}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;