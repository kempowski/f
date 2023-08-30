<script>
    export let data 

    console.log(data)
</script>

{#each data.videos as video}
<div>
    {@html video.field1}
    <h1>{video.Kunstler} - {video.Titel}</h1>
</div>
{/each}