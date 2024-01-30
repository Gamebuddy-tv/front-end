<template>
  <div
    :style="{borderRadius: '16px', backgroundColor: '#111', width: '168px', height: '64px', overflow: 'hidden', textAlign: 'center', fontSize: '22px', color: '#fff', fontFamily: 'Poppins', ...buttonStyle}"
  >
    <div
      :style="{position: 'absolute', top: 'calc(50% - 17px)', left: 'calc(50% - 42px)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '8px', ...frameDiv12Style}"
    >
      <img
        alt=""
        :src="buttonText"
        :style="{position: 'relative', width: '24px', height: '24px', overflow: 'hidden', flexShrink: '0', objectFit: 'cover', display: 'none', ...icons2Style}"
      />
      <div :style="{position: 'relative', fontWeight: '500', ...signUpStyle}">
        {{actionText}}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import type * as CSS from "csstype";

  export default defineComponent({
  name: "Button",
  props: {
  buttonText: { type: String  }
  ,actionText: { type: String  }
  ,buttonBorderRadius: { type: String  }
  ,buttonBackgroundColor: { type: String  }
  ,buttonWidth: { type: String  }
  ,buttonHeight: { type: String  }
  ,buttonPosition: { type: String  }
  ,buttonFlexShrink: { type: String  }
  ,buttonTop: { type: String  }
  ,buttonRight: { type: String  }
  ,buttonBottom: { type: String  }
  ,buttonLeft: { type: String  }
  ,frameDivTop: { type: String  }
  ,frameDivLeft: { type: String  }
  ,frameDivGap: { type: String  }
  ,iconsWidth: { type: String  }
  ,iconsHeight: { type: String  }
  ,signUpFontSize: { type: String  }
  ,signUpFontWeight: { type: String  }
  ,signUpFontFamily: { type: String  }
  },
  computed: {  buttonStyle(): CSS.Properties {
                    return {
                      borderRadius: this.buttonBorderRadius,
        backgroundColor: this.buttonBackgroundColor,
        width: this.buttonWidth,
        height: this.buttonHeight,
        position: this.buttonPosition,
        flexShrink: this.buttonFlexShrink,
        top: this.buttonTop,
        right: this.buttonRight,
        bottom: this.buttonBottom,
        left: this.buttonLeft
                    }
                  }
                ,  frameDiv12Style(): CSS.Properties {
                    return {
                      top: this.frameDivTop,
        left: this.frameDivLeft,
        gap: this.frameDivGap
                    }
                  }
                ,  icons2Style(): CSS.Properties {
                    return {
                      width: this.iconsWidth,
        height: this.iconsHeight
                    }
                  }
                ,  signUpStyle(): CSS.Properties {
                    return {
                      fontSize: this.signUpFontSize,
        fontWeight: this.signUpFontWeight,
        fontFamily: this.signUpFontFamily
                    }
                  }
                }})
</script>
