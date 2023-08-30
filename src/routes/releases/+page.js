import {pb} from "$lib/db"


export const load = async () => {
	const releases = await pb.collection('Releases').getFullList({
		sort: '-created'
	})

	return {
        releases
	}
}
