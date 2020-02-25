import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";
import SaveButton from "./components/SaveButton";
import SimpleListDisplay from "./components/SimpleListDisplay";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  const [myList, addToList] = useState([]);

  const addList = addVal => {
    addToList([...myList, addVal]);
  };
  const incrementCount = increment => {
    setCount(count + increment);
  };

  const decrementCount = increment => {
    setCount(count - increment);
  };

  const resetCount = resetTo => {
    setCount(resetTo);
  };

  return (
    <div className="App">
      <Button sign="+" increment={1} onClickFunction={incrementCount} />
      <Button sign="+" increment={10} onClickFunction={incrementCount} />
      <Button sign="+" increment={100} onClickFunction={incrementCount} />
      <Button sign="+" increment={1000} onClickFunction={incrementCount} />

      <p />
      <span>{count}</span>
      <p />
      <Button sign="-" increment={1} onClickFunction={decrementCount} />
      <Button sign="-" increment={10} onClickFunction={decrementCount} />
      <Button sign="-" increment={100} onClickFunction={decrementCount} />
      <Button sign="-" increment={1000} onClickFunction={decrementCount} />
      <p />
      <Button sign="Reset to " increment={0} onClickFunction={resetCount} />
      <p />
      <SaveButton saveValue={count} onClickFunction={addList} />
      <p />
      <SimpleListDisplay listToDisplay={myList} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
