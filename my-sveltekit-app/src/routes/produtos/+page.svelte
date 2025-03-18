<script>
  let produtos = [
    { nome: 'Cortina Plissada', descricao: 'Elegância e funcionalidade.', preco: 'R$ 500,00' },
    { nome: 'Persiana Vertical', descricao: 'Ideal para escritórios.', preco: 'R$ 300,00' },
    { nome: 'Cortina Blackout', descricao: 'Bloqueio total de luz.', preco: 'R$ 700,00' }
  ];
</script>

<section>
  <h1>Nossos Produtos</h1>
  <ul>
    {#each produtos as produto}
      <li>
        <h2>{produto.nome}</h2>
        <p>{produto.descricao}</p>
        <p><strong>{produto.preco}</strong></p>
      </li>
    {/each}
  </ul>
</section>

<style>
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 1.5rem;
  }
</style>