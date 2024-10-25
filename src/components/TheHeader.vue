<template>
  <header ref="header" class="fixed top-0 left-0 w-full bg-black text-white flex justify-between items-center p-4 tracking-widest transition-transform duration-500">
    <div class="flex items-center">
      <div class="bg-glotellRed text-black px-4 py-2 flex items-center rounded text-sizeBase font-bold font-lato">
        <BoltIcon class="h-6 w-6 mr-2" /> GLOTELL
      </div>
    </div>
    <nav class="flex space-x-4 items-center">
      <a href="#hero" class="hover:underline">Home</a>
      <a href="#about" class="hover:underline">About</a>
      <a href="#location" class="hover:underline">Location</a>
      <a href="#" class="bg-glotellRed px-4 py-2 rounded-full hover:bg-glotellRed/80 text-glotellWhite hover:text-black transition duration-300">Contact</a>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { BoltIcon } from '@heroicons/vue/24/outline';

const header = ref(null);
let lastScrollTop = 0;
let currentOffset = 0;
const headerHeight = 90; // Adjust this to match your header's height

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
</style>
