import {pb} from "$lib/db"


export const load = async () => {
	const releases = await pb.collection('Releases').getFullList({
		sort: '-created'
	})
    const konzerte = await pb.collection('Konzerte').getFullList({
      sort: '-created',
    });
    const videos = await pb.collection('Videos').getFullList({
      sort: '-created',
    });
    
	// const releases = await response
    // console.log(data)
	return {
        releases,
        konzerte,
        videos
	}
}

