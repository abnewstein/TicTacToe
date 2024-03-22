export function createGameState() {
    let gridSize = $state(3);
    let grid = $state(Array.from({ length: gridSize ** 2 }, () => ''));
    let currentPlayer = $state("X");
    let winner = $state('');

    function reset() {
        grid = (Array.from({ length: gridSize ** 2 }, () => ''));
        currentPlayer = "X";
        winner = '';
    }

    /**
     * @param {number} size
     */
    function initGrid(size) {
        gridSize = size;
        reset();
    }

    function checkWinner() {
        let lines = [];

        for (let i = 0; i < gridSize; i++) {
            // Horizontal
            lines.push(Array.from({ length: gridSize }, (_, j) => i * gridSize + j));
            // Vertical
            lines.push(Array.from({ length: gridSize }, (_, j) => i + j * gridSize));
        }
        // Forward diagonal
        lines.push(Array.from({ length: gridSize }, (_, i) => i * gridSize + i));
        // Backward diagonal
        lines.push(Array.from({ length: gridSize }, (_, i) => i * gridSize + gridSize - i - 1));

        for (let line of lines) {
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
        reset,
        initGrid,
        play,
        checkWinner
    };
}