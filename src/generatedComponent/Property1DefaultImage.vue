<template>
  <img
    alt=""
    src="/property-1default@2x.png"
    :style="{width: '1330px', height: '570px', objectFit: 'cover', ...property1DefaultIconStyle}"
  />
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import type * as CSS from "csstype"; const getStyleValue = (key: string, value: string | number | undefined) => {
                if(value === undefined || value === '') return;
                return {[key]: value};
              }

  export default defineComponent({
  name: "Property1DefaultImage",
  props: {
  property1DefaultIconWidth: { type: String  }
  ,property1DefaultIconHeight: { type: String  }
  ,property1DefaultIconPosition: { type: String  }
  ,property1DefaultIconTop: { type: String  }
  ,property1DefaultIconLeft: { type: String  }
  },
  computed: {  property1DefaultIconStyle(): CSS.Properties {
                    return {
                      width: this.property1DefaultIconWidth,
        height: this.property1DefaultIconHeight,
        position: this.property1DefaultIconPosition,
        top: this.property1DefaultIconTop,
        left: this.property1DefaultIconLeft
                    }
                  }
                }})
</script>
