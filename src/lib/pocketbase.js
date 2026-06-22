import PocketBase from 'pocketbase';

export const pb = new PocketBase('https://pocket.cr.fugbach.one');

export async function logPlay(songId) {
  try {
    await pb.collection('play_logs').create({
      song_id: songId,
      played_at: new Date().toISOString(),
    });
  } catch (e) {
    console.error('logPlay failed:', e);
  }
}