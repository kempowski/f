import { redirect } from '@sveltejs/kit';

const PASSWORD = 'wasgeht'; // ← hier setzen

// +layout.server.js
export async function load({ cookies, url }) {
  if (url.pathname === '/admin/login') return; // ← Login ausschließen

  const auth = cookies.get('admin_auth');
  if (auth !== PASSWORD) {
    throw redirect(303, '/admin/login');
  }
}