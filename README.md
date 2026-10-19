Recomeço Profissional 🚀

O Recomeço Profissional é uma aplicação Full-Stack desenvolvida para conectar e gerenciar oportunidades de recolocação e desenvolvimento no mercado de trabalho.

🛠️ Tecnologias Utilizadas

Backend (/api)

Java 17+

Spring Boot 3.x

Spring Data JPA

Spring Security / Web

Banco de Dados: MySQL / H2

Gerenciador de Dependências: Maven

Frontend (/recomeco-front)

React.js

Vite

CSS / Styling

Axios (Integração com API REST)

📁 Estrutura do Repositório

recomeco-profissional/
├── api/                  # Código-fonte do Backend (Spring Boot)
│   ├── src/
│   ├── pom.xml
│   └── ...
├── recomeco-front/       # Código-fonte do Frontend (React + Vite)
│   ├── src/
│   ├── package.json
│   └── ...
└── README.md             # Documentação do projeto


🚀 Como Executar o Projeto

1. Pré-requisitos

Java JDK 17+ instalado.

Node.js (v18+) e npm instalados.

Banco de dados MySQL configurado (se aplicável).

2. Executando o Backend (API)

Navegue até a pasta do backend:

cd api


Configure as credenciais do banco de dados no ficheiro src/main/resources/application.properties (se necessário).

Execute a aplicação Spring Boot:

./mvnw spring-boot:run


A API estará rodando por padrão em http://localhost:8080.

3. Executando o Frontend

Em um novo terminal, navegue até a pasta do frontend:

cd recomeco-front


Instale as dependências:

npm install


Inicie o servidor de desenvolvimento:

npm run dev


O frontend estará acessível em http://localhost:5173.

👥 Autor

Desenvolvido por SpawNCGK.
