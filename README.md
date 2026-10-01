# Alivia: sitio web y política de privacidad

Sitio estático (HTML + CSS, sin frameworks ni instalaciones) de **Alivia**, la plataforma de salud mental para Paraguay. Se publica gratis con GitHub Pages.

## Qué hay en la carpeta

```
alivia-web/
├── index.html          Portada
├── privacidad.html     Política de privacidad (incluye cómo eliminar la cuenta)
├── assets/
│   ├── css/estilos.css Estilos de las dos páginas
│   ├── fonts/          Tipografías alojadas en el propio sitio
│   └── img/            Logo oficial (PNG transparente) e íconos
├── .nojekyll           Le dice a GitHub que publique los archivos tal cual
└── .gitignore
```

## Probarlo en tu computadora

Hacé doble clic en `index.html`. Se abre en el navegador, no hace falta instalar nada.

## Publicarlo con GitHub Pages (paso a paso)

1. En GitHub: botón **New repository**. Nombre: `alivia-web`. Marcá **Public**. No agregues README ni otros archivos. **Create repository**.
2. Subí el contenido de esta carpeta al repositorio (con Claude Code, con GitHub Desktop o con **Add file → Upload files** en la web).
3. En el repositorio: **Settings → Pages**. En **Source** elegí **Deploy from a branch**, rama **main**, carpeta **/ (root)** y **Save**.
4. Esperá 1 o 2 minutos. La web queda en:
   - Portada: `https://estacionalanna.github.io/alivia-web/`
   - Política: `https://estacionalanna.github.io/alivia-web/privacidad.html`
   - Eliminar cuenta: `https://estacionalanna.github.io/alivia-web/privacidad.html#eliminar-cuenta`

Para Google Play: la URL de la política de privacidad es la segunda, y la de eliminación de cuenta es la tercera.

## Cosas que vas a querer cambiar

- **Logo:** los archivos están en `assets/img/` (`logo.png`, `logo-512.png`, `favicon-64.png`, `apple-touch-icon.png`). Para cambiarlo, reemplazalos con los mismos nombres.
- **Correo de contacto:** hoy es `alannasoft.py@gmail.com`. Buscá ese texto en `index.html` y `privacidad.html` y reemplazalo donde haga falta.
- **Fecha de la política:** si cambiás algo importante, actualizá "Última actualización" en `privacidad.html`.

## Antes de publicar la app en las tiendas

La política se escribió con lo que se sabe hoy de la app. Revisá esta lista:

1. **Que la lea un abogado.** Alivia maneja datos de salud y existe la Ley 7593/2025 de Protección de Datos Personales (entra en vigencia de forma progresiva). Este texto no es asesoramiento legal.
2. **Comparar con la app real.** Revisá las secciones 2 y 5 contra los campos que guardan las pantallas de registro y de perfil, y corregí lo que no coincida.
3. **Casilla de consentimiento.** Agregá en el registro (paciente y psicólogo) una casilla "Acepto la política de privacidad" con enlace a la página. Para datos de salud conviene pedir consentimiento explícito.
4. **Plazos que prometemos.** La política dice que respondemos en 15 días hábiles y que eliminamos cuentas en un máximo de 30 días. Confirmá que podés cumplirlos.
5. **Qué pasa con los resultados e informes** guardados bajo un psicólogo cuando un paciente elimina su cuenta (sección 7).
6. **Menores de 18.** La política dice que Alivia es para mayores de 18. Confirmá el criterio.
7. **Si sumás GPS, analítica o publicidad**, actualizá la sección 2 antes de lanzar ese cambio.
8. **Google Play, "Seguridad de los datos".** Lo que declares ahí tiene que coincidir con la política.

## Costos y escala

- Hosting: **$0** (repositorio público + GitHub Pages).
- Dominio propio (opcional): unos USD 12 a 15 por año. Se configura en Settings → Pages.
- GitHub Pages admite alrededor de 100 GB de transferencia por mes. Esta web pesa menos de 1 MB por visita.
- Si algún día hace falta más: Cloudflare por delante (plan gratuito) o Firebase Hosting.

## Licencias de las tipografías

Alegreya y Atkinson Hyperlegible Next se distribuyen con licencia SIL Open Font License 1.1, que permite usarlas y alojarlas en el sitio.
