# CRM Incorporadora - SvelteKit

## Descrição
Sistema de Gestão de Relacionamento com Clientes (CRM) para incorporadoras imobiliárias, desenvolvido com SvelteKit, Prisma e Tailwind CSS.

## Funcionalidades
- Autenticação de usuários
- Gestão de Leads
- Cadastro de Imóveis
- Painel de Controle
- Relatórios Gerenciais

## Tecnologias Utilizadas
- SvelteKit
- Prisma ORM
- PostgreSQL
- Tailwind CSS
- TypeScript
- JWT para autenticação

## Pré-requisitos
- Node.js (v18+)
- PostgreSQL
- pnpm ou npm

## Instalação

1. Clone o repositório
```bash
git clone https://github.com/seuusuario/crm-incorporadora-sveltekit.git
cd crm-incorporadora-sveltekit
```

2. Instale as dependências
```bash
pnpm install
# ou
npm install
```

3. Configure o banco de dados
```bash
# Crie um arquivo .env com a URL do seu banco
DATABASE_URL="postgresql://usuario:senha@localhost:5432/crm_incorporadora"

# Gere o cliente Prisma
pnpm db:generate

# Aplique as migrações
pnpm db:push
```

4. Inicie o servidor de desenvolvimento
```bash
pnpm dev
```

## Variáveis de Ambiente
Crie um arquivo `.env` com:
```
DATABASE_URL="postgresql://..."
VITE_JWT_SECRET="sua_chave_secreta"
```

## Scripts Disponíveis
- `pnpm dev`: Inicia o servidor de desenvolvimento
- `pnpm build`: Compila para produção
- `pnpm db:generate`: Gera o cliente Prisma
- `pnpm db:push`: Aplica migrações no banco

## Contribuição
1. Faça um fork do projeto
2. Crie sua feature branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença
MIT