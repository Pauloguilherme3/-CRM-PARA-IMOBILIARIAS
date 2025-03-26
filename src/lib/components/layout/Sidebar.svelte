<script lang="ts">
  import { page } from '$app/stores';
  import { 
    HomeOutline, 
    UsersOutline, 
    BuildingOutline, 
    ChartPieOutline,
    CogOutline,
    UserCircleOutline
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

  const configuracoes = [
    { 
      href: '/perfil', 
      label: 'Perfil', 
      icon: UserCircleOutline 
    },
    { 
      href: '/configuracoes', 
      label: 'Configurações', 
      icon: CogOutline 
    }
  ];
</script>

<aside 
  class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700" 
  aria-label="Sidebar"
>
  <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
    <ul class="space-y-2 font-medium">
      <li class="pb-2 mb-2 border-b border-gray-200">
        {#if usuario}
          <div class="flex items-center p-2">
            <img 
              class="w-10 h-10 rounded-full mr-3" 
              src={usuario.avatar || '/default-avatar.png'} 
              alt="Foto de perfil"
            />
            <div>
              <div class="text-sm font-semibold">{usuario.nome}</div>
              <div class="text-xs text-gray-500">{usuario.email}</div>
            </div>
          </div>
        {/if}
      </li>

      {#each menuItems as item}
        <li>
          <a 
            href={item.href} 
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white 
                   hover:bg-gray-100 dark:hover:bg-gray-700 
                   {$page.url.pathname === item.href 
                     ? 'bg-gray-100 text-primary-600' 
                     : 'hover:text-primary-600'}"
          >
            <svelte:component 
              this={item.icon} 
              class="w-5 h-5 text-gray-500 transition duration-75 
                     dark:text-gray-400 
                     group-hover:text-primary-600 
                     dark:group-hover:text-white" 
            />
            <span class="ml-3">{item.label}</span>
          </a>
        </li>
      {/each}

      <li class="pt-2 mt-2 border-t border-gray-200">
        <span class="block px-2 pt-2 text-xs text-gray-500">Configurações</span>
        {#each configuracoes as item}
          <a 
            href={item.href} 
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white 
                   hover:bg-gray-100 dark:hover:bg-gray-700 
                   {$page.url.pathname === item.href 
                     ? 'bg-gray-100 text-primary-600' 
                     : 'hover:text-primary-600'}"
          >
            <svelte:component 
              this={item.icon} 
              class="w-5 h-5 text-gray-500 transition duration-75 
                     dark:text-gray-400 
                     group-hover:text-primary-600 
                     dark:group-hover:text-white" 
            />
            <span class="ml-3">{item.label}</span>
          </a>
        {/each}
      </li>
    </ul>
  </div>
</aside>