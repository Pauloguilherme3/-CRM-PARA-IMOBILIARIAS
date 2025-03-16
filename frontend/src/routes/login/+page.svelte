<script>
    import { navigate } from '$app/navigation';
    import axios from 'axios';

    let email = '';
    let senha = '';
    let mensagem = '';

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                email,
                senha,
            });

            if (response.data.success) {
                // Redireciona para a página do dashboard após o login
                navigate('/dashboard');
            } else {
                mensagem = response.data.message;
            }
        } catch (error) {
            mensagem = 'Erro ao fazer login. Tente novamente.';
        }
    };
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
        <form on:submit|preventDefault={handleLogin}>
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    bind:value={email}
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <div class="mb-6">
                <label for="senha" class="block text-sm font-medium text-gray-700">Senha</label>
                <input
                    type="password"
                    id="senha"
                    bind:value={senha}
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <button
                type="submit"
                class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Entrar
            </button>
        </form>
        {#if mensagem}
            <p class="mt-4 text-center text-red-500">{mensagem}</p>
        {/if}
    </div>
</div>