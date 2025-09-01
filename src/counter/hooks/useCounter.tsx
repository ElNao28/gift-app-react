import { useState } from "react";

export const useCounter = (intialValue:number = 0) => {
  const [counter, setCounter] = useState(intialValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubstract = () => {
    setCounter((value) => value - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return {
    counter,
    handleAdd,
    handleSubstract,
    handleReset
  };
};
