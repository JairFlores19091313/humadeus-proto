<template>
    <div class="lg:w-1/2 lg:mr-16 lg:mx-0 mx-4 flex items-center h-full">
        <!-- Contenedor del carrusel -->
        <div class="w-full space-y-3">
            <!-- Mostrar 5 elementos actuales -->
            <div
                v-for="(item, index) in visibleItems"
                :key="index"
                class="flex flex-col items-center justify-center relative"
            >
                <!-- Pregunta -->
                <button
                    class="w-full flex items-center text-white rounded-none relative h-[66px] px-4 py-3 transition-all duration-300"
                    :class="item.bg"
                    @click="toggleAnswer(item)"
                >
                    <span class="text-3xl mr-4 font-bold">{{ item.open ? '−' : '+' }}</span>
                    <span>{{ item.question }}</span>
                </button>
                <!-- Respuesta desplegable -->
                <div v-if="item.open" class="bg-white text-gray-600 p-3 absolute top-16 z-20 border">
                    <span>{{ item.answer }}</span>
                </div>
            </div>
        </div>
    
        <!-- Botones de navegación -->
        <div class="ml-4 flex justify-between">
            <button
            @click="next"
            class="w-10 h-10 flex items-center bg-white border border-gray-300 justify-center rounded-full shadow-md hover:bg-gray-100"
            >
            <span class="text-xl">↓</span>
            </button>
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
        bg: "bg-[#424b35]/95", 
        open: false 
    },
    { 
        question: "¿Qué pasa si me atraso en un pago?", 
        answer: "Se generarán intereses moratorios y podría afectar tu historial crediticio.", 
        bg: "bg-[#424b35]/85", 
        open: false 
    },
    { 
        question: "¿Puedo liquidar mi crédito antes de tiempo?", 
        answer: "Sí, puedes hacer pagos anticipados sin penalización para reducir intereses.", 
        bg: "bg-[#424b35]/75", 
        open: false 
    },
    { 
        question: "¿Cómo puedo realizar mis pagos?", 
        answer: "Puedes pagar en línea, en sucursal bancaria o con domiciliación a tu tarjeta.", 
        bg: "bg-[#424b35]/65", 
        open: false 
    },
    { 
        question: "¿Cuánto dinero me pueden prestar?", 
        answer: "El monto depende de tu capacidad de pago y el tipo de crédito solicitado.", 
        bg: "bg-[#424b35]/55", 
        open: false 
    },
    { 
        question: "¿Cuál es la tasa de interés actual?", 
        answer: "La tasa de interés varía según el crédito. Consulta nuestra web para más detalles.", 
        bg: "bg-[#424b35]/45", 
        open: false 
    },
    { 
        question: "¿Puedo obtener un crédito sin historial crediticio?", 
        answer: "Sí, pero puede requerir un aval o garantía dependiendo del monto solicitado.", 
        bg: "bg-[#424b35]/35", 
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

    // Función para alternar la visibilidad de la respuesta
    const toggleAnswer = (item: QuestionItem) => {
        item.open = !item.open;
    };
</script>