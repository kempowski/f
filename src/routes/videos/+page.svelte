<script>
    export let data 

    console.log(data.videos)
</script>

{#each data.videos as video}
    <div id="videoContent">
        {@html video.Einbetten}
        <div class="textWrap">
            <h2 class="name">{video.Kunstler}</h2>
            <h3 class="titel">{video.Titel}</h3>
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
    /* .textWrap{
        display: flex;
        justify-content: space-between;
        margin-bottom: 3rem;
    }
    .titel{
        margin:0;
        font-weight: 200;
    }
    .name{
        margin: 0;
    } */
</style>