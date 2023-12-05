<script>
    import {navigating} from '$app/stores';
    import { page } from '$app/stores'
    import {loading} from '$lib/loading';
    import { fly, fade } from 'svelte/transition';
    
    import Navi from '../lib/components/Navi.svelte';
    import Loading from '../lib/components/Loading.svelte';
    export let data

    
    $: $loading = !!$navigating 

    console.log(data)
</script>

<!-- <Loading></Loading> -->

<div id="pageWrap">
    <Navi></Navi>
    {#key $page.url.pathname}
        <section id="content" in:fly={{x: '10px', duration: 666, delay: 200}}>
            <slot/>
        </section>
    {/key}
</div>

<style>
    
    :global(body){
        margin: 0;
    }
    #pageWrap{
        display: flex;
        width: 100%;
    }

    #content{
        padding: 0;
    }
    
    #content{
        width: 100%;
        max-width: 1140px;
        display: flex;
        place-items: center;
        align-items: center;
        flex-direction: column;
        font-family: 'Oswald', sans-serif;
        height: 100vh;
        overflow-y: scroll;
        overflow-x: hidden;
        box-sizing: border-box;
    }
     /* Hide scrollbar for Chrome, Safari and Opera */
    #content::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    #content {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    } 

    @media screen and (min-width: 800px){
        #content{
            padding: 5rem;
        }
    }
</style>