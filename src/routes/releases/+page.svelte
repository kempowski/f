<script>
	import { getImageURL, url } from '$lib/utils/getURL'
    export let data
</script>

<div id="tapeWrap">
    {#each data.releases as release}
        <a class="releaseItem" target="_blank" href="{release.Link}">
            <img src={url}{getImageURL(release.collectionId, release.id, release.Cover)} alt={release.Title}>
            <h2>{release.Titel}</h2>
            <h3 class="artistName">{release.Artist}</h3>
            <h3 class="medium">{release.Medium}</h3>
        </a>
    {/each}
</div>

<style>
    #tapeWrap{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 1140px;
        margin-top: 5rem;
    }
    a{
        max-width: 300px;
    }
    img{
        width: 100%;
        -webkit-box-shadow: 0px 9px 18px 10px rgba(0,0,0,0.09);
        -moz-box-shadow: 0px 9px 18px 10px rgba(0,0,0,0.09);
        box-shadow: 0px 9px 18px 10px rgba(0,0,0,0.09);
    }

    .releaseItem{
        text-decoration: none;
        color: #202020;
        margin-bottom: 3rem;
    }
    h1{
        margin: 0;
    }
    .artistName{
        font-weight: 200;
        margin:2px  0;
    }
    .medium{
        font-size: 12pt;
        font-weight: 900;
        margin: 5px 0;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    @media screen and (min-width: 800px){
        #tapeWrap{
            justify-content: space-between;
            flex-wrap: wrap;
            flex-direction: row;
            margin-top: 0;
        }
    }
</style>