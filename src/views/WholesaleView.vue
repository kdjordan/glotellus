<template>
  <section
    ref="wholesalePageRef"
    class="container mx-auto py-16 px-4 md:px-12 lg:px-24 mt-16"
  >
    <!-- Intro -->
    <div class="text-center mb-16">
      <h2
        ref="wholesalePageTitleRef"
        class="text-size4xl font-bold text-glotellBlack font-sourceSansPro text-left"
      >
        Wholesale Services
      </h2>
      <div
        ref="borderLine"
        class="h-[2px] bg-glotellBlack origin-left"
        style="transform: scaleX(0.01)"
      ></div>
      <p ref="wholesalePageIntroRef" class="mt-4 text-left w-2/3">
        GloTell US and SkyTell FZ are the wholesale service providers within the
        V-Tell Group of Companies. We currently offer wholesale VOIP services to
        qualified telecom partners and resellers. <br />
        Our retail services are not currently offered to the public and will
        only become available after receiving the appropriate regulatory
        approvals. Until then, our focus remains on delivering flexible, secure,
        and high-quality voice solutions to our wholesale partners worldwide.
        <br />
        GloTell US focuses on all traffic within the +1 region (United States,
        Canada, etc...). <br />Meanwhile, SkyTell FZ manages international
        interconnections for the rest of the world. <br />Together, they deliver
        flexible, cost-effective, and secure voice solutions globally.
      </p>
    </div>

    <!-- Cards -->
    <div
      ref="wholesaleCardsContainerRef"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      <div
        class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
      >
        <h3
          class="text-sizeXl font-semibold font-sourceSansPro text-glotellBlack mb-3 font-agdasima"
        >
          Flexible Voice Products
        </h3>
        <ul class="list-disc pl-5 text-glotellGray-600 space-y-1.5">
          <li>NPA-NXX Routing</li>
          <li>U.S. Termination</li>
          <li>Flat-Rate Termination</li>
          <li>A-Z International (Fixed & Mobile)</li>
          <li>DNIS & LNP Billing Support</li>
          
        </ul>
      </div>

      <div
        class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
      >
        <h3
          class="text-sizeXl font-semibold font-sourceSansPro text-glotellBlack mb-3 font-agdasima"
        >
          Global Termination
        </h3>
        <p class="text-glotellGray-600">
          We deliver both US doemstic and A-Z international voice services to
          over 200 countries and territories, including high-demand destinations
          like the USA, Canada, Australia, UK, Europe, LATM, and Asia. Our Tier
          1 carrier partnerships ensure quality and reach.
        </p>
      </div>

      <div
        class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
      >
        <h3
          class="text-sizeXl font-semibold font-sourceSansPro text-glotellBlack mb-3 font-agdasima"
        >
          Fraud Mitigation
        </h3>
        <ul class="list-disc pl-5 text-glotellGray-600 space-y-1.5">
          <li>Daily Spend Limits</li>
          <li>International Fraud Protection</li>
          <li>Price Caps for Predictability</li>
          <li>Custom Trunk Rules</li>
          <li>Do Not Originate (DNO) Filtering</li>
          <li>Do Not Call (DNC) Filtering</li>
          <li>AI Fraud Detection and Monitoring</li>
        </ul>
      </div>

      <div
        class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
      >
        <h3
          class="text-sizeXl font-semibold font-sourceSansPro text-glotellBlack mb-3 font-agdasima"
        >
          Self-Service Portal
        </h3>
        <p class="text-glotellGray-600">
          Our intuitive portal gives you control over your telecom operations
          without waiting for support. Pay your invoices online via PayPal or
          Stripe, view your usage, and manage your trunks in real time. Get rate
          decks, check you usage, and download invoices or CDRs.
        </p>
      </div>

      <div
        class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
      >
        <h3
          class="text-sizeXl font-semibold font-sourceSansPro text-glotellBlack mb-3 font-agdasima"
        >
          Regulatory Guidance
        </h3>
        <p class="text-glotellGray-600">
          We support compliance with industry standards including TCPA, Robocall
          mitigation, and lawful intercept policies. Our team helps you navigate
          the evolving regulatory landscape with confidence.
        </p>
      </div>

      <div
        class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
      >
        <h3
          class="text-sizeXl font-semibold font-sourceSansPro text-glotellBlack mb-3 font-agdasima"
        >
          Pricing & Routing
        </h3>
        <p class="text-glotellGray-600">
          Whether you're a reseller, call center, or carrier, we tailor our
          outbound rate decks to suit your business model, destination mix, and
          quality expectations.
        </p>
      </div>
    </div>
    <div class="flex flex-col w-full border-tpt-8 items-end">
      <h2
        ref="interconnectTitleRef"
        class="text-size4xl font-bold text-glotellBlack font-sourceSansPro text-right mt-8"
      >
        Let's Interconnect
      </h2>
      <div
        ref="otherBorderLine"
        class="h-[2px] bg-glotellBlack origin-right w-full"
        style="transform: scaleX(0.01)"
      ></div>
      <p class="text-glotellGray-600 mt-4 w-full md:w-2/3 text-right">
        We're always looking for new partners to interconnect with. <br />If
        you're interested in exploring an interconnection, for either GloTell US
        or SkyTell FZ you can begin by downloading our KYC form below.
        <br />Simply fill out all fields in the form and sent it to :
        <a href="mailto:k.jordan@v-tell.com" class="text-glotellRed"
          >k.jordan@v-tell.com</a
        >.<br />
        Once we receive your form, we'll review it and get back to you as soon
        as possible.
      </p>

      <div class="flex gap-4 mt-4 justify-end w-full md:w-2/3">
        <a
          href="/forms/KYC.pdf"
          download="V-Tell_KYC_Form.pdf"
          class="text-glotellRed"
        >
          <button
            class="bg-glotellRed px-4 py-2 rounded hover:bg-glotellRed/80 text-glotellWhite hover:text-black transition duration-300 inline-block font-agdasima tracking-widest"
          >
            GET KYC FORM (PDF)
          </button>
        </a>
        <a
          href="/forms/KYC.docx"
          download="V-Tell_KYC_Form.docx"
          class="text-glotellRed"
        >
          <button
            class="bg-glotellRed px-4 py-2 rounded hover:bg-glotellRed/80 text-glotellWhite hover:text-black transition duration-300 inline-block font-agdasima tracking-widest"
          >
            GET KYC FORM (DOCX)
          </button>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useGsap } from "../composables/useGsap"; // Adjusted path

