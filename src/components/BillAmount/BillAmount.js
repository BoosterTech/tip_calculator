const BillAmount = ({ amount }) => {
  return (
    <div>
      <label>How much was the bill?</label>
      <input type="number" value={amount} placeholder="Bill value"></input>
    </div>
  );
};

export default BillAmount;
