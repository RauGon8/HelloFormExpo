# HelloFormExpo 🚀

Una aplicación móvil construida con **React Native** y **Expo**. Este proyecto está diseñado como un punto de partida para aprender a manejar estados, interactuar con el teclado y capturar datos en formularios dentro del ecosistema de Expo.

---

## 🌟 Características

- **Gestión de Estado Local**: Uso de `useState` para controlar en tiempo real el valor del formulario y los mensajes de la interfaz.
- **Teclado Inteligente**: Uso de `Keyboard.dismiss()` para ocultar automáticamente el teclado al enviar un formulario, mejorando la experiencia de usuario.
- **Botón Reactivo**: El botón de envío se desactiva dinámicamente si el campo de texto está vacío, evitando envíos de datos nulos.
- **Diseño Moderno**: Interfaz con tema oscuro utilizando componentes nativos como `SafeAreaView` y `StatusBar` para una integración perfecta con iOS y Android.
- **TypeScript**: Tipado estricto para reducir errores en tiempo de ejecución.

---

## 📋 Requisitos Previos

Antes de empezar, asegúrate de tener instalado:
1. [Node.js](https://nodejs.org/) (versión recomendada LTS).
2. La aplicación **Expo Go** en tu dispositivo móvil o un Emulador de Android/iOS configurado con sus respectivas Variables de Entorno (`ANDROID_HOME`).

---

## 🚀 Instalación y Arranque

Sigue estos pasos para correr el proyecto en tu entorno local:

1. **Clona o descarga el proyecto** en tu máquina.
2. **Abre la terminal** en la raíz del proyecto.
3. **Instala todas las dependencias**:
   ```bash
   npm install
   ```
4. **Arranca el servidor de desarrollo**:
   ```bash
   npx expo start
   ```

*(Nota: Si alguna vez tienes problemas porque Expo no detecta tus últimos cambios, recuerda que puedes limpiar la caché usando `npx expo start -c`)*

---

## 📱 Cómo visualizar la aplicación

Una vez que ejecutes `npx expo start`, te aparecerá un código QR y varias opciones en la terminal:

- **En un móvil real (Recomendado):** Abre la cámara de tu móvil o la app **Expo Go** y escanea el código QR gigante.
- **En Emulador de Android:** Pulsa la tecla `a`. (Asegúrate de que tu Emulador haya arrancado completamente antes de pulsarla para evitar errores de conexión).
- **En Emulador de iOS:** Pulsa la tecla `i` (Solo disponible en macOS).
- **En el Navegador Web:** Pulsa la tecla `w`.

---

## 🛠️ Tecnologías Utilizadas

- **[React Native](https://reactnative.dev/):** Framework para construir aplicaciones nativas usando React.
- **[Expo](https://expo.dev/):** Plataforma y conjunto de herramientas que facilita y acelera el desarrollo en React Native.
- **[TypeScript](https://www.typescriptlang.org/):** Superconjunto de JavaScript que añade tipos estáticos.
- **[React Hook Form](https://react-hook-form.com/):** Preparado en las dependencias para futuras integraciones de formularios más complejos.

---

## 📂 Estructura Principal

- `App.tsx`: Contiene toda la lógica principal de la interfaz y la gestión de estado de nuestro saludo.
- `index.tsx`: Archivo de entrada modificado para inicializar la aplicación ignorando cualquier conflicto de rutas por defecto.
- `package.json`: Define los scripts de arranque y almacena las dependencias (como `react-hook-form`).
- `.env`: Archivo de configuración de variables de entorno (como la ruta personalizada del SDK de Android para el emulador).
