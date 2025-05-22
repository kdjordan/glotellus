<template>
  <section
    ref="aboutSection"
    class="container mx-auto px-4 text-glotellBlack mt-32"
    id="about"
  >
    <h1 ref="heading" class="text-size4xl font-bold">About US<span class="material-symbols-outlined text-sizeXl">
near_me
</span></h1>
    <p ref="paragraph">
      As part of the V-Tell group of companies, GloTell delivers cutting-edge
      telecommunications termination services, offering reliable and
      high-quality solutions tailored to meet the specific needs of our clients.
      Our experienced team excels in optimizing telecom infrastructure and
      guiding businesses through the latest communication technologies. In
      addition to our telecom expertise, we provide seamless global connectivity
      through V-Tell's retail cellular services. This unified approach ensures
      that our customers benefit from robust, world-class communication
      solutions—whether for business or personal use—under one cohesive
      operation.
    </p>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useGsap } from "../../composables/useGsap";

const aboutSection = ref(null);
const heading = ref(null);
const paragraph = ref(null);
const gsap = useGsap();

onMounted(() => {
  if (heading.value && paragraph.value && aboutSection.value) {
    gsap.from([heading.value, paragraph.value], {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: aboutSection.value,
        start: "top 80%", // Start animation when 80% of the section is visible
        toggleActions: "play none none none", // Play animation once
      },
    });
  }
});
</script>

<style>
#about {
  scroll-margin-top: 50px;
}
</style>
