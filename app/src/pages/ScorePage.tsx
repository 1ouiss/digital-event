import { useContext } from "react";
import { Context } from "../context/Context";

const ScorePage = () => {
  const { game } = useContext(Context);

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
