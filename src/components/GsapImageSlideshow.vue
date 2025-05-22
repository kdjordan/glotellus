<template>
  <div
    class="relative w-full overflow-hidden"
    :style="{ 'padding-bottom': aspectRatioPadding }"
  >
    <img
      v-for="(path, index) in imagePaths"
      :key="index"
      :src="path"
      :alt="`Slide ${index + 1}`"
      class="absolute top-0 left-0 w-full h-full object-cover"
      :ref="(el) => setImageRef(el, index)"
      @load="index === 0 ? calculateAspectRatio($event.target) : null"
    />
    <div
      v-if="!aspectRatioPadding"
      class="absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center"
    >
      <!-- Optional: Placeholder for when aspect ratio is not yet determined -->
      <span class="text-gray-500 text-sm">Loading image...</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from "vue";
import { useGsap } from "../composables/useGsap";

const props = defineProps({
  imagePaths: {
    type: Array,
    required: true,
    default: () => [],
  },
  slideDuration: {
    type: Number,
    default: 5000, // milliseconds
  },
  transitionSpeed: {
    type: Number,
    default: 1, // seconds
  },
});

const gsap = useGsap();
const imageRefs = ref([]);
const currentIndex = ref(0);
let intervalId = null;
const aspectRatioPadding = ref(null); // e.g., '56.25%' for 16:9

const calculateAspectRatio = (imgElement) => {
  if (
    imgElement &&
    imgElement.naturalWidth > 0 &&
    imgElement.naturalHeight > 0
  ) {
    const ratio = (imgElement.naturalHeight / imgElement.naturalWidth) * 100;
    aspectRatioPadding.value = `${ratio}%`;
  } else if (!aspectRatioPadding.value) {
    // Fallback if the first image fails to load or has no dimensions
    aspectRatioPadding.value = "56.25%"; // Default to 16:9
  }
};

const setImageRef = (el, index) => {
  if (el) {
    imageRefs.value[index] = el;
    // If it's the first image and it might already be loaded (e.g., from cache)
    if (index === 0 && el.complete && el.naturalWidth > 0) {
      calculateAspectRatio(el);
    }
  }
};

const initializeSlideshow = () => {
  if (props.imagePaths.length > 0 && imageRefs.value.length > 0) {
    imageRefs.value.forEach((img, index) => {
      if (index === currentIndex.value) {
        gsap.set(img, {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          filter: "none",
        });
      } else {
        gsap.set(img, {
          opacity: 0,
          clipPath: "inset(0% 0% 0% 100%)",
          filter: "none",
        }); // Prepare to wipe in from right
      }
    });

    const firstImageEl = imageRefs.value[0];
    if (firstImageEl) {
      if (firstImageEl.complete && firstImageEl.naturalWidth > 0) {
        calculateAspectRatio(firstImageEl);
      } else if (!firstImageEl.complete) {
        // If not loaded, the @load event will handle it
        // but we can set a temporary one or let the placeholder show
        if (!aspectRatioPadding.value) aspectRatioPadding.value = "56.25%"; // Temporary fallback
      } else if (!aspectRatioPadding.value) {
        aspectRatioPadding.value = "56.25%"; // Fallback if naturalWidth is 0 after load
      }
    } else if (!aspectRatioPadding.value) {
      aspectRatioPadding.value = "56.25%"; // Fallback if no images
    }

    startSlideshow();
  } else {
    aspectRatioPadding.value = "56.25%"; // Fallback if no images paths
  }
};

onMounted(() => {
  nextTick(() => {
    // Ensure refs are populated
    initializeSlideshow();
  });
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});

watch(
  () => props.imagePaths,
  () => {
    if (intervalId) clearInterval(intervalId);
    currentIndex.value = 0;
    aspectRatioPadding.value = null; // Reset for new images
    // Clear old refs before new images are processed by v-for
    imageRefs.value = [];
    nextTick(() => {
      initializeSlideshow();
    });
  },
  { deep: true, immediate: props.imagePaths.length > 0 } // immediate only if there are paths initially
);

const transitionToNextImage = () => {
  if (
    props.imagePaths.length <= 1 ||
    imageRefs.value.length < props.imagePaths.length
  )
    return;

  const currentImage = imageRefs.value[currentIndex.value];
  const nextIndex = (currentIndex.value + 1) % props.imagePaths.length;
  const nextImage = imageRefs.value[nextIndex];

  if (!currentImage || !nextImage) {
    console.warn("Slideshow transition skipped: image refs not ready.");
    return;
  }

  const tl = gsap.timeline();

  // Current image (outgoing): Wipes out to the left
  tl.to(currentImage, {
    clipPath: "inset(0% 100% 0% 0%)", // Right clip moves from 0 to 100%
    opacity: 0,
    duration: props.transitionSpeed,
    ease: "power2.inOut",
    onComplete: () => {
      // Reset this image so it's ready to wipe in from the right next time
      gsap.set(currentImage, {
        opacity: 0,
        clipPath: "inset(0% 0% 0% 100%)",
        filter: "none",
      });
    },
  });

  // Next image (incoming): Wipes in from the right
  tl.fromTo(
    nextImage,
    { opacity: 0, clipPath: "inset(0% 0% 0% 100%)", filter: "none" }, // Explicit from state
    {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)", // Left clip moves from 100% to 0
      duration: props.transitionSpeed,
      ease: "power2.inOut",
    },
    `-=${props.transitionSpeed * 0.7}` // Overlap start of this animation by 70% of its duration
  );

  currentIndex.value = nextIndex;
};

const startSlideshow = () => {
  if (props.imagePaths.length > 1) {
    if (intervalId) {
      clearInterval(intervalId);
    }
    intervalId = setInterval(transitionToNextImage, props.slideDuration);
  }
};
</script>

<style scoped>
/* Styles for the placeholder, if you choose to use one */
.bg-gray-200 {
  background-color: #e5e7eb; /* Example color */
}
.text-gray-500 {
  color: #6b7280; /* Example color */
}
</style>
