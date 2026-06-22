import { pb } from '$lib/pocketbase';

export async function logPlay(songId, filename) {
  try {
    await pb.collection('play_logs').create({
      song_id: songId,
      filename: filename,
      played_at: new Date().toISOString(),
    });
  } catch (e) {
    console.error('logPlay failed:', e);
  }
}