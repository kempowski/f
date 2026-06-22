<script>
  let password = '';
  let error = false;

  async function submit() {
    const res = await fetch('/admin/login', {
      method: 'POST',
      body: new FormData(document.querySelector('form'))
    });
    if (res.ok) {
      window.location.href = '/admin/stats';
    } else {
      error = true;
    }
  }
</script>

<div class="login">
  <h1>Admin</h1>
  {#if error}
    <p class="error">Falsches Passwort</p>
  {/if}
  <form on:submit|preventDefault={submit}>
    <input type="password" name="password" bind:value={password} placeholder="Passwort" />
    <button type="submit">Login</button>
  </form>
</div>

<style>
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 1rem;
  }
  input {
    padding: 10px;
    font-size: 16px;
    border: 2px solid #202020;
  }
  button {
    padding: 10px 24px;
    background: #202020;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
  .error { color: red; }
</style>