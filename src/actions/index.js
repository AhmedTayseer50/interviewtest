// actions/index.js

import { mockData } from '../mockData.js'; // Import your mock data

export const fetchData = (searchTerm) => {
  return async (dispatch) => {
    try {
      // Use the mock data as your data source
      const data = mockData;

      // Filter the data based on the search term
      const filteredData = Object.values(data.data).filter((entity) =>
        entity.id.toString().includes(searchTerm) || entity.name.includes(searchTerm)
      );

      // Dispatch an action to store the filtered data in Redux
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: filteredData });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
};

// Action to set the selected entity ID in Redux state
export const setSelectedEntityId = (entityId) => {
  return { type: 'SET_SELECTED_ENTITY_ID', payload: entityId };
};


// Action to fetch an individual entity by ID
export const fetchEntityById = (entityId) => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const entities = state.entities;

      // Check if the entity with the given ID already exists in the store
      if (entities[entityId]) {
        // If it exists, no need to make an AJAX request, just dispatch the action to set the selected entity
        dispatch(setSelectedEntityId(entityId));
      } else {
        // If it doesn't exist, make an AJAX request to fetch the entity
        const response = await fetch(`/api/entities/${entityId}`); // Replace with your API endpoint
        const data = await response.json();

        // Dispatch an action to update the entity in the store
        dispatch(updateEntity(data));

        // Dispatch an action to set the selected entity
        dispatch(setSelectedEntityId(entityId));
      }
    } catch (error) {
      console.error('Error fetching entity:', error);
    }
  };
};

// Action to update an individual entity in the store
export const updateEntity = (entity) => {
  return { type: 'UPDATE_ENTITY', payload: entity };
};