import { Match, Switch } from "solid-js";
import type { Player } from "../store/types";
import styles from "./styles.module.scss";

export default function PlayerInfo(props: {
  winner: Player | null;
  isDraw: boolean;
  currentPlayer: Player;
}) {
  return (
    <div class={styles["player-info"]}>
      <Switch fallback={<p>It's player {props.currentPlayer}'s turn</p>}>
        <Match when={props.isDraw}>
          <p>It's a draw!</p>
        </Match>
        <Match when={props.winner}>
          <p>Player {props.winner} wins!</p>
        </Match>
      </Switch>
    </div>
  );
}
