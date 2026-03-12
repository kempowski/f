import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocket.cr.fugbach.one');

export async function load({ params }) {
  const { id } = params;

  console.log(id)
  const record = await pb.collection('Player').getOne(id);

  const playlist = record.tracks.map((file) => {
    // let title = file.replace(".mp3", "").split("_").slice(0, -1).join("_");
    let title = file.replace(".mp3", "");
    title = title.split("_").slice(0, -1).join(" ");
    title = title.replace(/^\d+\s*/, "");
    title = title.replace("master", "")
    return {
      id: record.id,
      title,
      artist: record.artist,
      release: record.release,
      src: pb.files.getUrl(record, file),
      cover: record.cover ? pb.files.getUrl(record, record.cover) : null
    };
  });

  return { playlist };
}