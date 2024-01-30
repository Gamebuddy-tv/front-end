<template>
  <img
    alt=""
    :src="dimensions"
    :style="{width: '93px', height: '65.1px', objectFit: 'cover', ...property1DefaultIcon1Style}"
  />
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import type * as CSS from "csstype"; const getStyleValue = (key: string, value: string | number | undefined) => {
                if(value === undefined || value === '') return;
                return {[key]: value};
              }

  export default defineComponent({
  name: "Property1Default2",
  props: {
  dimensions: { type: String  }
  ,property1DefaultIconWidth: { type: String  }
  ,property1DefaultIconHeight: { type: String  }
  ,property1DefaultIconPosition: { type: String  }
  ,property1DefaultIconTop: { type: String  }
  ,property1DefaultIconRight: { type: String  }
  ,property1DefaultIconBottom: { type: String  }
  ,property1DefaultIconLeft: { type: String  }
  ,property1DefaultIconMaxWidth: { type: String  }
  ,property1DefaultIconOverflow: { type: String  }
  ,property1DefaultIconMaxHeight: { type: String  }
  },
  computed: {  property1DefaultIcon1Style(): CSS.Properties {
                    return {
                      width: this.property1DefaultIconWidth,
        height: this.property1DefaultIconHeight,
        position: this.property1DefaultIconPosition,
        top: this.property1DefaultIconTop,
        right: this.property1DefaultIconRight,
        bottom: this.property1DefaultIconBottom,
        left: this.property1DefaultIconLeft,
        maxWidth: this.property1DefaultIconMaxWidth,
        overflow: this.property1DefaultIconOverflow,
        maxHeight: this.property1DefaultIconMaxHeight
                    }
                  }
                }})
</script>
