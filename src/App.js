import {useState} from "react";

const App = () => {
  let [counterValue, setCounterValue] = useState(0);

  const changeCounter = (e) => {
    if (e.target.value === '+') {
      setCounterValue(++counterValue);
    }
    else if (e.target.value === '-') {
      setCounterValue(--counterValue);
    }
  };

  return (
    <div className="App">
      <input className="Button" type="button" value="+" onClick={changeCounter} />
      <label className="Label">Counter</label>
      <label className="Label LabelExtended">{counterValue}</label>
      <input className="Button" type="button" value="-" onClick={changeCounter} />
    </div>
  );
};

export default App;
