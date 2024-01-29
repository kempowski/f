<script>
    import "../app.scss";
    import {navigating} from '$app/stores';
    import { page } from '$app/stores'
    import {loading} from '$lib/loading';
    import { fly, fade, scale } from 'svelte/transition';
    import {onMount} from 'svelte'
    import { goto } from '$app/navigation'

    import Navi from '../lib/components/Navi.svelte';
    import Loading from '../lib/components/Loading.svelte';
    export let data


    $: $loading = !!$navigating

    $: console.log($page)

    onMount(() => {
        setTimeout(() => {
            goto('/releases')
        }, 2000)
    })
</script>

{#if ($page.route.id === '/')}
    <!-- <h2>hi</h2> -->
    <!-- <Loading></Loading> -->
    <div id="splash" transition:fade>
        <img src='/fugbach_fill_white.png' alt="F">
    </div>
{/if}

<div id="pageWrap">
    <Navi></Navi>
    {#key $page.url.pathname}
        <section id="content" in:fly={{x:'10px', duration: 666, delay: 200}}>
            <slot></slot>
        </section>
    {/key}
</div>

<style lang="scss">
    
    :global(body){
        margin: 0;
    }
    #splash{
        width: 100vw;
        height: 100vh;
        background-color: #202020;
        display: flex;
        justify-content: center;
        align-items: center;

        @keyframes logo {
            0% {
                transform: scale(1.0);
            }
            100% {
                transform: scale(1.1);
            }
        }
        img{
            width: 150px;
            height: fit-content;
            animation: logo 3000ms ease-out;
            animation-fill-mode: forwards;
        }
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
        #splash{
            img{
                width: 300px;
            }
        }
    }
</style>