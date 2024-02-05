import { useContext } from "react";
import { Context } from "../context/Context";

const EndGame = ({ playerId }: { playerId: string }) => {
  const { game } = useContext(Context);
  return (
    <div className={`endgame-${playerId}`}>
      <div className="bg-decoration-up"></div>
      <div className="endgame-container">
        {"player1" === playerId && "player1" === game.winnerIs ? (
          <div className="endgame-title-container">
            <div className="logo-chimere"></div>
            <h1>
              Félicitations ! <br /> Les chimères ont gagnés
            </h1>
          </div>
        ) : "player1" === playerId && "player2" === game.winnerIs ? (
          <div className="endgame-title-container">
            <div className="logo-chimere"></div>
            <h1>
              Dommage... <br />
              Les archanges ont gagnés
            </h1>
          </div>
        ) : "player2" === playerId && "player1" === game.winnerIs ? (
          <div className="endgame-title-container">
            <div className="logo-archange"></div>
            <h1>
              Dommage... <br />
              Les chimères ont gagnés
            </h1>
          </div>
        ) : (
          <div className="endgame-title-container">
            <div className="logo-archange"></div>
            <h1>
              Félicitations ! <br /> Les archanges ont gagnés
            </h1>
          </div>
        )}
      </div>
      <div className="bg-decoration-down"></div>
    </div>
  );
};

export default EndGame;
