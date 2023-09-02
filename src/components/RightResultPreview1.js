import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSelectedEntityId } from '../actions/index';

const RightResultPreview1 = () => {
  const selectedEntityId = useSelector((state) => state.selectedEntityId);
  const data = useSelector((state) => state.entities);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const handleEntitySelection = (entityId) => {
    dispatch(setSelectedEntityId(entityId));
  };

  if (!data[selectedEntityId]) {
    return <div>No entity selected.</div>;
  }

  const overviewFields = data[selectedEntityId].overviewFields;

  return (
    <div>
      <h2>Overview Fields</h2>
      <ul>
        {Object.entries(overviewFields).map(([fieldName, fieldValue]) => (
          <li key={fieldName}>
            <strong>{fieldName}: </strong>
            {fieldValue}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightResultPreview1;

