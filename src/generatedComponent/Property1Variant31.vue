<template>
  <div
    :style="{width: '400px', height: '321px', textAlign: 'center', fontSize: '18px', color: '#fff', fontFamily: 'Roboto', ...property1Variant31Style}"
    @click="onImageContainer8Click"
  >

    <p> PROPERTY 31 </p>

    <img
      :style="{position: 'absolute', height: '71.65%', width: '100%', top: '0%', right: '0%', bottom: '28.35%', left: '0%', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'cover'}"
      alt=""
      :src="imageDimensions"
    />

    <div
      :style="{position: 'absolute', top: '74.77%', left: '28%', width: '0px', height: '0px', ...groupDiv2Style}"
    >
      <div
        :style="{position: 'absolute', letterSpacing: '0.26px', lineHeight: '35px', fontWeight: '500', display: 'none', ...loremIpsumDolor1Style}"
      >
        PROPERTY
      </div>
      <div
        :style="{position: 'absolute', fontSize: '14px', letterSpacing: '0.26px', lineHeight: '24.53px', fontWeight: '500', color: '#ff0000', display: 'none', ...sLVsBAN1Style}"
      >
        SL vs BAN Live Updates(AP)
      </div>
      <div
        :style="{position: 'absolute', fontSize: '62px', letterSpacing: '0.39px', lineHeight: '52.06px', fontWeight: '900', display: 'none', ...div2Style}"
      >
        2
      </div>
    </div>
    <img
      :style="{position: 'absolute', height: '14.33%', width: '11.5%', top: '28.66%', right: '44.25%', bottom: '57.01%', left: '44.25%', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'cover', display: 'none'}"
      v-if="!groupIcon"
      alt=""
      :src="imageId"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "Property1Variant31",
    props: {
      imageDimensions: { type: String },
      imageId: { type: String },
      groupIcon: { type: Boolean },
      property1Variant3Width: { type: [String, Number, Boolean] },
      property1Variant3Height: { type: [String, Number, Boolean] },
      property1Variant3Position: { type: String as () => CSS.Position },
      property1Variant3Cursor: { type: String },
      groupDivWidth: { type: [String, Number, Boolean] },
      groupDivHeight: { type: [String, Number, Boolean] },
      loremIpsumDolorFontSize: { type: String },
      loremIpsumDolorLineHeight: { type: String },
      sLVsBANFontSize: { type: String },
      sLVsBANLineHeight: { type: String },
      divFontSize: { type: String },
      divLineHeight: { type: String },
      onImageContainer8Click: { type: Function as () => (payload: MouseEvent) => void },
    },
    computed: {
      property1Variant31Style(): CSS.Properties {
        return {
          width: this.property1Variant3Width,
          height: this.property1Variant3Height,
          position: this.property1Variant3Position,
          cursor: this.property1Variant3Cursor,
        }
      },
      groupDiv2Style(): CSS.Properties {
        return {
          width: this.groupDivWidth,
          height: this.groupDivHeight,
        }
      },
      loremIpsumDolor1Style(): CSS.Properties {
        return {
          fontSize: this.loremIpsumDolorFontSize,
          lineHeight: this.loremIpsumDolorLineHeight,
        }
      },
      sLVsBAN1Style(): CSS.Properties {
        return {
          fontSize: this.sLVsBANFontSize,
          lineHeight: this.sLVsBANLineHeight,
        }
      },
      div2Style(): CSS.Properties {
        return {
          fontSize: this.divFontSize,
          lineHeight: this.divLineHeight,
        }
      },
    },
  })
</script>
