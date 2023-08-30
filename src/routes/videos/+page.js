import {pb} from "$lib/db"


export const load = async () => {
	const videos = await pb.collection('Videos').getFullList({
		sort: '-created'
	})

	return {
        videos
	}
}
