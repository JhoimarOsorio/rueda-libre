# Rueda Libre

Sitio web estático para conocer los servicios de Rueda Libre, un proyecto de alquiler de bicicletas y recorridos guiados en Medellín.

## Funcionalidades

- Página de inicio con información de servicios, promociones y ubicación.
- Catálogo de bicicletas urbanas, de montaña y eléctricas.
- Carruseles interactivos para explorar bicicletas y promociones.
- Páginas de reservas, tarifas y recorridos, y contacto.
- Diseño adaptable a dispositivos móviles y de escritorio.
- Controles accesibles y soporte para la preferencia de movimiento reducido.
- Selector de modo claro/oscuro en todas las páginas, con preferencia guardada.

> **Nota:** Este proyecto es una demostración de interfaz. Los formularios no envían ni guardan datos; para recibir reservas o mensajes hace falta conectar un servidor o un servicio de formularios.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.8, cargado desde jsDelivr
- Tailwind CSS 4 para la landing de Rueda Nocturna, compilado y minificado con CLI
- Montserrat y Open Sans, cargadas desde Google Fonts en la landing nocturna

## Cómo ejecutar el proyecto

La página principal no requiere compilación. Para generar o actualizar el CSS de la landing nocturna, instala las dependencias de desarrollo y ejecuta el build:

```bash
npm install
npm run build:nocturna
```

El build escribe el CSS minificado en `nocturna/tailwind.css`, que se publica junto con la landing. Bootstrap y Google Fonts se cargan desde servicios externos y requieren conexión a Internet.

## Páginas

- `index.html`: inicio, servicios, promociones e información del proyecto.
- `paginas/reservas.html`: formulario de ejemplo para seleccionar bicicletas y una fecha.
- `paginas/tarifas.html`: precios de alquiler y recorridos guiados.
- `paginas/contactanos.html`: formulario de contacto de demostración.
- `nocturna/index.html`: landing responsive de Rueda Nocturna con tema claro/oscuro según la preferencia del sistema y carrusel de bicicletas.
- `src/input.css`: tema de marca, fuentes y componentes reutilizables de Tailwind.
- `paginas/rueda_noctuna.html`: kit de componentes de Rueda Nocturna, compilado con el mismo CSS de marca.

## Estructura

```text
.
├── index.html
├── bootstrap-theme.css
├── carousel.css
├── carousel.js
├── package.json
├── package-lock.json
├── src/
│   └── input.css
├── style.css
├── img/
├── nocturna/
│   ├── index.html
│   └── tailwind.css
└── paginas/
    ├── contactanos.html
    ├── reservas.html
    └── tarifas.html
```
