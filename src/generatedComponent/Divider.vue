<template>
  <div
    :style="{width: '669px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: '23px', textAlign: 'left', fontSize: '24px', color: '#666', fontFamily: 'Avenir', ...dividerStyle}"
  >
    <div
      :style="{flex: '1', position: 'relative', backgroundColor: 'rgba(102, 102, 102, 0.25)', height: '2px', ...divider1Style}"
    />
    <div :style="{position: 'relative', ...oRStyle}">OR</div>
    <div
      :style="{flex: '1', position: 'relative', backgroundColor: 'rgba(102, 102, 102, 0.25)', height: '2px', ...divider2Style}"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import type * as CSS from "csstype";

  export default defineComponent({
  name: "Divider",
  props: {
  dividerWidth: { type: String  }
  ,dividerGap: { type: String  }
  ,dividerFlexShrink: { type: String  }
  ,dividerBackgroundColor: { type: String  }
  ,dividerHeight: { type: String  }
  ,dividerOpacity: { type: String  }
  ,oRFontSize: { type: String  }
  ,oRFontFamily: { type: String  }
  ,oRColor: { type: String  }
  ,dividerBackgroundColor1: { type: String  }
  ,dividerHeight1: { type: String  }
  ,dividerOpacity1: { type: String  }
  },
  computed: {  dividerStyle(): CSS.Properties {
                    return {
                      width: this.dividerWidth,
        gap: this.dividerGap,
        flexShrink: this.dividerFlexShrink
                    }
                  }
                ,  divider1Style(): CSS.Properties {
                    return {
                      backgroundColor: this.dividerBackgroundColor,
        height: this.dividerHeight,
        opacity: this.dividerOpacity
                    }
                  }
                ,  oRStyle(): CSS.Properties {
                    return {
                      fontSize: this.oRFontSize,
        fontFamily: this.oRFontFamily,
        color: this.oRColor
                    }
                  }
                ,  divider2Style(): CSS.Properties {
                    return {
                      backgroundColor: this.dividerBackgroundColor1,
        height: this.dividerHeight1,
        opacity: this.dividerOpacity1
                    }
                  }
                }})
</script>
