<script>
  export let changeView;
</script>

<header>
  <button on:click={() => changeView('home')}>Home</button>
  <button on:click={() => changeView('about')}>About</button>
  <button on:click={() => changeView('productList')}>Product List</button>
</header>