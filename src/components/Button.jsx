import { useState } from "react";

export const Button = (props) => {
  const { text } = props;
  const [randomNumber, setRandomNumber] = useState(0);

  function handlerButton() {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    alert(`Número aleatorio: ${newRandomNumber}`);
    setRandomNumber(newRandomNumber);
  }

  return (
    <button onClick={handlerButton}>
      {text} {randomNumber}
    </button>
  );
};

