import { generateWinIndices } from "$lib/utils";

export function createGameState() {
    let gridSize = $state(3);
    let grid = $state(Array.from({ length: gridSize ** 2 }, () => ''));
    let currentPlayer = $state("X");
    let winner = $state('');
    let history = $state([]);
    let winningLines = generateWinIndices(gridSize);

    function reset() {
        grid = (Array.from({ length: gridSize ** 2 }, () => ''));
        currentPlayer = "X";
        winner = '';
        history = [];
        winningLines = generateWinIndices(gridSize);
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
        for (let line of winningLines) {
            let lineValues = line.map(index => grid[index]);
            if (lineValues.every(value => value === "X") || lineValues.every(value => value === "O")) {
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

        if (checkWinner()) {
            winner = currentPlayer;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }

        history = [...history, { index, currentPlayer }]
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
        get history() {
            return history;
        },
        reset,
        initGrid,
        play,
        checkWinner
    };
}