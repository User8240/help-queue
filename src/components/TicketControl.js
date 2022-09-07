import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTicketList: []
      //ABOVE: ADDED FROM LESSON 27
      //STEP 1: Move mainTicketList into State
      
      //We're initializing mainTicketList as an empty array so the application doesn't start with "fake" tickets (the queue should be empty till we add tickets via the form)
     //NOTICE: ^ this is why we have removed our array of "dummy" tickets (filler data)
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }  

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList} />; 
      //ABOVE: ADDED FROM LESSON 27 
      //STEP 1: Move mainTicketList into State

      //Here we are passing mainTicketList down to TicketList
      //We target it's place in state with this.state.mainTicketList and it's included as a prop
      //We call it ticketList here, so we'll use that name to access it as a prop inside of the TicketList component
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl;

//This is the parent to TicketList and NewTicketForm