import { createPB } from "$lib/db";

export const load = async () => {
	const pb = createPB();

	const releases = await pb.collection('Releases').getFullList({
		sort: '-ReleaseDate'
	});

	return {
		releases: JSON.parse(JSON.stringify(releases))
		// // bessere practice, aber funkt ned?:
		// releases: releases.map(r => r.toJSON()) 
	}
};
