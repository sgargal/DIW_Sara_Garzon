# PROYECTO DE LA ASIGNATURA DISEÑO DE INTERFACES WEB
## AROMA URBANO ☕
Este proyecto es una página web para una **cafetería de especialidad**. La página tiene como objetivo ofrecer una experiencia interactiva para los amantes del café, donde pueden explorar nuestros productos, conocer más sobre los diferentes tipos de café que ofrecemos y aprender sobre la cultura del café de especialidad.

La cafetería se enfoca en ofrecer cafés de alta calidad, con un proceso de preparación meticuloso y una experiencia única para cada cliente.

## TECNOLOGÍAS UTILIZADAS

Este proyecto utiliza las siguientes tecnologías:

- **HTML5** para la estructura de la página.
- **SASS** para la gestión y organización de los estilos CSS.
- **JavaScript** para añadir animaciones a la página.
- **Vite** como herramienta de empaquetado y servidor de desarrollo para mejorar la experiencia de desarrollo y optimizar el rendimiento.

## INSTALACIÓN

1 - Instala las dependencias utilizando npm :
`` npm install ``

2 - Inicia el servidor de desarrollo:
`` npm run dev ``

3 - Si quieres construir el proyecto:
`` npm run build ``

## PRUEBAS DE ACCESIBILIDAD
### 1 - Despliegue
  Para comenzar a realizar las pruebas de accesibilidad lo primero que hice fue desplegar la web en Netlify. Para ello subí la carpeta que contiene todos los archivos de mi web y le cambié el nombre del dominio. 
  
  <img src="imgAct14/despliegue.png">

### 2 - Herramientas
  Para comprobar la accesibilidad de mi web he usado dos herramientas:

  1 - <a href="https://freeaccessibilitychecker.skynettechnologies.com/">SkyNet Technologies: </a>
      Ofrece un análisis automático que detecta problemas de accesibilidad y proporciona recomendaciones para solucionarlos.
      
  2 - <a href="https://www.accessibilitychecker.org/">Accessibility Checker: </a>
      Revisa el sitio web y genera un informe detallado con advertencias y sugerencias para mejorar la accesibilidad.
### 3 - Resultados obtenidos
1 - SkyNet:

<img src="imgAct14/skynet.png">

2 - Accessibility Checker:

<img src="imgAct14/accessibilitychecker.png">

### 4 - Modificaciones para aumentar la accesibilidad
Según el reporte de Skynet, la web tiene varios problemas que afectan el cumplimiento del nivel AA de accesibilidad. Aquí están los más importantes y cómo corregirlos:

<img src="imgAct14/errores-skynet.png">

1 - Enlaces que abren en nueva pestaña sin advertencia
    Para enlaces que abren en nueva pestaña añadir una advertencia (se abre en una nueva pestaña):

    ``<li><a href="../index.html#nosotros" target="_blank" title="Se abrirá en una nueva pestaña">Nosotros</a></li>``
    
2 - Problemas con Títulos y Jerarquía

De `<h1>` paso directamente a `<h3>`

Antes: 

```html
<section class="nosotros" id="nosotros">
            <h3>SOBRE NOSOTROS</h3>
            <p>Aroma Urbano nació del sueño de compartir una pasión: el amor por el buen café. Queríamos crear un espacio donde cada taza cuente una historia, donde el aroma del café recién molido despierte los sentidos y transporte a nuestros visitantes a las tierras de origen de nuestros granos.
                Seleccionamos cuidadosamente cafés de especialidad de fincas sostenibles. Nuestros baristas, expertos en la preparación de café, se encargan de extraer lo mejor de cada grano, resaltando sus sabores y aromas únicos.
                Te invitamos a ser parte de nuestra historia y a descubrir, en cada sorbo, el cariño, la dedicación y la pasión que nos impulsan. En Aroma Urbano, cada taza es un viaje único.</p>
        </section>
```
        
Después:

```html
<section class="nosotros" id="nosotros">
            <h2>SOBRE NOSOTROS</h2>
            <p>Aroma Urbano nació del sueño de compartir una pasión: el amor por el buen café. Queríamos crear un espacio donde cada taza cuente una historia, donde el aroma del café recién molido despierte los sentidos y transporte a nuestros visitantes a las tierras de origen de nuestros granos.
                Seleccionamos cuidadosamente cafés de especialidad de fincas sostenibles. Nuestros baristas, expertos en la preparación de café, se encargan de extraer lo mejor de cada grano, resaltando sus sabores y aromas únicos.
                Te invitamos a ser parte de nuestra historia y a descubrir, en cada sorbo, el cariño, la dedicación y la pasión que nos impulsan. En Aroma Urbano, cada taza es un viaje único.</p>
        </section>
```

> **Nota:** También tuve que hacer cambios en el SCSS.

3 - Problemas con Imágenes

Hay imágenes sin la propiedad alt. 

Antes:
```html
<picture class="imagen-oculta">
                <!-- Formato AVIF -->
                <source srcset="img/IMG_AVIF/1.PaginaInicio/2.ImagenesGaleria/cafetera/cafetera-450x300.avif 450w,
                                img/IMG_AVIF/1.PaginaInicio/2.ImagenesGaleria/cafetera/cafetera-720x480.avif 720w,
                                img/IMG_AVIF/1.PaginaInicio/2.ImagenesGaleria/cafetera/cafetera-1024x683px.avif 1024w"
                        sizes="(max-width: 480px) 40vw, 
                            (max-width: 768px) 50vw, 
                            (max-width: 1200px) 33vw, 
                            (max-width: 1920px) 25vw, 
                            20vw"
                        type="image/avif">
            
                <!-- Formato WebP -->
                <source srcset="img/IMG_WEBP/1.PaginaInicio/2.ImagenesGaleria/cafetera/cafetera-720x480.webp 720w,
                                img/IMG_WEBP/1.PaginaInicio/2.ImagenesGaleria/cafetera/cafetera-1024x683px.webp 1024w"
                        sizes="(max-width: 480px) 40vw, 
                        (max-width: 768px) 50vw, 
                        (max-width: 1200px) 33vw, 
                        (max-width: 1920px) 25vw, 
                        20vw"
                        type="image/webp">
            
                <!-- Imagen de respaldo JPG -->
                <img src="img/IMG_PNG/1. PaginaInicio/2.ImagenesGaleria/cafetera/cafetera-1024x683px.jpg"
                    sizes="(max-width: 480px) 40vw, 
                    (max-width: 768px) 50vw, 
                    (max-width: 1200px) 33vw, 
                    (max-width: 1920px) 25vw, 
                    20vw">
            </picture>
```
Después:

