/*
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      id: id
    };
*/

const reducer = (state = {}, action) => {
  const { names, location, issue, id } = action;
  switch (action.type) {
    //this switch case is saying if action.type is = to any case, do what comes after the : (*on the same line as case*)
  case 'ADD_TICKET':
    //Object.assign is taking in three arguments: Arguments listed below (v)
    //1: An empty object so it can pass in our "state" object (action) to that empty object we created (this is so it doesn't mutate the state)
    //2: This argument, "state", is the one that will be cloned (aka the one we are passing into the empty object we have instantiated above) 
    //3: Our last argument is what changes we want to make to our new object. This will be the new ticket that will eventually get added to our ticket 
    return Object.assign({}, state, {
      [id]: { //putting id inside of [] brackets lets id = the variable id (which is equal to action.id form our action object)
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
    case 'DELETE_TICKET':
      let newState = { ...state }; //here we make a copy of the state object and store it in a variable called newState (which we will be mutating)
      delete newState[id]; // here we delete the id of the newState (which is a copy ) 
                           // [id] is actually [action.id] if we hadn't destructured on line 12
      return newState;
    default:
      return state;
    }
  };
  
  export default reducer;

    // const id = 1
    // newState.id -> id: { ??? }
    // newState[id] -> 1: { ??? } 


    //newState = {
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

    // newState.1
    // newState[1]

    // newState[2] ==== 
   //   2: {
    //     names: 'Jasmine and Justine',
    //     location: '2a',
    //     issue: 'Reducer has side effects.',
    //     id: 2 
    //   }