<template>
  <div
    :style="{width: '600px', height: '922px', overflow: 'hidden', ...property1SLIDE1Style}"
  >
    <img
      alt=""
      src="/mask-group@2x.png"
      :style="{position: 'absolute', top: '0px', left: '0px', width: '600px', height: '300px', objectFit: 'cover', ...maskGroupIconStyle}"
    />
    <img
      alt=""
      src="/mask-group@2x.png"
      :style="{position: 'absolute', top: '314px', left: '0px', width: '600px', height: '300px', objectFit: 'cover', ...maskGroupIcon1Style}"
    />
    <img
      alt=""
      src="/mask-group@2x.png"
      :style="{position: 'absolute', top: '628px', left: '0px', width: '600px', height: '300px', objectFit: 'cover', ...maskGroupIcon2Style}"
    />
    <img
      alt=""
      src="/mask-group@2x.png"
      :style="{position: 'absolute', top: '942px', left: '0px', width: '600px', height: '300px', objectFit: 'cover', ...maskGroupIcon3Style}"
    />
    <img
      alt=""
      src="/mask-group@2x.png"
      :style="{position: 'absolute', top: '1256px', left: '0px', width: '600px', height: '300px', objectFit: 'cover', ...maskGroupIcon4Style}"
    />
    <img
      alt=""
      src="/mask-group@2x.png"
      :style="{position: 'absolute', top: '1570px', left: '0px', width: '600px', height: '300px', objectFit: 'cover', ...maskGroupIcon5Style}"
    />
    <img
      alt=""
      src="/mask-group@2x.png"
      :style="{position: 'absolute', top: '1884px', left: '0px', width: '600px', height: '300px', objectFit: 'cover', ...maskGroupIcon6Style}"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import type * as CSS from "csstype"; const getStyleValue = (key: string, value: string | number | undefined) => {
                if(value === undefined || value === '') return;
                return {[key]: value};
              }

  export default defineComponent({
  name: "Property1SLIDE1",
  props: {
  property1SLIDE1Width: { type: String  }
  ,property1SLIDE1Height: { type: String  }
  ,property1SLIDE1Position: { type: String  }
  ,property1SLIDE1Top: { type: String  }
  ,property1SLIDE1Left: { type: String  }
  ,maskGroupIconTop: { type: String  }
  ,maskGroupIconLeft: { type: String  }
  ,maskGroupIconWidth: { type: String  }
  ,maskGroupIconHeight: { type: String  }
  ,maskGroupIconTop1: { type: String  }
  ,maskGroupIconLeft1: { type: String  }
  ,maskGroupIconWidth1: { type: String  }
  ,maskGroupIconHeight1: { type: String  }
  ,maskGroupIconTop2: { type: String  }
  ,maskGroupIconLeft2: { type: String  }
  ,maskGroupIconWidth2: { type: String  }
  ,maskGroupIconHeight2: { type: String  }
  ,maskGroupIconTop3: { type: String  }
  ,maskGroupIconLeft3: { type: String  }
  ,maskGroupIconWidth3: { type: String  }
  ,maskGroupIconHeight3: { type: String  }
  ,maskGroupIconTop4: { type: String  }
  ,maskGroupIconLeft4: { type: String  }
  ,maskGroupIconWidth4: { type: String  }
  ,maskGroupIconHeight4: { type: String  }
  ,maskGroupIconTop5: { type: String  }
  ,maskGroupIconLeft5: { type: String  }
  ,maskGroupIconWidth5: { type: String  }
  ,maskGroupIconHeight5: { type: String  }
  ,maskGroupIconTop6: { type: String  }
  ,maskGroupIconLeft6: { type: String  }
  ,maskGroupIconWidth6: { type: String  }
  ,maskGroupIconHeight6: { type: String  }
  },
  computed: {  property1SLIDE1Style(): CSS.Properties {
                    return {
                      width: this.property1SLIDE1Width,
        height: this.property1SLIDE1Height,
        position: this.property1SLIDE1Position,
        top: this.property1SLIDE1Top,
        left: this.property1SLIDE1Left
                    }
                  }
                ,  maskGroupIconStyle(): CSS.Properties {
                    return {
                      top: this.maskGroupIconTop,
        left: this.maskGroupIconLeft,
        width: this.maskGroupIconWidth,
        height: this.maskGroupIconHeight
                    }
                  }
                ,  maskGroupIcon1Style(): CSS.Properties {
                    return {
                      top: this.maskGroupIconTop1,
        left: this.maskGroupIconLeft1,
        width: this.maskGroupIconWidth1,
        height: this.maskGroupIconHeight1
                    }
                  }
                ,  maskGroupIcon2Style(): CSS.Properties {
                    return {
                      top: this.maskGroupIconTop2,
        left: this.maskGroupIconLeft2,
        width: this.maskGroupIconWidth2,
        height: this.maskGroupIconHeight2
                    }
                  }
                ,  maskGroupIcon3Style(): CSS.Properties {
                    return {
                      top: this.maskGroupIconTop3,
        left: this.maskGroupIconLeft3,
        width: this.maskGroupIconWidth3,
        height: this.maskGroupIconHeight3
                    }
                  }
                ,  maskGroupIcon4Style(): CSS.Properties {
                    return {
                      top: this.maskGroupIconTop4,
        left: this.maskGroupIconLeft4,
        width: this.maskGroupIconWidth4,
        height: this.maskGroupIconHeight4
                    }
                  }
                ,  maskGroupIcon5Style(): CSS.Properties {
                    return {
                      top: this.maskGroupIconTop5,
        left: this.maskGroupIconLeft5,
        width: this.maskGroupIconWidth5,
        height: this.maskGroupIconHeight5
                    }
                  }
                ,  maskGroupIcon6Style(): CSS.Properties {
                    return {
                      top: this.maskGroupIconTop6,
        left: this.maskGroupIconLeft6,
        width: this.maskGroupIconWidth6,
        height: this.maskGroupIconHeight6
                    }
                  }
                }})
</script>
