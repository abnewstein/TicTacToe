import type { Player } from "../store/types";
import styles from "./styles.module.scss";

export default function PlayerInfo(props: {
  winner: Player | null;
  isDraw: boolean;
  currentPlayer: Player;
}) {
  return (
    <div class={styles["player-info"]}>
      {props.isDraw ? (
        <p>It's a draw!</p>
      ) : props.winner ? (
        <p>Player {props.winner} wins!</p>
      ) : (
        <p>It's player {props.currentPlayer}'s turn</p>
      )}
    </div>
  );
}
