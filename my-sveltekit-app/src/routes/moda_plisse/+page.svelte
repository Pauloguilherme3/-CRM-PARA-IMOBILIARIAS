<script>
    import { onMount } from 'svelte';
    import './moda_plisse.css';
    let images = [
        { src: '/imagens/01.jpg', title: 'Mão de Obra', subtitle: 'Serviços de Plissados' },
        { src: '/imagens/02.jpg', title: 'Mão de Obra', subtitle: 'Serviços de Plissados' },
        { src: '/imagens/03.jpg', title: 'Mão de Obra', subtitle: 'Serviços de Plissados' },
        { src: '/imagens/04.jpg', title: 'Mão de Obra', subtitle: 'Serviços de Plissados' }
    ];

    onMount(() => {
        // Add any JavaScript logic if needed
    });
</script>

<div class="banner">
    <h2>Moda Plissé</h2>
    <h3>Explore o mundo dos tecidos plissados</h3>
</div>

<div class="grid">
    {#each images as image}
        <div class="card">
            <img src={image.src} alt={image.title} />
            <h4>{image.title}</h4>
            <h5>{image.subtitle}</h5>
        </div>
    {/each}
</div>