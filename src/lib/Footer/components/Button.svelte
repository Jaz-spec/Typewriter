<script>
    let { buttonContent, handler } = $props();
$inspect(buttonContent);
</script>

<!-- MARKUP -->
{#each buttonContent.content as content, i}
<button 

class={buttonContent.ready === false ? 'hidden' : ''}
onclick="{handler[i]}"

> {content}</button>
{/each}

<style>
    .hidden {
        display: none;
    }
</style>