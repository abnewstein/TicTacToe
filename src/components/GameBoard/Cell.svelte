<script>
	let { value, index, play, highlight } = $props();

	/**
	 * @param {number} index
	 * @returns {void}
	 */
	function handleClick(index) {
		if (value !== '') return;
		play(index);
	}
</script>

<button type="button" on:click={() => handleClick(index)} class:highlight>{value}</button>

<style lang="scss">
	button {
		all: unset;
		cursor: pointer;
		width: 100px;
		height: 100px;
		display: flex;
		border: 1px solid #333;
		border-radius: 5px;
		color: #333;
		justify-content: center;
		align-items: center;
		font-family: Cambria, serif;
		font-size: 4rem;

		&.highlight {
			background-color: #81c784;
		}
	}
</style>
