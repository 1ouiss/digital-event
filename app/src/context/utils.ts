export type GameType = {
  id: string;
  chronoStarted: boolean;
  player1error: boolean;
  player2error: boolean;
  winnerIs: string;
  status: "before" | "inGame" | "endGame";
  scorePlayer1: number;
  scorePlayer2: number;
  player1success: boolean;
  player2success: boolean;
};

export type PlayerType = {
  id: string;
  combination: number[];
  gameArray: number[];
};

export type ContextType = {
  game: GameType;
  setGame: (game: GameType) => void;
  player1: PlayerType;
  setPlayer1: (player: PlayerType) => void;
  player2: PlayerType;
  setPlayer2: (player: PlayerType) => void;
  gameArray1: number[];
  setGameArray1: (gameArray: number[]) => void;
  gameArray2: number[];
  setGameArray2: (gameArray: number[]) => void;
};

export type Props = {
  children: JSX.Element;
};
