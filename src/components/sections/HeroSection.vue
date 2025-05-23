<template>
  <section
    ref="heroSection"
    class="h-screen flex flex-col justify-end items-start text-left pb-20 pl-10 md:pb-24 md:pl-20 lg:pb-32 lg:pl-24 font-montserrat overflow-hidden"
    id="hero"
  >
    <div
      ref="videoContainer"
      class="absolute inset-0 w-full h-full overflow-hidden z-0"
    >
      <video autoplay muted loop class="w-full h-full object-cover">
        <source src="/video/gtell.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div
      ref="textContainer"
      class="relative z-10 flex flex-col items-start max-w-3xl text-glotellWhite"
    >
      <h1
        ref="heroH1Ref"
        class="text-3xl md:text-7xl font-agdasima tracking-wider pb-4"
      >
        <GlotellMarkIcon :animate-pulse="true" class="h-8 w-8" />GloTell
        <span class="text-4xl">US CORP</span>
      </h1>
      <h2 class="text-2xl md:text-5xl">
        <span
          v-for="(word, index) in titleWords"
          :key="index"
          class="inline-block"
          ref="animatedWords"
        >
          {{ word }}&nbsp;
        </span>
      </h2>
      <h2 class="text-2xl md:text-4xl mt-4"></h2>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useGsap } from "../../composables/useGsap";
import GlotellMarkIcon from "../GlotellMarkIcon.vue";
import videoSrc from "/video/gtell.mp4";

const title = "Retail and Wholesale Telecommunication Services.";
const titleWords = title.split(" ");
const animatedWords = ref([]);
const heroSection = ref(null);
const videoContainer = ref(null);
const textContainer = ref(null);
const heroH1Ref = ref(null);
const gsap = useGsap();

onMounted(() => {
  const targetsForAnimation = [];
  if (heroH1Ref.value) {
    targetsForAnimation.push(heroH1Ref.value);
  }
  if (animatedWords.value && animatedWords.value.length > 0) {
    targetsForAnimation.push(...animatedWords.value);
  }

  // Text animation
  if (targetsForAnimation.length > 0 && heroSection.value) {
    gsap.from(targetsForAnimation, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.1, // Stagger for H1 block and then H2 words
      scrollTrigger: {
        trigger: heroSection.value,
        start: "top 80%", // Start animation when 80% of the section is visible
        toggleActions: "play none none none", // Play animation once
      },
    });
  }

  // ScrollTrigger animation for bento box effect
  if (heroSection.value && textContainer.value) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSection.value,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        pinType: "transform",
        pinSpacing: false,
      },
    });

    tl.to(heroSection.value, {
      width: "90%",
      height: "90%",
      borderRadius: "10px",
      padding: "10px",
      x: "5vw",
      y: "5vh",
      ease: "power1.inOut",
    }).to(
      textContainer.value,
      {
        scale: 0.9,
        ease: "power1.inOut",
      },
      "<"
    );
  }
});
</script>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
/* Removed .custom-gradient as the video background is now used */
/* Removed #hero scroll-margin-top as full-screen hero typically doesn't need it */

/* Ensure text is readable over various video content */
h1,
h2 {
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}

/* Add a default background to the hero section for when it shrinks and might not be full screen */
#hero {
  background-color: #1a202c; /* A dark fallback, adjust as needed */
  box-sizing: border-box; /* Added for better border/padding management */
}
</style>
