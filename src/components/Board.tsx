import { Grid, Player } from "../store/types";
import styles from "./styles.module.scss";

export default function Board(props: {
  gridSize: number;
  grid: Grid;
  currentPlayer: Player;
  play: (index: number) => void;
  winner: Player | null;
  winningLine: number[];
}) {
  return (
    <div class={styles.board}>
      <table>
        {Array.from({ length: props.gridSize }).map((_, i) => (
          <tr>
            {Array.from({ length: props.gridSize }).map((_, j) => (
              <td>
                <button
                  type="button"
                  onClick={() => props.play(i + props.gridSize * j)}
                >
                  {props.grid[i + props.gridSize * j]}
                </button>
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}
