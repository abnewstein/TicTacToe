/* eslint-disable no-undef */
import { generateWinIndices } from "$lib/utils";

export function createGameState() {
    let gridSize = $state(3);
    let grid = $state(Array.from({ length: gridSize ** 2 }, () => ''));
    let currentPlayer = $state("X");
    let winner = $state('');
    let isDraw = $state(false);
    let history = $state([]);
    let winningIndices = generateWinIndices(gridSize);
    let winningLine = $state([]);

    function reset() {
        grid = Array.from({ length: gridSize ** 2 }, () => '');
        currentPlayer = "X";
        winner = '';
        isDraw = false;
        history = [];
        winningIndices = generateWinIndices(gridSize);
        winningLine = [];
    }

    function resetToStep(step) {
        if (step < 0 || step >= history.length) return;
        if (step === 0) return reset();

        history = history.slice(0, step);
        grid = history[history.length - 1];
        currentPlayer = (step % 2 === 0) ? "X" : "O";
        winner = '';
        isDraw = false;
        winningLine = [];
    }

    /**
     * @param {number} size
     */
    function initGrid(size) {
        gridSize = size;
        reset();
    }

    /**
     * @returns {boolean}
     */
    function checkWinner() {
        for (let line of winningIndices) {
            let lineValues = line.map(index => grid[index]);
            if (lineValues.every(value => value === "X") || lineValues.every(value => value === "O")) {
                winningLine = line;
                return true;
            }
        }
        return false;
    }

    /**
     * @param {number} index
     * @returns {void}
     */
    function play(index) {
        if (grid[index] || winner) return;

        grid[index] = currentPlayer;
        history = [...history, grid.slice()]

        if (checkWinner()) {
            winner = currentPlayer;
        } else {
            if (!grid.includes('')) {
                isDraw = true;
            }
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }

    return {
        get gridSize() {
            return gridSize;
        },
        get grid() {
            return grid;
        },
        get currentPlayer() {
            return currentPlayer;
        },
        get winner() {
            return winner;
        },
        get isDraw() {
            return isDraw;
        },
        get history() {
            return history;
        },
        get winningLine() {
            return winningLine;
        },
        reset,
        resetToStep,
        initGrid,
        play,
        checkWinner
    };
}