import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const CustomSpinner: React.FC = () => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <Spinner animation="border" role="status">
        <span className="sr-only"></span>
      </Spinner>
    </div>
  );
};

export default CustomSpinner;
