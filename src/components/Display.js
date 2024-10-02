import React from 'react';

const Display = ({ display, currentOperation }) => (
  <div className="display">
    <div className="current-operation">{currentOperation || '0'}</div>
    <div className="current-value">{display}</div>
  </div>
);

export default Display;