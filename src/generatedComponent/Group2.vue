<template>
  <img
    alt=""
    :src="imageDimensions"
    :style="{width: '80px', height: '80px', objectFit: 'cover', ...groupIconStyle}"
  />
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import type * as CSS from "csstype";
  import type { Position } from "csstype";

  export default defineComponent({
    name: "Group2",
    props: {
      imageDimensions: { type: String },
      groupIconWidth: { type: String },
      groupIconHeight: { type: String },
      groupIconPosition: { type: String },
      groupIconTop: { type: String },
      groupIconLeft: { type: String },
    },
    computed: {
      groupIconStyle(): CSS.Properties {
        return {
          width: this.groupIconWidth,
          height: this.groupIconHeight,
          position: this.groupIconPosition as Position,
          top: this.groupIconTop as Position,
          left: this.groupIconLeft as Position,
        }
      }
    }
  })
</script>
