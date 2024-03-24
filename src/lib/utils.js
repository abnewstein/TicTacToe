/**
 * Generate an array of indices that represent the winning lines of a grid
 * @param {number} gridSize
 * @returns {number[][]}
 */
export const generateWinIndices = (gridSize) => {
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