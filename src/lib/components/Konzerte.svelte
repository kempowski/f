<script>
    import { getImageURL, url } from '$lib/utils/getURL'
    export let konzerte
        
    console.log(konzerte)
</script>

<div id="konzerte">
    {#each konzerte as kon}
        <div class="konease">
            <img src="{url}{getImageURL(kon['collectionId'],kon["id"],kon['Flyer'], "500x500" )}">
            <h3>{kon["VeranstaltungsName"]}</h3>
            <h2>{kon['Datum']}</h2>
        </div>
    {/each}    
</div>

<style>
</style>