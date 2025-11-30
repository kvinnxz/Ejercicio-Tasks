# Just Do It - Task Manager

Aplicación minimalista de gestión de tareas con interfaz moderna y oscura

## Descripción

**Just Do It** es una aplicación web de gestión de tareas desarrollada con JavaScript vanilla. Permite a los usuarios crear, completar y eliminar tareas de manera intuitiva. El proyecto utiliza MockAPI para simular un backend RESTful y practicar operaciones CRUD con APIs.

## Características

- Crear nuevas tareas
- Marcar tareas como completadas con efecto visual
- Eliminar tareas
- Persistencia de datos mediante API REST
- Interfaz moderna con tema oscuro
- Carga automática de tareas al iniciar
- Diseño responsive

## Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y diseño responsive
- **JavaScript (Vanilla)** - Lógica de la aplicación
- **MockAPI** - API REST simulada para persistencia de datos
- **Fetch API** - Manejo de peticiones HTTP asíncronas

## Estructura del Proyecto

```
Ejercicio-Tasks/
├── index.html          # Estructura HTML principal
├── style.css           # Estilos y diseño de la interfaz
├── main.js             # Lógica de la aplicación y API calls
└── README.md           # Documentación del proyecto
```

### Crear una tarea

1. Escribe el título de tu tarea en el campo "Escribe una tarea..."
2. Haz clic en el botón **"I Got This!"** o presiona Enter
3. La tarea aparecerá instantáneamente en la lista

### Marcar como completada

Haz clic en el botón de check para marcar/desmarcar la tarea como completada. La tarea se mostrará tachada y con menor opacidad.

### Eliminar una tarea

Haz clic en el botón de eliminar para remover permanentemente la tarea de la lista.


## Funcionalidades Técnicas

- Uso de **async/await** para operaciones asíncronas
- Llamadas a API REST con **Fetch API**
- Renderizado dinámico del DOM
- Manejo de eventos con JavaScript
- Validación de entrada (no permite tareas vacías)
- Carga automática de tareas al iniciar la aplicación

## Autor

**kvinnxz**

- GitHub: [@kvinnxz](https://github.com/kvinnxz)
