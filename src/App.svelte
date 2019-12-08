<script>
	// imports hasta arriba

	import Header from './componentes/Header.svelte'

	export let name;
	export let prop;
</script>

<Header color="blue"/>
<Header color="red"/>
<Header color="green"/>
<main>
	<h1>Adios {name}! {prop}</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>