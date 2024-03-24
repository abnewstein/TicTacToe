<script>
	import Cell from './Cell.svelte';
	let { gameState } = $props();
	const { grid, gridSize, play, winner } = gameState;
</script>

<div class="board" style="--grid-size: {gridSize}">
	{#each grid as value, index}
		<Cell {value} {index} {play} />
	{/each}
</div>

<style lang="scss">
	.board {
		display: grid;
		grid-template-columns: repeat(var(--grid-size), 100px);
		grid-gap: 0.25rem;
		margin: 2rem;
		justify-content: center;
		align-items: center;
	}

	.winner {
		background-color: #f0f0f0;
	}
</style>
