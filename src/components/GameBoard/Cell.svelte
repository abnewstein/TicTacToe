<script>
	// @ts-nocheck

	let { grid, index, play } = $props();

	/**
	 * @param {number} index
	 * @returns {void}
	 */
	function handleClick(index) {
		if (grid[index] !== '') return;
		play(index);
		console.log(grid);
	}
</script>

<button type="button" on:click={() => handleClick(index)}>{grid[index]} </button>

<style lang="scss">
	button {
		all: unset;
		cursor: pointer;
		width: 100%;
		height: 100%;
		display: flex;
		font-size: 2rem;
		border: 1px solid #333;
		border-radius: 5px;
		color: #333;
		justify-content: center;
		align-items: center;
	}
</style>
