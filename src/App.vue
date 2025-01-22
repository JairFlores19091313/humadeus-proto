<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Navbar,
    Footer,
  },
});
</script>

<template>
    <div class="no-scroll">
        <Navbar/>
        <div>
            <a href="https://vite.dev" target="_blank">
            <img src="./assets/vite.svg" class="logo" alt="Vite logo" />
            </a>
            <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
            </a>
            <p class=" font-serif uppercase">QUE HONGO</p>
        </div>
        <HelloWorld msg="Vite + Vue" class="w-screen" />
        <Footer />
    </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.no-scroll {
  overflow-x: hidden; /* Esto desactiva el desplazamiento horizontal */
}
</style>
