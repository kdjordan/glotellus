<template>
  <section
    ref="aboutSection"
    class="container mx-auto px-4 text-glotellBlack mt-32"
    id="about"
  >
    <h1 ref="heading" class="text-size4xl font-bold relative inline-block">
      About US
    </h1>
    <div
      ref="borderLine"
      class="h-[2px] bg-glotellBlack origin-left"
      style="transform: scaleX(0.01)"
    ></div>
    <p ref="paragraph" class="mt-4">
      GloTell US is a telecommunications service provider focused on delivering
      high-quality wholesale voice termination and routing solutions. As part of
      the V-Tell group of companies, we serve interconnect partners and telecom
      businesses with customized, reliable services. We are currently authorized
      for wholesale operations and are in the process of acquiring our FCC 214
      license to launch consumer-facing services in the near future. Our retail
      offering, including global eSIM solutions, is not yet available to the
      public but will be launched following regulatory approval.
    </p>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useGsap } from "../../composables/useGsap";

const aboutSection = ref(null);
const heading = ref(null);
const paragraph = ref(null);
const borderLine = ref(null);
const gsap = useGsap();

onMounted(() => {
  if (
    heading.value &&
    paragraph.value &&
    aboutSection.value &&
    borderLine.value
  ) {
    gsap.from([heading.value, paragraph.value], {
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: aboutSection.value,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(borderLine.value, {
      scaleX: 1,
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: aboutSection.value,
        start: "top 60%",
        end: "top 10%",
        scrub: true,
      },
    });
  }
});
</script>

<style>
#about {
  scroll-margin-top: 100px;
}
</style>
