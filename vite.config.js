import { defineConfig } from 'vite';
import { resolve } from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
   appType: 'mpa', // Indica que es un proyecto multipágina
   base: './',
   root: __dirname, 
   build: {
      outDir: 'produccion',
      emptyOutDir: true,    //Vacía el directorio de producción antes de compilar
      rollupOptions: {
         input: {
         main: resolve(__dirname, 'index.html'),
         carta: resolve(__dirname, 'fuente/html/Carta.html'),
         pedidos: resolve(__dirname, 'fuente/html/Pedidos.html'),
         cafes: resolve(__dirname, 'fuente/html/Cafes.html'),
         },
      },
      minify: 'terser', // Asegura que JS y CSS también se minimicen
   },
   plugins: [
      createHtmlPlugin({
         minify: true, // Minimiza el HTML
      }),
   ],
   server: {
      open: true,
   },
   preview: {
      open: true, // Abre automáticamente la previsualización
      port: 4173, // Puerto para el servidor de previsualización
   },
});