<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import Sidebar from '$lib/components/layout/Sidebar.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';

  import '../app.css';

  export let data;

  // Rotas que não requerem autenticação
  const rotasPublicas = ['/login', '/registro', '/recuperar-senha'];

  // Verifica se a rota atual é pública
  $: isRotaPublica = rotasPublicas.includes($page.url.pathname);

  // Redireciona para login se não estiver autenticado
  $: {
    if (!data.usuario && !isRotaPublica) {
      goto('/login');
    }
  }
</script>

{#if isRotaPublica}
  <slot />
{:else}
  <div class="antialiased bg-gray-50 dark:bg-gray-900">
    <Navbar usuario={data.usuario} />
    <Sidebar usuario={data.usuario} />
    
    <main class="p-4 md:ml-64 h-auto pt-20 bg-gray-50 dark:bg-gray-900">
      <slot />
    </main>
    
    <Footer />
  </div>
{/if}