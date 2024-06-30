const Output = ({ billAmount }) => {
  return (
    <div>
      <span>{`You pay $...($${billAmount}... + $... tip)`} </span>
    </div>
  );
};

export default Output;