```html
<picture class="imagen-oculta">
                <!-- Formato AVIF -->
                <source srcset="img/IMG_AVIF/1.PaginaInicio/2.ImagenesGaleria/cafetera/cafetera-450x300.avif 450w,
                                img/IMG_AVIF/1.PaginaInicio/2.ImagenesGaleria/cafetera/cafetera-720x480.avif 720w,
                                img/IMG_AVIF/1.PaginaInicio/2.ImagenesGaleria/cafetera/cafetera-1024x683px.avif 1024w"
                        sizes="(max-width: 480px) 40vw, 
                            (max-width: 768px) 50vw, 
                            (max-width: 1200px) 33vw, 
                            (max-width: 1920px) 25vw, 
                            20vw"
                        type="image/avif">
            
                <!-- Formato WebP -->
                <source srcset="img/IMG_WEBP/1.PaginaInicio/2.ImagenesGaleria/cafetera/cafetera-720x480.webp 720w,
                                img/IMG_WEBP/1.PaginaInicio/2.ImagenesGaleria/cafetera/cafetera-1024x683px.webp 1024w"
                        sizes="(max-width: 480px) 40vw, 
                        (max-width: 768px) 50vw, 
                        (max-width: 1200px) 33vw, 
                        (max-width: 1920px) 25vw, 
                        20vw"
                        type="image/webp">
            
                <!-- Imagen de respaldo JPG -->
                <img src="img/IMG_PNG/1. PaginaInicio/2.ImagenesGaleria/cafetera/cafetera-1024x683px.jpg"
                    sizes="(max-width: 480px) 40vw, 
                    (max-width: 768px) 50vw, 
                    (max-width: 1200px) 33vw, 
                    (max-width: 1920px) 25vw, 
                    20vw"
                    alt="Cafetera sirviendo café en una taza">
            </picture>
```
5 -  Iframes sin title

El iframe del mapa no tiene un title accesible

Antes: 

```html
<section class="map">
            <h2>UBICACIÓN</h2>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1589.4701755926815!2d-3.593211600000043!3d37.177888500000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fcb86fcdfbfb%3A0x1abbc3a696d7eea6!2sPuente%20de%20Espinosa%2C%20Granada!5e0!3m2!1ses!2ses!4v1739532922980!5m2!1ses!2ses" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </section>
```

Después:

```html
<section class="map">
            <h2>UBICACIÓN</h2>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1589.4701755926815!2d-3.593211600000043!3d37.177888500000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fcb86fcdfbfb%3A0x1abbc3a696d7eea6!2sPuente%20de%20Espinosa%2C%20Granada!5e0!3m2!1ses!2ses!4v1739532922980!5m2!1ses!2ses" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="Ubicación en Google Maps">
            </iframe>
        </section>
```

6 - Problemas de Navegación

El orden del tab no es lógico

Antes: 

```html
<footer class="footer">
        <section class="texto-footer">
            <p>TÉRMINOS Y CONDICIONES</p>
            <p>Preguntas frecuentes</p>
        </section>
        <!-- ICONOS DE REDES SOCIALES -->
        <section class="redesSociales">
            <a href="https://www.instagram.com" target="_blank">
                <img src="../img/IMG_AVIF/RedesSociales/logoInstagram/logoInstagram-1024x1024.avif">
            </a>
            <a href="https://www.facebook.com" target="_blank">
                <img src="../img/IMG_AVIF/RedesSociales/logoFcebook/logoFacebook-1024x1024.avif">
            </a>
            <a href="https://www.x.com" target="_blank">
                <img src="../img/IMG_AVIF/RedesSociales/logoX/logoX-1024x1047.avif">
            </a>
        </section>
    </footer>
```

Después:

```html
<footer class="footer">
        <section class="texto-footer">
            <p tabindex="0">TÉRMINOS Y CONDICIONES</p>
            <p tabindex="0">Preguntas frecuentes</p>
        </section>
        <!-- ICONOS DE REDES SOCIALES -->
        <section class="redesSociales">
            <a href="https://www.instagram.com" target="_blank">
                <img src="../img/IMG_AVIF/RedesSociales/logoInstagram/logoInstagram-1024x1024.avif">
            </a>
            <a href="https://www.facebook.com" target="_blank">
                <img src="../img/IMG_AVIF/RedesSociales/logoFcebook/logoFacebook-1024x1024.avif">
            </a>
            <a href="https://www.x.com" target="_blank">
                <img src="../img/IMG_AVIF/RedesSociales/logoX/logoX-1024x1047.avif">
            </a>
        </section>
    </footer>
```
### 4 - Comprobación
Después de los cambios realizados desplegué de nuevo la web y usé la herramienta Lighthouse, la cual desde el f12 se puede acceder, y estos fueron los resultados. En rendimiento se podría mejorar pero en cuanto a tema de accesibilidad está bien.

<img src="imgAct14/resultados.png">
