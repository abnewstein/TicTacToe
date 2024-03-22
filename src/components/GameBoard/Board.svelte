<script>
	import Cell from './Cell.svelte';
	import { createGameState } from '$store/GameState.svelte';
	let { grid, gridSize, initGrid, currentPlayer, checkWinner, play } = createGameState();
	let winner = checkWinner();
</script>

<div class="board" style="--grid-size: {gridSize}">
	{#each grid as _, i}
		<div class="row" class:winner style="--grid-size: {gridSize}">
			<Cell {grid} index={i} {play} />
		</div>
	{/each}
</div>

<style lang="scss">
	.board {
		display: grid;
		grid-template-columns: repeat(var(--grid-size), 100px);
		grid-gap: 0.25rem;
		margin: 2rem;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	.row {
		display: grid;
		grid-template-columns: repeat(var(--grid-size), 100px);
		grid-gap: 0.25rem;
		width: 100px;
		height: 100px;
		justify-content: center;
		align-items: center;
	}

	.winner {
		background-color: #f0f0f0;
	}
</style>
