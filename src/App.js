import "./App.css";
import { useState } from "react";
import BillAmount from "./components/BillAmount/BillAmount";
import Output from "./components/Output/Output";
import Reset from "./components/Reset/Reset";
import SelectPercentage from "./components/SelectPercentage/SelectPercentage";

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [amount, setAmount] = useState("");
  const [tipPercetage1, setTipPercentage1] = useState(0);
  const [tipPercetage2, setTipPercentage2] = useState(0);

  const tip = amount * ((tipPercetage1 + tipPercetage2) / 100);

  function handleReset() {
    setTipPercentage1(0);
    setTipPercentage2(0);
    setAmount("");
  }

  return (
    <div>
      <BillAmount amount={amount} onSetAmount={setAmount} />
      <SelectPercentage percentage={tipPercetage1} onSelect={setTipPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={tipPercetage2} onSelect={setTipPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      <Output billAmount={amount} tip={tip} />
      <Reset onReset={handleReset} />
    </div>
  );
}

export default App;
