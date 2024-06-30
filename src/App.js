import "./App.css";
import BillAmount from "./components/BillAmount/BillAmount";
import Output from "./components/Output/Output";
import Reset from "./components/Reset/Reset";
import SelectService from "./components/SelectService/SelectService";

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

export default App;

function TipCalculator() {
  return (
    <div>
      <BillAmount />
      <SelectService />
      <SelectService />
      <Output />
      <Reset />
    </div>
  );
}
