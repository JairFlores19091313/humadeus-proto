<template>
    <div class="flex flex-col items-center justify-center w-full mt-[220px]">
        <div id="beneficios" class="lg:flex max-w-[1200px] lg:justify-between justify-center items-end  gap-24 w-full mb-20">
            <div class="lg:pl-16 flex flex-col items-center">
                <p class="text-9xl lg:text-left text-center w-[324px] font-baskerville text-hgreen"><span class="text-7xl font-semibold">+</span>{{ alumnosBeneficiados.toLocaleString('es-MX') }}</p>
                <p class="lg:text-right text-xl font-serif">Jóvenes beneficiados</p>
            </div>
            <div class="text-justify lg:mx-0 mx-4">
                <h2 class="text-2xl text-hgreen mb-[24px] font-serif">Qué es <span class="font-semibold">Humadeus</span></h2>
                <p class=" text-justify mb-4">
                    Somos una institución financiera <span class="font-semibold">mexicana</span> enfocada en brindar <span class="font-semibold">soluciones</span> accesibles y personalizadas para apoyar a jóvenes en su camino <span class="font-semibold">académico</span>.
                </p>
                <p class=" text-justify ">
                    Cada vez más estudiantes confían en nosotros para financiar sus estudios, permitiéndoles <span class="font-semibold">alcanzar sus metas</span> profesionales sin preocuparse por los obstáculos económicos.
                </p>
            </div>
        </div>
        <div class="max-w-[1200px] w-full mx-auto mb-16">
            <div class="grid px-2 md:grid-cols-[auto_auto_auto] gx:grid-rows-5 gx:grid-cols-[auto_auto_auto_auto_auto] text-left gap-y-12 md:gap-x-4 gx:gap-6 relative z-10 w-full gx:h-[600px] bg-white">
                <div class="order-1 w-full space-y-6 gx:px-2 gx:row-span-2">
                    <h2 class="text-2xl text-hgreen font-serif">Nuestra <span class="font-semibold">Misión</span></h2>
                    <p class=" text-justify">
                    <strong class="font-semibold">Facilitar</strong> el acceso a la educación universitaria a través de soluciones financieras accesibles, flexibles y 
                    <strong class="font-semibold">adaptadas</strong> a las necesidades de cada estudiante, promoviendo el desarrollo integral y el <strong class="font-semibold">crecimiento profesional</strong> 
                    de nuestros beneficiarios.
                    </p>
                </div>

                <div class="hidden md:flex md:order-2 border-l-[1.5px] border-hgreen gx:row-span-2">
                </div>

                <div class="order-2 md:order-3 w-full space-y-6 gx:px-2 gx:row-span-2">
                    <h2 class="text-2xl text-hgreen font-serif">Nuestra <span class="font-semibold">Visión</span></h2>
                    <p class="text-justify">
                    Ser el <strong class="font-semibold">motor financiero</strong> que impulse el talento y las aspiraciones de los jóvenes, apoyando su educación y formando 
                    <strong class="font-semibold">futuros líderes</strong> que generen un impacto positivo en sus comunidades y el mundo.
                    </p>
                </div>
                
                <div class="hidden gx:flex gx:order-4 border-l-[1.5px] border-hgreen gx:row-span-2">
                </div>
                
                <div class="order-3 md:order-4 gx:order-5 w-full col-span-1 md:col-span-3 gx:col-span-1 space-y-6 gx:row-span-3">
                    <h2 class="text-2xl text-hgreen font-serif">Nuestros <span class="font-semibold">Valores</span></h2>
                    <ul class=" text-justify space-y-6">
                        <li><strong class="font-semibold">Accesibilidad:</strong> Humadeus se compromete a ofrecer soluciones financieras accesibles a todos los estudiantes, eliminando las barreras económicas que puedan impedir su desarrollo académico.</li>
                        <li><strong class="font-semibold">Compromiso Social:</strong> Creemos en la educación como un derecho fundamental y trabajamos para que nuestros préstamos tengan un impacto positivo, tanto en la vida de los estudiantes como en la sociedad en general.</li>
                        <li><strong class="font-semibold">Responsabilidad:</strong> Gestionamos nuestros recursos y operaciones con transparencia y profesionalismo, siempre buscando el bienestar de nuestros clientes y el cumplimiento de sus objetivos educativos.</li>
                        <li><strong class="font-semibold">Innovación:</strong> Ofrecemos productos financieros innovadores que se adapten a las necesidades cambiantes de los estudiantes, utilizando tecnología y análisis para mejorar la experiencia del cliente.</li>
                    </ul>
                </div>

                <!-- <div class="order-5 gx:order-6 relative gx:col-span-4 gx:row-span-2 gx:h-[350px] bg-bottom bg-no-repeat w-full h-full flex items-end"> -->
                <div class="order-4 md:order-5 gx:order-6 relative md:col-span-3 gx:col-span-4 gx:row-span-3 bg-bottom bg-no-repeat w-full h-full flex items-end">
                    <div class="absolute inset-0 lg:mt-24 md:mt-12 mt-8 flex justify-center w-full h-full">
                        <h1 class="uppercase font-serif md:text-3xl text-xl text-hgreen text-center tracking-widest">El futuro en tus manos</h1>
                    </div>
                    <img src="../pages/images/imagen-cielo.webp" alt="El futuro en tus manos" class="w-full h-full object-cover" />
                </div>
            </div>
        </div>
        
        <!-- <div class="max-w-[1200px] w-full h-auto mx-auto mb-16">
            <div class="grid grid-cols-3 grid-rows-[auto_1fr_auto] text-left gap-6 relative z-10 w-full bg-white">
                <div class="w-full space-y-3">
                    <h2 class="text-2xl text-hgreen font-serif">Nuestra <span class="font-semibold">Misión</span></h2>
                    <p class="text-justify">
                        <strong class="font-semibold">Facilitar</strong> el acceso a la educación universitaria a través de soluciones financieras accesibles, flexibles y 
                        <strong class="font-semibold">adaptadas</strong> a las necesidades de cada estudiante, promoviendo el desarrollo integral y el 
                        <strong class="font-semibold">crecimiento profesional</strong> de nuestros beneficiarios.
                    </p>
                </div>

                <div class="w-full space-y-3">
                    <h2 class="text-2xl text-hgreen font-serif">Nuestra <span class="font-semibold">Visión</span></h2>
                    <p class="text-justify">
                        Ser el <strong class="font-semibold">motor financiero</strong> que impulse el talento y las aspiraciones de los jóvenes, apoyando su educación y formando 
                        <strong class="font-semibold">futuros líderes</strong> que generen un impacto positivo en sus comunidades y el mundo.
                    </p>
                </div>

                <div class="w-full h-2/3 space-y-3 row-span-3">
                    <h2 class="text-2xl text-hgreen font-serif">Nuestros <span class="font-semibold">Valores</span></h2>
                    <ul class="text-justify space-y-3">
                        <li><strong class="font-semibold">Accesibilidad:</strong> Humadeus se compromete a ofrecer soluciones financieras accesibles a todos los estudiantes, eliminando las barreras económicas que puedan impedir su desarrollo académico.</li>
                        <li><strong class="font-semibold">Compromiso Social:</strong> Creemos en la educación como un derecho fundamental y trabajamos para que nuestros préstamos tengan un impacto positivo, tanto en la vida de los estudiantes como en la sociedad en general.</li>
                        <li><strong class="font-semibold">Responsabilidad:</strong> Gestionamos nuestros recursos y operaciones con transparencia y profesionalismo, siempre buscando el bienestar de nuestros clientes y el cumplimiento de sus objetivos educativos.</li>
                        <li><strong class="font-semibold">Innovación:</strong> Ofrecemos productos financieros innovadores que se adapten a las necesidades cambiantes de los estudiantes, utilizando tecnología y análisis para mejorar la experiencia del cliente.</li>
                    </ul>
                </div>

                <div class="col-span-2 row-span-2 h-2/3 bg-bottom bg-no-repeat">
                    <img src="../pages/images/imagen-cielo.webp" alt="El futuro en tus manos" class="w-full h-full object-cover" />
                </div>
            </div>
        </div> -->

        <div class="max-w-[1200px] w-full mx-auto mb-16">
            <div class="lg:flex justify-center  items-start lg:gap-16 w-full mb-16">
                <div class="flex flex-col justify-center text-justify lg:mb-0 mb-8">
                    <h2 class="text-2xl lg:mx-0 mx-4 text-hgreen mb-[24px] text-left font-serif">Un <span class="font-semibold">compromiso</span> con la sociedad</h2>
                    <p class="mb-4 lg:mx-0 mx-4"><span class="font-semibold text-left">Becas y Fondos de Apoyo:</span><br> Una parte de los beneficios de Humadeus será destinada a crear becas para estudiantes de bajos recursos, apoyando a los que más lo necesitan.</p>
                    <p class="lg:mx-0 mx-4"><span class="font-semibold text-left">Programas de Educación Financiera:</span><br> Implementación de talleres y recursos que ayuden a los estudiantes a gestionar sus finanzas de manera efectiva, evitando problemas de endeudamiento en el futuro.</p>
                </div>
                <img src="../pages/images/manos-equipo-humadeus.webp" class="lg:w-[60%]">
            </div>
            <div class="lg:flex justify-center  items-start w-full">
                <div class="flex flex-col lg:mx-0 mx-4 lg:mb-0 mb-8 justify-center text-justify lg:pr-16 lg:w-[50%]">
                    <h2 class="text-2xl text-hgreen mb-[24px] text-left font-serif">Razones para <span class="font-semibold">elegirnos</span></h2>
                    <p class="mb-4"><span class="font-semibold">Respaldo y confianza:</span> Nuestra experiencia y transparencia nos convierten en una opción segura y reconocida en el mercado financiero.</p>
                    <p class="mb-4"><span class="font-semibold">Créditos personalizados:</span> Diseñamos soluciones hechas a la medida de tus necesidades y capacidades de pago.</p>
                    <p class="mb-4"><span class="font-semibold">Atención cercana y profesional:</span> Te acompañamos en cada paso del proceso, brindándote asesoría clara y eficiente.</p>
                    <p class="mb-4"><span class="font-semibold">Tasas competitivas:</span> Ofrecemos condiciones accesibles para que cumplas tus objetivos sin comprometer tu estabilidad económica.</p>
                    <p class="mb-4"><span class="font-semibold">Flexibilidad de plazos:</span> Tú decides los términos que mejor se adapten a tu situación.</p>
                    <p class="mb-4"><span class="font-semibold">Compromiso con tus sueños:</span> No solo otorgamos créditos, somos tu aliado en la construcción de tu futuro.</p>
                    <p class="mb-4"><span class="font-semibold">Alcance internacional:</span> Podemos apoyarteb en cualquier parte del mundo.</p>
                    <p class="">Con Humadeus, estás en buenas manos. ¡Solicita tu crédito hoy y da el primer paso hacia tus metas con seguridad y confianza!</p>
                </div>
                <div class="flex flex-col lg:mx-0 mx-4 justify-center text-justify lg:w-[50%]">
                    <h2 class="text-2xl text-hgreen mb-[24px] text-left font-serif">Nuestras <span class="font-semibold">certificaciones</span> nos respaldan</h2>
                    <ul class="list-disc pl-5 space-y-4 text-left">
                        <li>Registro ante la Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros (CONDUSEF)</li>
                        <li>Registro en la Comisión Nacional Bancaria y de Valores (CNBV)</li>
                        <li>Inscripción en el Buró de Entidades Financieras</li>
                        <li>Certificación ISO (International Organization for Standardization)</li>
                        <li>Afiliación a la Asociación Mexicana de Entidades Financieras Especializadas (AMFE)</li>
                        <li>Calificaciones de Riesgo por Agencias Evaluadoras</li>
                        <li>Reconocimientos de Inclusión Financiera</li>
                        <li>Certificaciones en Protección de Datos</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            currentIndex: 0,
            alumnosBeneficiados: 0,
            animating: false,
        };
    },
    mounted() {
        this.startAnimation();
    },
    methods: {
        startAnimation() {
            if (!this.animating) {
                this.animating = true;
                let counter = 0;
                const interval = setInterval(() => {
                    this.alumnosBeneficiados = counter;
                    counter += 11; // incremento
                    if (counter >= 4500) {
                        clearInterval(interval);
                        this.alumnosBeneficiados = 4500;
                    }
                }, 4); // Velocidad
            }
        },
    },
}
</script>

<style>

</style>