<template>
    <div class="lg:mx-0 mx-4 space-y-3 flex flex-col w-full lg:px-0 px-8">
        <!-- Contenedor del carrusel -->
        <div class="lg:flex gap-8 justify-between lg:items-start items-center w-full">
            <div class="w-full space-y-3 h-full">
                <!-- Mostrar 5 elementos actuales -->
                <div
                    v-for="(item, index) in visibleItems"
                    :key="index"
                    class="flex flex-col items-center justify-center relative"
                >
                    <!-- Pregunta -->
                    <button
                        class="w-full flex items-center text-white rounded-none relative h-[70px] px-4 py-3 transition-all duration-300"
                        :class="item.bg"
                        @click="toggleAnswer(item)"
                    >
                        <span class="text-3xl mr-4 font-bold">{{ item.open ? '−' : '+' }}</span>
                        <span>{{ item.question }}</span>
                    </button>
                    <!-- Respuesta desplegable -->
                    <div v-if="item.open" class="bg-white text-[#444343] p-3  z-20 border">
                        <span>{{ item.answer }}</span>
                    </div>
                </div>
            </div>
            <div class="lg:flex items-center">
                <div class="flex lg:flex-col items-center justify-center lg:space-y-3 lg:mb-0 mb-6 lg:mr-8">
                    <!-- Botones de navegación -->
                    <div class="flex items-center justify-center">
                        <button
                        @click="prev"
                        class="w-10 h-10 flex items-center bg-white border border-gray-300 justify-center rounded-full shadow-md hover:bg-gray-100"
                        >
                        <span class="text-xl">↑</span>
                        </button>
                    </div>
                    <!-- Botones de navegación -->
                    <div class="flex items-center justify-center">
                        <button
                        @click="next"
                        class="w-10 h-10 flex items-center bg-white border border-gray-300 justify-center rounded-full shadow-md hover:bg-gray-100"
                        >
                        <span class="text-xl">↓</span>
                        </button>
                    </div>
                </div>
                <!-- <img src="/images/imagen-mujer.webp" class=" lg:max-w-[600px] lg:max-h-[400px] lg:mt-0 h-auto"> -->
                <img src="/images/manos-equipo-humadeus.webp" class=" lg:max-w-[600px] lg:max-h-[400px] lg:mt-0 h-auto">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed } from "vue";

    // Definir la estructura de cada pregunta
    interface QuestionItem {
    question: string;
    answer: string;
    bg: string;
    open: boolean;
    }

    // Lista de preguntas con respuestas
    const items = ref<QuestionItem[]>([
    { 
        question: "¿Cuánto terminaré pagando de interés?", 
        answer: "El interés depende del monto solicitado y el plazo del crédito. Consulta nuestras tasas actuales.", 
        bg: "bg-hgreen", 
        open: false 
    },
    { 
        question: "¿Cuáles son los requisitos para solicitar un crédito?", 
        answer: "Necesitas identificación oficial, comprobante de ingresos y buen historial crediticio.", 
        bg: "bg-[#424b35] bg-opacity-[0.92]", 
        open: false 
    },
    { 
        question: "¿Qué pasa si me atraso en un pago?", 
        answer: "Se generarán intereses moratorios y podría afectar tu historial crediticio.", 
        bg: "bg-[#424b35] bg-opacity-[0.84]", 
        open: false 
    },
    { 
        question: "¿Puedo liquidar mi crédito antes de tiempo?", 
        answer: "Sí, puedes hacer pagos anticipados sin penalización para reducir intereses.", 
        bg: "bg-[#424b35] bg-opacity-[0.76]", 
        open: false 
    },
    { 
        question: "¿Cómo puedo realizar mis pagos?", 
        answer: "Puedes pagar en línea, en sucursal bancaria o con domiciliación a tu tarjeta.", 
        bg: "bg-[#424b35] bg-opacity-[0.68]", 
        open: false 
    },
    { 
        question: "¿Cuánto dinero me pueden prestar?", 
        answer: "El monto depende de tu capacidad de pago y el tipo de crédito solicitado.", 
        bg: "bg-[#424b35] bg-opacity-[0.60]", 
        open: false 
    },
    { 
        question: "¿Cuál es la tasa de interés actual?", 
        answer: "La tasa de interés varía según el crédito. Consulta nuestra web para más detalles.", 
        bg: "bg-[#424b35] bg-opacity-[0.52]", 
        open: false 
    },
    { 
        question: "¿Puedo obtener un crédito sin historial crediticio?", 
        answer: "Sí, pero puede requerir un aval o garantía dependiendo del monto solicitado.", 
        bg: "bg-[#424b35] bg-opacity-[0.46]", 
        open: false 
    }
    ]);

    // Índice actual para el carrusel
    const currentIndex = ref(0);

    // Calcular los 5 elementos visibles
    const visibleItems = computed(() => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
        const index = (currentIndex.value + i) % items.value.length;
        visible.push(items.value[index]);
    }
    return visible;
    });

    // Función para avanzar al siguiente grupo de preguntas
    const next = () => {
        currentIndex.value = (currentIndex.value + 1) % items.value.length;
    };

    const prev = () => {
        currentIndex.value = (currentIndex.value - 1 + items.value.length) % items.value.length;
    };

    // Función para alternar la visibilidad de la respuesta
    const toggleAnswer = (item: QuestionItem) => {
        item.open = !item.open;
    };
</script>