import { useState } from "react";
// import CountDownTest from "../components/CountDownTest";
import CountDownTimer from "../components/CountDownTimer";
import ShowCombination from "../components/ShowCombination";

const InGame = ({ playerId }: { playerId: string }) => {
  const [endTimer, setEndTimer] = useState(false);

  // endTimer === false -> CountDownTimer
  // endTimer === true -> 00:00 Votre partie est fini
  return (
    <>
      {endTimer === false ? (
        <CountDownTimer minutes={3} seconds={0} setEndTimer={setEndTimer} />
      ) : (
        <>
          <div className="hello">
            <CountDownTimer minutes={0} seconds={0} setEndTimer={setEndTimer} />
            <p className="lol">Bravo, la partie est terminée</p>
          </div>
        </>
      )}
      <ShowCombination />
    </>
  );
};

export default InGame;
