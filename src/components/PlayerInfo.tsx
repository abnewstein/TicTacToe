import { Match, Switch } from "solid-js";
import type { Player } from "../store/types";
import styles from "./styles.module.scss";

export default function PlayerInfo(props: {
  winner: Player | null;
  isDraw: boolean;
  currentPlayer: Player;
  reset: () => void;
  changeGridSize: (size: number) => void;
}) {
  return (
    <div class={styles["player-info"]}>
      <div>
        <Switch fallback={<p>It's player {props.currentPlayer}'s turn</p>}>
          <Match when={props.isDraw}>
            <p>It's a draw!</p>
          </Match>
          <Match when={props.winner}>
            <p>Player {props.winner} wins!</p>
          </Match>
        </Switch>
      </div>
      <div>
        <div>
          <label>Change Grid Size</label>
          <select
            onChange={(e) => {
              const size = parseInt(e.currentTarget.value);
              props.changeGridSize(size);
            }}
          >
            {Array.from({ length: 5 }, (_, i) => (
              <option selected={3 + i === 3}>{3 + i}</option>
            ))}
          </select>
          <button onClick={props.reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}
