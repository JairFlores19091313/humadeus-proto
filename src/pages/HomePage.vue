<template>
    <div class="flex flex-col items-center justify-center w-full mt-[180px]">
        <div class="flex items-center w-full max-w-[1200px]">
            <div class="flex flex-col max-w-[1200px] justify-start  w-full">
                <h2 class=" font-serif text-2xl text-left mb-4"><span class="font-bold">Simula</span> tu Crédito</h2>
                <div class="flex w-full justify-start  max-w-[1200px]">
                    <div class="max-w-[1200px] mx-auto w-full bg-hgreen/10 p-8 rounded-none">
                        <div class="flex justify-between w-full">
                        <!-- Sección de simulador -->
                        <div class="mr-8 w-full">
                            <p class=" text-left">1. ¿Cuánto dinero necesitas?</p>
                            <div class="w-[80%] flex flex-col justify-start">
                                <input type="range" v-model="amount" min="10000" max="100000" step="1000" class=" my-3"/>
                                <div class="flex justify-between text-sm text-gray-600">
                                    <span>$10,000</span>
                                    <span>$100,000</span>
                                </div>
                            </div>
                            <p class=" mt-8 text-left">2. ¿En qué plazo deseas liquidar tu crédito? (meses).</p>
                            <div class="flex justify-between items-center mt-3">
                                <button
                                    v-for="term in terms"
                                    :key="term"
                                    @click="selectedTerm = term"
                                    :class="[
                                    'rounded-full w-2 flex items-center justify-center text-center text-sm',
                                    selectedTerm === term ? 'bg-white text-hgreen' : ' bg-hgreen text-white'
                                    ]"
                                >
                                    {{ term }}
                                </button>
                                <button @click="calculate" class=" bg-hgreen flex items-center justify-center text-white hover:bg-white font-serif hover:text-hgreen rounded-none px-6 w-[100px] py-1">
                                    Calcular
                                </button>
                            </div>
                            <p class=" mt-8 text-left">¡Para un resultado más preciso comunícate
                                con nosotros!</p>
                        </div>

                        <!-- Resultados -->
                        <div class="bg-white p-4 px-8 shadow w-[80%] text-left">
                            <p class="font-bold px-1 text-hgreen" style="font-weight:700"><span class="font-bold">Préstamo por ${{ amount.toLocaleString() }} a {{ selectedTerm }} meses.</span></p>
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
                        </div>
                    </div>
                </div>
            </div>
            <!-- Formulario -->
            <div class="p-6 w-[30%]">
                        <h3 class="font-semibold">Continúa estudiando de la mano de <span class="font-bold">Humadeus</span></h3>
                        <p class="text-sm text-gray-600 mt-1">¡Pregúntanos cómo!</p>

                        <form class="mt-4 space-y-3">
                        <input type="text" placeholder="Nombre*" class="w-full p-2 border rounded" />
                        <input type="text" placeholder="Apellidos*" class="w-full p-2 border rounded" />
                        <input type="email" placeholder="E-mail" class="w-full p-2 border rounded" />
                        <input type="tel" placeholder="Número de teléfono*" class="w-full p-2 border rounded" />

                        <div class="flex items-center text-sm">
                            <input type="checkbox" id="privacy" class="mr-2" />
                            <label for="privacy">He leído y acepto el <a href="#" class="text-green-700">Aviso de privacidad</a>.</label>
                        </div>

                        <button type="submit" class="w-full bg-green-700 text-white p-2 rounded-lg">Enviar</button>
                        </form>
                    </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

// Variables reactivas
const amount = ref<number>(50000);
const terms = ref<number[]>([6, 12, 18, 24, 32]);
const selectedTerm = ref<number>(12);

// Cálculo de intereses y pagos
const interestRate = 0.2; // 20% de interés estimado
const interest = computed(() => Math.round(amount.value * interestRate));
const totalToPay = computed(() => amount.value + interest.value);
const monthlyPayment = computed(() => Math.round(totalToPay.value / selectedTerm.value));

// Función para recalcular cuando se cambia el plazo
const calculate = () => {
  console.log("Calculando crédito para", amount.value, "a", selectedTerm.value, "meses");
};
</script>

<style>

</style>