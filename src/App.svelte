<script>
	// imports hasta arriba

	import Header from './components/general/Header.svelte'
	import Home from './components/views/Home.svelte'
	import About from './components/views/About.svelte'
	import ProductList from './components/views/ProductList.svelte'

	export let name;
	export let prop;

	let currentView = 'home'

	const handleChangeView = (view) => {
		console.log(view)
		currentView = view
	}
</script>

<Header changeView={handleChangeView}/>
<main>
	{#if currentView == 'home'}
		 <Home />
	{/if}
	{#if currentView == 'about'}
		 <About />
	{/if}
	{#if currentView == 'productList'}
		 <ProductList />
	{/if}
	
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