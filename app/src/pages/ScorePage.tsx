import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";

const ScorePage = () => {
  const { playerId } = useParams();

  const { game } = useContext(Context);

  useEffect(() => {
    console.log(game);
    console.log(playerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="scorepage">
      <div className="scorepage-up">
        <img src="../assets/bg-up.png" alt="" />
      </div>
      <div className="content-scorepage">
        <div className="score-section">
          <img src="../assets/logo-chimere.png" alt="" />
          <h3>{game.scorePlayer1}</h3>
        </div>
        <div>
          <h1>VS</h1>
        </div>
        <div className="score-section">
          <img src="../assets/logo-archange.png" alt="" />
          <h3>{game.scorePlayer2}</h3>
        </div>
      </div>
      <div className="scorepage-down">
        <img src="../assets/bg-down.png" alt="" />
      </div>
    </div>
  );
};

export default ScorePage;
