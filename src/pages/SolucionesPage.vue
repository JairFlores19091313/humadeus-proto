<template>
    <div class="flex flex-col justify-center items-center w-full">
        <div class="flex flex-col items-center w-full mb-16 mt-[180px]">
            <div class="flex flex-col max-w-[1200px] justify-start  w-full">
                <h1 class=" font-serif text-2xl lg:mx-0 mx-4 text-hgreen text-left mb-4">Nuestros <span class="font-bold">Productos Financieros</span></h1>
            </div>
            <div class="flex flex-col bg-[#e1e2e0] justify-start items-center  w-screen">
                <div class="flex flex-col max-w-[1200px] justify-start  w-full">
                    <div class="text-justify lg:mx-0 mx-8 my-12">
                        <p>En Humadeus, trabajamos contigo para facilitar tu camino hacia el éxito académico. Ofrecemos <span class="font-bold">opciones</span> de financiamiento educativo diseñadas a la medida, pensando en tus objetivos y en el bienestar de tu familia. Nuestro compromiso es brindarte <span class="font-bold">soluciones</span> flexibles y accesibles, conoce nuestras alternativas.</p>
                    </div>
                    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 lg:mx-0 mx-8 w-ful h-full mb-16">
                        <div class="flex flex-col content-between bg-white border border-gray-400 w-full">
                            <div class="flex flex-col pt-4 items-center w-full">
                                <p class="text-hgreen font-bold text-center p-2 px-3 ">Créditos para<br> Colegiaturas Universitarias</p>
                                <hr class="mt-2 mb-4 w-[90%] border-gray-400">
                            </div>
                            <div class="flex flex-col px-4 items-center w-full">
                                <div class="flex flex-col mb-4 space-y-2">
                                    <div class="flex items-start space-x-2 px-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        <p class="text-left">Préstamos diseñados para cubrir el costo total o parcial de las colegiaturas universitarias.</p>
                                    </div>
                                    
                                    <div class="flex items-start space-x-2 px-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        <p class="text-left">Opciones de pagos mensuales a largo plazo y tasas accesibles.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col items-center pb-4 justify-end h-full ">
                                <hr class="  w-[90%] border-gray-400">
                                <router-link to="/" class="pt-4">
                                    <div class="flex items-center justify-center bg-white border-hgreen text-hgreen font-normal hover:bg-hgreen border hover:text-white transition duration-300 ease-in-out">
                                        <span class="p-2 px-3">Más información</span>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                        <div class="flex flex-col content-between bg-white border border-gray-400 w-full">
                            <div class="flex flex-col pt-4 items-center w-full">
                                <p class="text-hgreen font-bold text-center p-2 px-3 ">Créditos para<br> Gastos Académicos</p>
                                <hr class="mt-2 mb-4 w-[90%] border-gray-400">
                            </div>
                            <div class="flex flex-col px-4 justify-center place-content-between items-center content-between w-full">
                                <div class="flex flex-col mb-4 space-y-2">
                                    <div class="flex items-start space-x-2 px-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        <p class="text-left">Financiamiento para libros, materiales, equipos y otros gastos relacionados con la educación.</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="flex flex-col items-center pb-4 justify-end h-full ">
                                <hr class="  w-[90%] border-gray-400">
                                <router-link to="/" class="pt-4">
                                    <div class="flex items-center justify-center bg-white border-hgreen text-hgreen font-normal hover:bg-hgreen border hover:text-white transition duration-300 ease-in-out">
                                        <span class="p-2 px-3">Más información</span>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                        <div class="flex flex-col content-between  bg-white border border-gray-400 w-full">
                            <div class="flex flex-col pt-4 items-center w-full">
                                <p class="text-hgreen font-bold text-center p-2 px-3 ">Créditos para Programas de Intercambio y Especialización</p>
                                <hr class="mt-2 mb-4 w-[90%] border-gray-400">
                            </div>
                            <div class="flex flex-col px-4 items-center w-full">
                                <div class="flex flex-col mb-4 space-y-2">
                                    <div class="flex items-start space-x-2 px-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        <p class="text-left">Préstamos que permiten a los estudiantes financiar estancias en el extranjero.</p>
                                    </div>
                                    <div class="flex items-start space-x-2 px-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        <p class="text-left">Préstamos que permiten a los estudiantes financiar programas especializados, facilitando su formación global.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col pb-4 items-center justify-end h-full ">
                                <hr class="  w-[90%] border-gray-400">
                                <router-link to="/" class="pt-4">
                                    <div class="flex items-center justify-center bg-white border-hgreen text-hgreen font-normal hover:bg-hgreen border hover:text-white transition duration-300 ease-in-out">
                                        <span class="p-2 px-3">Más información</span>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                        <div class="flex flex-col content-between bg-white border border-gray-400 w-full">
                            <div class="flex flex-col pt-4 items-center w-full">
                                <p class="text-hgreen font-bold text-center p-2 px-3 ">Créditos para Cursos de<br> Educación Continua</p>
                                <hr class="mt-2 mb-4 w-[90%] border-gray-400">
                            </div>
                            <div class="flex flex-col px-4 items-center w-full">
                                <div class="flex flex-col mb-4 space-y-2">
                                    <div class="flex items-start space-x-2 px-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        <p class="text-left">Apoyo financiero para quienes buscan ampliar sus conocimientos o adquirir nuevas competencias a través de cursos y diplomados.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col pb-4 items-center justify-end h-full ">
                                <hr class="  w-[90%] border-gray-400">
                                <router-link to="/" class="pt-4">
                                    <div class="flex items-center justify-center bg-white border-hgreen text-hgreen font-normal hover:bg-hgreen border hover:text-white transition duration-300 ease-in-out">
                                        <span class="p-2 px-3">Más información</span>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col border border-hgreen max-w-[1200px] w-full mb-16">
            <div class=" md:p-12 p-8 w-full">
                <h2 class="text-lg text-left text-hgreen mb-6">¿Tienes alguna <span class="font-bold">pregunta?</span></h2>
                <p class="text-gray-600 text-left text mb-6">
                Te brindamos asesoría personalizada para que tomes <br>la decisión que mejor se adapte a tus necesidades.
                </p>
                <form class="space-y-6">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div class="relative  w-full ">
                            <input
                                type="text"
                                placeholder=""
                                class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 border-b border-gray-400 focus:border-hgreen py-2 text-gray-700 focus:ring-0"
                            />
                            <label>Nombre(s)</label>
                        </div>
                        <div class="relative  w-full ">
                            <input
                                type="text"
                                placeholder=""
                                class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 border-b border-gray-400 focus:border-hgreen py-2 text-gray-700 focus:ring-0"
                            />
                            <label>Apellido(s)</label>
                        </div>
                        <div class="relative  w-full ">
                            <input
                                type="tel"
                                placeholder=""
                                class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 border-b border-gray-400 focus:border-hgreen py-2 text-gray-700 focus:ring-0"
                            />
                            <label>Teléfono</label>
                        </div>
                    </div>

                    <div class="relative lg:flex gap-12">
                        <div class="flex flex-col  ">
                            <input
                                type="email"
                                placeholder=""
                                class="lg:w-[350px] bg-transparent focus:outline-none border-t-0 border-x-0 border-b border-gray-400 focus:border-hgreen py-2 text-gray-700 focus:ring-0"
                            />
                            <label class="lg:mb-0 mb-12">Correo electrónico</label>
                        </div>
                        <div class="flex space-x-2 md:items-end md:justify-end">
                            <label class="text-hgreen flex items-center justify-center"><input type="checkbox" class=" cursor-pointer text-hgreen rounded-none w-4 h-4 text-hone bg-white focus:ring-white border-hgreen focus:ring-1 mr-1">
                            He le&iacute;do y acepto el &nbsp; <a href="https://humanitas.edu.mx/aviso-de-privacidad" target="_blank" class="text-hgreen hover:text-hcream font-semibold"> aviso de privacidad</a>.
                            </label>
                        </div>
                    </div>


                    <div class="flex items-end justify-end">
                        <button @click.prevent="" class="rounded-none font-serif transition duration-300 ease-in-out hover:border-hgreen hover:bg-white hover:text-hgreen flex items-center justify-center text-white bg-hgreen w-[120px] h-[35px]">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            conditions: false,
        }
    },
});
</script>

<style scoped>

</style>