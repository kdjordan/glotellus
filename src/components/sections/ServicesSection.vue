<template>
  <section
    ref="servicesSectionRef"
    class="container mx-auto px-4 mt-32"
    id="about"
  >
    <!-- Retail Section -->
    <div ref="retailSectionBlockRef" class="mb-16 flex flex-col">
      <div class="top w-full flex flex-col justify-self-end mb-16">
        <h2
          ref="retailMainTitleRef"
          class="text-size4xl font-bold text-glotellBlack font-sourceSansPro text-right"
        >
          Retail
        </h2>
        <h4
          ref="retailGoGlobalTitleRef"
          class="text-sizeXl font-bold text-glotellBlack text-right relative"
        >
          Go Global, Stay Local.
        </h4>
        <div
          ref="retailSubtitleBorderRef"
          class="h-[2px] bg-glotellBlack origin-right"
          style="transform: scaleX(0.01)"
        ></div>
        <div class="flex flex-col md:flex-row gap-8 md:items-center mt-8">
          <!-- Image Column -->
          <div
            ref="retailImageWrapperRef"
            class="w-full md:w-1/3 order-1 md:order-1 overflow-hidden"
          >
            <GsapImageSlideshow
              :imagePaths="retailImagePaths"
              :slideDuration="5000"
              :transitionSpeed="1"
              class="rounded-lg shadow-xl w-full md:h-96"
            />
          </div>
          <!-- Text Content Column -->
          <div
            ref="retailLeftColumnContentRef"
            class="w-full md:w-2/3 order-2 md:order-2 text-right"
          >
            <h3 class="text-sizeLg font-bold">
              One eSIM for all your mobile numbers. Anywhere.
            </h3>
            <p class="mt-2">
              As part of the V-Tell group, GloTell brings you a revolutionary
              eSIM solution, designed to keep you connected globally while
              blending in locally. With access to over 90 international phone
              numbers, you can assign local numbers from any country to your
              eSIM, giving you credibility and seamless communication wherever
              you are.
            </p>
            <h3 class="mt-4 font-bold text-sizeLg">
              Stay in Touch, Stay Credible
            </h3>
            <p class="mt-2">
              No matter where your travels take you, a local number ensures you
              stay in contact with family, friends, clients, banks, government
              agencies, and business partners as if you never left their
              country. A local number not only opens doors but also enhances
              trust and reliability in the marketplace.
            </p>
            <h3 class="mt-4 font-bold text-sizeLg">
              Discreet and Seamless Connectivity
            </h3>
            <p class="mt-2">
              Your physical location remains confidential to your callers, no
              matter where you are in the world. Depending on your plan, your
              calls, SMS, and internet are always available at a flat rate, with
              no hidden fees. Our state-of-the-art Smart Caller ID system
              ensures that your contacts see a familiar local number on their
              caller ID, regardless of your actual location.
            </p>
            <h3 class="mt-4 font-bold text-sizeLg">
              Multiple Numbers, One Device
            </h3>
            <p class="mt-2">
              With the V-Tell eSIM, you can transfer existing phone numbers or
              add an unlimited number of local numbers from any country, all on
              a single eSIM. This allows you to manage multiple social media and
              messaging accounts, making it effortless to stay connected, no
              matter how many contacts or countries you interact with. Your
              contacts can always reach you using a local number from their
              country, even if you're on the other side of the globe.
            </p>
            <h3 class="mt-4 font-bold text-sizeLg">
              Limitless Freedom, Simplified Communication
            </h3>
            <p class="mt-2">
              Travel light, stay connected, and make the most of your mobile
              device with GloTell's unified solution, powered by the V-Tell
              eSIM.
            </p>
            <a
              href="https://v-tell.com"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-4 bg-glotellRed px-4 py-2 rounded hover:bg-glotellRed/80 text-glotellWhite hover:text-black transition duration-300 inline-block font-agdasima tracking-widest"
              >VISIT V-TELL</a
            >
          </div>
        </div>
      </div>
      <!-- Wholesale Section -->
      <div ref="wholesaleSectionBlockRef" class="mb-16 flex flex-col">
        <div class="top w-full flex flex-col justify-self-end mb-4">
          <h2 ref="wholesaleMainTitleRef" class="text-size4xl font-bold">
            Wholesale
          </h2>
          <h4 ref="wholesaleSubtitleRef" class="text-sizeXl font-bold relative">
            Your Partner in Domestic Telecommunications Termination
          </h4>
          <div
            ref="wholesaleSubtitleBorderRef"
            class="h-[2px] bg-glotellBlack origin-left"
            style="transform: scaleX(0.01)"
          ></div>
        </div>
        <div class="flex flex-col md:flex-row gap-8 md:items-start mt-8">
          <!-- Text Content Column (Left) -->
          <div
            ref="wholesaleTextContentRef"
            class="w-full md:w-2/3 order-1 md:order-1 text-left"
          >
            <p class="">
              GloTell is a leading provider of telecommunications termination
              services, dedicated to delivering high-quality, reliable solutions
              that cater to the specific needs of our diverse client base. With
              years of expertise in the telecom industry, we ensure that your
              communication infrastructure is optimized for peak performance,
              cost-efficiency, and regulatory compliance.
            </p>
            <h3 class="mt-4 font-bold text-sizeLg">
              Expert Guidance and Regulatory Compliance
            </h3>
            <p class="mt-2">
              Our experienced team is committed to guiding businesses through
              evolving telecom technologies, offering insights into new
              solutions and ensuring adherence to the latest industry standards,
              including TCPA and Robocall mitigation. We understand the
              complexities of the telecommunications landscape and work
              tirelessly to help our clients navigate these challenges with
              ease, offering scalable and future-proof solutions.
            </p>
            <h3 class="mt-4 font-bold text-sizeLg">
              Comprehensive Service Offerings
            </h3>
            <p class="mt-2">
              From call center support and calling card termination services to
              advanced arbitrage VOIP services, GloTell has the expertise to
              ensure that your business remains connected and competitive in the
              global marketplace. Our tailored approach means that no matter
              your operational needs, we provide the technology and services
              that empower your business to grow and thrive.
            </p>
           
              <router-link to="/wholesale" class="mt-4 bg-glotellRed px-4 py-2 rounded hover:bg-glotellRed/80 text-glotellWhite hover:text-black transition duration-300 inline-block font-agdasima tracking-widest">
              SEE OUR WHOLESALE SERVICES
           </router-link>
          </div>
          <!-- Image Column (Right) -->
          <div
            ref="wholesaleImageWrapperRef"
            class="w-full md:w-1/3 order-2 md:order-2 overflow-hidden"
          >
            <GsapImageSlideshow
              :imagePaths="wholesaleImagePaths"
              :slideDuration="5000"
              :transitionSpeed="1"
              class="rounded-lg shadow-xl w-full md:h-96"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useGsap } from "../../composables/useGsap";
