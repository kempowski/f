<script>
  import { logPlay } from "$lib/api";
  import AudioVisualizer from "$lib/components/AudioVisualizer.svelte";
  export let playlist = [];

  let audio;
  let currentIndex = 0;
  let isPlaying = false;

  let duration = 0;
  let currentTime = 0;
  let hasLoggedCurrentTrack = false; 

  let volume = 1;

  $: currentTrack = playlist[currentIndex];
  $: progress = duration ? (currentTime / duration) * 100 : 0;

  function play() {
  audio.play();
  isPlaying = true;
  if (!hasLoggedCurrentTrack) {
    logPlay(currentTrack.id, currentTrack.filename);
    hasLoggedCurrentTrack = true;
  }
}

  function pause() {
    audio.pause();
    isPlaying = false;
  }

  function changeVolume(e) {
    volume = e.target.value;
    audio.volume = volume;
  }

  function toggle() {
    isPlaying ? pause() : play();
  }

  function next() {
    currentIndex = (currentIndex + 1) % playlist.length;
    restart();
  }

  function prev() {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    restart();
  }

  function selectTrack(i) {
    currentIndex = i;
    restart();
  }

  function restart() {
  hasLoggedCurrentTrack = false; 
  audio.pause();
  audio.load();
  if (isPlaying) {
    audio.play();
    logPlay(currentTrack.id, currentTrack.filename);
    hasLoggedCurrentTrack = true;
  }
}

  function handleEnded() {
    next();
  }

  function updateTime() {
    currentTime = audio.currentTime;
  }

  function setDuration() {
    duration = audio.duration;
  }

  function seek(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    audio.currentTime = percent * duration;
  }

  function formatTime(t) {
    const min = Math.floor(t / 60);
    const sec = Math.floor(t % 60)
      .toString()
      .padStart(2, "0");
    return `${min}:${sec}`;
  }

  $: if (currentTrack && "mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: currentTrack.title,
      artist: currentTrack.artist,
      album: "Pocket Player",
    });

    navigator.mediaSession.setActionHandler("play", play);
    navigator.mediaSession.setActionHandler("pause", pause);
    navigator.mediaSession.setActionHandler("previoustrack", prev);
    navigator.mediaSession.setActionHandler("nexttrack", next);
  }

</script>

