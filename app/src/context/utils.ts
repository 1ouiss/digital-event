export type GameType = {
  id: string;
  isActive: boolean;
  player1Domination: number;
  gameStarted: boolean;
  chronoStarted: boolean;
  player1error: boolean;
  player2error: boolean;
  winnerIs: string;
  gameEnded: boolean;
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
