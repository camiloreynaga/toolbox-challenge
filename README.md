# toolbox-challenge

# Full Stack Challenge - API y Frontend con Docker

## Descripción
Este proyecto es una aplicación full stack que consta de:
- Un **backend** construido con Node.js y Express, que consume un API externo y procesa información de archivos.
- Un **frontend** construido con React, que permite visualizar los datos procesados desde el backend.

Ambos componentes están configurados para ejecutarse en contenedores Docker.

## Estructura del Proyecto
```
.
├── backend               # Código del backend (Node.js + Express)
│   ├── Dockerfile        # Dockerfile para el backend
│   └── ...
├── frontend              # Código del frontend (React)
│   ├── Dockerfile        # Dockerfile para el frontend
│   └── ...
└── docker-compose.yml    # Orquestador para ejecutar el proyecto completo
```

## Prerrequisitos
- Tener [Docker](https://www.docker.com/get-started) y [Docker Compose](https://docs.docker.com/compose/install/) instalados.

## Instalación

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone <https://github.com/camiloreynaga/toolbox-challenge.git>
   cd <toolbox-challenge>
   ```

2. Asegúrate de estar en el directorio raíz del proyecto, donde se encuentra el archivo `docker-compose.yml`.

## Uso

### 1. Levantar los Contenedores
Para construir y levantar todos los servicios (backend y frontend) usa el siguiente comando:

   ```bash
   docker-compose up --build
   ```

   Esto:
   - Construye las imágenes para el backend y el frontend.
   - Inicia ambos contenedores.
   - El backend estará disponible en `http://localhost:3000`.
   - El frontend estará disponible en `http://localhost:3001`.

### 2. Parar y Eliminar los Contenedores
Para detener y eliminar todos los contenedores, ejecuta:

   ```bash
   docker-compose down
   ```

## Acceso a la Aplicación

- **Frontend**: [http://localhost:3001](http://localhost:3001)
- **Backend API**: [http://localhost:3000/files/data](http://localhost:3000/files/data)

## Ejecución de Pruebas

Para ejecutar las pruebas del backend:

1. Asegúrate de que los contenedores están levantados.
2. Ejecuta las pruebas dentro del contenedor del backend con el siguiente comando:

   ```bash
   docker-compose exec backend npm test
   ```

Esto ejecutará las pruebas configuradas usando Mocha y Chai.

## Tecnologías Utilizadas

- **Backend**: Node.js, Express, Axios, Mocha, Chai
- **Frontend**: React, Bootstrap, React Bootstrap
- **Infraestructura**: Docker, Docker Compose

## Notas

- En caso de errores 404 o 500 durante el procesamiento de archivos en el backend, estos se registrarán en la consola pero no interrumpirán el procesamiento del resto de los archivos.
- Asegúrate de que Docker tenga acceso a Internet para poder descargar las imágenes y obtener datos desde el API externo.


## Contacto
Para cualquier duda o consulta, puedes contactarme en <camilo.reynaga@gmail.com>.


