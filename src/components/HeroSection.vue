<template>
  <section
    class="h-screen flex flex-col justify-end items-start text-left pb-20 pl-10 md:pb-24 md:pl-20 lg:pb-32 lg:pl-24 font-montserrat"
    id="hero"
  >
    <div class="absolute inset-0 w-full h-full overflow-hidden z-0">
      <video autoplay muted loop class="w-full h-full object-cover">
        <source src="/video/gtell_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="relative z-10 flex flex-col items-start max-w-3xl text-glotellWhite">
      <h1 class="text-5xl md:text-7xl  ">
        Retail and Wholesale Telecommunication Services.
      </h1>
      <h2 class="text-2xl md:text-4xl  mt-4">
        
      </h2>
    </div>
  </section>
</template>

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
</style>
