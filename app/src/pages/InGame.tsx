import { useContext, useEffect, useState } from "react";
// import CountDownTimer from "../components/CountDownTimer";
import ShowCombination from "../components/ShowCombination";
import { Context } from "../context/Context";

const InGame = ({ playerId }: { playerId: string }) => {
  // const [endTimer, setEndTimer] = useState(false);
  const { player1, player2, game, gameArray1, gameArray2 } =
    useContext(Context);

  const [combinationToShow, setCombinationToShow] = useState<number[]>([]);
  const [showCombination, setShowCombination] = useState(true);
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [playerError, setPlayerError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    console.log("uef 1");
    setTimeout(() => {
      if (playerId === "player1") {
        setIsVisible(true);
        setIndex(0);
        setCombinationToShow(player1.combination);
        setShowCombination(true);
      } else if (playerId === "player2") {
        setIsVisible(true);
        setIndex(0);
        setCombinationToShow(player2.combination);
        setShowCombination(true);
      }
    }, 500);
  }, [player1.combination, player2.combination, playerId]);

  // useEffect(() => {
  //   console.log(player1.gameArray, player2.gameArray);
  // }, [player1.gameArray, player2.gameArray]);

  useEffect(() => {
    console.log("uef 2");
    if (game.player1error && playerId === "player1") {
      setPlayerError(true);
    } else if (game.player2error && playerId === "player2") {
      setPlayerError(true);
    }
  }, [game, playerId]);

  useEffect(() => {
    console.log("uef error");

    if (!playerError) return;
    if (playerId === "player1" && !game.player1error) {
      setIndex(0);
      setTimeout(() => {
        // setCombinationToShow(player1.combination);
        setPlayerError(false);
        setShowCombination(true);
        setIsVisible(true);
      }, 500);
    } else if (playerId === "player2" && !game.player2error) {
      setIndex(0);
      setTimeout(() => {
        // setCombinationToShow(player2.combination);
        setPlayerError(false);
        setShowCombination(true);
        setIsVisible(true);
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerId, game]);

  useEffect(() => {
    if (playerId === "player1" && game.player1success) {
      setSuccess(true);
    } else if (playerId === "player2" && game.player2success) {
      setSuccess(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerId, game]);

  useEffect(() => {
    if (!success) return;
    if (playerId === "player1" && !game.player1success) {
      setTimeout(() => {
        setSuccess(false);
        setShowCombination(true);
        setIsVisible(true);
        setIndex(0);
      }, 500);
    } else if (playerId === "player2" && !game.player1success) {
      setTimeout(() => {
        setSuccess(false);
        setShowCombination(true);
        setIsVisible(true);
        setIndex(0);
      }, 500);
    }
  }, [success, game, playerId]);

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

      {success && (
        <div className="in-game-success">
          <h1 className="glitch" data-glitch="glitch">
            BRAVO !!!
          </h1>
        </div>
      )}

      {playerError && (
        <div className="in-game-error">
          <h1 className="glitch" data-glitch="glitch">
            ERREUR !!!
          </h1>
        </div>
      )}

      {!showCombination && !success && !playerError && (
        <div className="circle-container">
          {combinationToShow.map((_, index) =>
            playerId === "player1" ? (
              <div
                id={index.toString()}
                className={`circle ${
                  gameArray1[index] ? "filled-circle" : "empty-circle"
                }`}
              ></div>
            ) : (
              <div
                id={index.toString()}
                className={`circle ${
                  gameArray2[index] ? "filled-circle" : "empty-circle"
                }`}
              ></div>
            )
          )}
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
