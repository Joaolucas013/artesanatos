# 🪵 Loja de Artesanato

Catálogo online de produtos artesanais, desenvolvido para facilitar a divulgação e venda das peças via WhatsApp. O cliente navega pela vitrine, escolhe o produto e é direcionado direto para uma conversa no WhatsApp com a mensagem já preenchida.

## ✨ Funcionalidades

- Listagem de produtos com nome, preço, quantidade disponível, dimensões e tempo de produção
- Indicação visual de produtos esgotados
- Botão de compra que abre o WhatsApp com mensagem pré-formatada (nome do produto + preço)
- Animações de hover nos cards e botões para melhor experiência visual
- Layout responsivo (mobile, tablet e desktop)
- Estado vazio amigável quando ainda não há produtos cadastrados

## 🛠️ Tecnologias

- **Angular** (standalone components, Angular 17+) — frontend da vitrine
- **Angular Animations** — efeitos de hover nos cards e botões
- **JSON Server** — API REST fake para desenvolvimento local
- **CurrencyPipe** — formatação de preços em Real (BRL)

## 📁 Estrutura do projeto

```
loja/
├── backend/              # API local com json-server
│   ├── db.json           # base de dados dos produtos
│   └── package.json
└── project/               # aplicação Angular
    └── src/
        └── app/
            ├── componentes/
            │   └── lista-produtos/
            ├── artesanato.ts          # interface do produto
            ├── produto-service.service.ts
            └── animacoes.ts          # triggers de animação
```

## 🚀 Como rodar o projeto

### 1. Backend (API local)

```bash
cd backend
npm install
npm start
```

A API sobe em `http://localhost:3000/produtos`.

### 2. Frontend (Angular)

Em outro terminal:

```bash
cd project
npm install
ng serve
```

A aplicação sobe em `http://localhost:4200`.

> ⚠️ Os dois precisam estar rodando ao mesmo tempo para a aplicação funcionar — o Angular consome os dados do json-server.

## 📦 Modelo de dados

```typescript
export interface Artesanato {
  id: string;
  nome: string;
  preco: number;
  descricao: string;
  disponivel: boolean;
  quantidade: number;
  dimensoes: string;
  tempoProducao: string;
}
```

## 🎯 Próximos passos

- [ ] Migrar o backend de desenvolvimento (json-server) para **Supabase** em produção
- [ ] Upload de imagens reais dos produtos (Supabase Storage)
- [ ] Painel admin para o vendedor cadastrar/editar produtos
- [ ] Deploy do frontend (Vercel ou Netlify)

## 📱 Contato

Botão "Tire suas dúvidas" redireciona direto para o WhatsApp do vendedor.

---

Desenvolvido como projeto freelance para vendedor(a) de artesanato.