import GsapImageSlideshow from "../../components/GsapImageSlideshow.vue";

const servicesSectionRef = ref(null);

// Retail section refs
const retailSectionBlockRef = ref(null);
const retailMainTitleRef = ref(null);
const retailGoGlobalTitleRef = ref(null);
const retailLeftColumnContentRef = ref(null);
const retailImageWrapperRef = ref(null);
const retailSubtitleBorderRef = ref(null);
const retailImagePaths = ref([
  "/images/retail-1.webp",
  "/images/retail-2.webp", // Ensure this image exists in /public/images or correct path
  "/images/retail-3.webp", // Ensure this image exists /public/images or correct path
]);

const wholesaleImagePaths = ref([
  "/images/wsale-1.webp",
  "/images/wsale-2.webp", // Ensure this image exists in /public/images or correct path
  "/images/wsale-3.webp", // Ensure this image exists /public/images or correct path
]);

// Wholesale section refs
const wholesaleSectionBlockRef = ref(null);
const wholesaleMainTitleRef = ref(null);
const wholesaleSubtitleRef = ref(null);
const wholesaleTextContentRef = ref(null);
const wholesaleImageWrapperRef = ref(null);
const wholesaleSubtitleBorderRef = ref(null);

const gsap = useGsap();

onMounted(() => {
  // Animate Retail Section (Titles and Text)
  if (
    retailSectionBlockRef.value &&
    retailMainTitleRef.value &&
    retailGoGlobalTitleRef.value &&
    retailLeftColumnContentRef.value &&
    retailSubtitleBorderRef.value
  ) {
    gsap.from(
      [
        retailMainTitleRef.value,
        retailGoGlobalTitleRef.value,
        retailLeftColumnContentRef.value,
      ],
      {
        duration: 1,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: retailSectionBlockRef.value,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate Retail Subtitle Border Line
    gsap.to(retailSubtitleBorderRef.value, {
      scaleX: 1,
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: retailSectionBlockRef.value,
        start: "top 60%",
        end: "top 10%",
        scrub: true,
      },
    });
  }

  // Animate Retail Section Image (slides from left)
  if (retailSectionBlockRef.value && retailImageWrapperRef.value) {
    gsap.from(retailImageWrapperRef.value, {
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: retailSectionBlockRef.value,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }

  // Animate Wholesale Section (Titles and Text)
  if (
    wholesaleSectionBlockRef.value &&
    wholesaleMainTitleRef.value &&
    wholesaleSubtitleRef.value &&
    wholesaleTextContentRef.value &&
    wholesaleSubtitleBorderRef.value
  ) {
    gsap.from(
      [
        wholesaleMainTitleRef.value,
        wholesaleSubtitleRef.value,
        wholesaleTextContentRef.value,
      ],
      {
        duration: 1,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: wholesaleSectionBlockRef.value,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate Wholesale Subtitle Border Line
    gsap.to(wholesaleSubtitleBorderRef.value, {
      scaleX: 1,
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: wholesaleSectionBlockRef.value,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    });
  }

  // Animate Wholesale Section Image (slides from right)
  if (wholesaleSectionBlockRef.value && wholesaleImageWrapperRef.value) {
    gsap.from(wholesaleImageWrapperRef.value, {
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: wholesaleSectionBlockRef.value,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }
});
</script>

<style>
#about {
  /* Consider renaming this ID if it's no longer just "about" */
  scroll-margin-top: 50px;
}
</style>
