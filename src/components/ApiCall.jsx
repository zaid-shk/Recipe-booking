import React from "react";

const ApiCall = () => {
  const Api = fetch(
    "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
  );

  const Call = () => {
    console.log(Api);
  };

  return (
    <div>
      <button onClick={Call}>Get Api</button>
    </div>
  );
};

export default ApiCall;
