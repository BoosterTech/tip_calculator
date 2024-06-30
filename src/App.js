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
      <SelectService>How did you like</SelectService>
      <SelectService>How did your friend like the service?</SelectService>
      <Output />
      <Reset />
    </div>
  );
}
