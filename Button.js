import React from "react";

const Button = ({ increment, onClickFunction, sign }) => {
  const handleClick = () => {
    onClickFunction(increment);
  };

  return (
    <button onClick={handleClick}>
      {sign}
      {increment}
    </button>
  );
};

export default Button;
