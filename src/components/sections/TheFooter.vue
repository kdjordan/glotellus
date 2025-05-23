<template>
  <footer
    id="location"
    class="bg-glotellBlack text-glotellWhite font-roboto pt-8"
  >
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-start gap-8">
        <div class="w-full md:max-w-[60%]">
          <div class="flex items-center mb-6">
            <GlotellMarkIcon :animate-pulse="true" class="h-8 w-8 mr-2" />
            <h2 class="text-2xl font-bold">THE GLOTELL ADVANTAGE</h2>
          </div>
          <p class="text-lg leading-relaxed">
            Glotell US operates as an integral part of the V-Tell group of
            companies, a unified business committed to delivering comprehensive
            telecom solutions. As part of the same ownership structure, GloTell US
            and V-Tell work seamlessly together, combining their strengths to
            lead innovation in the telecommunications industry. This unified
            approach ensures that all aspects of their operations—from retail
            cellular services to advanced VOIP solutions—are strategically
            aligned to meet the diverse needs of customers. By operating as one
            cohesive entity, the V-Tell group, through GloTell US and SkyTell FZ, provides
            unmatched expertise and high-quality services to wholesale VOIP
            businesses globally.
          </p>
        </div>
        <div class="w-full md:w-auto">
          <h3 class="text-2xl mb-4">Location</h3>
          <p class="text-lg leading-relaxed">
            1832 S Ocean Drive<br />Hallandale Beach, FL 33009<br />USA
          </p>
          <a
            href="https://maps.app.goo.gl/nqKYHooGYeVdmgeL6"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 inline-block bg-glotellRed text-white px-8 py-3 rounded text-lg hover:bg-glotellRed/90 transition-colors font-agdasima tracking-widest uppercase"
          >
            View on Google Maps
          </a>
        </div>
      </div>
      <div
        class="border-t border-white/20 mt-16 pt-8 pb-8 text-lg flex justify-between items-center w-full"
      >
        <div>© 2025 GloTell US Corp. All rights reserved.</div>
        <div class="flex space-x-4 font-agdasima tracking-widest uppercase">
          <router-link
            to="/terms"
            class="hover:text-glotellRed transition-colors"
            >Terms of Service</router-link
          >
          <router-link
            to="/privacy"
            class="hover:text-glotellRed transition-colors"
            >Privacy Policy</router-link
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { BoltIcon } from "@heroicons/vue/24/outline";
import GlotellMarkIcon from "@/components/GlotellMarkIcon.vue";
</script>
