# Control de Luz

## 🎯 Objetivo del Ejercicio
Crear una aplicación web interactiva donde puedas encender y apagar una bombilla con un interruptor y ajustar su brillo y tamaño con controles deslizantes.

---

## 📂 Estructura del Proyecto
1. Crea una carpeta para tu proyecto y llámala `control-luz`.
2. Dentro de esta carpeta, crea los siguientes archivos:
   - `index.html` → Contendrá la estructura del sitio.
   - `styles.css` → Definirá el diseño de la página.
   - `script.js` → Manejará la lógica del comportamiento interactivo.

---

## 🏗 Creación del HTML
### 📌 Objetivo: Crear la estructura básica de la página.

### 🎯 Actividad:
1. Abre el archivo `index.html`.
2. Agrega la estructura básica con `<!DOCTYPE html>`, `<html>`, `<head>` y `<body>`.
3. Dentro del `<body>`, agrega:
   - Un `<h1>` con el título de la aplicación.
   - Una imagen (`<img>`) para la bombilla con un `id` que la identifique.
   - Otra imagen (`<img>`) para el interruptor con su respectivo `id`.
   - Un control deslizante (`<input type="range">`) para ajustar el brillo, con una etiqueta (`<label>`).
   - Un control deslizante para hacer zoom en la bombilla.
4. Vincula el archivo `script.js` al final del `<body>`.
5. Vincula el archivo `styles.css` dentro del `<head>`.

### 📌 Pistas:
- Usa atributos `id` para cada elemento que quieras modificar con JavaScript.
- Dale valores mínimos y máximos adecuados a los controles deslizantes.
- Asegúrate de enlazar correctamente el CSS y JavaScript.

---

## 🎨 Diseño con CSS
### 📌 Objetivo: Dar estilo y organizar los elementos en la pantalla.

### 🎯 Actividad:
1. Abre el archivo `styles.css`.
2. Aplica estilos al `body` para centrar el contenido.
3. Usa `display: flex;` en un `div` para alinear la bombilla y el interruptor.
4. Ajusta el `width` de las imágenes para que no sean demasiado grandes.
5. Usa `transition` para suavizar los cambios en la bombilla.

### 📌 Pistas:
- Usa `text-align: center;` para centrar los textos.
- Aplica `margin-top` a los controles deslizantes para separarlos visualmente.
- La imagen de la bombilla debe cambiar de tamaño con el zoom, así que usa `width` dinámico.

---

## 💡 Programación con JavaScript
### 📌 Objetivo: Agregar interactividad a la bombilla.

### 🎯 Actividad 1: Seleccionar elementos del DOM
1. Abre el archivo `script.js`.
2. Usa `document.getElementById()` para obtener:
   - La imagen de la bombilla.
   - La imagen del interruptor.
   - El control deslizante del brillo.
   - El control deslizante del zoom.
   - Los elementos que mostrarán los valores numéricos de brillo y zoom.

### 🎯 Actividad 2: Ajustar la luminosidad de la bombilla
1. Agrega un evento al control deslizante del brillo (`input`).
2. Cuando el usuario mueva la barra, debe:
   - Mostrar el valor del brillo en el indicador correspondiente.
   - Ajustar la `opacity` de la bombilla según el valor seleccionado.
   - Si el brillo es mayor a 0, la bombilla debe encenderse.
   - Si el brillo es 0, la bombilla debe apagarse.

### 📌 Pistas:
- Usa `addEventListener('input', function() {...})` para capturar el evento.
- Usa `.style.opacity = valor / 7;` para modificar la transparencia de la bombilla.
- Cambia la imagen de la bombilla según su estado (`on.jpg` o `off.jpg`).

### 🎯 Actividad 3: Encender y apagar la bombilla con el interruptor
1. Agrega un evento a la imagen del interruptor (`click`).
2. Cuando el usuario haga clic en el interruptor:
   - Si la bombilla está apagada, debe encenderse (imagen y brillo al máximo).
   - Si la bombilla está encendida, debe apagarse (imagen y brillo en 0).

### 📌 Pistas:
- Usa una variable `let encendido = false;` para guardar el estado de la bombilla.
- Usa un `if` para verificar si está encendida o apagada.

### 🎯 Actividad 4: Ajustar el tamaño de la bombilla con zoom
1. Agrega un evento al control deslizante del zoom (`input`).
2. Cuando el usuario mueva la barra, debe:
   - Mostrar el valor en el indicador correspondiente.
   - Ajustar el `width` de la bombilla para hacerla más grande o pequeña.

### 📌 Pistas:
- Usa `.style.width = valor + "px";` para modificar el tamaño de la bombilla.
- El valor del zoom debe estar en un rango adecuado (ejemplo: `50px` a `200px`).

---

## ✅ Prueba tu código y ajusta errores
### 🔹 Actividades finales:
- Ejecuta el proyecto en tu navegador.
- Prueba todas las funciones: brillo, interruptor y zoom.
- Depura errores en la consola (`F12` en el navegador).
- Mejora el diseño o la funcionalidad si lo deseas.

### 📍 Pregunta para reflexionar: ¿Qué más podrías agregar para hacer el proyecto más interesante?

---

🎉 ¡Felicidades! Has creado tu propia aplicación de control de luz! 🚀
