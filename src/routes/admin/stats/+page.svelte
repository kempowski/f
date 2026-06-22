<script>
  export let data;
  const { albumStats, songStats } = data;

  const maxAlbumPlays = Math.max(...albumStats.map(a => a.plays), 1);
  const maxSongPlays = Math.max(...songStats.map(s => s.plays), 1);
</script>

<div class="stats">
  <h1>Statistiken</h1>

  <!-- ALBEN -->
  <section>
    <h2>Plays pro Album</h2>
    <div class="chart">
      {#each albumStats as album}
        <div class="row">
          <div class="label">{album.title}</div>
          <div class="bar-wrap">
            <div
              class="bar"
              style="width: {(album.plays / maxAlbumPlays) * 100}%"
            ></div>
          </div>
          <div class="count">{album.plays}</div>
        </div>
      {/each}
    </div>
  </section>

  <!-- SONGS -->
  <section>
    <h2>Plays pro Song</h2>
    <div class="chart">
      {#each songStats as song}
        <div class="row">
          <div class="label">{song.title || song.filename}</div>
          <div class="bar-wrap">
            <div
              class="bar"
              style="width: {(song.plays / maxSongPlays) * 100}%"
            ></div>
          </div>
          <div class="count">{song.plays}</div>
        </div>
      {/each}
    </div>
  </section>
</div>

<style>
  .stats {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
    font-family: sans-serif;
  }

  h1 { margin-bottom: 2rem; }
  h2 { margin: 2rem 0 1rem; }

  section { margin-bottom: 3rem; }

  .chart {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .row {
    display: grid;
    grid-template-columns: 200px 1fr 40px;
    align-items: center;
    gap: 12px;
  }

  .label {
    font-size: 13px;
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bar-wrap {
    background: #eee;
    border-radius: 4px;
    height: 20px;
  }

  .bar {
    height: 100%;
    background: #202020;
    border-radius: 4px;
    transition: width 0.4s ease;
    min-width: 2px;
  }

  .count {
    font-size: 13px;
    font-weight: 600;
    text-align: right;
  }
</style>