const ChildComponent = (props) => {
  return (
    <div>
      <p>{props.message}</p>

      <button onClick={props.incrementCount}>{props.count}</button>
    </div>
  );
};

export default ChildComponent;
