
async function createAudio(url) {
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  const ctx = new (window.AudioContext)();
  const src = ctx.createBufferSource();
  src.buffer = await new Promise((res) => ctx.decodeAudioData(buffer, res));
  src.loop = true;

  src.start(0)

  const gain = ctx.createGain();
  const analyser = ctx.createAnalyser();

  analyser.fftSize = 64;
  src.connect(analyser);
  analyser.connect(gain);

  const data = new Uint8Array(analyser.frequencyBinCount)

  return {
    ctx,
    src,
    gain,
    data,

    update: () => {
      analyser.getByteFrequencyData(data)
      return (data.avg = data.reduce((prev, curr) => prev + curr / data.length, 0))
    },
  };
};

export default createAudio;