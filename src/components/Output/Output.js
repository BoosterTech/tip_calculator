const Output = ({ billAmount, tip }) => {
  return (
    <div>
      <span>
        You pay ${billAmount + tip} (${billAmount} + ${tip} tip)
      </span>
    </div>
  );
};

export default Output;
