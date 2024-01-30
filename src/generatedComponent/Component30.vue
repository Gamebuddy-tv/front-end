<template>
  <div
    :style="{position: 'relative', width: '11.39rem', height: '13.44rem', textAlign: 'center', fontSize: '1.13rem', color: '#fff', fontFamily: 'Roboto', ...component30Style}"
  >
    <img
      alt=""
      :src="imageDescription"
      :style="{position: 'absolute', height: '84.74%', width: '99.89%', top: '0%', right: '0.11%', bottom: '15.26%', left: '0%', borderRadius: '50%', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'cover', ...ellipseIconStyle}"
    />
    <div
      :style="{position: 'absolute', width: '75.03%', top: '91.12%', left: '12.51%', fontWeight: '500', display: 'inline-block', ...cricketStyle}"
    >
      {{sportImageUrl}}
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import type * as CSS from "csstype";

  export default defineComponent({
  name: "Component30",
  props: {
  imageDescription: { type: String  }
  ,sportImageUrl: { type: String  }
  ,propOpacity: { type: String  }
  ,propOpacity1: { type: String  }
  ,propOpacity2: { type: String  }
  ,propFontWeight: { type: String  }
  },
  computed: {  component30Style(): CSS.Properties {
                    return {
                      opacity: this.propOpacity
                    }
                  }
                ,  ellipseIconStyle(): CSS.Properties {
                    return {
                      opacity: this.propOpacity1
                    }
                  }
                ,  cricketStyle(): CSS.Properties {
                    return {
                      opacity: this.propOpacity2,
        fontWeight: this.propFontWeight
                    }
                  }
                }})
</script>
