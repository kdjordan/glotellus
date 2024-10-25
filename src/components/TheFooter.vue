<template>
  <footer>
    <h2 class="text-center text-4xl font-bold my-32 text-glotellGrey">TELECOMMUNICATIONS FOR THE MODERN WORLD</h2>
    <div class="container mx-auto flex justify-between items-start w-4/5">
      <div>
        <div class="flex items-center mb-4 w-3/5">
          <BoltIcon class="h-6 w-6 text-glotellRed mr-2" />
          <h2 class="text-xl font-bold">THE GLOTELL ADVANTAGE</h2>
        </div>
        <p class="max-w-lg">
          Glotell operates as an integral part of the V-Tell group of companies, a unified business committed to delivering comprehensive telecom solutions. As part of the same ownership structure, Glotell and V-Tell work seamlessly together, combining their strengths to lead innovation in the telecommunications industry. This unified approach ensures that all aspects of their operations—from retail cellular services to advanced VOIP solutions—are strategically aligned to meet the diverse needs of customers. By operating as one cohesive entity, the V-Tell group, through Glotell, provides unmatched expertise and high-quality services to wholesale VOIP businesses globally.
        </p>
      </div>
      <div class="text-left">
        <h3 class="text-lg font-bold">Location</h3>
        <p>1832 S Ocean Drive<br>Hallandale Beach, FL 33009<br>USA</p>
        <button class="mt-4 bg-glotellRed text-white px-4 py-2 rounded">View on Google Maps</button>
      </div>
    </div>
    <div class="border-t border-white mt-8 pt-4 text-left w-4/5 mx-auto pb-8">
      © 2024 Glotell US Corp. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import { BoltIcon } from '@heroicons/vue/24/outline';
</script>

<style>
footer {
  background-color: #000;
  color: #fff;
}
</style>
