import { useState } from "react";
// import CountDownTest from "../components/CountDownTest";
import CountDownTimer from "../components/CountDownTimer";
// import CountDownTimer from "../components/CountDownTimer";

const InGame = () => {
  const [endTimer, setEndTimer] = useState(false);

  // endTimer === false -> CountDownTimer
  // endTimer === true -> 00:00 Votre partie est fini
  return (
    <>
      {endTimer === false ? (
        <CountDownTimer minutes={0} seconds={5} setEndTimer={setEndTimer} />
      ) : (
        <p> Bravo, la partie est terminée</p>
      )}
    </>
  );
};

export default InGame;
