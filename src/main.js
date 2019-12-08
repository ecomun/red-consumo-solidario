import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		prop: 12345
	}
});

export default app;