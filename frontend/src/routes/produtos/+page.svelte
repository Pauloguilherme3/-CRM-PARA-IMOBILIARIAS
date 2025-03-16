<script>
    import { onMount } from 'svelte';
    import axios from 'axios';

    let produtos = [];

    onMount(async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/produtos');
            produtos = response.data;
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    });
</script>

<div>
    <h1>Produtos</h1>
    <ul>
        {#each produtos as produto}
            <li>
                {produto.nome} - R$ {produto.preco}
            </li>
        {/each}
    </ul>
</div>