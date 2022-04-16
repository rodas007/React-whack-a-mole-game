/* eslint-disable react-hooks/exhaustive-deps */
import "./Square.scss";


import moleDefault from "../assets/mole1.png";
import tierra from "../assets/tierra.png";
import { useEffect, useState } from "react";

const Square = ({ index, randomBox, counter, setCounter, timer }) => {
  const [mole, setMole] = useState(tierra);
  const [clicked, setClicked] = useState(false);

  const updateScore = () => {
    if (index === randomBox && clicked === false && timer > 0) {
      setCounter(counter + 1);
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 400);
    }
  };

  useEffect(() => {
    if (index === randomBox && timer < 30) {
      setMole(moleDefault);
    } else {
      setMole(tierra);
    }
  }, [randomBox]);

  return (
    <div>
      <img onClick={updateScore} className="c-square" src={mole} alt="mole" />
    </div>
  );
};

export default Square;
