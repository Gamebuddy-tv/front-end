<template>
  <div
    :style="{borderRadius: '32px', backgroundColor: '#1b3360', height: '54px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0px 24px', boxSizing: 'border-box', textAlign: 'left', fontSize: '16px', color: '#fff', fontFamily: 'Sarabun', ...typePrimarySizeLargeStyle}"
  >
    <div
      :style="{flexShrink: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', ...text1Style}"
    >
      <div
        :style="{flexShrink: '0', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '8px', ...textDetailStyle}"
      >
        <img v-if
          ="iconLeft"
          alt=""
          :src="iconImageUrl"
          :style="{position: 'relative', width: '24px', height: '24px', objectFit: 'cover', display: 'none', ...defaultoutlinearrowRightIconStyle}"
        />
        <b
          :style="{position: 'relative', lineHeight: '24px', ...primaryButtonStyle}"
          >{{text}}</b
        >
        <img v-if
          ="iconRight"
          alt=""
          :src="iconTextId"
          :style="{position: 'relative', width: '24px', height: '24px', objectFit: 'cover', display: 'none', ...defaultoutlinearrowRightIcon1Style}"
        />
      </div>
      <div
        :style="{position: 'relative', backgroundColor: '#fff', width: '88px', height: '0px', ...minWidthLineStyle}"
      />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "TypePrimarySizeLarge",
    props: {
      iconImageUrl: { type: String },
      text: { type: String, default: "Primary Button" },
      iconTextId: { type: String },
      iconRight: { type: Boolean, default: false },
      iconLeft: { type: Boolean, default: false },
      typePrimarySizeLargeBorderRadius: { type: String },
      typePrimarySizeLargeBackgroundColor: { type: String },
      typePrimarySizeLargeHeight: { type: String },
      typePrimarySizeLargePadding: { type: String },
      typePrimarySizeLargePosition: { type: String }, // Update the type to 'Position | undefined'
      typePrimarySizeLargeWidth: { type: String },
      typePrimarySizeLargeTop: { type: String },
      typePrimarySizeLargeRight: { type: String },
      typePrimarySizeLargeBottom: { type: String },
      typePrimarySizeLargeLeft: { type: String },
      textFlexShrink: { type: String },
      textDetailGap: { type: String },
      defaultoutlinearrowRightIWidth: { type: String },
      defaultoutlinearrowRightIHeight: { type: String },
      defaultoutlinearrowRightIOverflow: { type: String },
      defaultoutlinearrowRightIFlexShrink: { type: String },
      primaryButtonFontSize: { type: String },
      primaryButtonLineHeight: { type: String },
      primaryButtonFontFamily: { type: String },
      primaryButtonColor: { type: String },
      defaultoutlinearrowRightIWidth1: { type: String },
      defaultoutlinearrowRightIHeight1: { type: String },
      defaultoutlinearrowRightIOverflow1: { type: String },
      defaultoutlinearrowRightIFlexShrink1: { type: String },
      minWidthLineWidth: { type: String },
      minWidthLineHeight: { type: String },
    },
    computed: {
      typePrimarySizeLargeStyle(): CSS.Properties {
        return {
          borderRadius: this.typePrimarySizeLargeBorderRadius,
          backgroundColor: this.typePrimarySizeLargeBackgroundColor,
          height: this.typePrimarySizeLargeHeight,
          padding: this.typePrimarySizeLargePadding,
          position: this.typePrimarySizeLargePosition,
          width: this.typePrimarySizeLargeWidth,
          top: this.typePrimarySizeLargeTop,
          right: this.typePrimarySizeLargeRight,
          bottom: this.typePrimarySizeLargeBottom,
          left: this.typePrimarySizeLargeLeft,
        }
      },
      text1Style(): CSS.Properties {
        return {
          flexShrink: this.textFlexShrink,
        }
      },
      textDetailStyle(): CSS.Properties {
        return {
          gap: this.textDetailGap,
        }
      },
      defaultoutlinearrowRightIconStyle(): CSS.Properties {
        return {
          width: this.defaultoutlinearrowRightIWidth,
          height: this.defaultoutlinearrowRightIHeight,
          overflow: this.defaultoutlinearrowRightIOverflow,
          flexShrink: this.defaultoutlinearrowRightIFlexShrink,
        }
      },
      primaryButtonStyle(): CSS.Properties {
        return {
          fontSize: this.primaryButtonFontSize,
          lineHeight: this.primaryButtonLineHeight,
          fontFamily: this.primaryButtonFontFamily,
          color: this.primaryButtonColor,
        }
      },
      defaultoutlinearrowRightIcon1Style(): CSS.Properties {
        return {
          width: this.defaultoutlinearrowRightIWidth1,
          height: this.defaultoutlinearrowRightIHeight1,
          overflow: this.defaultoutlinearrowRightIOverflow1,
          flexShrink: this.defaultoutlinearrowRightIFlexShrink1,
        }
      },
      minWidthLineStyle(): CSS.Properties {
        return {
          width: this.minWidthLineWidth,
          height: this.minWidthLineHeight,
        }
      },
    },
  })
</script>
