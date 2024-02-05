import { useContext, useEffect, useState } from "react";
// import CountDownTimer from "../components/CountDownTimer";
import ShowCombination from "../components/ShowCombination";
import { Context } from "../context/Context";

const InGame = ({ playerId }: { playerId: string }) => {
  // const [endTimer, setEndTimer] = useState(false);
  const { player1, player2, game } = useContext(Context);

  const [combinationToShow, setCombinationToShow] = useState<number[]>([]);
  const [showCombination, setShowCombination] = useState(true);
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [playerError, setPlayerError] = useState(false);

  useEffect(() => {
    setShowCombination(true);
    setIsVisible(true);
    setIndex(0);
    if (playerId === "player1") {
      setCombinationToShow(player1.combination);
    } else if (playerId === "player2") {
      setCombinationToShow(player2.combination);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player1, player2]);

  useEffect(() => {
    if (game.player1error && playerId === "player1") {
      setPlayerError(true);
    } else if (game.player2error && playerId === "player2") {
      setPlayerError(true);
    }
  }, [game.player1error, game.player2error, playerId]);

  useEffect(() => {
    if (!playerError) return;
    setTimeout(() => {
      setPlayerError(false);
      setShowCombination(true);
      setIsVisible(true);
      setIndex(0);
    }, 500);
  }, [playerError]);

  // endTimer === false -> CountDownTimer
  // endTimer === true -> 00:00 Votre partie est fini
  return (
    <div className={`game-container game-${playerId}`}>
      <div className="in-game-header">
        <div className="logo-container">
          <img src={`../assets/${playerId}-logo.png`} alt="" />
          {playerId === "player1" ? <h2>Chimère</h2> : <h2>Archange</h2>}
        </div>
        <div className="player-score">
          <h3>
            {playerId === "player1" ? (
              <>{game.scorePlayer1}</>
            ) : (
              <>{game.scorePlayer2}</>
            )}
          </h3>
          <h4>POINTS</h4>
        </div>
      </div>
      {/* <CountDownTimer minutes={3} seconds={0} setEndTimer={setEndTimer} /> */}

      {playerError && (
        <div className="in-game-error">
          Pas très bon une erreur est survenue !
        </div>
      )}

      <ShowCombination
        combination={combinationToShow}
        showCombination={showCombination}
        setShowCombination={setShowCombination}
        index={index}
        setIndex={setIndex}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />

      <div className="bottom-page">
        <img src="../assets/InGame-bottom.png" alt="" />
      </div>
    </div>
  );
};

export default InGame;
