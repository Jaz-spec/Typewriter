<script module>
    //runs once when the module is first evaluated
</script>

<script>
    import Button from './components/Button.svelte'
    import Input from './components/Input.svelte';
    
    import calcTime from './logic/calc-time.svelte.js';

    let cI = $state(0); //index for CONTENT array
    let { CONTENT } = $props();
    let content = $derived(CONTENT[cI]);

    const callBack = (log) => {
        if(log === "next") {
            cI++;
            text = '';
            wrapper();
        }
    }
    
    let text = $state('');   
    let buttonContent = $derived(content.buttonContent);

    
    function wrapper() {
        let i = $state(0); //index for string --> typewriter()
        let time = $state(calcTime(content.string, content.delay, content.pause))
        
    
        function typewriter() {
        
            setTimeout(() => {
                buttonContent.ready = true;
            }, time)
        
            if (i < content.string.length) {
                setTimeout(() => {     
                    text += content.string[i];
                    i++;
                    typewriter();
            }, 50);
        }
    }   
    typewriter();
    
    
}
wrapper();


</script>

<!-- MARKUP -->
<h1>
    {text}
</h1>

{#if content.type === "button"}
    <Button {buttonContent} {callBack}/>
{:else if content.type === "input"}
    <Input />
{/if}
