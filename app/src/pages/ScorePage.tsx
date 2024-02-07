import { useContext } from "react";
import { Context } from "../context/Context";
import { useParams } from "react-router-dom";

const ScorePage = () => {
  const { playerId } = useParams();
  const { game } = useContext(Context);

  return (
    <div className="scorepage">
      <div className="content-scorepage">
        <div className="score-section">
          {playerId === "player1" && (
            <img src="../assets/overlay-red.png" className="overlay" />
          )}
          <img src="../assets/logo-chimere.png" />
          <h3>{game.scorePlayer1}</h3>
        </div>

        <h1>VS</h1>

        <div className="score-section">
          {playerId === "player2" && (
            <img src="../assets/overlay-green.png" className="overlay" />
          )}
          <img src="../assets/logo-archange.png" />
          <h3>{game.scorePlayer2}</h3>
        </div>
      </div>
    </div>
  );
};

export default ScorePage;
