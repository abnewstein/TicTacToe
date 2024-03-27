import type { Grid, History, Player } from "./types";

export const generateWinIndices = (gridSize: number): number[][] => {
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
    return lines;
}

export const checkWinner = (grid: Grid, winningIndices: number[][]): Player | null => {
    for (const indices of winningIndices) {
        const line = indices.map((i) => grid[i]);
        if (line.every((cell) => cell === line[0])) return line[0];
    }
    return null;
}