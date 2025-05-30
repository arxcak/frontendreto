# Crypto List

## Descripción

Crypto List es una aplicación Angular que muestra información detallada sobre las principales criptomonedas utilizando la API de CoinGecko. La aplicación incluye una tabla que presenta datos como precios, cambios porcentuales, volumen, capitalización de mercado y más.

## Características

- **Listado de criptomonedas**: Muestra información detallada de las principales criptomonedas.
- **Datos en tiempo real**: Los datos se obtienen de la API de CoinGecko.
- **Interfaz interactiva**: Tabla con diseño responsivo y visualización clara de los datos.
- **Filtros y ordenación**: Posibilidad de agregar funcionalidades adicionales como filtros y ordenación en el futuro.

## Tecnologías utilizadas

- **Angular**: Framework principal para el desarrollo de la aplicación.
- **Bootstrap**: Para el diseño responsivo y estilización de la interfaz.
- **CoinGecko API**: Fuente de datos para las criptomonedas.
- **TypeScript**: Lenguaje de programación utilizado en el desarrollo.

## Tecnologías utilizadas

- **Angular**: Framework principal para el desarrollo de la aplicación.
- **Bootstrap**: Para el diseño responsivo y estilización de la interfaz.
- **CoinGecko API**: Fuente de datos para las criptomonedas.
- **TypeScript**: Lenguaje de programación utilizado en el desarrollo.

## Estructura del proyecto

```
crypto-list/
├── src/
│   ├── app/
│   │   ├── interfaces/
│   │   │   └── crypto.ts       # Interfaz para los datos de criptomonedas
│   │   ├── services/
│   │   │   └── crypto.service.ts # Servicio para consumir la API de CoinGecko
│   │   ├── crypto-list/
│   │   │   └── crypto-list/
│   │   │       ├── crypto-list.component.ts  # Lógica del componente
│   │   │       ├── crypto-list.component.html # Vista del componente
│   │   │       └── crypto-list.component.css  # Estilos del componente
│   ├── app.routes.ts           # Configuración de rutas
│   ├── app.config.ts           # Configuración de la aplicación
│   └── main.ts                 # Punto de entrada de la aplicación
```

## Instalación

1. Clona el repositorio:

   ```bash
   git clone 
   cd crypto-list
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   ng serve
   ```

4. Abre la aplicación en tu navegador en [http://localhost:4200](http://localhost:4200).

## Uso

1. La aplicación muestra una tabla con las principales criptomonedas.
2. Los datos incluyen precios, cambios porcentuales, volumen, capitalización de mercado, entre otros.

## Archivos principales

- **`crypto.ts`**: Define la estructura de los datos de criptomonedas.
- **`crypto.service.ts`**: Servicio para consumir la API de CoinGecko.
- **`crypto-list.component.html`**: Vista principal que muestra la tabla de criptomonedas.
- **`app.config.ts`**: Configuración de proveedores y módulos.

## API utilizada

La aplicación utiliza la API de CoinGecko para obtener datos de criptomonedas. Más información sobre la API (https://api.coingecko.com/api/v3/coins/markets).
