<script lang="ts">
  import { page } from '$app/stores';
  import { Button } from 'flowbite-svelte';
  import { 
    HomeOutline, 
    UsersOutline, 
    BuildingOutline, 
    ChartPieOutline, 
    LoginOutline 
  } from 'flowbite-svelte-icons';

  export let usuario: any = null;

  const menuItems = [
    { 
      href: '/dashboard', 
      label: 'Dashboard', 
      icon: HomeOutline 
    },
    { 
      href: '/leads', 
      label: 'Leads', 
      icon: UsersOutline 
    },
    { 
      href: '/imoveis', 
      label: 'Imóveis', 
      icon: BuildingOutline 
    },
    { 
      href: '/relatorios', 
      label: 'Relatórios', 
      icon: ChartPieOutline 
    }
  ];
</script>

<nav class="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 fixed left-0 right-0 top-0 z-50">
  <div class="flex flex-wrap justify-between items-center">
    <div class="flex justify-start items-center">
      <a href="/dashboard" class="flex items-center justify-between mr-4">
        <img 
          src="/logo.png" 
          class="mr-3 h-8" 
          alt="CRM Logo" 
        />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          CRM Incorporadora
        </span>
      </a>
    </div>

    <div class="flex items-center lg:order-2">
      {#if usuario}
        <div class="flex items-center ml-3">
          <div>
            <Button href="/logout" color="alternative" size="sm">
              <LoginOutline class="mr-2 w-4 h-4" />
              Sair
            </Button>
          </div>
        </div>
      {:else}
        <Button href="/login" color="primary" size="sm">
          <LoginOutline class="mr-2 w-4 h-4" />
          Entrar
        </Button>
      {/if}
    </div>

    <div 
      class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" 
      id="mobile-menu-2"
    >
      <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        {#each menuItems as item}
          <li>
            <a 
              href={item.href} 
              class="flex items-center py-2 px-3 text-gray-700 hover:bg-gray-100 
                     {$page.url.pathname === item.href 
                       ? 'bg-gray-100 text-primary-600' 
                       : 'hover:text-primary-600'}"
            >
              <svelte:component 
                this={item.icon} 
                class="mr-2 w-5 h-5" 
              />
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>