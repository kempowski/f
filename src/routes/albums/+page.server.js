import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocket.cr.fugbach.one');

export async function load() {
  const records = await pb.collection('player').getFullList({
    sort: '-releaseDay'
  });

  const albums = records.map((song) => ({
    id: song.id,
    title: song.release ?? "Untitled Album",
    artist: song.artist,
    cover: song.cover ? pb.files.getUrl(song, song.cover) : null
  }));

  return { albums };
}