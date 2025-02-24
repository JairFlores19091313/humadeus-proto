<template>
    <div class="flex flex-col justify-center items-center w-full">
        <div class="flex flex-col items-center w-full mt-[180px]">
            <div class="flex flex-col max-w-[1200px] justify-start  w-full">
                <h1 class=" font-serif text-2xl text-hgreen text-left mb-2">Formulario de <span class="font-bold">Solicitud</span></h1>
                <p class="text-justify mb-4">Si has decidido solicitar un Crédito Humadeus, puedes llenar el siguiente <span class="font-semibold">formulario de solicitud en línea</span> para iniciar tu proceso.</p>
            </div>
            <div class="flex flex-col bg-[#e1e2e0] justify-start items-center h-full w-screen">
                <div class="flex w-full max-w-[1200px] items-start justify-start text-left ">
                    <div class="flex flex-col my-12 w-full max-w-[1000px] justify-start items-start py-10 px-20 text-left bg-white shadow-md rounded-none">
                        <h2 class="text-lg font-semibold mb-5">1. Información Personal del Solicitante</h2>
                        <div class="grid grid-cols-1 items-start gap-4 lg:w-[75%] md:w-[80%] w-full">
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Nombre completo.</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0   border-b py-0 text-gray-700"/>
                            </div>
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Fecha de nacimiento.</label>
                                <input type="date" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0   border-b py-0 text-gray-700"/>
                            </div>
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">CURP.</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0   border-b py-0 text-gray-700"/>
                            </div>
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">RFC.</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0   border-b py-0 text-gray-700"/>
                            </div>
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Estado civil.</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0   border-b py-0 text-gray-700"/>
                            </div>
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Nacionalidad.</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0   border-b py-0 text-gray-700"/>
                            </div>
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Dirección completa.</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0   border-b py-0 text-gray-700"/>
                            </div>
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Teléfono (celular y fijo).</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0   border-b py-0 text-gray-700"/>
                            </div>
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Correo electrónico.</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0   border-b py-0 text-gray-700"/>
                            </div>
                        </div>

                        <h2 class="text-lg font-semibold mt-6 mb-5">2. Información Académica</h2>
                        <div class="grid grid-cols-1 items-start gap-4 lg:w-[75%] md:w-[80%] w-full">
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Nombre de la institución educativa.</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0   border-b py-0 text-gray-700"/>
                            </div>
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Nivel académico.</label>
                                <select class="mt-1 w-[60%] bg-white border-t-0 border-x-0 focus:border-hgreen focus:ring-0   py-2 border rounded-none">
                                    <option value="Licenciatura">Licenciatura</option>
                                    <option value="Maestría">Maestría</option>
                                    <option value="Doctorado">Doctorado</option>
                                </select>
                            </div>
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Carrera o programa académico.</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0   border-b py-0 text-gray-700"/>
                            </div>
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Periodo de estudio (inicio y fin).</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0   border-b py-0 text-gray-700"/>
                            </div>
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Matrícula (si aplica).</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0 border-b py-0 text-gray-700"/>
                            </div>
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Costo total del programa educativo.</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0  border-b py-0 text-gray-700"/>
                            </div>
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Uso del crédito (colegiaturas, materiales, transporte, etc.).</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0 border-b py-0 text-gray-700"/>
                            </div>
                        </div>

                        <h2 class="text-lg font-semibold mt-6 mb-5">3. Información Financiera del Solicitante</h2>
                        <div class="grid grid-cols-1 items-start gap-4 lg:w-[75%] md:w-[80%] w-full">
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Ocupación actual.</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0 border-b py-0 text-gray-700"/>
                            </div>
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Nombre del empleador (si aplica).</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0 border-b py-0 text-gray-700"/>
                            </div>
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Ingreso mensual.</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0 border-b py-0 text-gray-700"/>
                            </div>
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Otros ingresos (detallar fuentes).</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0 border-b py-0 text-gray-700"/>
                            </div>
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Dependientes económicos.</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0 border-b py-0 text-gray-700"/>
                            </div>
                        </div>

                        <h2 class="text-lg font-semibold mt-6 mb-5">4. Información del Crédito</h2>
                        <div class="grid grid-cols-1 items-start gap-4 lg:w-[75%] md:w-[80%] w-full">
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Monto solicitado.</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0 border-b py-0 text-gray-700"/>
                            </div>
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Plazo de pago.</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0 border-b py-0 text-gray-700"/>
                            </div>
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Forma de pago (mensualidades, descuentos, etc.).</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0 border-b py-0 text-gray-700"/>
                            </div>
                            <div class="flex items-center relative  w-full ">
                                <label class="mr-2 whitespace-nowrap">Fecha de inicio de pago (si es diferido).</label>
                                <input type="text" placeholder="" class="w-full bg-transparent focus:outline-none border-t-0 border-x-0 focus:border-hgreen focus:ring-0 border-b py-0 text-gray-700"/>
                            </div>
                        </div>

                        <h2 class="text-lg font-semibold mt-6 mb-5">5. Documentación Adjunta</h2>
                        <div class="grid grid-cols-1 items-start gap-4 lg:w-[75%] md:w-[80%] w-full">
                            <label class="flex items-center gap-2"><span class="icon-upload cursor-pointer"></span> <input type="file" class="hidden cursor-pointer" /> Identificación oficial vigente (INE, pasaporte, etc.).</label>
                            <label class="flex items-center gap-2"><span class="icon-upload cursor-pointer"></span> <input type="file" class="hidden cursor-pointer" /> Comprobante de domicilio reciente (agua, luz, teléfono, etc.).</label>
                            <label class="flex items-center gap-2"><span class="icon-upload cursor-pointer"></span> <input type="file" class="hidden cursor-pointer" /> Comprobante de ingresos (nóminas, declaraciones fiscales).</label>
                            <label class="flex items-center gap-2"><span class="icon-upload cursor-pointer"></span> <input type="file" class="hidden cursor-pointer" /> Carta de aceptación de la institución educativa (si aplica).</label> 
                            <label class="flex items-center gap-2"><span class="icon-upload cursor-pointer"></span> <input type="file" class="hidden cursor-pointer" /> Presupuesto o desglose de costos del programa educativo.</label>
                            <label class="flex items-center gap-2"><span class="icon-upload cursor-pointer"></span> <input type="file" class="hidden cursor-pointer" /> Declaraciones y Autorizaciones</label>
                            <label class="flex items-center gap-2"><span class="icon-upload cursor-pointer"></span> <input type="file" class="hidden cursor-pointer" /> Declaración de que la información proporcionada es verídica.</label>
                            <label class="flex items-center gap-2"><input type="checkbox" class=" cursor-pointer text-hgreen rounded-none w-4 h-4 text-hone bg-white focus:ring-white border-hgreen focus:ring-1 mr-1"> Autorización para consulta de buró de crédito</label>
                            <label class="flex items-center gap-2"><input type="checkbox" class=" cursor-pointer text-hgreen rounded-none w-4 h-4 text-hone bg-white focus:ring-white border-hgreen focus:ring-1 mr-1"> Consentimiento para tratamiento de datos personales</label>
                            <label class="flex items-center gap-2"><span class="icon-upload cursor-pointer"></span> <input type="file" class="hidden cursor-pointer" /> Firma del solicitante y fecha.</label>
                        </div>
                        
                        <div class="flex items-end justify-end mt-6 w-full space-x-2">
                            <label class="text-hgreen flex items-center justify-center"><input type="checkbox" class=" cursor-pointer text-hgreen rounded-none w-4 h-4 text-hone bg-white focus:ring-white border-hgreen focus:ring-1 mr-1">
                            He le&iacute;do y acepto el &nbsp; <a href="https://humanitas.edu.mx/aviso-de-privacidad" target="_blank" class="text-hgreen font-semibold hover:text-hcream"> aviso de privacidad</a>.
                            </label>
                        </div>
                        <div class="flex items-end justify-end w-full my-6">
                            <button @click.prevent="" class="rounded-none font-serif transition duration-300 ease-in-out hover:border-hgreen hover:bg-white hover:text-hgreen flex items-center justify-center text-white bg-hgreen w-[120px] h-[35px]">Enviar</button>
                        </div>
                    </div>
                </div>
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
.icon-upload {
  @apply w-5 h-5 text-green-600;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12l8-8m0 0l8 8m-8-8v12"/></svg>') no-repeat center;
  display: inline-block;
}
</style>


