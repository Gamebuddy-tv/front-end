<template>
  <div
    :style="{borderRadius: '40px', backgroundColor: '#fff', border: '1px solid #333', boxSizing: 'border-box', width: '578px', height: '72px', overflow: 'hidden', textAlign: 'left', fontSize: '24px', color: '#333', fontFamily: 'Avenir', ...property1AppleStyle}"
  >
    <div
      :style="{position: 'absolute', top: 'calc(50% - 17px)', left: 'calc(50% - 135px)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '16px', ...frameDiv11Style}"
    >
      <img
        alt=""
        :src="socialButtonIcon"
        :style="{position: 'relative', width: '32px', height: '32px', overflow: 'hidden', flexShrink: '0', objectFit: 'cover', ...socialMediaLogoStyle}"
      />
      <div :style="{position: 'relative', ...continueWithAppleStyle}">
        {{loginButtonIcon}}
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
  name: "Property1Apple",
  props: {
  socialButtonIcon: { type: String  }
  ,loginButtonIcon: { type: String  }
  ,property1AppleBorderRadius: { type: String  }
  ,property1AppleWidth: { type: String  }
  ,property1AppleHeight: { type: String  }
  ,property1ApplePosition: { type: String  }
  ,property1AppleFlexShrink: { type: String  }
  ,frameDivTop: { type: String  }
  ,frameDivLeft: { type: String  }
  ,frameDivGap: { type: String  }
  ,socialMediaLogoWidth: { type: String  }
  ,socialMediaLogoHeight: { type: String  }
  ,continueWithAppleFontSize: { type: String  }
  ,continueWithAppleFontFamily: { type: String  }
  },
  computed: {  property1AppleStyle(): CSS.Properties {
                    return {
                      borderRadius: this.property1AppleBorderRadius,
        width: this.property1AppleWidth,
        height: this.property1AppleHeight,
        position: this.property1ApplePosition,
        flexShrink: this.property1AppleFlexShrink
                    }
                  }
                ,  frameDiv11Style(): CSS.Properties {
                    return {
                      top: this.frameDivTop,
        left: this.frameDivLeft,
        gap: this.frameDivGap
                    }
                  }
                ,  socialMediaLogoStyle(): CSS.Properties {
                    return {
                      width: this.socialMediaLogoWidth,
        height: this.socialMediaLogoHeight
                    }
                  }
                ,  continueWithAppleStyle(): CSS.Properties {
                    return {
                      fontSize: this.continueWithAppleFontSize,
        fontFamily: this.continueWithAppleFontFamily
                    }
                  }
                }})
</script>
