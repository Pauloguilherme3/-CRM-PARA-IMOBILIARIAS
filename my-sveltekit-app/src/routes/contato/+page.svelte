<script>
  let nome = '';
  let email = '';
  let mensagem = '';

  function enviarFormulario() {
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
  }
</script>

<section>
  <h1>Contato</h1>
  <form on:submit|preventDefault={enviarFormulario}>
    <label>
      Nome:
      <input type="text" bind:value={nome} required />
    </label>
    <label>
      Email:
      <input type="email" bind:value={email} required />
    </label>
    <label>
      Mensagem:
      <textarea bind:value={mensagem} required></textarea>
    </label>
    <button type="submit">Enviar</button>
  </form>
</section>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    display: flex;
    flex-direction: column;
  }

  button {
    background-color: #007BFF;
    color: white;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>