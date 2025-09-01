# noticias-app

- Para correr el servidor 
1. cd src/server
2.Corre el servidor:
npm run server

- Registro con Postman
POST http://localhost:3000/register
Content-Type: application/json

{
  "name": "Jane",
  "lastName": "Doe",
  "email": "jane@doe.com",
  "password": "123456",
  "country": {
    "id": "Colombia",
    "value": "🇨🇴 Colombia"
  }
}


- login 
POST http://localhost:3000/login
Content-Type: application/json

{
  "email": "jane@doe.com",
  "password": "123456"
}