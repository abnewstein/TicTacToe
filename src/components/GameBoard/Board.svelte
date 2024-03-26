<script>
	import Cell from './Cell.svelte';
	let { gameState } = $props();
	let winningLine = $derived(gameState.winningLine);
</script>

<div class="board" style="--grid-size: {gameState.gridSize}">
	{#each gameState.grid as value, index}
		{@const highlight = winningLine?.includes(index)}
		<Cell {value} {index} play={gameState.play} {highlight} />
	{/each}
</div>

<style lang="scss">
	.board {
		display: grid;
		grid-template-columns: repeat(var(--grid-size), 100px);
		grid-gap: 0.25rem;
		justify-content: center;
		align-items: center;
		height: max-content;
	}

	.winner {
		background-color: #f0f0f0;
	}
</style>
