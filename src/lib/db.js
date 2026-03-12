import PocketBase from 'pocketbase'
import {url} from "$lib/utils/getURL"


// export const pb = new PocketBase(url);

export function createPB() {
	return new PocketBase(url);
}