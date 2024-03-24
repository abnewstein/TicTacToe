<script>
	import { createGameState } from '$store/GameState.svelte';
	import Board from './GameBoard/Board.svelte';
	import GameHistory from './GameHistory.svelte';
	let gameState = createGameState();
</script>

<div class="container">
	<Board {gameState} />
	<GameHistory {gameState} />
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
