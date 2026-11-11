# Routeur VR — app para el móvil

App web que funciona como una app de Android (y también en iPhone y PC).
Mismo método que el programa del PC: isócronas, meteo GFS (Open-Meteo) y las polares Class40.

## Ponerla en internet con GitHub Pages (gratis, una sola vez)

1. Crea una cuenta gratuita en https://github.com
2. Pulsa **New repository**, ponle el nombre `routeur-vr`, déjalo en **Public** y pulsa **Create repository**.
3. Pulsa **uploading an existing file** y arrastra **todos los ficheros de esta carpeta**
   (index.html, manifest.webmanifest, sw.js y los iconos .png). Pulsa **Commit changes**.
4. Ve a **Settings → Pages**. En *Branch* elige **main** y **/ (root)**, y pulsa **Save**.
5. Espera 1 o 2 minutos. Tu app estará en: `https://TU-USUARIO.github.io/routeur-vr/`

## Instalarla en Android

1. Abre esa dirección con **Chrome** en el móvil.
2. Menú **⋮** → **Instalar aplicación** (o **Añadir a pantalla de inicio**).
3. Aparece el icono de la brújula y el velero: se abre como una app.

## Uso

- Escribe tu posición tal como sale en el juego (ej. `43 37 53 N` y `032 13 34 W`), tu vela y tu amura.
- Pulsa **Calcular ruta**. La primera vez descarga la meteo (1 o 2 minutos: hay pausas para respetar
  el límite gratuito de Open-Meteo). Después la reutiliza durante 3 horas.
- Marca **Descargar meteo nueva** tras una actualización GFS (unas 4 veces al día).
- **Tengo los foils**: márcalo solo si los has comprado.
- **Polares del barco**: vienen las del Class40. Puedes importar otros CSV (un fichero por vela).
- Tus datos se guardan solo en tu móvil. El repositorio público solo contiene la app.

## Actualizar la app

Sube los ficheros nuevos al mismo repositorio (reemplazando los antiguos). El móvil coge la versión
nueva la próxima vez que abras la app con conexión.
