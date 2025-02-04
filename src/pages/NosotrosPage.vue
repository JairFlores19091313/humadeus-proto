<template>
    <div class="flex flex-col items-center justify-center w-full mt-[180px]">
        <div id="beneficios" class="flex max-w-[1200px] justify-between gap-24 w-full mb-16">
            <div class="pl-16">
                <p class="flex items-center text-9xl w-[324px] font-baskerville text-hgreen"><span class="text-7xl font-semibold">+</span>{{ alumnosBeneficiados.toLocaleString('es-MX') }}</p>
                <p class="text-right text-xl font-serif">Jóvenes beneficiados</p>
            </div>
            <div class="text-justify">
                <h2 class="text-2xl text-hgreen mb-4 font-serif">Qué es <span class="font-semibold">Humadeus</span></h2>
                <p class=" text-justify mb-4">
                    Somos una institución financiera <span class="font-semibold">mexicana</span> enfocada en brindar <span class="font-semibold">soluciones</span> accesibles y personalizadas para apoyar a jóvenes en su camino <span class="font-semibold">académico</span>.
                </p>
                <p class=" text-justify ">
                    Cada vez más estudiantes confían en nosotros para financiar sus estudios, permitiéndoles <span class="font-semibold">alcanzar sus metas</span> profesionales sin preocuparse por los obstáculos económicos.
                </p>
            </div>
        </div>
        <div class="max-w-[1200px] w-full mx-auto">
            <div class="flex justify-between text-left gap-6 relative z-10 w-full bg-white">
                <div class="flex flex-col w-[66%]">
                    <div class="flex w-full gap-6">
                        <div class=" w-full pr-6">
                            <h2 class="text-2xl text-hgreen mb-4 font-serif">Nuestra <span class="font-semibold">Misión</span></h2>
                            <p class=" text-justify mt-2">
                            <strong class="font-semibold">Facilitar</strong> el acceso a la educación universitaria a través de soluciones financieras accesibles, flexibles y 
                            <strong class="font-semibold">adaptadas</strong> a las necesidades de cada estudiante, promoviendo el desarrollo integral y el <strong class="font-semibold">crecimiento profesional</strong> 
                            de nuestros beneficiarios.
                            </p>
                        </div>

                        <div class=" w-full border-x-2 border-hgreen">
                            <h2 class="text-2xl pl-6 mb-4 text-hgreen font-serif">Nuestra <span class="font-semibold">Visión</span></h2>
                            <p class="px-6 text-justify mt-2">
                            Ser el <strong class="font-semibold">motor financiero</strong> que impulse el talento y las aspiraciones de los jóvenes, apoyando su educación y formando 
                            <strong class="font-semibold">futuros líderes</strong> que generen un impacto positivo en sus comunidades y el mundo.
                            </p>
                        </div>
                    </div>
                    <div class="relative mt-8 w-full overflow-visible">
                        <img
                        src="../pages/images/imagen-cielo.webp"
                        alt="El futuro en tus manos"
                        class=" w-full object-cover"
                        />
                    </div>
                </div>
                <div class="w-[33%] pl-6">
                    <h2 class="text-2xl mb-4 text-hgreen font-serif">Nuestros <span class="font-semibold">Valores</span></h2>
                    <ul class=" text-justify mt-2 space-y-3">
                    <li><strong class="font-semibold">Accesibilidad:</strong> Humadeus se compromete a ofrecer soluciones financieras accesibles a todos los estudiantes, eliminando las barreras económicas que puedan impedir su desarrollo académico.</li>
                    <li><strong class="font-semibold">Compromiso Social:</strong> Creemos en la educación como un derecho fundamental y trabajamos para que nuestros préstamos tengan un impacto positivo, tanto en la vida de los estudiantes como en la sociedad en general.</li>
                    <li><strong class="font-semibold">Responsabilidad:</strong> Gestionamos nuestros recursos y operaciones con transparencia y profesionalismo, siempre buscando el bienestar de nuestros clientes y el cumplimiento de sus objetivos educativos.</li>
                    <li><strong class="font-semibold">Innovación:</strong> Ofrecemos productos financieros innovadores que se adapten a las necesidades cambiantes de los estudiantes, utilizando tecnología y análisis para mejorar la experiencia del cliente.</li>
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
                }, 10); // Velocidad
            }
        },
    },
}
</script>

<style>

</style>