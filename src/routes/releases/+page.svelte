<script>
	import { getImageURL, url } from '$lib/utils/getURL'
    export let data

    console.log(data)
</script>


{#each data.releases as release}
    <a href="{release.Link}">
        <img src={url}{getImageURL(release.collectionId, release.id, release.Cover)} alt={release.Title}>
        <h1>{release.Titel}</h1>
    </a>
{/each}


<style>
    a{
        max-width: 300px;
    }
    img{
        width: 100%;
    }
</style>