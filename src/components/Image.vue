<template>
  <img :src="source" v-lazy="source" />
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    src: {
      type: String,
    },
    size: {
      type: [Number, String],
      default: "original",
    },
    staticImg:{
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const { size, src, staticImg } = props;

    const imageSize = computed(() =>
      typeof size === "string" ? size : `w${size}`
    );

    return {
      source: props.staticImg != true ? `https://image.tmdb.org/t/p/${imageSize.value}${src}` : src, // Expects the thumbnail to be part of the data
    };
  },
};
</script>

<style>
img[lazy="loaded"] {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-name: fadeIn;
}
</style>