<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';

export default defineComponent({
  setup() {
    const lightboxOpen = ref(false);

    const ladas = [
      { codigo: 'mx', lada: '+52', nombre: 'México' },
      { codigo: 'us', lada: '+1', nombre: 'Estados Unidos' },
      { codigo: 'ca', lada: '+1', nombre: 'Canadá' },
      { codigo: 'gb', lada: '+44', nombre: 'Reino Unido' },
      { codigo: 'es', lada: '+34', nombre: 'España' },
      { codigo: 'ar', lada: '+54', nombre: 'Argentina' },
      { codigo: 'br', lada: '+55', nombre: 'Brasil' },
      { codigo: 'cl', lada: '+56', nombre: 'Chile' },
      { codigo: 'co', lada: '+57', nombre: 'Colombia' },
      { codigo: 'pe', lada: '+51', nombre: 'Perú' },
      { codigo: 've', lada: '+58', nombre: 'Venezuela' },
      { codigo: 'ec', lada: '+593', nombre: 'Ecuador' },
      { codigo: 'bo', lada: '+591', nombre: 'Bolivia' },
      { codigo: 'py', lada: '+595', nombre: 'Paraguay' },
      { codigo: 'uy', lada: '+598', nombre: 'Uruguay' },
      { codigo: 'pa', lada: '+507', nombre: 'Panamá' },
      { codigo: 'cr', lada: '+506', nombre: 'Costa Rica' },
    ];

    const selectedLada = ref(ladas[0]);

    const openLightbox = () => {
      lightboxOpen.value = true;
    };

    const closeLightbox = () => {
      lightboxOpen.value = false;
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
    };

    const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;

  // Si haces clic en el botón de abrir o dentro del lightbox, no lo cierres
  if (
    target.closest('.lightbox-content') ||
    target.closest('#abrir-lightbox-boton')
  ) {
    return;
  }

  closeLightbox();
};

    onMounted(() => {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('click', handleClickOutside);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClickOutside);
    });

    return { lightboxOpen, openLightbox, closeLightbox, ladas, selectedLada };
  },
});
</script>

<template>
    <div>
        <!-- Botón -->
        <button
        @click.stop="openLightbox"
        class="rounded-none font-serif transition duration-300 ease-in-out hover:border-hgreen hover:bg-white hover:text-hgreen flex items-center justify-center text-white bg-hgreen h-[35px]"
        >
        Imprimir tabla de amortización
        </button>

        <!-- Lightbox -->
        <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-[51] bg-black bg-opacity-80 flex items-center justify-center"
        >
            <div
                class="bg-white border-hgreen border-[1.5px] p-10 rounded-none w-full max-w-3xl lightbox-content relative overflow-y-auto max-h-[90vh]"
            >
                <!-- Botón cerrar -->
                <button
                @click="closeLightbox"
                class="absolute top-2 bg-transparent right-3 text-black text-xl font-bold hover:text-hgreen"
                >
                ✕
                </button>

                <!-- Formulario -->
                <h2 class="text-2xl mb-4 text-hgreen font-serif">
                Continúa Estudiando de la mano de <span class="font-semibold">Humadeus</span>
                </h2>

                <form class="grid grid-cols-1 lg:gap-4 gap-2">
                    <div class="lg:flex gap-12 justify-between mt-4 w-full">
                        <div class="relative  w-full ">
                            <input
                                type="text"
                                placeholder=""
                                class="w-full bg-transparent focus:outline-none text-center border-gray-400 focus:border-hgreen border-t-0 border-x-0 border-b py-2 text-gray-700 focus:ring-0"
                            />
                            <label>Nombre(s)</label>
                        </div>
                        <div class="relative w-full">
                            <input
                                type="text"
                                class="w-full bg-transparent focus:outline-none lg:mt-0 mt-2 text-center border-t-0 border-x-0 border-b border-gray-400 focus:border-hgreen py-2 text-gray-700 focus:ring-0"
                            />
                            <label>Apellido(s)</label>
                        </div>
                    </div>
                    <div class="lg:flex gap-12 justify-between w-full">
                        <div class="relative  w-full ">
                            <input
                                type="text"
                                placeholder=""
                                class="w-full bg-transparent focus:outline-none text-center border-t-0 border-x-0 border-gray-400 focus:border-hgreen border-b py-2 text-gray-700 focus:ring-0"
                            />
                            <label>Correo electrónico</label>
                        </div>
                        <div class="relative w-full">
                            <div>
                                <div class="flex lg:mt-0 mt-2">
                                    <select
                                        v-model="selectedLada"
                                        class="w-[40%] bg-transparent focus:outline-none text-center border-b border-t-0 border-x-0 focus:border-hgreen border-gray-400 py-2 text-gray-700 focus:ring-0"
                                    >
                                        <option
                                        v-for="item in ladas"
                                        :key="item.codigo"
                                        :value="item"
                                        >
                                        ({{ item.lada }})
                                        </option>
                                    </select>
                                    <input
                                        id="telefono"
                                        type="tel"
                                        class="w-full bg-transparent focus:outline-none border-b border-t-0 border-x-0 focus:border-hgreen border-gray-400 py-2 text-gray-700 focus:ring-0"
                                        pattern="[0-9]{10}"
                                        required
                                    />
                                </div>
                                <label>Teléfono</label>
                            </div>
                        </div>
                    </div>
                    <div class="lg:flex gap-12 justify-between w-full">
                        <div class="relative items-center w-full">
                            <select class="w-full bg-white text-center border-gray-400  border-b border-t-0 border-x-0 rounded-none focus:ring-0 focus:border-hgreen">
                                <option value="">Selecciona una opción</option>
                                <option value="licenciatura">Licenciatura</option>
                                <option value="maestria">Maestría</option>
                                <option value="doctorado">Doctorado</option>
                                <option value="otros">Otros</option>
                            </select>
                            <label class=" leading-none">Nivel académico para el que<br>se requiere el crédito</label>
                        </div>
                        <div class="relative w-full">
                        </div>
                    </div>
                    <div>
                    </div>

                    <div class="lg:flex gap-12 justify-between items-center w-full">
                        <!-- Checkbox política -->
                    <div class="flex lg:items-start gap-2">
                        <input
                        id="politica"
                        type="checkbox"
                        required
                        class="mt-1 focus:ring-0 text-hgreen cursor-pointer"
                        />
                        <label for="politica" class="text-sm text-hgreen">
                        Acepto la
                            <a href="/politica-de-privacidad" target="_blank" class="underline text-hgreen hover:text-hwine">
                                política de privacidad
                            </a>
                        </label>
                    </div>

                    <!-- Botón enviar -->
                    <button
                        type="submit"
                        class="mt-4 bg-hgreen font-serif text-white rounded-none px-4 py-2 hover:bg-white hover:text-hgreen hover:border-hgreen border transition"
                    >
                        Enviar e Imprimir
                    </button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.lightbox-content::-webkit-scrollbar {
  width: 6px;
}
.lightbox-content::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 3px;
}
</style>
