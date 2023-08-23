<script>
    import Konzerte from '$lib/components/Konzerte.svelte';
    import { getImageURL, url } from '$lib/utils/getURL'
    export let data

    console.log(data)
</script>

<div id="content">
    <div id="releases">
        {#each data['releases'] as rel}
            <div class="release">
                <img src="{url}{getImageURL(rel['collectionId'],rel["id"],rel['Cover'], "500x500" )}">
                <h3>{rel["Titel"]}</h3>
            </div>
        {/each}    
    </div>

    <Konzerte konzerte={data['konzerte']}/>
</div>

<style>
    #content{
        width: 100%;
        display: flex;
        place-items: center;
        align-items: center;
        flex-direction: column;
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
    .noselect {
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
    }
    h3{
        display: none;
    }
</style>