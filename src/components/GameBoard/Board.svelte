<script>
	import { derived } from 'svelte/store';
	import Cell from './Cell.svelte';
	let { gameState } = $props();
	let { gridSize, play } = $derived(gameState);
</script>

<div class="board" style="--grid-size: {gridSize}">
	{#each gameState.grid as value, index}
		<Cell {value} {index} {play} />
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
