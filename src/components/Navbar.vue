<template>
    <nav class="bg-hgreen lg:max-w-[1200px] z-[48]">
        <div class="fixed top-0 left-0 w-full bg-hgreen flex flex-col items-center min-h-[86px] font-thin justify-center shadow-md shadow-white z-[48]">
            <div class="flex justify-between items-center lg:max-w-[1200px] w-full py-2">
                <router-link to="/"><img src="../pages/images/Logotipo-Humadeus.png" class="w-[165px]"></router-link>
                <div class="flex flex-col items-center justify-center">
                    <div class="flex justify-between items-center mb-4 w-full">
                        <img src="../pages/images/El-futuro-en-tus-manos.png" class="w-[307px] h-[20px] md:block hidden">
                        <a href="https://humanitas.edu.mx/usuarios" target="_blank" class="md:block hidden">
                            <div class="flex items-center justify-center hover:bg-white hover:text-hgreen font-normal bg-hgreen border border-white text-white text-lg transition duration-300 ease-in-out">
                                <span class="py-2 px-3">Inicio de sesión</span>
                            </div>
                        </a>
                        <div class="flex justify-center items-center lg:gap-6 gap-4">
                            <a href="https://www.facebook.com/universidadhumanitas/" target="_blank"><img src="../pages/images/iconos-facebook-humadeus.png" alt="" class="lg:w-6 lg:h-6 w-4 h-4"></a>
                            <a href="https://twitter.com/UHumanitas" target="_blank"><img src="../pages/images/iconos-x-humadeus.png" alt="" class="lg:w-6 lg:h-6 w-4 h-4"></a>
                            <a href="https://www.linkedin.com/school/universidad-humanitas/mycompany/" target="_blank"><img src="../pages/images/iconos-linkedin-sociales-humadeus.png" alt="" class="lg:w-6 lg:h-6 w-4 h-4"></a>
                        </div>
                    </div>
                    <div class="lg:flex justify-between relative items-center lg:space-x-24">
                        <!-- nosotros -->
                        <div class="relative items-center flex justify-between">
                            <router-link to="/nosotros">
                                <button class="custom-ring inline-flex lg:text-[18px] text-[16px] items-center rounded-none  px-2 py-1 border border-transparent text-white bg-transparent focus:outline-none  ">Nosotros
                                </button>
                            </router-link>
                        </div>
                        <!-- Soluciones -->
                        <div class="relative flex justify-between custom-ring" @mouseover="openDropdown" @mouseleave="startCloseTimer">
                            <router-link to="/soluciones">
                                <button  class=" inline-flex lg:text-[18px] text-[16px] items-center rounded-none  px-2 py-1 border border-transparent text-white bg-transparent focus:outline-none">Soluciones
                                    <svg class="-mr-1 ml-2 h-6 w-6 text-hcream" xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </router-link>
                            <div v-if="isOpen" class="absolute top-10 lg:w-52 w-[44] italic rounded-none text-black border-hcream shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu" @mouseover="cancelCloseTimer" @mouseleave="closeDropdown">
                                <router-link to="/soluciones/creditos-universitarios" class="dropdown-item block  border border-x-hcream border-t-hcream border-b-transparent font-normal px-4 text-left py-2 lg:text-sm text-[12px] text-black hover:text-hcream hover:bg-hgreen/60" role="menuitem">Créditos universitarios</router-link>
                                <router-link to="/soluciones/gastos-academicos" class="dropdown-item block font-normal border border-x-hcream border-t-hcream border-b-transparent px-4 text-left py-2 lg:text-sm text-[12px] text-black hover:text-hcream hover:bg-hgreen/60" role="menuitem">Gastos académicos</router-link>
                                <router-link to="/soluciones/programas-de-intercambio" class="dropdown-item block font-normal border border-x-hcream border-t-hcream border-b-transparent px-4 text-left py-2 lg:text-sm text-[12px] text-black hover:text-hcream hover:bg-hgreen/60" role="menuitem">Programas de intercambio</router-link>
                            </div>
                        </div>
                        <!-- Contactanos -->
                        <div class="relative flex justify-between">
                            <router-link to="/contactanos">
                                <button class="custom-ring inline-flex lg:text-[18px] text-[16px] items-center rounded-none  px-2 py-1 border border-transparent text-white bg-transparent focus:outline-none">Contáctanos
                                </button>
                            </router-link>
                        </div>
                        <!-- Solicita tu credito -->
                        <!-- <div class="relative flex justify-between">
                            <router-link to="/solicita-tu-credito">
                                <button class="custom-ring inline-flex lg:text-[18px] text-[16px] items-center rounded-none  px-2 py-1 border border-transparent text-white bg-transparent focus:outline-none">Solicita tu crédito
                                </button>
                            </router-link>
                        </div> -->
                        <div class="relative" @mouseleave="startCloseTimerSearch">
                            <img src="../pages/images/lupa.png" class="w-8 cursor-pointer" @click="toggleSearch">
                            <input
                                v-if="showSearch"
                                type="text"
                                v-model="searchQuery"
                                @change="search"
                                placeholder="Buscar..."
                                class="absolute -right-32 top-0 w-48 px-4 py-2 focus:ring-0 focus:border-hgreen text-black transition-all rounded-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";


