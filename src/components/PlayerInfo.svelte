<script>
	let { gameState } = $props();
	let winner = $derived(gameState.winner);
	let isDraw = $derived(gameState.isDraw);
	let currentPlayer = $derived(gameState.currentPlayer);
</script>

<div>
	{#if winner !== ''}
		<p>Player {winner} wins!</p>
	{:else if isDraw}
		<p>It's a draw!</p>
	{:else}
		<p>It's player {currentPlayer}'s turn</p>
	{/if}
</div>

<style lang="scss">
	div {
		display: flex;
		justify-content: end;
		align-items: center;
		font-size: 1.5rem;
		font-family: monospace;
		font-weight: bold;

		@media (width < 768px) {
			justify-content: center;
		}
	}
</style>
