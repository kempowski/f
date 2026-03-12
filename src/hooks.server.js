import PocketBase from 'pocketbase';

export async function handle({ event, resolve }) {
	event.locals.pb = new PocketBase('http://127.0.0.1:8090');

	return resolve(event);
}