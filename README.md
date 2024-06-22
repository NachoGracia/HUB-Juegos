# HUB-Juegos

HUB-Juegos es una colección de juegos clásicos y modernos implementados en la web, permitiendo a los usuarios disfrutar de una variedad de juegos directamente desde su navegador. Este proyecto utiliza tecnologías modernas de desarrollo web para ofrecer una experiencia de usuario fluida y atractiva, incluyendo un modo noche para una lectura cómoda en ambientes oscuros y un sistema de login que guarda la información del usuario en el localStorage para una experiencia personalizada.

## Juegos Disponibles

- Piedra, Papel o Tijera
- Tres en Raya
- Pokémon

## Características Principales

- **Modo Noche**: Permite a los usuarios cambiar a un tema oscuro para reducir la fatiga visual durante la noche o en ambientes con poca luz.
- **Sistema de Login**: Los usuarios pueden crear una cuenta y acceder a ella. La información de sesión se guarda en el localStorage, permitiendo a los usuarios permanecer conectados entre sesiones.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- Vite
- Axios

## Estructura del Proyecto

El proyecto está organizado en varias carpetas principales:

- `src/`: Contiene el código fuente del proyecto, incluyendo componentes, servicios, y páginas.
- `src/components/`: Componentes reutilizables como botones, tarjetas de Pokémon, etc.
- `src/pages/`: Páginas del proyecto, cada juego tiene su propia carpeta.
- `src/services/`: Servicios para interactuar con APIs externas, como la API de Pokémon.
- `src/utils/`: Funciones de utilidad, como la lógica de juegos, paginación, rutas, y manejo del modo noche.
- `images/`: Imágenes utilizadas en el proyecto.
- `style.css`: Estilos globales del proyecto.

## Cómo Empezar

Para ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio a tu máquina local.
2. Instala las dependencias con `npm install`.
3. Ejecuta el proyecto en modo de desarrollo con `npm run dev`.
4. Abre tu navegador y visita `http://localhost:3000`.

## Contribuir

Las contribuciones son siempre bienvenidas. Si tienes alguna sugerencia para mejorar este proyecto, no dudes en abrir un issue o enviar un pull request.