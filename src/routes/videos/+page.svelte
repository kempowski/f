<script>

    export let data 

    console.log(data)
</script>

{#each data.videos as video}
    <div id="videoContent">
        {@html video.Einbetten}
        <div class="textWrap">
            <h2 class="titel">{video.Titel}</h2>
            <h3 class="name">{video.Kunstler}</h3>
        </div>
    </div>
{/each}

<style>
    #videoContent{
        width: 100%;
        padding: 2rem;
        box-sizing: border-box;
    }
    h2, h3{
        margin: 0;
    }
</style>