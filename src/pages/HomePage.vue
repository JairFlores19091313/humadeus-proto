<template>
    <div class="flex flex-col items-center justify-center w-full mt-[180px]">
        <div class="lg:flex items-center w-full max-w-[1200px] mb-8">
            <div class="flex flex-col max-w-[1200px] justify-start  w-full">
                <h2 class=" font-serif text-2xl text-hgreen lg:px-0 px-8 text-left mb-4"><span class="font-bold">Simula</span> tu Crédito</h2>
                <div class="flex w-full justify-start  max-w-[1200px]">
                    <div class="max-w-[1200px] mx-auto w-full bg-[#e1e2e0] p-8 rounded-none">
                        <div class="lg:flex justify-between w-full">
                            <!-- Sección de simulador -->
                            <div class="mr-8 w-full">
                                <div class="w-[80%] relative">
                                    <div class="flex justify-between mb-2">
                                        <p class="text-left">1. ¿Cuánto dinero necesitas?</p>
                                    </div>
                                    <div class="flex justify-between mb-8">
                                        <span
                                            class="font-semibold text-gray-600 absolute transition-transform duration-200"
                                            :style="{ left: labelPosition + 'px', transform: 'translateX(-50%)' }"
                                        >
                                            ${{ amount.toLocaleString() }}
                                        </span>
                                    </div>
                                    <div class="w-full flex flex-col justify-start">
                                        <input
                                            type="range"
                                            v-model="amount"
                                            min="10000"
                                            max="100000"
                                            step="5000"
                                            class="w-full my-3 appearance-none accent-hgreen bg-white h-[6px]"
                                            ref="slider"
                                            @input="updateLabelPosition"
                                        />
                                        <div class="flex justify-between text-sm text-gray-600">
                                            <span>$10,000</span>
                                            <span>$100,000</span>
                                        </div>
                                    </div>
                                </div>
                                <p class=" mt-8 text-left">2. ¿En qué plazo deseas liquidar tu crédito? (meses).</p>
                                <div class="flex md:gap-8 gap-6 items-center mt-3">
                                    <button
                                        v-for="term in terms"
                                        :key="term"
                                        @click="selectedTerm = term"
                                        :class="[
                                        'w-12 h-12 rounded-full flex items-center justify-center text-sm border transition',
                                        selectedTerm === term ? 'bg-gray-400 text-white border-hgreen' : 'bg-transparent text-hgreen border-hgreen'
                                        ]"
                                    >
                                        {{ term }}
                                    </button>
                                </div>
                                <p class=" mt-8 mb-6 text-center">*La presente información es únicamente para efectos ilustrativos, no representa ningún ofrecimiento formal por parte de Humadeus.</p>
                                <p class="font-semibold lg:mb-0 mb-4">Tasa de interés 21%, CAT:23.1%</p>
                            </div>
                            <div class="w-full flex flex-col items-center justify-center">
                                <!-- Resultados -->
                                <div class="bg-white p-4 px-8 shadow w-full text-left mb-6">
                                    <p class="font-bold px-1 text-hgreen" ><span class="font-bold" >Préstamo por ${{ amount.toLocaleString() }} a  <span style="font-weight:900">{{ selectedTerm }} meses.</span></span></p>
                                    <div class=" pt-2 text-gray-700">
                                        <p class="flex px-1 justify-between">
                                            <span>Total de pagos</span> 
                                            <span>{{ selectedTerm }} mensuales</span>
                                        </p>
                                        <hr class="my-4 border-gray-400">
                                        <p class="flex px-1 justify-between">
                                            <span>Préstamo</span> 
                                            <span>${{ amount.toLocaleString() }}</span>
                                        </p>
                                        <hr class="my-4 border-gray-400">
                                        <p class="flex justify-between">
                                            <span>Intereses</span> 
                                            <span>${{ interest.toLocaleString() }}</span>
                                        </p>
                                        <hr class="my-4 border-gray-400">
                                        <p class="flex px-1 justify-between">
                                            <span>Pago mensual</span> 
                                            <span>${{ monthlyPayment.toLocaleString() }}</span>
                                        </p>
                                        <hr class="my-4 border-gray-400">
                                        <p class="flex px-1 justify-between font-semibold text-hgreen">
                                            <span>Total a pagar:</span> 
                                            <span>${{ totalToPay.toLocaleString() }}</span>
                                        </p>
                                    </div>
                                </div>
                                <!-- <button @click.prevent="" class="rounded-none font-serif transition duration-300 ease-in-out hover:border-hgreen hover:bg-white hover:text-hgreen flex items-center justify-center text-white bg-hgreen  h-[35px]">Imprimir tabla de amortización</button> -->
                                <FormularioLB />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Formulario -->
            <div class="flex-col p-6 lg:w-[34%] items-center justify-center bg-[white] border border-black hidden">
                <div class="flex flex-col w-full my-4 justify-center">
                    <p class="text-hgreen font-serif lg:text-[17px] mb-2 leading-tight">Continúa estudiando de la mano<br> de <b class="font-bold">Humadeus</b></p>
                    <p class="text-hgreen px-3 text-[16px] leading-tight mb-5">¡Pregúntanos cómo!</p>
                    <div class="flex flex-col login-box form-container w-full mx-12 relative">
                        <p class="text-hgreen text-[14px] text-left mb-4">Campos requeridos*</p>
                        <form autocomplete="off">
                            <div class="mx-2">
                                <div class="user-box">
                                    <input  type="text" id="name" name="nombre" required maxlength="30" class="focus:ring-0">
                                    <label for="nombre" class=" italic">Nombre*</label>
                                </div>
                                <div class="user-box">
                                    <input  type="text" id="apelidos" name="apellidos" required maxlength="55" class="focus:ring-0">
                                    <label for="apellidos" class=" italic">Apellidos*</label>
                                </div>
                                <div class="user-box">
                                    <input type="text" id="email" name="email" required class="focus:ring-0">
                                    <label for="email" class=" italic">E-mail*</label>
                                </div>
                                <div class="user-box">
                                    <div class="flex">
                                        <select v-model="selectedCountry" class="mr-2 focus:ring-0 rounded-none" style="width: 35%;padding: 10px 10px;font-size: 14px;color: #424b35;border: none;border-bottom: 1px solid #424b35;outline: none;background: transparent;">
                                            <option v-for="country in ladas" :value="country.lada" :key="country.codigo" class="rounded-none" >
                                                {{ country.lada }} 
                                            </option>
                                        </select>
                                        <div>

                                        </div>
                                        <div class="w-2/3">
                                            <input  id="telefono" type="tel" name="telefono" required maxlength="10" class="focus:ring-0">
                                            <label for="telefono" class=" italic" style="top: -25px;left: 0;color: #424b35;font-size: 12px">N&uacute;mero de teléfono*</label>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="user-box">
                                        <select name="campus" id="campus" v-model="campus"  required class="">
                                            <option class="text-[#797979]" value="">Selecciona una opci&oacute;n</option>
                                            <option class="text-[#797979]" value="cancun">Canc&uacute;n</option>
                                            <option class="text-[#797979]" value="del-valle">Colonia Del Valle CDMX</option>
                                            <option class="text-[#797979]" value="guadalajara">Guadalajara</option>
                                            <option class="text-[#797979]" value="los-reyes">Los Reyes la Paz</option>
                                            <option class="text-[#797979]" value="merida">M&eacute;rida</option>
                                            <option class="text-[#797979]" value="presa-madin">Presa Mad&iacute;n</option>
                                            <option class="text-[#797979]" value="queretaro">Quer&eacute;taro</option>
                                            <option class="text-[#797979]" value="santa-fe">Santa Fe CDMX</option>
                                            <option class="text-[#797979]" value="tijuana">Tijuana</option>
                                            <option class="text-[#797979]" value="virtual-mex">Virtual</option>
                                        </select>
                                        <label class="italic" style="top: -25px;left: 0;color: white;font-size: 12px">Campus de Inter&eacute;s</label>
                                </div> -->
                                <div class="flex">
                                    <div class="flex justify-center items-center w-full mb-6"> 
                                        <p class="text-hgreen text-[11px] flex items-center justify-center"><input type="checkbox"  class=" cursor-pointer whitespace-nowrap text-hgreen rounded-none w-4 h-4 text-hone bg-white focus:ring-white border-hgreen focus:ring-1 mr-1">
                                        He le&iacute;do y acepto el <a href="https://humanitas.edu.mx/aviso-de-privacidad" target="_blank" class="text-hgreen font-semibold hover:text-hcream"> &nbsp;aviso de privacidad</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="flex items-center justify-center">
                                    <button @click.prevent="" class="rounded-none font-serif transition duration-300 ease-in-out hover:border-hgreen hover:bg-white hover:text-hgreen flex items-center justify-center text-white bg-hgreen w-[120px] h-[35px]">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center w-full max-w-[1200px] mb-16">
            <div class="flex flex-col max-w-[1200px] justify-start lg:px-0 px-8 w-full">
                <h2 class=" font-serif text-2xl text-hgreen text-left mb-4"><span class="font-bold">Pasos</span> para solicitar un Crédito Humadeus</h2>
                <div class="lg:flex w-full  grid md:grid-cols-2 grid-cols-1 justify-start max-w-[1200px] text-left gap-8">
                    <div class="bg-[#515e3a] flex flex-col content-between justify-between w-full">
                        <p class="text-white p-6 text-4xl mb-16 mt-2">1.</p>
                        <p class="text-white p-6">Debes estar <span class="font-bold">inscrito</span> a tu plan de estudios deseado.</p>
                    </div>
                    <div class="bg-[#424b35]/90 flex flex-col content-between justify-between w-full">
                        <p class="text-white p-6 text-4xl mb-16 mt-2">2.</p>
                        <p class="text-white p-6">Contacta a un <span class="font-bold">asesor</span> para acomodar tu crédito a plan de pagos.</p>
                    </div>
                    <div class="bg-[#424b35]/50 flex flex-col content-between justify-between w-full">
                        <p class="text-white p-6 text-4xl mb-16 mt-2">3.</p>
                        <p class="text-white p-6">Entrega los <span class="font-bold">documentos</span> solicitados y firma el acuerdo.</p>
                    </div>
                    <div class="bg-[#424b35]/30 flex flex-col content-between justify-between w-full">
                        <p class="text-white p-6 text-4xl mb-16 mt-2">4.</p>
                        <p class="text-white p-6">Realiza el <span class="font-bold">primer pago</span> de tu cuota mensual.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col items-center w-full  mb-16">
            <div class="flex flex-col max-w-[1200px] justify-start  w-full">
                <h2 class=" font-serif text-2xl text-hgreen lg:px-0 px-8 text-left mb-4"><span class="font-bold">Requisitos</span> para solicitar un Crédito</h2>
            </div>
            <div class="flex flex-col bg-[#e1e2e0] justify-start items-center  w-screen">
                <div class="flex flex-col max-w-[1200px] justify-start  w-full">
                    <div class="lg:flex justify-between items-center  w-full py-8">
                        <!-- Texto -->
                        <div class="lg:w-[60%] text-justify lg:mr-16 lg:px-0 px-8">
                            <ul class="list-disc pl-5 lg:hyphens-none hyphens-auto">
                            <li class="mb-3"><strong>Comprobante de inscripción o aceptación:</strong> Deberás presentar un documento que demuestre que has sido aceptado o estás inscrito en una institución educativa reconocida.</li >
                            <li class="mb-3"><strong>Identificación oficial:</strong> Necesitarás una identificación oficial vigente, como INE o pasaporte. Si el crédito requiere un aval, también deberás presentar su identificación.</li >
                            <li class="mb-3"><strong>Comprobante de domicilio:</strong> Humadeus solicita un recibo reciente de servicios (agua, luz, teléfono) para verificar tu dirección o la del aval.</li >
                            <li class="mb-3"><strong>Comprobante de ingresos:</strong> Si trabajas, deberás proporcionar documentos que muestren tus ingresos. En caso contrario, el aval o tutor que respalde el crédito deberá presentar recibos de nómina, estados de cuenta bancarios o declaraciones de impuestos que demuestren su solvencia económica.</li >
                            <li class="mb-3"><strong>Historial crediticio:</strong> En Humadeus, evaluamos el historial crediticio del solicitante o del aval.</li >
                            <li class="mb-3"><strong>Aval o co-deudor:</strong> En muchos casos, requerimos un aval (padre, tutor o familiar) con estabilidad económica que esté dispuesto a respaldar el crédito.</li >
                            <li class="mb-3"><strong>Documentación adicional:</strong> Dependiendo del perfil, podríamos solicitar otros documentos, como una carta de recomendación, comprobante de pago inicial (si aplica) o una carta de motivos.</li >
                            </ul>
                        </div>
                        
                        <!-- Imagen (espacio en blanco) -->
                        <img src="/images/imagen hombre lentes.png" class="lg:w-[40%] lg:px-0 px-8">
                    </div>
                </div>
            </div>
        </div>

        <div class="flex items-center w-full max-w-[1200px] mb-16">
            <div class="flex flex-col max-w-[1200px] justify-start  w-full">
                <h2 class=" font-serif lg:px-0 px-8 text-2xl text-hgreen text-left mb-4"><span class="font-bold">Beneficios</span> de un Crédito Humadeus</h2>
                <div class="lg:flex w-full grid grid-cols-1 justify-start max-w-[1200px] text-center lg:px-0 px-8  lg:gap-10 gap-6">
                    <div class="border border-gray-300 flex flex-col  items-center  w-full">
                        <img src="/images/iconos-beneficios-humadeus-01.png" class=" mt-8 w-[100.8px] h-[100.8px]">
                        <p class="font-bold text-lg p-2">Financiamiento flexible</p>
                        <p class="px-4 py-2">Te ofrecemos un plan económico accesible y personalizado.</p>
                    </div>
                    <div class="border border-gray-300 flex flex-col items-center  w-full">
                        <img src="/images/iconos-beneficios-humadeus-02.png" class=" mt-8 w-[100.8px] h-[100.8px]">
                        <p class="font-bold text-lg p-2">Apoyo<br> constante</p>
                        <p class="px-4 py-2">Acompañamiento en cada estado del proceso.</p>
                    </div>
                    <div class="border border-gray-300 flex flex-col   items-center  w-full">
                        <img src="/images/iconos-beneficios-humadeus-03.png" class=" mt-8 w-[100.8px] h-[100.8px]">
                        <p class="font-bold text-lg p-2">Mentorias personalizadas</p>
                        <p class="px-4 py-2">Recibe orientación de profesionales experimentados.</p>
                    </div>
                    <div class="border border-gray-300 flex flex-col   items-center  w-full">
                        <img src="/images/iconos-beneficios-humadeus-04.png" class=" mt-8 w-[100.8px] h-[100.8px]">
                        <p class="font-bold text-lg p-2">Periodo de<br> gracia</p>
                        <p class="px-4 py-2">Cuentas con 6 meses después de tu graduación para el retorno de tu crédito.</p>
                    </div>
                    <div class="border border-gray-300 flex flex-col   items-center w-full">
                        <img src="/images/iconos-beneficios-humadeus-05.png" class=" mt-8 w-[100.8px] h-[100.8px]">
                        <p class="font-bold text-lg px-4 py-2">Protección contra desempleo</p>
                        <p class="px-4 py-2">6 meses adicionales para el retorno de tu crédito en caso de desempleo.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col items-center w-full mb-16">
            <div class="flex flex-col max-w-[1200px] justify-start  w-full">
                <h2 class=" font-serif text-2xl text-hgreen lg:px-0 px-8 text-left mb-4"><span class="font-bold">Voces</span> de nuestros estudiantes</h2>
            </div>
            <div class="flex flex-col bg-hfondogreen justify-start items-center  w-screen">
                <div class="flex flex-col max-w-[1200px] justify-start  w-full">
                    <div class="mt-8 flex justify-center lg:px-0 px-8">
                        <div class="bg-white p-10 py-20 mb-2 max-w-4xl shadow">
                            <p class=" font-semibold items-center leading-loose md:text-lg text-base">
                                <span class="text-hgreen md:text-4xl text-lg">“</span>
                                El proceso de solicitud fue rápido y sencillo. Humadeus me acompañó en cada paso, y ahora puedo enfocarme en mis estudios sin la carga económica.
                                <span class="text-hgreen md:text-4xl text-lg">”</span>
                            </p>
                            <p class="font-serif text-center text-xl mt-4 text-hgreen">- Leticia</p>
                        </div>
                    </div>

                    <!-- Indicadores del slider -->
                    <div class="my-4 flex justify-center space-x-2">
                        <span class="w-3 h-3 bg-hgreen rounded-full"></span>
                        <span class="w-3 h-3 bg-gray-300 rounded-full"></span>
                        <span class="w-3 h-3 bg-gray-300 rounded-full"></span>
                        <span class="w-3 h-3 bg-gray-300 rounded-full"></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex items-center w-full max-w-[1200px] mb-16">
            <div class="flex flex-col max-w-[1200px] justify-start lg:px-0 px-8 w-full">
                <h2 class=" font-serif text-2xl text-hgreen text-left mb-4">Te puede interesar:</h2>
                <div class="lg:flex w-full justify-start max-w-[1200px] text-center gap-10 lg:space-y-0 space-y-6">
                    <div class="border border-gray-300 flex flex-col content-between items-center justify-between w-full cursor-pointer" >
                        <img src="https://humanitas.edu.mx/blog/wp-content/uploads/2024/06/tipos-contabilidad-financiero.webp" class="w-full">
                        <p class="font-semibold text-lg leading-tight text-gray-500 p-4">Cómo ahorrar un poco de presupuesto.</p>
                    </div>
                    <div class="border border-gray-300 flex flex-col content-between items-center justify-between w-full cursor-pointer">
                        <img src="https://humanitas.edu.mx/blog/wp-content/uploads/2024/10/cuanto-cuesta-mensualidad-univer.webp" class="w-full">
                        <p class="font-semibold text-lg leading-tight text-gray-500 p-4">Cómo incrementar mis ingresos.</p>
                    </div>
                    <div class="border border-gray-300 flex flex-col content-between items-center justify-between w-full cursor-pointer">
                        <img src="https://humanitas.edu.mx/blog/wp-content/uploads/2024/10/clasificacion-contabilidad-anali.webp" class="w-full">
                        <p class="font-semibold text-lg leading-tight text-gray-500 p-4">Plan finacieron de estudios</p>
                    </div>
                    <div class="border border-gray-300 flex flex-col content-between items-center justify-between w-full cursor-pointer">
                        <img src="https://humanitas.edu.mx/blog/wp-content/uploads/2024/10/ejemplo-contabilidad-administrat.webp" class="w-full">
                        <p class="font-semibold text-lg leading-tight text-gray-500 p-4">Ventajas de los créditos educativos.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col items-center w-full max-w-[1200px] mb-16">
            <div class="flex flex-col max-w-[1200px] justify-start  w-full">
                <h2 class=" font-serif text-2xl text-hgreen text-left lg:px-0 px-8 mb-4"><span class="font-bold">Preguntas</span> frecuentes</h2>
            </div>
            <PreguntasCarrusel />
            
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PreguntasCarrusel from "./components/PreguntasCarrusel.vue";
import FormularioLB from "./components/FormularioLB.vue";

