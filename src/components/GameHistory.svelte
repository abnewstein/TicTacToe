<script>
	let { gameState } = $props();
</script>

<div class="history">
	<h2>Move History</h2>
	{#if gameState.history.length > 0}
		<div>
			<ol>
				{#each gameState.history as _, index}
					<li>
						<button on:click={() => gameState.resetToStep(index)}
							>Go back to Turn {index + 1}</button
						>
					</li>
				{/each}
			</ol>
		</div>
	{/if}
</div>

<style lang="scss">
	.history {
		display: flex;
		flex-direction: column;
		align-items: start;
		font-family: 'Courier New', Courier, monospace;
		> div {
			background-color: #dddddd;
			padding: 0 1rem;
			border-radius: 5px;
			overflow: scroll;
		}
		h2 {
			font-size: 2rem;
			margin: 0.5rem;
		}

		ol {
			list-style-type: none;
			padding: 0;

			li {
				display: flex;
				justify-content: space-between;
				width: max-content;
				margin: 0.25rem;
				font-size: 1.5rem;

				button {
					padding: 0.25rem;
					cursor: pointer;
					font-weight: bold;
					font-family: inherit;
				}
			}
		}
	}
</style>
