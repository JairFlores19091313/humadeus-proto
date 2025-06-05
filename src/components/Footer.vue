<template>
    <div class="flex flex-col items-center justify-center  w-screen bg-hgreen ">
        <div class="flex flex-col items-center w-full bg-hfondogreen">
            <div class="flex flex-col items-center my-6 max-w-[1200px] lg:px-0 px-8 ">
                <div class="mb-8 flex justify-between items-center w-full max-w-[1000px] 
            space-x-10 md:space-x-20 lg:space-x-24">
                    <a href="https://www.cnbv.gob.mx" target="_blank" class="flex-1 flex justify-center">
                        <img src="../pages/images/logo-cnvb-1-1536x632.png" 
                            class="max-h-[60px] object-contain" alt="CNBV">
                    </a>
                    <a href="https://www.cnbv.gob.mx" target="_blank" class="flex-1 flex justify-center">
                        <img src="../pages/images/Condusef-transparente.webp" 
                            class="max-h-[60px] object-contain" alt="Condusef">
                    </a>
                    <a href="https://www.cnbv.gob.mx" target="_blank" class="flex-1 flex justify-center">
                        <img src="../pages/images/buro-logo-1.jpg" 
                            class="max-h-[80px] object-contain" alt="Buró de Crédito">
                    </a>
                </div>
                <div class="text-justify w-full text-[12px]">
                    <p class="mb-4">1.- Se informa que HUMADEUS, SA de C.V. SOFOM, E.N.R. es una Sociedad Financiera de Objeto Múltiple, Entidad no Regulada, que, para su constitución y operación con tal carácter, no requiere de autorización de la Secretaría de Hacienda y Crédito Público, no obstante, se encuentra sujeta a la supervisión de la Comisión Nacional Bancaria y de Valores, únicamente para efectos de lo dispuesto por el artículo 56 de la Ley General de Organizaciones y Actividades Auxiliares del Crédito.</p>
                    <p class="mb-4">2.- Por otra parte, se comunica que en determinados conceptos esta supervisada por la Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros (CONDUSEF).</p>
                    <p class="mb-4">3.- Se informa que la comisión que se establece está debidamente registrada ante el Registro de Comisiones (RECO), de la CONDUSEF. </p>
                    <p class="mb-4">4.- Dudas, aclaraciones y reclamaciones: UNIDAD ESPECIALIZADA DE ATENCION A USUARIOS DE SERVICIOS FINANCIEROS DE HUMADEUS
Unidad Especializada de Atención a Usuarios (UNE) HUMADEUS, S.A. de C.V., SOFOM, E.N.R. Titular de la UNE: _________________
CALLE SACRAMENTO 406, INT. 1A, COLONIA INSURGENTES SAN BORJA C.P. 03100 ALCALDÍA/MUNICIPIO: BENITO JUAREZ, ENTIDAD FEDERATIVA: CIUDAD DE MÉXICO, 
CORREO(S) ELECTRÓNICO(S) __________Y TELÉFONO(S)__________ DEL TITULAR DE LA UNE. 
HORARIO PRESENCIAL: LUNES a VIERNES: 10:00 - 17:00 Horas;
MEDIOS DE RECEPCIÓN: Sucursales; UNE
NIVELES DE ATENCIÓN: UNE
MEDIOS DE COMUNICACIÓN ELECTRÓNICA: Sin medios de comunicación electrónica o digital:
El plazo de respuesta a las consultas o reclamaciones no será mayor a 30 días hábiles, en cumplimiento al artículo 50 Bis de la Ley de Protección y Defensa al Usuario de Servicios Financieros. En el caso de las aclaraciones el plazo no será mayor a 45 días naturales, en cumplimiento del artículo 23 de la Ley para la Transparencia y Ordenamiento de los Servicios Financieros. </p>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center relative lg:max-w-[1200px] w-full lg:px-0 px-4">
            <div class="lg:flex lg:gap-16 md:gap-12 gap-4 md:pl-4 items-start justify-start md:pt-8 lg:mb-0 mb-12 pt-4 w-full grid grid-cols-3">
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
                <!-- <div class="text-left justify-start text-hcream flex flex-col">
                    <router-link to="/nosotros" class="mb-2">SOLICITA TU CRÉDITO</router-link>
                    <router-link to="/" class="mb-2 text-[12px]">Télefonos</router-link>
                    <router-link to="/" class="mb-2 text-[12px]">Dirección</router-link>
                </div> -->
            </div>
            <div class="flex flex-col w-full relative -top-8">
                <div class="flex lg:justify-start lg:items-end items-center justify-center w-full gap-6">
                    <div class="flex justify-start items-center w-full gap-6">
                        <div class="w-full md:block hidden">
                            <div class="h-7 border-b-[1px] border-hcream">&nbsp;</div>
                            <div class="h-7">&nbsp;</div>
                        </div>
                        <img src="../pages/images/El-futuro-en-tus-manos.png" class="w-[307px] h-[20px] md:block hidden">
                    </div>
                    <img src="../pages/images/Logotipo-Humadeus-pie.png" class="w-[165px] relative -top-3">
                </div>
                <p class="pl-4 text-hcream lg:text-left text-center text-[12px]">© 2025 Humadeus. Todos los derechos reservados.</p>
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