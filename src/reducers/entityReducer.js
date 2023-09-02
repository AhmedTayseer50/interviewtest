// sr/reducers/entityReducer.js

const initialState = {
  entities: {},
};

const entityReducer = (state = initialState, action) => {
  let updatedEntity; // Declare the variable outside the case block with a default value or undefined

  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      // When 'FETCH_DATA_SUCCESS' action is dispatched, update 'entities' with the payload data
      return { ...state, entities: action.payload };

    case 'UPDATE_ENTITY':
      // When 'UPDATE_ENTITY' action is dispatched, update an individual entity
      updatedEntity = action.payload; // Assign a value inside the case block
      return {
        ...state,
        entities: {
          ...state.entities,
          [updatedEntity.id]: updatedEntity,
        },
      };

    // Add more cases for other actions as needed

    default:
      // Return the current state for any unhandled actions
      return state;
  }
};

export default entityReducer;




