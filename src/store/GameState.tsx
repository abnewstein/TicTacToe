import { createSignal, createMemo, createRoot } from "solid-js";
import { generateWinIndices, checkWinner } from "./utils";
import type { Grid, History, Player } from "./types";

function createGameState() {
  const [gridSize, setGridSize] = createSignal(3);
  const [grid, setGrid] = createSignal<Grid>(
    Array.from({ length: gridSize() ** 2 }, () => null)
  );
  const [currentPlayer, setCurrentPlayer] = createSignal<Player>("X");
  const [winner, setWinner] = createSignal<Player | null>(null);
  const [history, setHistory] = createSignal<History>([]);

  const isDraw = createMemo(() => {
    return !grid().includes(null) && !winner();
  });
  const winningIndices = createMemo(() => generateWinIndices(gridSize()));
  const winningLine = createMemo<number[]>(() => {
    if (winner()) {
      for (const indices of winningIndices()) {
        const line = indices.map((i) => grid()[i]);
        if (line.every((cell) => cell === line[0])) return indices;
      }
    }
    return [];
  });

  const reset = () => {
    setGrid(Array.from({ length: gridSize() ** 2 }, () => null));
    setCurrentPlayer("X");
    setWinner(null);
    setHistory([]);
  };

  const play = (index: number) => {
    if (grid()[index] || winner()) return;
    const newGrid = grid().slice();
    newGrid[index] = currentPlayer();
    setGrid(newGrid);
    setHistory([...history(), newGrid]);
    const newWinner = checkWinner(newGrid, winningIndices());
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setCurrentPlayer(currentPlayer() === "X" ? "O" : "X");
    }
  };

  const goBackToStep = (step: number) => {
    if (step === 0) {
      reset();
      return;
    }
    setGrid(history()[step - 1]);
    setHistory(history().slice(0, step));
    setCurrentPlayer(step % 2 === 0 ? "X" : "O");
    setWinner(null);
  };

  const changeGridSize = (size: number) => {
    setGridSize(size);
    reset();
  };

  return {
    gridSize,
    grid,
    currentPlayer,
    winner,
    isDraw,
    history,
    winningLine,
    reset,
    play,
    goBackToStep,
    changeGridSize,
  };
}

export default createRoot(createGameState);
