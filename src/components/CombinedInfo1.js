// CombinedInfo.js

import React from 'react';
import { useSelector } from 'react-redux';

const CombinedInfo1 = () => {
  // Get the selected entity ID from your application's state (you'll need to implement this)
  const selectedEntityId = useSelector((state) => state.selectedEntityId);

  // Get the data from the Redux state
  const data = useSelector((state) => state.entities);

  // Check if the selectedEntityId exists in the data
  if (!data[selectedEntityId]) {
    return <div>No entity selected.</div>;
  }

  // Extract the detailedFields for the selected entity
  const detailedFields = data[selectedEntityId].detailedFields;

  // Render the combined detailed fields
  return (
    <div>
      <h2>Combined Detailed Fields</h2>
      <ul>
        {Object.entries(detailedFields).map(([fieldName, fieldValue]) => (
          <li key={fieldName}>
            <strong>{fieldName}: </strong>
            {fieldValue}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CombinedInfo1;

