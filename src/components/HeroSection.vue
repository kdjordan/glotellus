<template>
  <section class="container mx-auto px-4 mt-48" id="hero">
    <div class="w-full rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-12 custom-gradient">
      <div class="p-8 flex flex-col">
        <h3 class="text-sizeLg tracking-widest font-semibold font-lato text-glotellGrey">Telecommunications Services</h3>
        <h1 class="text-size2xl font-bold mt-2 font-lato bg-gradient-to-r from-glotellRed to-glotellGrey bg-clip-text text-transparent">Voice Solutions you can trust.</h1>
        <h2 class="text-sizeLg font-semibold mt-4 font-lato text-glotellGrey">Retail and Wholesale all in one place.</h2>
        <p class="mt-4 text-glotellGrey text-sizeBase">
          As part of the V-Tell group of companies, Glotell delivers cutting-edge telecommunications termination services, offering reliable and high-quality solutions tailored to meet the specific needs of our clients. Our experienced team excels in optimizing telecom infrastructure and guiding businesses through the latest communication technologies.
        </p>
        <p class="mt-4 text-glotellGrey">
          In addition to our telecom expertise, we provide seamless global connectivity through V-Tell's retail cellular services. This unified approach ensures that our customers benefit from robust, world-class communication solutions—whether for business or personal use—under one cohesive operation.
        </p>
      </div>
      <div class="p-8">
        <div class="relative w-full rounded-2xl overflow-hidden h-[400px] md:h-full">
          <img src="/call-center.jpg" alt="Customer Service" class="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style scoped>
.custom-gradient {
  background: linear-gradient(to bottom right, black, red 85%, #FF0000);
  background-position: left bottom;
  background-size: 150% 150%;
}

#hero {
  scroll-margin-top: 500px;
}
</style>