<div class="player">
  <div class="break">
    {#if currentTrack.cover}
      <img src={currentTrack.cover} alt="Cover" class="cover" />
    {/if}
    {#if currentTrack}
      <div class="meta">
        <strong>{currentTrack.release}</strong>
        <span>{currentTrack.artist}</span>
      </div>
    {/if}
  </div>

  <audio
    bind:this={audio}
    on:timeupdate={updateTime}
    on:loadedmetadata={setDuration}
    on:ended={handleEnded}
    crossorigin="anonymous"
  >
    {#if currentTrack}
      <source src={currentTrack.src} type="audio/mpeg" />
    {/if}
  </audio>

  <div class="breakControl">
    <!-- Progressbar -->
    <div class="progress-wrapper">
      <span class="timeChar startTime">{formatTime(currentTime)}</span>

      <div class="progress" on:click={seek}>
        <div class="bar" style="width:{progress}%"></div>
      </div>

      <span class="timeChar finTime">{formatTime(duration)}</span>
    </div>

    <!-- Controls -->
    <div class="controls">
      <div class="playingCtrl">
        <button on:click={prev}>⏮</button>
        <button on:click={toggle}>
          {isPlaying ? "⏸" : "▶"}
        </button>
        <button on:click={next}>⏭</button>
      </div>

      <!-- Volume -->
      <input
        class="slider"
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        on:input={changeVolume}
      />
    </div>
  </div>

  <!-- Playlist -->
  <div class="playlist">
    {#each playlist as track, i}
      <div
        class="track {i === currentIndex ? 'active' : ''}"
        on:click={() => selectTrack(i)}
      >
        <span class="index">
          {#if i === currentIndex && isPlaying}
            ▶
          {:else}
            {i + 1}
          {/if}
        </span>

        <div class="info">
          <div class="title">{track.title}</div>
          <!-- <div class="artist">{track.artist}</div> -->
        </div>
      </div>
    {/each}
  </div>
  <div class="noise-gradient h-96 w-full rounded-2xl"></div>
</div>

<!-- <AudioVisualizer {audio} bars={40} /> -->

<style>
  .noise-gradient {
    position: relative;
    background: linear-gradient(135deg, #6366f1, #ec4899, #f59e0b);
    overflow: hidden;
  }

  .noise-gradient::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;

    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");

    opacity: 0.15;
    mix-blend-mode: overlay;
  }
  * {
    box-sizing: border-box;
  }
  .player {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 340px;
    padding: 16px;
    /* background: #111; */
    /* color: white; */
    @media (min-width: 667px) {
      width: calc(100vw - 400px);
    }
    @media (min-width: 1500px) {
      width: 1124px;
    }
  }
  .break {
    display: flex;
    flex-direction: column;
    @media (min-width: 999px) {
      flex-direction: row;
      align-items: end;
    }
  }

  .meta {
    display: flex;
    flex-direction: column;
    @media (min-width: 999px) {
      margin-left: 40px;
    }
  }

  .progress-wrapper {
    display: grid;
    grid-template-columns: 33px 1fr 33px;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: #202020;
    @media (min-width: 999px) {
      margin-bottom: 15px;
    }
  }

  .progress {
    height: 12px;
    background: #202020;
    border-radius: 8px;
    cursor: pointer;
    border-color: #202020;
    border-style: solid;
  }
  .timeChar {
    font-size: 9pt;
  }
  .finTime {
    text-align: right;
  }
  .cover {
    max-width: 333px;
  }
  .bar {
    height: 100%;
    background: #fff;
    border-radius: 4px;
  }

  .controls {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 200px;
    @media (min-width: 999px) {
      flex-direction: row;
      align-items: center;
    }
  }
  .playingCtrl {
    display: flex;
    justify-content: space-between;
    min-width: 210px;
    margin-top: 20px;
    @media (min-width: 999px) {
      align-items: center;
      margin: 0 auto;
      /* position: absolute; */
      left: 0;
      right: 0;
      max-width: 210px;
    }
  }
  .breakControl {
    @media (min-width: 999px) {
      position: absolute;
      bottom: 0px;
      width: calc(100vw - 420px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: white;
      padding: 20px 0;
    }
    @media (min-width: 1600px) {
      width: 100%;
      max-width: 1124px;
    }
  }

  /* VOLUME START */
  .slider {
    -webkit-appearance: none; /* Chrome, Safari */
    width: 100%;
    height: 6px;
    background: #202020; /* schwarze Track */
    border-radius: 3px;
    cursor: pointer;
    margin: 23px 0 10px;
    @media (min-width: 999px) {
      position: absolute;
      right: 20px;
      margin-top: 0px;
      max-width: 100px;
      margin-top: 17px;
      padding-right: 20px;
    }
  }

  /* Chrome, Safari, Edge */
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 7px;
    height: 25px;
    background: #202020; /* dunkler Thumb */
    border-radius: 0%;
    border: 3px solid #fff;
    cursor: pointer;
    transition: background 0.2s;
  }

  .slider::-webkit-slider-thumb:hover {
    background: #555;
  }

  /* Firefox */
  .slider::-moz-range-thumb {
    width: 7px;
    height: 25px;
    background: #333;
    border-radius: 0%;
    border: 3px solid #fff;
    cursor: pointer;
  }

  .slider::-moz-range-track {
    background: #000;
    height: 6px;
    /* border-radius: 3px; */
  }

  /* IE */
  .slider::-ms-thumb {
    width: 16px;
    height: 16px;
    background: #333;
    /* border-radius: 50%; */
    border: 2px solid #fff;
  }
  .slider::-ms-track {
    background: transparent;
    border-color: transparent;
    color: transparent;
    height: 6px;
  }
  /* VOLUME END */

  button {
    font-size: 20px;
    width: 50px;
    background: #202020;
    border: none;
    padding: 10px;
    color: white;
    cursor: pointer;
    border-style: solid;
    border-color: #202020;
  }

  button:hover {
    font-size: 20px;
    background: #fff;
    border: none;
    padding: 10px;
    color: #202020;
    cursor: pointer;
    border-style: solid;
    border-color: #202020;
  }

  .playlist {
    max-height: fit-content;
    overflow-y: auto;
    padding-bottom: 30px;
  }

  .track {
    display: flex;
    gap: 10px;
    padding: 8px;
    cursor: pointer;
  }

  .track:hover {
    background: #202020;
    color: #fff;
  }

  .track.active {
    background: #202020;
    color: #fff;
  }

  .index {
    width: 24px;
    text-align: center;
  }

  .title {
    font-size: 14px;
  }

  .artist {
    font-size: 12px;
    color: #aaa;
  }
</style>
