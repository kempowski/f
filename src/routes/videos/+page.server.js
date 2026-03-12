import { createPB } from "$lib/db"


export const load = async () => {
	const pb = createPB();

	const videos = await pb.collection('Videos').getFullList({
		sort: '-created'
	})

	return {
        videos: JSON.parse(JSON.stringify(videos))
	}
}
