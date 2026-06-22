import { pb } from '$lib/pocketbase';

export async function load() {
  const logs = await pb.collection('play_logs').getFullList();
  const albums = await pb.collection('Player').getFullList();

  // Play-Anzahl pro filename (Song)
  const songCounts = {};
  const albumCounts = {};

  for (const log of logs) {
    // Songs
    const key = log.filename;
    songCounts[key] = (songCounts[key] ?? 0) + 1;

    // Alben
    albumCounts[log.song_id] = (albumCounts[log.song_id] ?? 0) + 1;
  }

  // Alben mit Play-Anzahl
  const albumStats = albums
    .map(album => ({
      id: album.id,
      title: album.release ?? 'Unbekannt',
      artist: album.artist,
      plays: albumCounts[album.id] ?? 0,
    }))
    .sort((a, b) => b.plays - a.plays);

  // Songs: filename aufräumen (gleiche Logik wie in +page.server.js)
  const songStats = Object.entries(songCounts)
    .map(([filename, plays]) => {
      let title = filename.replace('.mp3', '');
      title = title.split('_').slice(0, -1).join(' ');
      title = title.replace(/^\d+\s*/, '');
      title = title.replace('master', '');
      return { filename, title: title.trim(), plays };
    })
    .sort((a, b) => b.plays - a.plays);

  return { albumStats, songStats };
}