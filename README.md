# Aplicação Back-End Básica

Esta é uma aplicação simples de back-end desenvolvida para aprendizado dos conceitos básicos de criação de APIs REST. O projeto implementa rotas para manipulação de produtos, clientes e pedidos, utilizando **Node.js**, e **PostgreSQL**.

## Autor

**Antoniel Zeferino**

---

## Funcionalidades

A aplicação possui as seguintes rotas organizadas por recursos:

### **Produtos**
- `GET /products` - Lista todos os produtos.
- `GET /products/:id` - Obtém informações de um produto específico.
- `POST /products` - Cria um novo produto.
- `PUT /products/:id` - Atualiza os dados de um produto existente.
- `DELETE /products/:id` - Remove um produto.

### **Clientes**
- `GET /customers` - Lista todos os clientes.
- `GET /customers/:id` - Obtém informações de um cliente específico.
- `POST /customers` - Cria um novo cliente.
- `PUT /customers/:id` - Atualiza os dados de um cliente existente.
- `DELETE /customers/:id` - Remove um cliente.

### **Pedidos**
- `GET /orders` - Lista todos os pedidos.
- `POST /orders` - Cria um novo pedido.
- `GET /orders/:id` - Obtém informações detalhadas de um pedido.
- `DELETE /orders/:id` - Remove um pedido.

---

## Requisitos

- **Node.js** (v20.9.0 ou superior)
- **PostgreSQL** (configurado como banco de dados)

---

## Instalação e Configuração

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o banco de dados:**
   - Certifique-se de que o PostgreSQL está rodando.
   - Configure o arquivo de conexão com o banco de dados (por exemplo, `src/database/config.js`).

4. **Sincronize o banco de dados:**
   ```bash
   npm run sync:db
   ```

---

## Uso

### Iniciar o servidor em modo de desenvolvimento:
```bash
npm run dev
```
O servidor estará acessível em [http://localhost:5000](http://localhost:5000).

---

## Scripts Disponíveis

- **`npm run sync:db`**  
  Sincroniza o banco de dados criando as tabelas necessárias.

- **`npm run dev`**  
  Inicia o servidor com recarregamento automático (`--watch`).

---

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript.
- **Express** - Framework web para criação de APIs.
- **PostgreSQL** - Banco de dados relacional.
- **pg** - Cliente para conexão com PostgreSQL.

---

## Objetivo

O objetivo deste projeto é aprender e praticar os procedimentos básicos de desenvolvimento back-end, como criação de rotas, interação com banco de dados e organização do código.