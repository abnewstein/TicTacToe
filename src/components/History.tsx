import { For } from "solid-js";
import type { History } from "../store/types";
import styles from "./styles.module.scss";

export default function History(props: {
  goBackToStep: (step: number) => void;
  history: History;
}) {
  return (
    <div class={styles.history}>
      <h2>Move History</h2>
      <div>
        <ol>
          <For each={props.history}>
            {(_, i) => (
              <li>
                <button onClick={() => props.goBackToStep(i())}>
                  Go to move #{i() + 1}
                </button>
              </li>
            )}
          </For>
        </ol>
      </div>
    </div>
  );
}
