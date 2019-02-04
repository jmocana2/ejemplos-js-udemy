import React from 'react';

const Error = ({msj}) => {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card-panel red darken-4 error">
              {msj}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;