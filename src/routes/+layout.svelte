<script>
    import '../app.css';
    import Footer from '$lib/Footer/Footer.svelte';
    import { content } from '$lib/Content/content.svelte.js';

    let { children } = $props();
    let CONTENT = $state(content());
    
</script>

<div class="app">
    <main>
        {@render children()}
    </main>

    <Footer bind:CONTENT />
</div>