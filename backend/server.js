const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rota de exemplo
app.get('/', (req, res) => {
    res.send('Backend rodando!');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
app.post('/api/login', (req, res) => {
    const { email, senha } = req.body;
    // Simulação de autenticação
    if (email === 'usuario@teste.com' && senha === '123456') {
        res.json({ success: true, message: 'Login realizado com sucesso!' });
    } else {
        res.status(401).json({ success: false, message: 'Credenciais inválidas.' });
    }
});
app.get('/api/produtos', (req, res) => {
    const produtos = [
        { id: 1, nome: 'Produto A', preco: 100 },
        { id: 2, nome: 'Produto B', preco: 200 },
    ];
    res.json(produtos);
});