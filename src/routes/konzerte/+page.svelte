<script>
	import { getImageURL, url } from '$lib/utils/getURL'

    export let data

    console.log(data.konzerte)
</script>


<div id="content">
    <div id="konCardWrap">
        {#each data.konzerte as konzert }
        <div class="konzertCard">    
            <img src="{url}{getImageURL(konzert.collectionId, konzert.id, konzert.Flyer)}" alt="" class="flyer">
            <div class="textWrap">
                <p class="datum">{konzert.Datum.slice(0,-14)}</p>
                <h2 class="venuName">{konzert.VeranstaltungsName}</h2>
                <h3 class="venuO">{konzert.Ort}</h3>
            </div>
        </div>
        {/each}
    </div>
</div>
<style>
#konCardWrap{
    /* display: flex; */
    flex-wrap: wrap;
}
.konzertCard{
    width: 100%;
    padding: 1em;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: start;
    box-sizing: border-box;
}
img{
    width: 100%;
}
h2, h3, p{
    margin: 0;
}
h2{
    font-size: 2em;
    margin-bottom: -0.3em;

}
h3{
    font-size: 20pt;
    font-weight: 200;
}
p{
    margin-bottom: -0.5em;
}
.textWrap{
    /* padding-left: 2rem; */
    /* width: 400px; */
    /* align-self: flex-end; */
    box-sizing: border-box;
}

@media screen and (min-width: 800px){
    img{
        width: 30%;
    }
    h2, h3, p{
        margin: 0;
    }
    h2{
        font-size: 22pt;
    }
    h3{
        font-size: 20pt;
        font-weight: 200;
    }
    .konzertCard{
        flex-direction: row;
    }
    .textWrap{
        align-self: flex-end;
        padding-left: 2rem;
    }
}
</style>