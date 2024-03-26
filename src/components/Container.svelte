<script>
	import { createGameState } from '$store/GameState.svelte';
	import Board from './GameBoard/Board.svelte';
	import GameHistory from './GameHistory.svelte';
	import PlayerInfo from './PlayerInfo.svelte';
	let gameState = createGameState();
</script>

<div class="container">
	<PlayerInfo {gameState} />
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

		@media (width < 768px) {
			grid-template-columns: 1fr;
			grid-template-rows: min-content max-content 1fr;
		}
	}
</style>
