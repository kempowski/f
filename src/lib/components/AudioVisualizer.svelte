<script>
  import { onMount } from "svelte";

  export let audio;
  export let bars = 32;

  let canvas;
  let ctx;

  let audioCtx;
  let analyser;
  let source;
  let dataArray;

  function init() {
    if (!audio) return;

    audioCtx = new AudioContext();
    analyser = audioCtx.createAnalyser();

    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.85;

    source = audioCtx.createMediaElementSource(audio);

    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    const bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);

    draw();
  }

  function draw() {
    requestAnimationFrame(draw);

    analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const barWidth = canvas.width / bars;

    for (let i = 0; i < bars; i++) {
      const value = dataArray[i];
      const height = (value / 255) * canvas.height;

      const x = i * barWidth;

      ctx.fillStyle = "white";
      ctx.fillRect(x, canvas.height - height, barWidth - 2, height);
    }
  }

  onMount(() => {
    ctx = canvas.getContext("2d");
  });

  $: if (audio) {
    init();
  }
</script>

<canvas bind:this={canvas} width="600" height="120"></canvas>

<style>
canvas {
  width: 100%;
  background: black;
}
</style>