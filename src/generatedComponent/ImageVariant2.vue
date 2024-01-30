<template>
  <div
    :style="{width: '515px', height: '415.1px', textAlign: 'center', fontSize: '18px', color: '#fff', fontFamily: 'Roboto', ...imageVariant2Style}"
  >
    <img
      :style="{position: 'absolute', height: '91.23%', width: '100%', top: '0%', right: '0%', bottom: '8.77%', left: '0%', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'cover'}"
      alt=""
      :src="imageDimensions"
    />
    <div
      :style="{position: 'absolute', height: '14.94%', top: '72.97%', bottom: '12.09%', left: '40.1px', width: '284.4px', ...groupDiv1Style}"
    >
      <div
        :style="{position: 'absolute', top: '3.87%', left: '55.4px', letterSpacing: '0.26px', lineHeight: '27px', fontWeight: '500', textAlign: 'left', ...loremIpsumDolorStyle}"
      >
        Lorem ipsum dolor sit amet
      </div>
      <div
        :style="{position: 'absolute', top: '59.84%', left: '19.83%', fontSize: '14px', letterSpacing: '0.23px', lineHeight: '21.3px', fontWeight: '500', opacity: '0.4', ...sLVsBANStyle}"
      >
        SL vs BAN Live Updates(AP)
      </div>
      <div
        :style="{position: 'absolute', top: '0%', left: '0%', fontSize: '73.5px', letterSpacing: '0.46px', lineHeight: '61.75px', fontWeight: '900', opacity: '0.8', ...div1Style}"
      >
        2
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import type * as CSS from "csstype"; const getStyleValue = (key: string, value: string | number | undefined) => {
                if(value === undefined || value === '') return;
                return {[key]: value};
              }

  export default defineComponent({
  name: "ImageVariant2",
  props: {
  imageDimensions: { type: String  }
  ,imageVariant2Width: { type: String  }
  ,imageVariant2Height: { type: String  }
  ,imageVariant2Position: { type: String  }
  ,imageVariant2Top: { type: String  }
  ,imageVariant2Right: { type: String  }
  ,imageVariant2Bottom: { type: String  }
  ,imageVariant2Left: { type: String  }
  ,groupDivLeft: { type: String  }
  ,groupDivWidth: { type: String  }
  ,loremIpsumDolorLeft: { type: String  }
  ,loremIpsumDolorFontSize: { type: String  }
  ,loremIpsumDolorLineHeight: { type: String  }
  ,sLVsBANFontSize: { type: String  }
  ,sLVsBANLineHeight: { type: String  }
  ,divFontSize: { type: String  }
  ,divLineHeight: { type: String  }
  },
  computed: {  imageVariant2Style(): CSS.Properties {
                    return {
                      width: this.imageVariant2Width,
        height: this.imageVariant2Height,
        position: this.imageVariant2Position,
        top: this.imageVariant2Top,
        right: this.imageVariant2Right,
        bottom: this.imageVariant2Bottom,
        left: this.imageVariant2Left
                    }
                  }
                ,  groupDiv1Style(): CSS.Properties {
                    return {
                      left: this.groupDivLeft,
        width: this.groupDivWidth
                    }
                  }
                ,  loremIpsumDolorStyle(): CSS.Properties {
                    return {
                      left: this.loremIpsumDolorLeft,
        fontSize: this.loremIpsumDolorFontSize,
        lineHeight: this.loremIpsumDolorLineHeight
                    }
                  }
                ,  sLVsBANStyle(): CSS.Properties {
                    return {
                      fontSize: this.sLVsBANFontSize,
        lineHeight: this.sLVsBANLineHeight
                    }
                  }
                ,  div1Style(): CSS.Properties {
                    return {
                      fontSize: this.divFontSize,
        lineHeight: this.divLineHeight
                    }
                  }
                }})
</script>
