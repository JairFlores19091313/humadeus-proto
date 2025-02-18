<template>
    <nav class="bg-hgreen lg:max-w-[1200px] z-[48]">
        <div class="fixed top-0 left-0 w-full bg-hgreen flex flex-col items-center min-h-[86px] font-thin justify-center shadow-md z-[48]">
            <div class="flex justify-between items-center lg:max-w-[1200px] w-full py-2">
                <router-link to="/"><img src="../pages/images/Logotipo-Humadeus.png" class="w-[165px]"></router-link>
                <div class="flex flex-col items-center justify-center">
                    <div class="flex justify-between items-center mb-4 w-full">
                        <img src="../pages/images/El-futuro-en-tus-manos.png" class="w-[307px] h-[20px]">
                        <a href="https://humanitas.edu.mx/usuarios" target="_blank" class="">
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
                    <div class="flex justify-between relative items-center lg:space-x-8">
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
                        <div class="relative flex justify-between">
                            <router-link to="/solicita-tu-credito">
                                <button class="custom-ring inline-flex lg:text-[18px] text-[16px] items-center rounded-none  px-2 py-1 border border-transparent text-white bg-transparent focus:outline-none">Solicita tu crédito
                                </button>
                            </router-link>
                        </div>
                        <div class="relative" @mouseleave="startCloseTimerSearch">
                            <img src="../pages/images/lupa.png" class="w-8 cursor-pointer" @click="toggleSearch">
                            <input
                                v-if="showSearch"
                                type="text"
                                v-model="searchQuery"
                                @change="handleSearch"
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
export default {
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
                this.toggleSearch();
            }, 120); // Espera 200ms antes de cerrar el menú
        },
        cancelCloseTimer() {
            clearTimeout(this.closeTimer); // Limpiar el temporizador si el usuario vuelve al menú antes de que se cierre
        },
        toggleSearch() {
            this.showSearch = !this.showSearch;
        },
        handleSearch() {
            console.log("Search query:", this.searchQuery);
            this.$emit("update:search", this.searchQuery);
        },
        onKeyPress(event: KeyboardEvent) {
            if (event.key === "Enter") {
                this.handleSearch();
            }
        },
    }
}
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