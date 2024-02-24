import { useState } from "react";
import ChildComponent from "./ChildComponent";

const message = "Hello from Parent!";

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <ChildComponent message={message} incrementCount={incrementCount} count={count} />
    </>
  );
};

export default ParentComponent;
