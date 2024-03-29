import PlayerInfo from "./PlayerInfo";
import Board from "./Board";
import History from "./History";
import GameState from "../store/GameState";
import styles from "./styles.module.scss";

export default function Container() {
  const {
    grid,
    gridSize,
    play,
    winner,
    winningLine,
    currentPlayer,
    isDraw,
    goBackToStep,
    history,
  } = GameState;

  return (
    <div class={styles.container}>
      <PlayerInfo
        winner={winner()}
        currentPlayer={currentPlayer()}
        isDraw={isDraw()}
      />
      <Board
        gridSize={gridSize()}
        currentPlayer={currentPlayer()}
        grid={grid()}
        play={play}
        winner={winner()}
        winningLine={winningLine()}
      />
      <History goBackToStep={goBackToStep} history={history()} />
    </div>
  );
}
