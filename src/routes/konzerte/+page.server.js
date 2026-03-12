import { createPB } from "$lib/db"

export const load = async () => {
	const pb = createPB();

	const konzerte = await pb.collection('Konzerte').getFullList({
		sort: '-Datum'
	})

	return {
        konzerte: JSON.parse(JSON.stringify(konzerte))
	}
}
