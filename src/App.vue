<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
    name: 'App',
    components: {
        Navbar,
        Footer,
    }
});
</script>

<template class="flex flex-col w-full bg-white">
    <div class="flex flex-col h-full no-scroll justify-center items-center w-full bg-white">
        <Navbar  />
        <!-- <Navbar  @update:search="searchQuery = $event"/> -->
        <main>
            <div id="app-content">
                <router-view />
            </div>
        </main>
        <Footer/>
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
