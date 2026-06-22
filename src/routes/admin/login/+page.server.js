import { redirect, fail } from '@sveltejs/kit';

const PASSWORD = 'wasgeht'; // ← gleich wie oben

export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const password = data.get('password');

    if (password !== PASSWORD) {
      return fail(401, { error: 'Falsches Passwort' });
    }

    cookies.set('admin_auth', PASSWORD, {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7 // 1 Woche
    });

    throw redirect(303, '/admin/stats');
  }
};