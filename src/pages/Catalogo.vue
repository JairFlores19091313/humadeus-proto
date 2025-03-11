<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
    data() {
        return {
        searchQuery: this.$route.query.q as string || "",
        groupedResults: {} as Record<string, { title: string; matches: string[] }>
        };
    },
    watch: {
        "$route.query": {
        immediate: true,
            handler() {
                this.processResults();
            }
        }
        },
    methods: {
        processResults() {
            this.searchQuery = this.$route.query.q as string || "";
            this.groupedResults = {};

            if (this.$route.query.results) {
                try {
                const results: { ruta: string; type: string; text: string; h1: string }[] = JSON.parse(this.$route.query.results as string);

                results.forEach((result) => {
                    // Si no existe en groupedResults, creamos la entrada con el h1
                    if (!this.groupedResults[result.ruta]) {
                    this.groupedResults[result.ruta] = { 
                        title: result.h1 || result.ruta, // Usa el h1 si existe, si no, usa la ruta
                        matches: [] 
                    };
                    }
                    this.groupedResults[result.ruta].matches.push(result.text);
                });

                } catch (error) {
                console.error("Error al parsear los resultados de búsqueda:", error);
                }
            }
        }
    }
});
</script>

<template>
    <div class="flex flex-col items-center justify-center  mt-[180px] w-full">
        <div class="max-w-[1200px] w-full lg:mx-0 mx-4 mb-2">
            <h2 class="text-2xl text-hgreen text-left mb-4 font-serif">Resultados para <b class="font-bold">"{{ searchQuery }}"</b></h2>
        </div>
        <div class="flex flex-col bg-[#e1e2e0] justify-center items-center mb-16  w-screen">
            <div class="max-w-[1200px] flex flex-col items-center justify-center w-full lg:mx-0 mx-4 my-6">
                <ul v-if="Object.keys(groupedResults).length">
                    <li v-for="(data, ruta) in groupedResults" :key="ruta" class="p-12 border text-justify space-y-6 rounded-none bg-white shadow-md mb-4">
                        <router-link :to="ruta" class="flex flex-col w-[700px]">
                            <div class="flex flex-col w-[700px] border p-6 border-gray-500">
                                <router-link :to="ruta" class="text-hgreen font-semibold mb-2 text-lg">
                                    {{ data.title }}
                                </router-link>
                                <p class="font-semibold pl-2">Secciones o titulos donde se encuentran las coincidencias</p>
                                <ul class="mt-2 pl-4 text-gray-700"> 
                                    <li v-for="(match, index) in data.matches" :key="index">
                                        - {{ match }}
                                    </li>
                                </ul>
                            </div>
                        </router-link>
                    </li>
                </ul>
                <p v-else class="text-gray-500">No se encontraron resultados.</p>
            </div> 
        </div>

        
    </div>
</template>