interface Titulo {
  texto: string;
}

interface RutaData {
  titulos: {
    h1: Titulo;
    h2: Titulo[];
    h3: Titulo[];
    h4: Titulo[];
  };
  parrafos: { texto: string }[];
}

const jsonData: Record<string, RutaData> = {
    "/": {
        titulos: {
            h1: { texto: "Página principal" },
            h2: [
                { "texto": "Simula tu Crédito" },
                { "texto": "Pasos para solicitar un Crédito Humadeus" },
                { "texto": "Requisitos para solicitar un Crédito" },
                { "texto": "Beneficios de un Crédito Humadeus" },
                { "texto": "Realiza el primer pago de tu cuota mensual." },
                { "texto": "Voces de nuestros estudiantes" }
            ],
            h3: [],
            h4: []
        },
        parrafos: [
            { texto: "Debes estar inscrito a tu plan de estudios deseado." },
            { texto: "Entrega los documentos solicitados y firma el acuerdo." },
            { texto: "Realiza el primer pago de tu cuota mensual." },
            { texto: "Historial crediticio: En Humadeus, evaluamos el historial crediticio del solicitante o del aval." },
            { texto: "Contacta a un asesor para acomodar tu crédito a plan de pagos." },
            { texto: "Documentación" }
        ]
    },
    "solicita-tu-credito": {
        titulos: {
            h1: { texto: "Solicita tu crédito" },
            h2: [
                { "texto": "Formulario de Solicitud" },
            ],
            h3: [],
            h4: []
        },
        parrafos: [
            { texto: "Si has decidido solicitar un Crédito Humadeus, puedes llenar el siguiente formulario de solicitud en línea para iniciar tu proceso." },
        ]
    },
    "soluciones": {
        titulos: {
            h1: { texto: "Soluciones" },
            h2: [
                { "texto": "Nuestros Productos Financieros" },
                { "texto": "¿Tienes alguna pregunta?" },
                { "texto": "Requisitos para solicitar un Crédito" },
                { "texto": "Beneficios de un Crédito Humadeus" },
                { "texto": "Realiza el primer pago de tu cuota mensual." },
                { "texto": "Voces de nuestros estudiantes" }
            ],
            h3: [
                { "texto": "Créditos para Colegiaturas Universitarias" },
                { "texto": "Créditos para Gastos Académicos" },
                { "texto": "Créditos para Programas de Intercambio y Especialización" },
                { "texto": "Créditos para Cursos de Educación Continua" }
            ],
            h4: []
        },
        parrafos: [
            { texto: "En Humadeus, trabajamos contigo para facilitar tu camino hacia el éxito académico. Ofrecemos opciones de financiamiento educativo diseñadas a la medida, pensando en tus objetivos y en el bienestar de tu familia. Nuestro compromiso es brindarte soluciones flexibles y accesibles, conoce nuestras alternativas." },
            { texto: "Préstamos diseñados para cubrir el costo total o parcial de las colegiaturas universitarias." },
            { texto: "Opciones de pagos mensuales a largo plazo y tasas accesibles." },
            { texto: "Financiamiento para libros, materiales, equipos y otros gastos relacionados con la educación." },
            { texto: "Préstamos que permiten a los estudiantes financiar estancias en el extranjero." },
            { texto: "Préstamos que permiten a los estudiantes financiar programas especializados, facilitando su formación global." },
            { texto: "Apoyo financiero para quienes buscan ampliar sus conocimientos o adquirir nuevas competencias a través de cursos y diplomados." },
            { texto: "Te brindamos asesoría personalizada para que tomes la decisión que mejor se adapte a tus necesidades." },
        ]
    },
    "/nosotros": {
        titulos: {
            h1: { texto: "Nosotros" },
            h2: [
                { texto: "Qué es Humadeus" },
                { texto: "Nuestra Misión" },
                { texto: "Nuestra Visión" },
                { texto: "Nuestros Valores" },
                { texto: "Un compromiso con la sociedad" },
                { texto: "Nuestras certificaciones nos respaldan" },
            ],
            h3: [
                { texto: "Becas y Fondos de Apoyo" },
                { texto: "Programas de Educación Financiera" },
            ],
            h4: []
        },
        parrafos: [
            { texto: "Facilitar el acceso a la educación universitaria a través de soluciones financieras accesibles, flexibles y adaptadas a las necesidades de cada estudiante, promoviendo el desarrollo integral y el crecimiento profesional de nuestros beneficiarios." },
            { texto: "Ser el motor financiero que impulse el talento y las aspiraciones de los jóvenes, apoyando su educación y formando futuros líderes que generen un impacto positivo en sus comunidades y el mundo." },
            { texto: "Accesibilidad: Humadeus se compromete a ofrecer soluciones financieras accesibles a todos los estudiantes, eliminando las barreras económicas que puedan impedir su desarrollo académico." },
            { texto: "Compromiso Social: Creemos en la educación como un derecho fundamental y trabajamos para que nuestros préstamos tengan un impacto positivo, tanto en la vida de los estudiantes como en la sociedad en general." },
            { texto: "Responsabilidad: Gestionamos nuestros recursos y operaciones con transparencia y profesionalismo, siempre buscando el bienestar de nuestros clientes y el cumplimiento de sus objetivos educativos." },
            { texto: "Innovación: Ofrecemos productos financieros innovadores que se adapten a las necesidades cambiantes de los estudiantes, utilizando tecnología y análisis para mejorar la experiencia del cliente." },
            { texto: "Respaldo y confianza: Nuestra experiencia y transparencia nos convierten en una opción segura y reconocida en el mercado financiero." },
            { texto: "Créditos personalizados: Diseñamos soluciones hechas a la medida de tus necesidades y capacidades de pago." },
            { texto: "Atención cercana y profesional: Te acompañamos en cada paso del proceso, brindándote asesoría clara y eficiente." },
            { texto: "Tasas competitivas: Ofrecemos condiciones accesibles para que cumplas tus objetivos sin comprometer tu estabilidad económica." },
            { texto: "Flexibilidad de plazos: Tú decides los términos que mejor se adapten a tu situación." },
            { texto: "Compromiso con tus sueños: No solo otorgamos créditos, somos tu aliado en la construcción de tu futuro." },
            { texto: "Alcance internacional: Podemos apoyarteb en cualquier parte del mundo." },
            { texto: "Con Humadeus, estás en buenas manos. ¡Solicita tu crédito hoy y da el primer paso hacia tus metas con seguridad y confianza!" },
        ]
    }
};

