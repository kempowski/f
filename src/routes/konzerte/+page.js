import {pb} from "$lib/db"


export const load = async () => {
	const konzerte = await pb.collection('Konzerte').getFullList({
		sort: '-Datum'
	})

	return {
        konzerte
	}
}
