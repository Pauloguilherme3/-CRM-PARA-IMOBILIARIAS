<script lang="ts">
  import { page } from '$app/stores';
  import { Button } from 'flowbite-svelte';
  import { GithubOutline, LinkedinOutline } from 'flowbite-svelte-icons';
</script>

<footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
  <div class="max-w-screen-xl mx-auto p-4 md:py-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <a href="/" class="flex items-center mb-4 sm:mb-0">
        <img 
          src="/logo.png" 
          class="h-8 mr-3" 
          alt="CRM Logo" 
        />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          CRM Incorporadora
        </span>
      </a>
      
      <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
          <a href="/sobre" class="mr-4 hover:underline md:mr-6">
            Sobre
          </a>
        </li>
        <li>
          <a href="/politica-privacidade" class="mr-4 hover:underline md:mr-6">
            Política de Privacidade
          </a>
        </li>
        <li>
          <a href="/termos" class="hover:underline">
            Termos de Uso
          </a>
        </li>
      </ul>
    </div>

    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {new Date().getFullYear()} CRM Incorporadora. Todos os direitos reservados.
      </span>
      
      <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <Button 
          href="https://github.com/seuusuario/crm-incorporadora" 
          color="alternative" 
          size="sm"
        >
          <GithubOutline class="w-5 h-5" />
        </Button>
        
        <Button 
          href="https://www.linkedin.com/sua-empresa" 
          color="alternative" 
          size="sm"
        >
          <LinkedinOutline class="w-5 h-5" />
        </Button>
      </div>
    </div>
  </div>
</footer>