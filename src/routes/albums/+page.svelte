<script>
  export let data;
</script>


<div class="album-grid">
  {#each data.albums as album}
    <a href={`/albums/${album.id}`} class="album-card">
      {#if album.cover}
        <img src={album.cover} alt={album.title} class="cover" />
      {:else}
        <div class="cover placeholder">No Cover</div>
      {/if}
      <!-- <div class="info">
        <strong>{album.title}</strong>
        <span>{album.artist}</span>
      </div> -->
    </a>
  {/each}
</div>

<style>
  .album-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }

  .album-card {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: white;
    overflow: hidden;
    background: #111;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .album-card:hover {
    transform: scale(1.01);
  }

  .cover {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  .cover.placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #222;
    color: #888;
    font-size: 14px;
  }

  .info {
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
</style>