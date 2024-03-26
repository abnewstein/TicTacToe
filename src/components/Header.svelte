<nav>
	<div>
		<h1>Tic Tac Toe</h1>
	</div>
</nav>

<style lang="scss">
	nav {
		background-color: #333;
		color: white;
		padding: 0.25rem;
		text-align: center;
		border-radius: 5px;
		font-size: 1.5rem;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		background-image: linear-gradient(to right, #000, #fff, #000);
		background-size: 180% 180%;
		animation: gradient 10s ease infinite;
		> div {
			background-image: linear-gradient(to right, #eee, #000 20%, #000 80%, #eee 100%);
			border-radius: 5px;
			padding: 0.25rem;
		}
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
