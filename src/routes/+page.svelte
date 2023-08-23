<script>
    import Content from '../lib/components/Content.svelte';

    export let data

    console.log(data)
</script>


<div>
    <!-- <Content data={data}/> --> -->
</div>

<style>
    :global(body){
        margin: 0;
        overflow: hidden;
    }
    div {
        display: flex;
        width: 100%;
        height: 100vh;
        overflow-y: scroll;
    }
</style>