const gsap = useGsap();

const wholesalePageRef = ref(null);
const wholesalePageTitleRef = ref(null);
const wholesalePageIntroRef = ref(null);
const interconnectTitleRef = ref(null);
const wholesaleCardsContainerRef = ref(null);
const borderLine = ref(null);
const otherBorderLine = ref(null);

onMounted(() => {
  if (!wholesalePageRef.value) return;

  console.log("WholesaleView mounted"); // General mount log
  console.log("borderLine ref:", borderLine.value);
  console.log("otherBorderLine ref:", otherBorderLine.value); // Log for the specific border

  // Animate Title and Intro
  if (wholesalePageTitleRef.value && wholesalePageIntroRef.value) {
    gsap.from([wholesalePageTitleRef.value, wholesalePageIntroRef.value], {
      duration: 1,
      opacity: 0,
      y: 30,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: wholesalePageRef.value,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }

  // Animate Border Line
  if (borderLine.value) {
    gsap.to(borderLine.value, {
      scaleX: 1,
      duration: 3,
      ease: "power3.out",
    });
  }

  // Animate Cards
  if (wholesaleCardsContainerRef.value) {
    const cards = Array.from(
      wholesaleCardsContainerRef.value.children
    ) as HTMLElement[];
    if (cards.length > 0) {
      gsap.from(cards, {
        duration: 0.8,
        opacity: 0,
        y: 50,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: wholesaleCardsContainerRef.value,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }
  }

  // Animate the second border line (otherBorderLine) on scroll
  if (otherBorderLine.value) {
    gsap.to(otherBorderLine.value, {
      scaleX: 1,
      duration: 1, // Duration of the scroll range for scrubbing
      ease: "none",
      scrollTrigger: {
        trigger: otherBorderLine.value, // Trigger based on the border line itself
        start: "top 85%", // Start when 85% of the element is visible from the top
        end: "top 60%", // End when 60% of the element is visible from the top
        scrub: true,
        // markers: true, // Removed debugging markers
      },
    });
  }
});
</script>

<style scoped>
/* Tailwind handles most styling, specific overrides can go here if needed */
.container {
  /* Ensuring a max-width and centering if not already default via global styles */
  max-width: 1280px; /* Example: Adjust as per your design system */
}
</style>
