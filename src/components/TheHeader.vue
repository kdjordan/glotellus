<template>
  <header ref="header" class="fixed top-0 left-0 w-full bg-transparent text-white flex justify-between items-center p-4 tracking-widest transition-transform duration-500">
    <div v-if="!isMenuOpen" class="flex items-center">
      <div class="bg-glotellRed text-black px-4 py-2 flex items-center rounded text-sizeBase font-bold font-lato">
        <BoltIcon class="h-6 w-6 mr-2" /> GLOTELL
      </div>
    </div>
    <nav class="hidden md:flex space-x-4 items-center">
      <a href="#hero" class="hover:underline">Home</a>
      <a href="#about" class="hover:underline">About</a>
      <a href="#location" class="hover:underline">Location</a>
      <a href="#" class="bg-glotellRed px-4 py-2 rounded-full hover:bg-glotellRed/80 text-glotellWhite hover:text-black transition duration-300">Contact</a>
    </nav>
    <!-- Hamburger Icon for Mobile -->
    <button @click="toggleMenu" class="md:hidden">
      <svg v-if="!isMenuOpen" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
  </header>

  <!-- Mobile Menu Overlay -->
  <div :class="['mobile-menu', { 'open': isMenuOpen }]" class="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center space-y-6 text-white z-50 transition-transform duration-500">
    <!-- Close Icon in Upper Right -->
    <button @click="toggleMenu" class="absolute top-4 right-4">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
    <a href="#hero" class="text-2xl" @click="toggleMenu">Home</a>
    <a href="#about" class="text-2xl" @click="toggleMenu">About</a>
    <a href="#location" class="text-2xl" @click="toggleMenu">Location</a>
    <a href="#" class="text-2xl bg-glotellRed px-4 py-2 rounded-full hover:bg-glotellRed/80 text-glotellWhite hover:text-black transition duration-300" @click="toggleMenu">Contact</a>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { BoltIcon } from '@heroicons/vue/24/outline';

const header = ref(null);
let lastScrollTop = 0;
let currentOffset = 0;
const headerHeight = 90; // Adjust this to match your header's height

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  const scrollDifference = currentScroll - lastScrollTop;

  if (scrollDifference > 0 && currentOffset < headerHeight) {
    // Scrolling down
    currentOffset = Math.min(headerHeight, currentOffset + scrollDifference);
  } else if (scrollDifference < 0 && currentOffset > 0) {
    // Scrolling up
    currentOffset = Math.max(0, currentOffset + scrollDifference);
  }

  if (header.value) {
    header.value.style.transform = `translateY(-${currentOffset}px)`;
  }

  lastScrollTop = currentScroll;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
header {
  z-index: 1000; /* Ensure the header is above other content */
}

.mobile-menu {
  transform: translateY(-100%);
  transition: transform 0.5s ease-in-out;
}

.mobile-menu.open {
  transform: translateY(0);
}
</style>
