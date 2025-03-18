
<!-- svelte-ignore css_unused_selector -->
<script>
  import { onMount } from 'svelte';
  import '../app.css';

  let isMobile = false;
  let showMenu = false;

  const updateNavbar = () => {
    isMobile = window.innerWidth <= 768;
  };

  const toggleMenu = () => {
    showMenu = !showMenu;
  };

  onMount(() => {
    updateNavbar();
    window.addEventListener('resize', updateNavbar);
    return () => window.removeEventListener('resize', updateNavbar);
  });
</script>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  .menu-icon {
    display: none;
    cursor: pointer;
  }

  .menu-icon div {
    width: 20px;
    height: 3px;
    background-color: white;
    margin: 1px 0;
  }

  .nav-links {
    display: flex;
    list-style: none;
    padding: 0;
  }

  .nav-links li {
    margin: 0 1rem;
  }

  .nav-links a {
    color: white;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    .menu-icon {
      display: block;
    }

    .nav-links {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 60px;
      right: 0;
      background-color: #333;
      width: 200px;
      padding: 1rem;
    }

    .nav-links.show {
      display: flex;
    }
  }
</style>

<header>
  <nav class="navbar">
    <div class="navbar-header">
      <!-- svelte-ignore a11y_consider_explicit_label -->
      <button class="menu-icon" on:click={toggleMenu}>
        
      </button>
    </div>
    <ul class={`nav-links ${showMenu ? 'show' : ''}`}>
      <li><a href="/" class="hyper"><span>Home</span></a></li>
      <li><a href="/empresa" class="hyper"><span>Empresa</span></a></li>
      <li><a href="/servicos" class="hyper"><span>Serviços</span></a></li>
      <li><a href="/faq" class="hyper"><span>Faq</span></a></li>
      <li><a href="/plissagem" class="hyper"><span>Plissagem</span></a></li>
      <li><a href="/moda_plisse" class="hyper"><span>Moda Plisse</span></a></li>
      <li><a href="/contato" class="hyper"><span>Contatos</span></a></li>
    </ul>
  </nav>
</header>
<!-- Removed redundant script block -->

<main>
  <slot />
</main>

<footer>
  <p>© 2025 - Plissado. Todos os direitos reservados.</p>
</footer>
