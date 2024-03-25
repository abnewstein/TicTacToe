<script>
	import { createGameState } from '$store/GameState.svelte';
	import Board from './GameBoard/Board.svelte';
	import GameHistory from './GameHistory.svelte';
	let gameState = createGameState();
	let winner = $derived(gameState.winner);
</script>

<div class="container">
	<div class="player-info">
		{#if winner !== ''}
			<p>Player {winner} wins!</p>
		{:else if gameState.isDraw}
			<p>It's a draw!</p>
		{:else}
			<p>It's player {gameState.currentPlayer}'s turn</p>
		{/if}
	</div>
	<Board {gameState} />
	<GameHistory {gameState} />
</div>

<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: 1fr max-content 1fr;
		grid-template-rows: 310px;
		grid-gap: 2rem;
		justify-content: center;
		margin: 2rem;

		.player-info {
			display: flex;
			justify-content: end;
			align-items: center;
			font-size: 1.5rem;
			font-family: monospace;
			font-weight: bold;
		}
	}
</style>
