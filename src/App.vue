<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template class="font-sans">
  <TheHeader />
  <HeroSection />
  <AboutSection />
  <TheFooter />
</template>

<style>
.rborder {
  border: 4px solid green;
}

</style>
