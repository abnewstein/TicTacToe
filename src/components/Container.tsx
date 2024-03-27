import PlayerInfo from "./PlayerInfo";
import Board from "./Board";
import GameState from "../store/GameState";
import styles from "./styles.module.scss";

export default function Container() {
  const { gridSize, winner, currentPlayer, isDraw } = GameState;
  return (
    <div class={styles.container}>
      <PlayerInfo
        winner={winner()}
        currentPlayer={currentPlayer()}
        isDraw={isDraw()}
      />
      <Board />
    </div>
  );
}
