export type GameType = {
  id: string;
  chronoStarted: boolean;
  player1Domination: number;
  player1error: boolean;
  player2error: boolean;
  winnerIs: string;
  status: "before" | "inGame" | "endGame";
};

export type PlayerType = {
  id: string;
  combination: number[];
};

export type ContextType = {
  game: GameType;
  setGame: (game: GameType) => void;
  player1: PlayerType;
  setPlayer1: (player: PlayerType) => void;
  player2: PlayerType;
  setPlayer2: (player: PlayerType) => void;
};

export type Props = {
  children: JSX.Element;
};
