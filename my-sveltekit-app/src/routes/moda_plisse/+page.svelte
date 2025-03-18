<script>
    import { onMount } from 'svelte';
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

<style>
    .banner {
        text-align: center;
        padding: 2rem 0;
        background-color: #f8f9fa;
    }

    .banner h2 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
    }

    .banner h3 {
        font-size: 1.5rem;
        color: #6c757d;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin: 2rem 0;
    }

    .card {
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        text-align: center;
        background: #fff;
    }

    .card img {
        width: 100%;
        height: auto;
    }

    .card h4 {
        margin: 0.5rem 0;
        font-size: 1.2rem;
    }

    .card h5 {
        margin: 0;
        font-size: 1rem;
        color: #6c757d;
    }
</style>

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