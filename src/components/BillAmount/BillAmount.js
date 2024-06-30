const BillAmount = ({ amount, onSetBill }) => {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="number"
        value={amount}
        placeholder="Bill value"
        onChange={(e) => onSetBill(e.target.value)}
      ></input>
    </div>
  );
};

export default BillAmount;
