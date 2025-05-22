<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/sections/TheFooter.vue";
</script>

<template class="font-roboto">
  <TheHeader />
  <router-view />
  <TheFooter />
</template>
