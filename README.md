# 📘 API GymPass Style — SOLID Node.js

Esta é uma API RESTful desenvolvida durante o curso de **Node.js da Rocketseat** em 2025, construída com **Node.js + TypeScript + Fastify + Prisma**, seguindo rigorosamente os princípios **SOLID** para garantir escalabilidade, testabilidade e manutenção a longo prazo.

A aplicação simula um sistema no estilo **GymPass**, onde usuários podem se cadastrar, autenticar, buscar academias e realizar check-ins com validações de regras de negócio.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript no servidor  
- **TypeScript** — Tipagem estática para garantir segurança e escalabilidade  
- **Fastify** — Framework web rápido e performático  
- **Prisma ORM** — Mapeamento e comunicação com banco PostgreSQL  
- **Zod** — Validação de dados e schemas  
- **Vitest** — Testes unitários e end-to-end  
- **Docker** — Containers para infraestrutura e PostgreSQL  
- **TSX** — Execução de TS sem necessidade de build para desenvolvimento  
- **TSUP** — Bundler para gerar build otimizada  
- **JWT (Fastify-JWT)** — Autenticação e controle de sessões  
- **RBAC** — Controle de acesso baseado em papéis  
- **CI (GitHub Actions)** — Pipeline automatizado de testes  

---

## 📚 Aprendizados deste Projeto

Durante o desenvolvimento desta API, foram explorados conceitos avançados e práticas profissionais:

### 🧠 Arquitetura & Padrões
- Princípios **SOLID**
- **Repository Pattern**
- **Factory Pattern**
- **Inversão de Dependência (IoC)**
- Use Cases desacoplados
- Controllers organizados e independentes

### 🧪 Testes
- Testes **unitários** com Vitest  
- Testes **e2e** simulando requisições reais  
- Uso de **in-memory databases** para testes  
- **Mocking**  
- **TDD (Test Driven Development)**  

### 🔐 Segurança & Autenticação
- Hash de senhas com **bcryptjs**  
- **JWT** com refresh token  
- RBAC: permissões de admin e usuário  

### 🐳 Infraestrutura
- Ambiente isolado com **Docker + PostgreSQL**  
- Scripts de build e execução  
- Migrações com Prisma  

### ⚙️ Outros
- Paginação  
- Validação com Zod  
- CI com GitHub Actions  
- Estrutura de projeto escalável  

---

## 🔧 Funcionalidades da Aplicação

### 👤 Usuários (Users)
- Cadastro  
- Autenticação  
- Visualização do perfil  
- Histórico de check-ins  
- Contagem de check-ins  

### 🏋️ Academias (Gyms)
- Cadastro (somente admins)  
- Busca por nome  
- Busca por proximidade (até 10km)  

### 📍 Check-ins
- Criação de check-in  
- Validação de check-in (somente admins)  
- Restrição por distância (100m)  
- Limite de 1 check-in por dia  

---

## 📌 Requisitos Funcionais (RFs)

- [x] Cadastrar usuário  
- [x] Autenticar usuário  
- [x] Obter perfil do usuário logado  
- [x] Obter quantidade de check-ins  
- [x] Listar histórico de check-ins  
- [x] Buscar academias próximas  
- [x] Buscar academias pelo nome  
- [x] Realizar check-in  
- [x] Validar check-in  
- [x] Cadastrar academia  

---

## 📏 Regras de Negócio (RNs)

- O usuário **não deve** se cadastrar com e-mail duplicado  
- O usuário **não pode** fazer 2 check-ins no mesmo dia  
- O usuário **não pode** fazer check-in se estiver a mais de **100m** da academia  
- O check-in só pode ser validado até **20 minutos** após ser criado  
- Apenas **administradores** podem validar check-ins  
- Apenas **administradores** podem cadastrar academias  

---

## 🏗️ Requisitos Não-Funcionais (RNFs)

- Senhas criptografadas  
- Dados persistidos em banco **PostgreSQL**  
- Listagens paginadas (20 itens por página)  
- Autenticação via **JWT**  

---

## 📂 Estrutura do Projeto

```
├── prisma/
│ ├── migrations/
│ ├── vitest-environment-prisma/
│ └── schema.prisma
│
├── src/
│ ├── @types/
│ ├── env/
│ ├── http/
│ │ ├── controllers/
│ │ │ ├── check-ins/
│ │ │ ├── gyms/
│ │ │ └── users/
│ │ └── middlewares/
│ │
│ ├── lib/
│ ├── repositories/
│ │ ├── in-memory/
│ │ └── prisma/
│ │ ├── check-ins-repository.ts
│ │ ├── gyms-repository.ts
│ │ └── users-repository.ts
│ │
│ ├── use-cases/
│ ├── utils/
│   └── test/
│ ├── app.ts
│ └── server.ts
│
├── docker-compose.yml
├── package.json
├── tsconfig.json
└── requisitos.md
```

---

## 🐳 Como Rodar o Projeto com Docker

### 1. Clone o Repositório

```bash
git clone https://github.com/pedrofaleirosss/api-solid-nodejs.git
cd api-solid-nodejs
```

### 2. Suba o container com PostgreSQL

```bash
docker compose up -d
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute as migrações do Prisma

```bash
npx prisma migrate dev
```

### 5. Rode o servidor em modo desenvolvimento

```bash
npm run dev
```

A API ficará disponível em:

```
http://localhost:3333
```

---

## 🧪 Rodando os Testes

### Testes unitários

```bash
npm test
```

### Testes end-to-end

```bash
npm run test:e2e
```

### Cobertura de testes

```bash
npm run test:coverage
```

---

## 🛠️ Scripts Disponíveis (package.json)

```json
"dev": "tsx watch src/server.ts",
"start": "node build/server.js",
"build": "tsup src --out-dir build",
"test": "vitest run --project unit",
"test:e2e": "vitest run --project e2e",
"test:watch": "vitest --project unit",
"test:e2e:watch": "vitest --project e2e",
"test:coverage": "vitest run --coverage",
"test:ui": "vitest --ui --api 9527"
```

---

## 🔑 Autenticação

O projeto utiliza:

- **JWT** como autenticação stateless  
- Access Token  
- Refresh Token  
- Cookies HTTP Only  
- RBAC (permissões de administrador)  

---

## 🐙 CI com GitHub Actions

A pipeline executa automaticamente:

- Instalação  
- Build  
- Testes unitários  
- Testes e2e  

Garantindo confiabilidade do código a cada push.

---

## 🙋‍♂️ Autor

Desenvolvido por [Pedro Faleiros](https://github.com/pedrofaleirosss)
