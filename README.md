# Authentication API
[![CodeFactor](https://www.codefactor.io/repository/github/afonsoneto121/authentication-api/badge)](https://www.codefactor.io/repository/github/afonsoneto121/authentication-api) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/1c4487007a344b649c36c325f4c2ab1d)](https://www.codacy.com/gh/afonsoneto121/authentication-api/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=afonsoneto121/authentication-api&amp;utm_campaign=Badge_Grade) 

Microsserviço desenvolvido para gerenciar autenticação de usuários com NodeJS. Uma versão de teste está disponivel [aqui](https://authentication0api.herokuapp.com/status). 

## Stack 
- NodeJS
- MongoDB
- Docker
- Git

## Endpoints 
Documentação gerada pelo Postman disponível [aqui](https://documenter.getpostman.com/view/16544315/UVR5sUyk).  

### Usuários

- GET /user
- GET /user/:uuid
- POST /user
- PUT /user/:uuid
- DELETE /user/:uuid

### Autenticação
- POST /token
- POST /token/validate

## Instalação 

Antes de baixar e executar a aplicação é necessário certifica-se de ter instalado localmente o Git, Docker e NodeJS*. O NodeJS não é necessário na instalação via docker  
### Via npm
- Clonar o repositório

```bash
git clone https://github.com/afonsoneto121/authentication-api.git && cd authentication-api/
```
- Instalar as dependências 

```bash
npm install
```

- Subir uma instância do mongo via docker compose

```bash
docker-compose -f docker-mongodb/docker-compose.yml up -d
```

**  O comando acima pode requerer privilégios de administrador

- Executar a aplicação usando um script de desenvolvimento

```bash
npm run dev
```

### Via Docker

- Subir uma instância da aplicação via docker compose

```bash
docker-compose -f docker-application/docker-compose.yml up -d
```



Para testar a aplicação abra o browser e navegue até o link  http://localhost:3333/status. Deverá ser mostrado na tela a seguinte mensagem com status 200

```json
{
	"message": "OK"
}
```