export default defineComponent({
    components: {
        PreguntasCarrusel, FormularioLB
    },
    data() {
        return {
            amount: 50000,
            terms: [6, 12, 18, 24, 32],
            selectedTerm: 12,
            labelPosition: 0,
            interestRate: 0.2, // 20% de interés estimado
            selectedCountry: "+52",
            ladas: [
                { codigo: "mx", lada: "+52", nombre: "México" },
                { codigo: "us", lada: "+1", nombre: "Estados Unidos" },
                { codigo: "ca", lada: "+1", nombre: "Canadá" },
                { codigo: "gb", lada: "+44", nombre: "Reino Unido" },
                { codigo: "es", lada: "+34", nombre: "España" },
                { codigo: "ar", lada: "+54", nombre: "Argentina" },
                { codigo: "br", lada: "+55", nombre: "Brasil" },
                { codigo: "cl", lada: "+56", nombre: "Chile" },
                { codigo: "co", lada: "+57", nombre: "Colombia" },
                { codigo: "pe", lada: "+51", nombre: "Perú" },
                { codigo: "ve", lada: "+58", nombre: "Venezuela" },
                { codigo: "ec", lada: "+593", nombre: "Ecuador" },
                { codigo: "bo", lada: "+591", nombre: "Bolivia" },
                { codigo: "py", lada: "+595", nombre: "Paraguay" },
                { codigo: "uy", lada: "+598", nombre: "Uruguay" },
                { codigo: "pa", lada: "+507", nombre: "Panamá" },
                { codigo: "cr", lada: "+506", nombre: "Costa Rica" },
            ],
        };
    },
    computed: {
        interest(): number {
            return Math.round(this.amount * this.interestRate);
        },
        totalToPay(): number {
            return Math.round(this.amount * (1 + this.interestRate)); // Se evita la referencia a this.interest
        },
        monthlyPayment(): number {
            return Math.round(this.totalToPay / this.selectedTerm);
        },
    },
    mounted() {
        this.updateLabelPosition();
    },
    methods: {
        calculate() {
            console.log("Calculando crédito para", this.amount, "a", this.selectedTerm, "meses");
        },
        updateLabelPosition() {
            const slider = this.$refs.slider as HTMLInputElement;
            if (!slider) return;

            const min = parseInt(slider.min);
            const max = parseInt(slider.max);
            const rangeWidth = slider.clientWidth;
            const valueRatio = (this.amount - min) / (max - min);

            // Ajuste para centrar el label respecto al thumb
            this.labelPosition = valueRatio * rangeWidth;
        }
    },
    watch: {
        amount() {
            this.updateLabelPosition();
        }
    }
});
</script>

