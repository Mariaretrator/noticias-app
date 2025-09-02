# noticias-app

Esta es una aplicación de noticias construida con Ionic y Angular.

## Cómo ejecutar la aplicación

### 1. Ejecutar el servidor

El servidor es necesario para que la aplicación funcione correctamente.

```bash
cd src/server
npm run server
```

El servidor se ejecutará en `http://localhost:3000`.

### 2. Ejecutar la aplicación Ionic

Para ejecutar la aplicación en un entorno de desarrollo, utiliza el siguiente comando:

```bash
ionic serve
```

Esto abrirá la aplicación en tu navegador en `http://localhost:8100`.

## Endpoints de la API

Puedes utilizar una herramienta como Postman para interactuar con la API.

### Registro

*   **URL:** `http://localhost:3000/register`
*   **Método:** `POST`
*   **Cabeceras:**
    *   `Content-Type`: `application/json`
*   **Cuerpo:**

```json
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
```

### Iniciar Sesión

*   **URL:** `http://localhost:3000/login`
*   **Método:** `POST`
*   **Cabeceras:**
    *   `Content-Type`: `application/json`
*   **Cuerpo:**

```json
{
  "email": "jane@doe.com",
  "password": "123456"
}
```

## APIs Utilizadas

*   **News API:** [https://newsapi.org/](https://newsapi.org/) - Utilizada para obtener las noticias.
*   **Countries API:** [https://countriesnow.space/api/v0.1/countries/flag/unicode](https://countriesnow.space/api/v0.1/countries/flag/unicode) - Utilizada para obtener la lista de países para el selector.
