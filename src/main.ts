import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import PrimeVue from 'primevue/config';
import Carousel from 'primevue/carousel';
import Aura from '@primevue/themes/aura';

const app = createApp(App);

app.use(router);
// Configura el plugin metaTagPlugin
// app.use(metaTagPlugin, {
//     defaultName: 'Universidad Humanitas | 45 años de excelencia académica',
// }, router);
router.beforeEach((to, _from, next) => {
    // Obtén el título desde `meta.title` y actualízalo
    const defaultTitle = 'Mi Sitio'; // Título por defecto si no hay `meta.title`
    document.title = to.meta.title || defaultTitle;
    next();
});
app.component('Carousel', Carousel);
app.use(PrimeVue, {
	theme: {
		preset: Aura
	}
});

app.mount('#app');
