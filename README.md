# Pedro · Electricidad y Pintura

Vista estática inicial para revisar una propuesta de sitio. Está hecha con HTML, CSS y JavaScript nativos; no usa paquetes ni backend. Las fotos de portada y detalle de pintura son hotlinks desde Pexels CDN, como en la demo `demo-pintor`. Esa demo identifica a Pexels como origen, pero no documenta aquí licencia ni permiso de reutilización; confirmar los términos antes de publicar. Los SVG locales de `assets/` son ilustraciones originales y no representan trabajos realizados por Pedro.

## Contacto

El contacto está desactivado hasta que Pedro confirme qué número puede mostrarse públicamente. Para habilitarlo después de esa aprobación, editar únicamente `SITE_CONFIG.publicWhatsAppE164` al comienzo de `script.js` e ingresar el número internacional aprobado, con código de país y solo dígitos (8–15 dígitos). En blanco o con un valor inválido, el sitio conserva el estado “Contacto por confirmar” y no crea ningún enlace. El enlace abre WhatsApp para que la persona revise y envíe el mensaje; el sitio nunca lo envía automáticamente.

## Archivos

- `index.html`: contenido, metadatos y secciones del sitio.
- `styles.css`: identidad visual responsive, accesibilidad y preferencias de movimiento reducido.
- `script.js`: menú móvil y activación condicional del contacto público aprobado.
- `assets/`: ilustraciones SVG locales.

Los enlaces a estilos y recursos son relativos para que funcionen al servir el sitio desde la raíz de un repositorio GitHub Pages. La página incluye `noindex, nofollow` mientras los datos públicos y el contacto sigan en revisión.
