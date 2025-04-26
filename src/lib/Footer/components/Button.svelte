<script>
    let {buttonContent, callBack} = $props();
</script>


<!--MARKUP -->
{#each buttonContent.content as content}
<button 

class={buttonContent.ready === false ? 'hidden' : ''}
onclick={() => {
    callBack(buttonContent.handler)}
}
> {content}</button>
{/each}

<style>
    .hidden {
        display: none;
    }
</style> 