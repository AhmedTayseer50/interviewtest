// sr/reducers/entityReducer.js

const initialState = {
  entities: {},
};

const entityReducer = (state = initialState, action) => {
  let updatedEntities; // Declare the variable here

  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      // When 'FETCH_DATA_SUCCESS' action is dispatched, update 'entities' with the payload data
      return { ...state, entities: { ...state.entities, ...action.payload } };

    case 'UPDATE_ENTITY': {
      // Wrap the case block with curly braces to create a block scope
      // When 'UPDATE_ENTITY' action is dispatched, update an individual entity
      let updatedEntity; // Move the declaration here
      updatedEntity = action.payload;

      updatedEntities = {
        ...state.entities,
        [updatedEntity.id]: updatedEntity,
      };
      return { ...state, entities: updatedEntities };
    }

    // Add more cases for other actions as needed

    default:
      // Return the current state for any unhandled actions
      return state;
  }
};

export default entityReducer;


