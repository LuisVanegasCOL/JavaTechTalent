
# 🐾 Proyecto Tamagotchi

**Creado por Luis Ricardo Vanegas Granados**  
*Bootcamp de Desarrollo de Software Fullstack, Tech Talent*

Este proyecto recrea la experiencia de cuidar a una mascota virtual, al estilo del clásico Tamagotchi. Desarrollado con **TypeScript**, **JavaScript**, **HTML** y **CSS**, ofrece una experiencia interactiva para alimentar, jugar y mantener saludable a tu mascota virtual.

---

## 🚀 Tecnologías

Este proyecto usa las siguientes tecnologías:

- **TypeScript**: Lógica de programación.
- **JavaScript**: Interacción con el DOM.
- **HTML**: Estructura de la página.
- **CSS**: Estilos y animaciones visuales.

---

## 📋 Requisitos

Antes de empezar, asegúrate de tener instalado:

- **Node.js** (si vas a usar herramientas de desarrollo o ejecutar el proyecto localmente).
- **NPM** (o **Yarn**) para gestionar las dependencias.
- Navegador moderno (**Chrome**, **Firefox**, **Edge**).

---

## 📥 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/tamagotchi-project.git
   ```

2. Accede al directorio del proyecto:
   ```bash
   cd tamagotchi-project
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Ejecuta el proyecto:
   ```bash
   npm start
   ```

   Esto abrirá la aplicación en `http://localhost:3000`.

---

## 🎮 Uso

Interactúa con tu Tamagotchi de forma sencilla:

- **Alimentar**: Haz clic en "Alimentar" para darle comida.
- **Jugar**: Haz clic en "Jugar" para divertir a tu mascota.
- **Ver estado**: Observa los indicadores de salud, felicidad y hambre.

---

## 📝 Reglas del Juego

- La mascota tiene **3 indicadores**: **Hambre**, **Felicidad** y **Salud**.
- Si un indicador llega a **cero**, la mascota se enferma y puede morir si no la cuidas.
- Alimentar aumenta el indicador de hambre.  
- Jugar mejora la felicidad.  
- Si la salud llega a cero, no puede jugar ni comer hasta ser curada.

---

## 🐶 Comportamiento de la Mascota

La mascota responde a tu cuidado:

- **Feliz**: Cuando está bien alimentada y ha jugado.
- **Triste**: Si no la alimentas ni juegas con ella por un tiempo.
- **Enferma**: Si la salud llega a cero, debe ser cuidada para evitar la muerte.

---

## 🛠️ Retos y Soluciones

### 1. Manejo de Estados Dinámicos
**Reto**: Los indicadores de la mascota (hambre, felicidad, salud) debían actualizarse de forma dinámica.  
**Solución**: Creé una función centralizada que actualiza los estados cada vez que el usuario interactúa con la mascota, asegurando que los cambios se reflejen correctamente.

### 2. Animaciones y Efectos Visuales
**Reto**: Implementar animaciones suaves y atractivas para las transiciones de estados.  
**Solución**: Utilicé **CSS** y bibliotecas de animación en **JavaScript** para crear transiciones visuales entre los diferentes estados de la mascota, mejorando la experiencia de juego.

---

## 🗂️ Estructura del Proyecto

```
/tamagotchi-project
├── /assets           # Archivos de imágenes y sonidos.
├── /src              # Código fuente (TypeScript, JavaScript, CSS).
│   ├── /styles       # Archivos de estilo CSS.
│   ├── /scripts      # Archivos de lógica (TS, JS).
│   └── index.html    # Estructura principal de la página.
├── /dist             # Archivos compilados para producción.
├── package.json      # Dependencias y scripts.
└── README.md         # Este archivo.
```

---

## 🤝 Contribución

Si quieres contribuir:

1. Haz un **fork** del repositorio.
2. Crea una rama para tu contribución (`git checkout -b nueva-característica`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva característica'`).
4. Haz un push a tu rama (`git push origin nueva-característica`).
5. Abre un pull request.

---

## 📝 Licencia

Este proyecto está licenciado bajo la **MIT License**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---
