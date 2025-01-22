<template>
    <nav class="bg-hgreen lg:max-w-[1200px] z-[48]">
        <div class="fixed top-0 left-0 w-full bg-hgreen flex flex-col items-center min-h-[86px] font-thin justify-center shadow-md z-[48]">
            <div class="flex justify-between items-center lg:max-w-[1200px] w-full py-2">
                <router-link to="/"><img src="../pages/images/Logotipo-Humadeus.png" class="w-[165px]"></router-link>
                <div class="flex flex-col items-center justify-center">
                    <div class="flex justify-between items-center mb-4 w-full">
                        <img src="../pages/images/El-futuro-en-tus-manos.png" class="w-[307px] h-[20px]">
                        <a href="https://humanitas.edu.mx/usuarios" target="_blank" class="">
                            <div class="flex items-center justify-center hover:bg-hcream hover:text-hgreen  bg-hgreen border border-hcream text-hcream text-lg transition duration-300 ease-in-out">
                                <span class="py-2 px-3">Inicio de sesión</span>
                            </div>
                        </a>
                        <div class="flex justify-center items-center lg:gap-6 gap-4">
                            <img src="../pages/images/iconos-facebook-humadeus.png" alt="" class="lg:w-6 lg:h-6 w-4 h-4">
                            <img src="../pages/images/iconos-x-humadeus.png" alt="" class="lg:w-6 lg:h-6 w-4 h-4">
                            <img src="../pages/images/iconos-linkedin-sociales-humadeus.png" alt="" class="lg:w-6 lg:h-6 w-4 h-4">
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
                        <div class="relative flex justify-between">
                            <router-link to="/soluciones">
                                <button class="custom-ring inline-flex lg:text-[18px] text-[16px] items-center rounded-none  px-2 py-1 border border-transparent text-white bg-transparent focus:outline-none">Soluciones
                                    <svg class="-mr-1 ml-2 h-6 w-6 text-hcream" xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </router-link>
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
                        <img src="../pages/images/lupa.png" class="w-8 cursor-pointer">
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
export default {

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
</style>