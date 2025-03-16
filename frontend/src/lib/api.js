app.post('/api/login', (req, res) => {
    const { email, senha } = req.body;
    // Simulação de autenticação
    if (email === 'usuario@teste.com' && senha === '123456') {
        res.json({ success: true, message: 'Login realizado com sucesso!' });
    } else {
        res.status(401).json({ success: false, message: 'Credenciais inválidas.' });
    }
});