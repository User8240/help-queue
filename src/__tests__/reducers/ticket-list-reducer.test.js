import ticketListReducer from '../../reducers/ticket-list-reducer';

describe('ticketListReducer', () => {

  const currentState = {
    1: {
      names: 'Ryan & Aimen',
      location: '4b',
      issue: 'Redux action is not working correctly.',
      id: 1 
    }, 2: {
      names: 'Jasmine and Justine',
      location: '2a',
      issue: 'Reducer has side effects.',
      id: 2 
    }
  }

  let action;
  const ticketData = {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new ticket data to mainTicketList', () => {
    const { names, location, issue, id } = ticketData; //destructuring (reassign properties of ticketData )
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      id: id
    };

    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

  test('Should successfully delete a ticket', () => {
    action = {
      type: 'DELETE_TICKET',
      id: 1
    };
    //The code above is action, it is passed into our ticketListReducer below as action 
    expect(ticketListReducer(currentState, action)).toEqual({   //ticketListReducer is our "reducer" from "ticket-list-reducer"

                                                                //currentState is defined above as:   const currentState = {
                                                                //   1: {
                                                                //     names: 'Ryan & Aimen',
                                                                //     location: '4b',
                                                                //     issue: 'Redux action is not working correctly.',
                                                                //     id: 1 
                                                                //       },
                                                                //
                                                                //   2: {
                                                                //     names: 'Jasmine and Justine',
                                                                //     location: '2a',
                                                                //     issue: 'Reducer has side effects.',
                                                                //     id: 2 
                                                                //   }
                                                                // }

      2: {
        names: 'Jasmine and Justine',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2 
      }
    });
  });
});