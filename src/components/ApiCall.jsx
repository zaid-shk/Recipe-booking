import React from "react";

const ApiCall = () => {
  const ApiCall = fetch(
    "https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2"
  );

  const Call = () => {
    console.log(ApiCall);
  };

  return (
    <div>
      <button onClick={Call}>Get Api</button>
    </div>
  );
};

export default ApiCall;
