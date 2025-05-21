<template>
  <svg
    ref="iconSvg"
    xmlns="http://www.w3.org/2000/svg"
    xml:space="preserve"
    style="
      fill-rule: evenodd;
      clip-rule: evenodd;
      stroke-linecap: round;
      stroke-linejoin: round;
      transform-origin: center; /* Ensures scaling is from the center */
    "
    viewBox="0 0 136 89"
  >
    <path
      d="M8.288 15.038c2.036-2.036 5.388-2.036 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.753.753 0 0 1 1.06 0Z"
      :style="{
        fill: 'none',
        fillRule: 'nonzero',
        stroke: color,
        strokeWidth: '1.5px',
      }"
      transform="matrix(0 -3.68618 3.68618 0 0 88.468)"
    />
    <path
      d="M8.288 15.038c2.036-2.036 5.388-2.036 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.753.753 0 0 1 1.06 0Z"
      :style="{
        fill: 'none',
        fillRule: 'nonzero',
        stroke: color,
        strokeWidth: '1.5px',
      }"
      transform="matrix(0 3.68618 -3.68618 0 135.627 0)"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted, ref } from "vue";
import { useGsap } from "@/composables/useGsap"; // Assuming you have this composable

export default defineComponent({
  name: "GlotellMarkIcon",
  props: {
    color: {
      type: String as PropType<string>,
      default: "#fafafa",
    },
    animatePulse: {
      type: Boolean as PropType<boolean>,
      default: false, // Default to no animation, can be enabled via prop
    },
  },
  setup(props) {
    const gsap = useGsap();
    const iconSvg = ref<SVGElement | null>(null);

    onMounted(() => {
      if (props.animatePulse && iconSvg.value) {
        gsap.to(iconSvg.value, {
          scale: 1.25,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    });

    return {
      iconSvg,
    };
  },
});
</script>

<style scoped>
/* Add any specific styles for your icon component here */
</style>
