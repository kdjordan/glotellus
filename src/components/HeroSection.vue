<template>
  <section class="container relative z-10 mx-auto mt-48" id="hero">
    <div class="w-4/5 mx-auto rounded-2xl overflow-hidden flex p-4 custom-gradient">
      <div class="p-8 text-left text-sizeBase">
        <h3 class="text-sizeLg tracking-widest font-semibold font-lato text-glotellGrey">Telecommunications Services</h3>
        <h1 class="text-size2xl font-bold mt-2 font-lato text-glotellWhite">Voice Solutions you can count on.</h1>
        <h2 class="text-sizeLg font-semibold mt-4 font-lato text-glotellGrey">Retail and Wholesale all in one place.</h2>
        <p class="mt-4 text-glotellGrey">
          As part of the V-Tell group of companies, Glotell delivers cutting-edge telecommunications termination services, offering reliable and high-quality solutions tailored to meet the specific needs of our clients. Our experienced team excels in optimizing telecom infrastructure and guiding businesses through the latest communication technologies.
        </p>
        <p class="mt-4 text-glotellGrey">
          In addition to our telecom expertise, we provide seamless global connectivity through V-Tell’s retail cellular services. This unified approach ensures that our customers benefit from robust, world-class communication solutions—whether for business or personal use—under one cohesive operation.
        </p>
      </div>
      <div class="flex-shrink-0 w-1/2">
        <img src="/call-center.jpg" alt="Customer Service" class="h-full object-cover rounded-2xl" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style>
.custom-gradient {
  background: linear-gradient(to bottom right, black, red 85%, #FF0000);
  background-position: left bottom;
  background-size: 150% 150%;
}
</style>
