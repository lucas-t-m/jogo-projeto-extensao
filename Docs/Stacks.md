# 🧱 Stack Tecnológica do Projeto

## 📌 Visão Geral

Este documento define a stack tecnológica oficial do projeto de extensão, com foco em simplicidade, integração web e viabilidade de desenvolvimento dentro do prazo de **3 meses**.

A arquitetura do projeto será baseada em uma aplicação web composta por:

* 🌐 Site institucional (Frontend)
* 🎮 Jogo educativo (Phaser.js)
* ⚙️ Backend (API)
* 🗄️ Banco de dados (persistência)

---

## 🧩 Arquitetura Geral

```txt
Usuário (Navegador)
        ↓
Frontend (HTML, CSS, JS)
        ↓
Jogo (Phaser.js)
        ↓
Backend (Node.js + Express)
        ↓
Banco de Dados (SQLite)
```

---

## 🌐 Frontend (Site)

### Tecnologias

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla)**

### Objetivo

Responsável por toda a interface do site, incluindo:

* Página inicial
* Páginas institucionais (sobre, ODS, equipe)
* Página do jogo
* Integração com backend via API

### Justificativa

* Baixa complexidade para equipe iniciante
* Facilidade de aprendizado e manutenção
* Sem dependência de frameworks pesados
* Total controle do código

---

## 🎮 Jogo (Phaser.js)

### Tecnologia

* **Phaser.js (Framework de jogos 2D para web)**

### Objetivo

Desenvolver o mini RPG educativo diretamente no navegador.

### Responsabilidades

* Sistema de cenas (menu, gameplay, final)
* Movimentação do personagem
* Sistema de diálogos e escolhas
* Puzzles educativos
* Controle de progresso

### Justificativa

* Totalmente compatível com web (HTML5 Canvas/WebGL)
* Utiliza JavaScript (mesma linguagem do frontend)
* Fácil integração com o site
* Ideal para jogos 2D simples
* Menor curva de aprendizado comparado a engines como Unity

---

## ⚙️ Backend (Node.js + Express)

### Tecnologias

* **Node.js**
* **Express.js**

### Objetivo

Gerenciar a lógica do servidor e comunicação com o banco de dados.

### Responsabilidades

* Criação de APIs REST
* Recebimento e envio de dados
* Persistência de progresso do jogador
* Registro de feedback dos usuários
* Integração com frontend e jogo

### Justificativa

* Leve e rápido de configurar
* Amplamente utilizado no mercado
* Boa integração com JavaScript
* Ideal para APIs simples

---

## 🗄️ Banco de Dados (SQLite)

### Tecnologia

* **SQLite**

### Objetivo

Armazenar dados do sistema de forma simples e eficiente.

### Possíveis Dados Armazenados

* Progresso do jogador
* Respostas dos puzzles
* Feedback dos usuários
* Estatísticas básicas de uso

### Justificativa

* Não requer servidor dedicado
* Fácil configuração e uso
* Ideal para projetos acadêmicos
* Baixa complexidade de manutenção

---

## 🔗 Comunicação entre as camadas

### Fluxo básico

1. Usuário acessa o site
2. Frontend renderiza a interface
3. Jogo roda dentro da página
4. Jogo/frontend fazem requisições para o backend
5. Backend processa e interage com o banco de dados
6. Resposta retorna para o frontend/jogo

---

## 📦 Estrutura de Pastas (Padrão)

```txt
/projeto-extensao
│
├── /public          # Frontend (site)
│   ├── /css
│   ├── /js
│   ├── /assets
│   ├── index.html
│   ├── jogo.html
│
├── /game            # Jogo (Phaser)
│   ├── main.js
│   ├── /scenes
│   ├── /sprites
│   ├── /audio
│
├── /server          # Backend
│   ├── server.js
│   ├── /routes
│   ├── /controllers
│   ├── /models
│   ├── /database
│
├── /docs            # Documentação
│
├── package.json
└── README.md
```

---

## ⚠️ Decisões Importantes

* ❌ Não será utilizado framework frontend (React, Angular, etc.)

* ❌ Não será utilizado engine pesada (Unity)

* ❌ Não será utilizado banco de dados complexo (MySQL/PostgreSQL inicialmente)

* ✅ Foco em simplicidade e entrega

* ✅ Prioridade em integração web

* ✅ Código acessível para toda a equipe

---

## 🎯 Objetivo da Stack

Garantir que o projeto:

* Seja **viável dentro do prazo**
* Seja **fácil de desenvolver em equipe**
* Tenha **boa organização**
* Seja **apresentável academicamente**
* Permita **evolução futura**

---

## 🚀 Possíveis Evoluções Futuras

* Migrar SQLite → PostgreSQL
* Adicionar autenticação de usuários
* Criar dashboard com métricas
* Evoluir o jogo com mais fases
* Migrar frontend para framework (React, por exemplo)

---

## ✅ Conclusão

A stack escolhida foi definida com base em:

* Simplicidade
* Integração
* Curva de aprendizado
* Tempo disponível
* Objetivo acadêmico

Ela garante que a equipe consiga entregar um projeto **funcional, organizado e de qualidade** dentro do prazo estipulado.
