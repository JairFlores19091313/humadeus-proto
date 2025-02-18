<template>
    <div class="flex flex-col items-center justify-center  w-screen bg-hgreen">
        <div class="flex flex-col items-center justify-center relative lg:max-w-[1200px] w-full">
            <div class="lg:flex lg:gap-16 md:gap-12 gap-8 md:pl-4 items-start justify-start md:pt-8 pt-4 w-full grid grid-cols-3">
                <div class="text-left justify-start text-hcream flex flex-col">
                    <router-link to="/" class="mb-2">INICIO</router-link>
                    <router-link to="/nosotros" class="mb-2">NOSOTROS</router-link>
                    <!-- <router-link to="/" class="mb-2 text-[12px]">ejemplo 1</router-link>
                    <router-link to="/" class="mb-2 text-[12px]">ejemplo 2</router-link>
                    <router-link to="/" class="mb-2 text-[12px]">ejemplo 3</router-link>
                    <router-link to="/" class="mb-2 text-[12px]">ejemplo 4</router-link> -->
                </div>
                <!-- <div class="text-left justify-start text-hcream flex flex-col"> -->
                    
                    <!-- <router-link to="/" class="mb-2 text-[12px]">ejemplo 1</router-link>
                    <router-link to="/" class="mb-2 text-[12px]">ejemplo 2</router-link>
                    <router-link to="/" class="mb-2 text-[12px]">ejemplo 3</router-link>
                    <router-link to="/" class="mb-2 text-[12px]">ejemplo 4</router-link> -->
                <!-- </div> -->
                <div class="text-left justify-start text-hcream flex flex-col">
                    <router-link to="/soluciones" class="mb-2">SOLUCIONES</router-link>
                    <router-link to="/soluciones/creditos-universitarios" class="mb-2 text-[12px]">Créditos universitarios</router-link>
                    <router-link to="/soluciones/gastos-academicos" class="mb-2 text-[12px]">Gastos académicos</router-link>
                    <router-link to="/soluciones/programas-de-intercambio" class="mb-2 text-[12px]">Programas de <br> intercambio</router-link>
                </div>
                <div class="text-left justify-start text-hcream flex flex-col">
                    <router-link to="/contactanos" class="mb-2">CONTÁCTANOS</router-link>
                    <router-link to="/" class="mb-2 text-[12px]">Télefonos</router-link>
                    <router-link to="/" class="mb-2 text-[12px]">Dirección</router-link>
                    <p class="mb-2 text-[12px]">&nbsp;</p>
                    <a href="https://humanitas.edu.mx/aviso-de-privacidad" target="_blank" class="mb-2 text-[12px]">Política de privacidad</a>
                </div>
                <div class="text-left justify-start text-hcream flex flex-col">
                    <router-link to="/nosotros" class="mb-2">SOLICITA TU CRÉDITO</router-link>
                    <router-link to="/" class="mb-2 text-[12px]">Télefonos</router-link>
                    <router-link to="/" class="mb-2 text-[12px]">Dirección</router-link>
                </div>
            </div>
            <div class="flex flex-col w-full relative -top-8">
                <div class="flex justify-start items-end w-full gap-6">
                    <div class="flex justify-start items-center w-full gap-6">
                        <div class="w-full">
                            <div class="h-7 border-b-[1px] border-hcream">&nbsp;</div>
                            <div class="h-7">&nbsp;</div>
                        </div>
                        <img src="../pages/images/El-futuro-en-tus-manos.png" class="w-[307px] h-[20px]">
                    </div>
                    <img src="../pages/images/Logotipo-Humadeus-pie.png" class="w-[165px] relative -top-3">
                </div>
                <p class="pl-4 text-hcream text-left text-[12px]">© 2025 Humadeus. Todos los derechos reservados.</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {

}
</script>

<style>

</style>