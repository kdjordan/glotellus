<template>
  <footer>
    <div class="container mx-auto px-4" id="location">
      <h2 class="text-center text-4xl font-bold my-32 text-glotellGrey">TELECOMMUNICATIONS FOR THE MODERN WORLD</h2>
      <div class="flex justify-between items-start">
        <div class="max-w-[60%]">
          <div class="flex items-center mb-6">
            <BoltIcon class="h-8 w-8 text-glotellRed mr-4" />
            <h2 class="text-2xl font-bold">THE GLOTELL ADVANTAGE</h2>
          </div>
          <p class="text-lg leading-relaxed">
            Glotell operates as an integral part of the V-Tell group of companies, a unified business committed to delivering comprehensive telecom solutions. As part of the same ownership structure, Glotell and V-Tell work seamlessly together, combining their strengths to lead innovation in the telecommunications industry. This unified approach ensures that all aspects of their operations—from retail cellular services to advanced VOIP solutions—are strategically aligned to meet the diverse needs of customers. By operating as one cohesive entity, the V-Tell group, through Glotell, provides unmatched expertise and high-quality services to wholesale VOIP businesses globally.
          </p>
        </div>
        <div class="text-left">
          <h3 class="text-2xl font-bold mb-4">Location</h3>
          <p class="text-lg leading-relaxed">1832 S Ocean Drive<br>Hallandale Beach, FL 33009<br>USA</p>
          <a href="https://maps.app.goo.gl/nqKYHooGYeVdmgeL6" target="_blank" rel="noopener noreferrer" 
             class="mt-6 inline-block bg-glotellRed text-white px-8 py-3 rounded-full text-lg hover:bg-glotellRed/90 transition-colors">
            View on Google Maps
          </a>
        </div>
      </div>
      <div class="border-t border-white/20 mt-16 pt-8 pb-8 text-lg">
        © 2024 Glotell US Corp. All rights reserved.
      </div>
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
