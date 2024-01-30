<template>
  <div
    :style="{width: '170px', height: '1024px', textAlign: 'left', fontSize: '16px', color: '#efefef', fontFamily: 'Roboto', ...property1Variant3Style}"
  >
    <div
      :style="{position: 'absolute', height: '100%', width: '100%', top: '0%', right: '0%', bottom: '0%', left: '0%', backgroundColor: '#000'}"
    />
    <div
      :style="{position: 'absolute', top: '19px', left: '19px', borderRadius: '4px', backgroundColor: '#fff', width: '48px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '8px 16px 8px 12px', boxSizing: 'border-box', ...playButtonStyle}"
    >
      <img
        alt=""
        src="/chevronright@2x.png"
        :style="{position: 'relative', width: '24px', height: '24px', overflow: 'hidden', flexShrink: '0', objectFit: 'contain', ...chevronRightIconStyle}"
      />
    </div>
    <div
      :style="{position: 'absolute', height: '2.15%', width: '36.47%', top: '30.57%', right: '36.47%', bottom: '67.29%', left: '27.06%'}"
    >
      <div
        :style="{position: 'absolute', height: '100%', width: '100%', top: '0%', right: '0%', bottom: '0%', left: '0%'}"
      >
        <div
          :style="{position: 'absolute', top: '0%', left: '0%', lineHeight: '140%', display: 'none', opacity: '0.6', ...search1Style}"
        >
          Search...
        </div>
      </div>
      <div
        :style="{position: 'absolute', height: '100%', width: '100%', top: '0%', right: '0%', bottom: '0%', left: '0%'}"
      >
        <div
          :style="{position: 'absolute', top: '0%', left: '0%', lineHeight: '140%', display: 'none', opacity: '0.6', ...search2Style}"
        >
          Search...
        </div>
      </div>
    </div>
    <div
      :style="{position: 'absolute', height: '38.57%', width: '58.82%', top: '27.93%', right: '21.18%', bottom: '33.5%', left: '20%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px', fontSize: '15px', color: '#fff', ...frameDivStyle}"
    >
      <div
        :style="{width: '150px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '0px 7px', boxSizing: 'border-box', ...frameDiv1Style}"
      >
        <div
          :style="{position: 'relative', lineHeight: '35px', textTransform: 'capitalize', fontWeight: '500', ...comediesStyle}"
        >
          Basketball
        </div>
      </div>
      <div
        :style="{width: '150px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '0px 7px', boxSizing: 'border-box', ...frameDiv2Style}"
      >
        <div
          :style="{position: 'relative', lineHeight: '35px', textTransform: 'capitalize', fontWeight: '500', ...comedies1Style}"
        >
          tennis
        </div>
      </div>
      <div
        :style="{width: '150px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '0px 7px', boxSizing: 'border-box', ...frameDiv3Style}"
      >
        <div
          :style="{position: 'relative', lineHeight: '35px', textTransform: 'capitalize', fontWeight: '500', ...comedies2Style}"
        >
          volleyball
        </div>
      </div>
      <div
        :style="{width: '150px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '0px 7px', boxSizing: 'border-box', ...frameDiv4Style}"
      >
        <div
          :style="{position: 'relative', lineHeight: '35px', textTransform: 'capitalize', fontWeight: '500', ...comedies3Style}"
        >
          badminton
        </div>
      </div>
      <div
        :style="{width: '150px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '0px 7px', boxSizing: 'border-box', ...frameDiv5Style}"
      >
        <div
          :style="{position: 'relative', lineHeight: '35px', textTransform: 'capitalize', fontWeight: '500', ...comedies4Style}"
        >
          swimming
        </div>
      </div>
      <div
        :style="{width: '150px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '0px 7px', boxSizing: 'border-box', ...frameDiv6Style}"
      >
        <div
          :style="{position: 'relative', lineHeight: '35px', textTransform: 'capitalize', fontWeight: '500', ...comedies5Style}"
        >
          boxing
        </div>
      </div>
      <div
        :style="{width: '150px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '0px 7px', boxSizing: 'border-box', ...frameDiv7Style}"
      >
        <div
          :style="{position: 'relative', lineHeight: '35px', textTransform: 'capitalize', fontWeight: '500', ...comedies6Style}"
        >
          Cricket
        </div>
      </div>
      <div
        :style="{width: '150px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '0px 7px', boxSizing: 'border-box', ...frameDiv8Style}"
      >
        <div
          :style="{position: 'relative', lineHeight: '35px', textTransform: 'capitalize', fontWeight: '500', ...comedies7Style}"
        >
          football
        </div>
      </div>
      <div
        :style="{width: '150px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '0px 7px', boxSizing: 'border-box', ...frameDiv9Style}"
      >
        <div
          :style="{position: 'relative', lineHeight: '35px', textTransform: 'capitalize', fontWeight: '500', ...comedies8Style}"
        >
          hockey
        </div>
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
  name: "Property1Variant3",
  props: {
  property1Variant3Width: { type: String  }
  ,property1Variant3Height: { type: String  }
  ,property1Variant3Position: { type: String  }
  ,property1Variant3Top: { type: String  }
  ,property1Variant3Left: { type: String  }
  ,playButtonTop: { type: String  }
  ,playButtonLeft: { type: String  }
  ,playButtonWidth: { type: String  }
  ,playButtonPadding: { type: String  }
  ,chevronRightIconWidth: { type: String  }
  ,chevronRightIconHeight: { type: String  }
  ,searchFontSize: { type: String  }
  ,searchFontSize1: { type: String  }
  ,frameDivGap: { type: String  }
  ,frameDivWidth: { type: String  }
  ,frameDivPadding: { type: String  }
  ,comediesFontSize: { type: String  }
  ,comediesLineHeight: { type: String  }
  ,frameDivWidth1: { type: String  }
  ,frameDivPadding1: { type: String  }
  ,comediesFontSize1: { type: String  }
  ,comediesLineHeight1: { type: String  }
  ,frameDivWidth2: { type: String  }
  ,frameDivPadding2: { type: String  }
  ,comediesFontSize2: { type: String  }
  ,comediesLineHeight2: { type: String  }
  ,frameDivWidth3: { type: String  }
  ,frameDivPadding3: { type: String  }
  ,comediesFontSize3: { type: String  }
  ,comediesLineHeight3: { type: String  }
  ,frameDivWidth4: { type: String  }
  ,frameDivPadding4: { type: String  }
  ,comediesFontSize4: { type: String  }
  ,comediesLineHeight4: { type: String  }
  ,frameDivWidth5: { type: String  }
  ,frameDivPadding5: { type: String  }
  ,comediesFontSize5: { type: String  }
  ,comediesLineHeight5: { type: String  }
  ,frameDivWidth6: { type: String  }
  ,frameDivPadding6: { type: String  }
  ,comediesFontSize6: { type: String  }
  ,comediesLineHeight6: { type: String  }
  ,frameDivWidth7: { type: String  }
  ,frameDivPadding7: { type: String  }
  ,comediesFontSize7: { type: String  }
  ,comediesLineHeight7: { type: String  }
  ,frameDivWidth8: { type: String  }
  ,frameDivPadding8: { type: String  }
  ,comediesFontSize8: { type: String  }
  ,comediesLineHeight8: { type: String  }
  },
  computed: {  property1Variant3Style(): CSS.Properties {
                    return {
                      width: this.property1Variant3Width,
        height: this.property1Variant3Height,
        position: this.property1Variant3Position,
        top: this.property1Variant3Top,
        left: this.property1Variant3Left
                    }
                  }
                ,  playButtonStyle(): CSS.Properties {
                    return {
                      top: this.playButtonTop,
        left: this.playButtonLeft,
        width: this.playButtonWidth,
        padding: this.playButtonPadding
                    }
                  }
                ,  chevronRightIconStyle(): CSS.Properties {
                    return {
                      width: this.chevronRightIconWidth,
        height: this.chevronRightIconHeight
                    }
                  }
                ,  search1Style(): CSS.Properties {
                    return {
                      fontSize: this.searchFontSize
                    }
                  }
                ,  search2Style(): CSS.Properties {
                    return {
                      fontSize: this.searchFontSize1
                    }
                  }
                ,  frameDivStyle(): CSS.Properties {
                    return {
                      gap: this.frameDivGap
                    }
                  }
                ,  frameDiv1Style(): CSS.Properties {
                    return {
                      width: this.frameDivWidth,
        padding: this.frameDivPadding
                    }
                  }
                ,  comediesStyle(): CSS.Properties {
                    return {
                      fontSize: this.comediesFontSize,
        lineHeight: this.comediesLineHeight
                    }
                  }
                ,  frameDiv2Style(): CSS.Properties {
                    return {
                      width: this.frameDivWidth1,
        padding: this.frameDivPadding1
                    }
                  }
                ,  comedies1Style(): CSS.Properties {
                    return {
                      fontSize: this.comediesFontSize1,
        lineHeight: this.comediesLineHeight1
                    }
                  }
                ,  frameDiv3Style(): CSS.Properties {
                    return {
                      width: this.frameDivWidth2,
        padding: this.frameDivPadding2
                    }
                  }
                ,  comedies2Style(): CSS.Properties {
                    return {
                      fontSize: this.comediesFontSize2,
        lineHeight: this.comediesLineHeight2
                    }
                  }
                ,  frameDiv4Style(): CSS.Properties {
                    return {
                      width: this.frameDivWidth3,
        padding: this.frameDivPadding3
                    }
                  }
                ,  comedies3Style(): CSS.Properties {
                    return {
                      fontSize: this.comediesFontSize3,
        lineHeight: this.comediesLineHeight3
                    }
                  }
                ,  frameDiv5Style(): CSS.Properties {
                    return {
                      width: this.frameDivWidth4,
        padding: this.frameDivPadding4
                    }
                  }
                ,  comedies4Style(): CSS.Properties {
                    return {
                      fontSize: this.comediesFontSize4,
        lineHeight: this.comediesLineHeight4
                    }
                  }
                ,  frameDiv6Style(): CSS.Properties {
                    return {
                      width: this.frameDivWidth5,
        padding: this.frameDivPadding5
                    }
                  }
                ,  comedies5Style(): CSS.Properties {
                    return {
                      fontSize: this.comediesFontSize5,
        lineHeight: this.comediesLineHeight5
                    }
                  }
                ,  frameDiv7Style(): CSS.Properties {
                    return {
                      width: this.frameDivWidth6,
        padding: this.frameDivPadding6
                    }
                  }
                ,  comedies6Style(): CSS.Properties {
                    return {
                      fontSize: this.comediesFontSize6,
        lineHeight: this.comediesLineHeight6
                    }
                  }
                ,  frameDiv8Style(): CSS.Properties {
                    return {
                      width: this.frameDivWidth7,
        padding: this.frameDivPadding7
                    }
                  }
                ,  comedies7Style(): CSS.Properties {
                    return {
                      fontSize: this.comediesFontSize7,
        lineHeight: this.comediesLineHeight7
                    }
                  }
                ,  frameDiv9Style(): CSS.Properties {
                    return {
                      width: this.frameDivWidth8,
        padding: this.frameDivPadding8
                    }
                  }
                ,  comedies8Style(): CSS.Properties {
                    return {
                      fontSize: this.comediesFontSize8,
        lineHeight: this.comediesLineHeight8
                    }
                  }
                }})
</script>