export default defineComponent({
    data() {
        return {
            isOpen: false,
            closeTimer: 0,
            searchQuery: "" as string,

            showSearch: false as boolean,
        };
    },
    methods: {
        openDropdown() {
            clearTimeout(this.closeTimer); // Limpiar el temporizador si está activo
            this.isOpen = true;
        },
        closeDropdown() {
            this.isOpen = false;
        },
        startCloseTimer() {
            this.closeTimer = setTimeout(() => {
                this.closeDropdown();
            }, 120); // Espera 200ms antes de cerrar el menú
        },
        startCloseTimerSearch() {
            this.closeTimer = setTimeout(() => {
                this.showSearch = false;
            }, 120); // Espera 200ms antes de cerrar el menú
        },
        cancelCloseTimer() {
            clearTimeout(this.closeTimer); // Limpiar el temporizador si el usuario vuelve al menú antes de que se cierre
        },
        toggleSearch() {
            this.showSearch = !this.showSearch;
        },
        search() {
            if (!this.searchQuery.trim()) return;
            let results: { ruta: string; h1: string; type: string; text: string }[] = [];
            // Función para normalizar texto (quita acentos y convierte a minúsculas)
            const normalizeText = (text: string) => 
                text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
            const normalizedQuery = normalizeText(this.searchQuery);
            // Recorrer todas las rutas dentro del JSON
            Object.entries(jsonData).forEach(([ruta, rutaData]) => {
                // Obtener el H1 de la página
                const h1Text = rutaData.titulos.h1?.texto || "Sin título";
                // Buscar en títulos (h1, h2, h3, h4)
                Object.entries(rutaData.titulos).forEach(([key, value]) => {
                    if (Array.isArray(value)) {
                        value.forEach((item) => {
                            if (normalizeText(item.texto).includes(normalizedQuery)) {
                                results.push({ ruta, h1: h1Text, type: key, text: item.texto });
                            }
                        });
                    } else {
                        if (normalizeText(value.texto).includes(normalizedQuery)) {
                            results.push({ ruta, h1: h1Text, type: key, text: value.texto });
                        }
                    }
                });
                // Buscar en párrafos
                rutaData.parrafos.forEach((item) => {
                    if (normalizeText(item.texto).includes(normalizedQuery)) {
                        results.push({ ruta, h1: h1Text, type: "párrafo", text: item.texto });
                    }
                });
            });
            // Redirigir a la página de catálogo con los resultados
            this.$router.push({
                name: "catalogo",
                query: {
                    q: this.searchQuery,
                    results: JSON.stringify(results)
                }
            });
        }
    }
});
</script>

<style scoped>
    .custom-ring {
        position: relative;
    }

  .custom-ring:hover::after {
    content: "";
    position: absolute;
    bottom: -2px; /* Ubica el anillo debajo del botón */
    left: 50%; /* Posición inicial centrada */
    transform: translateX(-50%); /* Ajusta para centrar el pseudo-elemento */
    width: 70%; /* Define el 80% del ancho del botón */
    height: 1.5px; /* Grosor del anillo */
    background-color: #a0a59a; /* Color del anillo */
    border-radius: 1px; /* Esquinas suaves del anillo */
    transition: all 0.5s ease-in-out; /* Animación suave */

  }
    .dropdown-item {
        color: black;
    }
    .dropdown-item:hover {
        background-color: #424b35/50;
        color: white;
    }
</style>