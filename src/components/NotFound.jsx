import React, { useState } from "react";
import { useParams } from "react-router-dom";

const NotFound = () => {

  return (
    <div>
      <div className="text">
        <h1>404</h1>
        <h2>Uh, Ohh</h2>
        <h3>
          Sorry we cant find what you are looking for 'cuz its so dark in here
        </h3>
      </div>
    </div>
  );
};

export default NotFound;