<style scoped>
    .dropdown-item {
      font-family: 'Helvetica Neue Italic', sans-serif;
      font-size: 14px;
    }

    .dropdown-item:hover {
      background-color: #881912;
      color: #424b35;
    }

    .login-box {
    max-width: 1000px;
    margin: 0 ;
    padding: 0px;
    box-sizing: border-box;
    border: black;
    border-radius: 1px;
    background: transparent;
    z-index: 1;
    
    
  }

  .span-slider {
    position: absolute;
    top: -24px;
    white-space: nowrap;
    }

  .login-box h2 {
    margin: 0 0 0px;
    padding: 0;
    color: transparent;
    text-align: center;
  }

  .login-box .user-box {
    position: relative;
    z-index: 1;
  }

  .login-box .user-box i {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 12px;
    color: #424b35;
  }

  .form-container {
    position: relative;
    z-index: 1;
  }

  .login-box .user-box input,
  .login-box .user-box select,
  .login-box .user-box textarea {
   width: 100%;
   padding: 10px 10px; /* Ajusta según tu preferencia */
   font-size: 12px;
   color: #424b35;
   appearance: auto;
   margin-bottom: 24px;
   border: none;
   border-bottom: 1px solid #424b35;
   outline: none;
   background: transparent;
}

.login-box .user-box select option {
  color: black; /* Color del texto de las opciones del select cuando se despliegan */
}



  .login-box .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    padding: 10px 0;
    font-size: 12px;
    color: #424b35;
    pointer-events: none;
    transition: .5s;
  }

  

  .login-box .user-box input:focus ~ label,
  .login-box .user-box input:valid ~ label,
  .login-box .user-box select:focus ~ label,
  .login-box .user-box textarea:focus ~ label {
    top: -25px;
    left: 0;
    color: #424b35;
    font-size: 12px;
  }



  .login-box .user-box input.error-border,
  .login-box .user-box select.error-border,
  .login-box .user-box textarea.error-border {
    border-bottom: 1px solid #FF0000 !important;
  }

  .login-box .user-box label.error{
    color: #FF0000;
    font-size: 12px;
  }
  
</style>