<script>
    import {navigating} from '$app/stores'
    import {loading} from '$lib/loading';
    
    import Navi from '../lib/components/Navi.svelte';
    import Loading from '../lib/components/Loading.svelte';
    export let data
    // console.log(data)

    $: $loading = !!$navigating 
</script>


<!-- <div id="fade">
    <img src="" alt="">
</div> -->


<Loading></Loading>

<div id="pageWrap">
    <Navi></Navi>
    <section id="content">
        <slot/>
    </section>
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
    #content h2{
        align-self: center;
    }
    #content img {
        width: 100%;
    }
    #releases{
        width: 100%;
        height: 100vh;
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
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