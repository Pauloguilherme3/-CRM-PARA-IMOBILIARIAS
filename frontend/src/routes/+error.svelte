<script>
  import { page } from '$app/stores';
</script>

<h1>Página não encontrada</h1>
<p>A página { $page.url.pathname } não existe.</p>
<a href="/">Voltar para a página inicial</a>