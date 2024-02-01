<script>
    import {onMount} from 'svelte'
    import { goto } from '$app/navigation'

    onMount(() => {
        setTimeout(() => {
            goto('/releases')
        }, 2000)
    })

</script>

<svelte:head>
  <link href="" rel="stylesheet">
</svelte:head>


<style>
    :global(body){
        margin: 0;
        overflow: hidden;
        border: solid 4px;
    }

    div{
        width: 100vw;
        height: 100vh;
        background-color: #202020;
    }
    
</style>