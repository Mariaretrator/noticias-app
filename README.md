# noticias-app

Esta es una aplicación de noticias construida con Ionic y Angular. La aplicación permite a los usuarios ver noticias de diversas fuentes, filtrarlas por país y ver los detalles de las noticias. También incluye funciones de autenticación de usuarios (registro e inicio de sesión).

## Requisitos previos

Asegúrate de tener Node.js y npm instalados en tu sistema.

## Instalación

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/Mariaretrator/noticias-app.git
    cd noticias-app
    ```

2.  **Instalar Angular CLI:**
    Si no tienes Angular CLI instalado globalmente, puedes instalarlo con el siguiente comando:
    ```bash
    npm install -g @angular/cli
    ```

3.  **Instalar Ionic CLI:**
    Si no tienes Ionic CLI instalado globalmente, puedes instalarlo con el siguiente comando:
    ```bash
    npm install -g @ionic/cli
    ```

4.  **Instalar dependencias del proyecto:**
    Dentro de la carpeta del proyecto, ejecuta el siguiente comando para instalar todas las dependencias necesarias.
    ```bash
    npm install
    ```

## Cómo ejecutar la aplicación

Para ejecutar la aplicación en un entorno de desarrollo, utiliza el siguiente comando. La aplicación se abrirá en `http://localhost:8100`.

```bash
ionic serve
```
o también puedes usar el script de npm:
```bash
npm start
```

## APIs Utilizadas

*   **News API:** [https://newsapi.org/](https://newsapi.org/) - Utilizada para obtener las noticias.
*   **Countries API:** [https://countriesnow.space/api/v0.1/countries/flag/unicode](https://countriesnow.space/api/v0.1/countries/flag/unicode) - Utilizada para obtener la lista de países para el selector.
