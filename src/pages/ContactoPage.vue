<template>
    <div class="flex flex-col items-center justify-center  mt-[180px] w-full">
        <div class="max-w-[1200px] w-full lg:mx-0 mx-4 mb-2">
            <h2 class="text-2xl text-hgreen text-left mb-4 font-serif">El futuro está <span class="font-semibold">en tus manos</span></h2>
            <p class="text-justify">Impulsa tus sueños hoy, invierte en tu educación y construye el mañana que deseas con las oportunidades que te acercan a un mejor futuro.</p>
        </div>
        <div class="flex flex-col bg-[#e1e2e0] justify-start items-center mb-16  w-screen">
            <div class="max-w-[1200px] w-full lg:mx-0 mx-4 mt-6">
                <form class="bg-white border border-hgreen max-w-[1000px] w-full rounded-none mb-8 mt-6 space-y-6">
                <p class="text-justify mx-8 mt-6">Deja tus datos y nos comunicaremos contigo para ofrecerte una solución financiera personalizada que se ajuste<br class="lg:block hidden"> a tus necesidades.</p>
                <div class="flex flex-col mx-8">
                    <div class="lg:flex gap-16 justify-between w-full">
                        <div class="relative  w-full ">
                            <input
                                type="text"
                                placeholder=""
                                class="w-full bg-transparent focus:outline-none border-gray-400 focus:border-hgreen border-t-0 border-x-0 border-b py-2 text-gray-700 focus:ring-0"
                            />
                            <label>Nombre(s)</label>
                        </div>
                        <div class="relative w-full">
                            <input
                                type="text"
                                class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 border-b border-gray-400 focus:border-hgreen py-2 text-gray-700 focus:ring-0"
                            />
                            <label>Apellido(s)</label>
                        </div>
                    </div>
                    <div class="lg:flex gap-16 justify-between mt-6 w-full">
                        <div class="relative  w-full ">
                            <input
                                type="text"
                                placeholder=""
                                class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 border-gray-400 focus:border-hgreen border-b py-2 text-gray-700 focus:ring-0"
                            />
                            <label>Correo electrónico</label>
                        </div>
                        <div class="relative w-full">
                            <input
                                type="text"
                                class="w-full bg-transparent focus:outline-none border-b border-t-0 border-x-0 focus:border-hgreen border-gray-400 py-2 text-gray-700 focus:ring-0"
                            />
                            <label>Número de celular</label>
                        </div>
                    </div>
                    <div class="lg:flex gap-16 justify-between mt-6 w-full">
                        <div class="relative  w-full ">
                            <input
                                type="text"
                                placeholder=""
                                class="w-full bg-transparent focus:outline-none border-gray-400 border-t-0 focus:border-hgreen border-x-0 border-b py-2 text-gray-700 focus:ring-0"
                            />
                            <label>¿Qué deseas estudiar?</label>
                        </div>
                        <div class="relative w-full">
                            <input
                                type="text"
                                class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 border-b focus:border-hgreen border-gray-400 py-2 text-gray-700 focus:ring-0"
                            />
                            <label>Nombre de la universidad</label>
                        </div>
                    </div>
                    <div class="lg:flex gap-16 justify-between mt-6 w-full">
                        <div class="relative items-center w-full">
                            <p class="mt-3 mb-1">¿Para qué requieres tu crédito</p>
                            <select class="w-[50%] bg-white border-gray-400  border rounded-none focus:ring-0 focus:border-hgreen">
                                <option value="colegiatura">Pago de colegiatura</option>
                                <option value="inscripcion">Pago de inscripción</option>
                                <option value="material">Compra de material educativo</option>
                                <option value="transporte">Gastos de transporte</option>
                                <option value="alojamiento">Alojamiento y manutención</option>
                                <option value="intercambio">Intercambio o movilidad académica</option>
                                <option value="otros">Otros</option>
                            </select>
                        </div>
                        <div class="relative w-full">
                            <input
                                type="text"
                                class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 border-b focus:border-hgreen border-gray-400 py-2 text-gray-700 focus:ring-0"
                            />
                            <label>Monto aproximado a solicitar</label>
                        </div>
                    </div>
                    <div class="flex items-center justify-end mt-6 space-x-2">
                        <label class="text-hgreen flex items-center justify-center"><input type="checkbox" class=" cursor-pointer text-hgreen rounded-none w-4 h-4 text-hone bg-white focus:ring-white border-hgreen focus:ring-1 mr-1">
                        He le&iacute;do y acepto el &nbsp; <a href="https://humanitas.edu.mx/aviso-de-privacidad" target="_blank" class="text-hgreen hover:text-hcream"> aviso de privacidad</a>.
                        </label>
                    </div>
                    <div class="flex items-end justify-end my-6">
                        <button @click.prevent="" class="rounded-none font-serif transition duration-300 ease-in-out hover:border-hgreen hover:bg-white hover:text-hgreen flex items-center justify-center text-white bg-hgreen w-[120px] h-[35px]">Enviar</button>
                    </div>
                </div>
            </form>
            </div>
            
        </div>
        <div class="flex items-center max-w-[1200px] gap-16 justify-between w-full lg:mx-0 mx-4 mb-16">
            <div class="flex flex-col space-y-4">
                <div class="flex flex-col text-left space-y-1">
                    <p class="font-semibold">Teléfonos</p>
                    <p>Información: 55 51693840</p>
                    <p>Atención a clientes: 55 51693840</p>
                </div>
                <div class="flex flex-col text-left space-y-1">
                    <p class="font-semibold">Whatsapp</p>
                    <p>(+57) 311 309 03 41</p>
                </div>
                <div class="flex flex-col text-left space-y-1">
                    <p><span class="font-semibold">E-mail:</span> contacto@humadeus.mx</p>
                </div>
                <div class="flex flex-col text-left space-y-1">
                    <p class="font-semibold">Ubicación:</p>
                    <p>California 212, Col. Del Valle, CDMX</p>
                </div>
                <hr class=" w-[90%] border-gray-400">
                <div class="flex flex-col text-left space-y-1">
                    <p class="font-semibold">Horarios:</p>
                </div>
                <div class="flex flex-col text-left space-y-1">
                    <p class="font-semibold">Lun - Vie</p>
                    <p>8:00 – 20:00</p>
                </div>
                <div class="flex flex-col text-left space-y-1">
                    <p class="font-semibold">Sábado</p>
                    <p>9:00 – 19:00</p>
                </div>
                <div class="flex flex-col text-left space-y-1">
                    <p class="font-semibold">Domingo</p>
                    <p>9:00 – 21:00</p>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7527.363689834298!2d-99.17401!3d19.382924!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff9dc32ce0d7%3A0x216900317611cc6c!2sUniversidad%20Humanitas!5e0!3m2!1ses-419!2sus!4v1738790199632!5m2!1ses-419!2sus" width="800" height="600" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

<style>

</style>