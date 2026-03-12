<script>
  import AudioPlayer from "$lib/components/AudioPlayer.svelte";

  export let data
    // console.log(data)
</script>


<a href="/albums">zurück</a>


<AudioPlayer playlist={data.playlist} />

<style>
  a{
    font-family: 'Oswald', sans-serif;
    text-decoration: none;
    color: #202020;
    position: absolute;
    bottom: 20px;
    right: 20px;
    @media (min-width: 999px){
      top: 20px;
    }
  }
</style>