const BillAmount = ({ amount, onSetAmount }) => {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="number"
        value={amount}
        placeholder="Bill value"
        onChange={(e) => onSetAmount(Number(e.target.value))}
      ></input>
    </div>
  );
};

export default BillAmount;
