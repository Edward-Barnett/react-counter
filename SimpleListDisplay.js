import React from "react";
0;
const SimpleListDisplay = ({ listToDisplay }) => {
  return (
    <div>
      <ul>
        {listToDisplay.map(oneItem => (
          <li>{oneItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleListDisplay;
