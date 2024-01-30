<template>
  <div
    :style="{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '0px 0px 0px 8px', gap: '2px', textAlign: 'left', fontSize: '16px', color: '#111', fontFamily: 'Poppins', ...dropdownStyle}"
  >
    <div :style="{position: 'relative', ...textStyle}">{{displayText}}</div>
    <img
      alt=""
      :src="iconImageUrl"
      :style="{position: 'relative', width: '24px', height: '24px', overflow: 'hidden', flexShrink: '0', objectFit: 'cover', ...icons1Style}"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import type * as CSS from "csstype";

  export default defineComponent({
  name: "Dropdown",
  props: {
  displayText: { type: String  }
  ,iconImageUrl: { type: String  }
  ,dropdownPadding: { type: String  }
  ,dropdownGap: { type: String  }
  ,dropdownPosition: { type: String  }
  ,dropdownTop: { type: String  }
  ,dropdownLeft: { type: String  }
  ,textFontSize: { type: String  }
  ,textFontFamily: { type: String  }
  ,textColor: { type: String  }
  ,iconsWidth: { type: String  }
  ,iconsHeight: { type: String  }
  },
  computed: {  dropdownStyle(): CSS.Properties {
                    return {
                      padding: this.dropdownPadding,
        gap: this.dropdownGap,
        position: this.dropdownPosition,
        top: this.dropdownTop,
        left: this.dropdownLeft
                    }
                  }
                ,  textStyle(): CSS.Properties {
                    return {
                      fontSize: this.textFontSize,
        fontFamily: this.textFontFamily,
        color: this.textColor
                    }
                  }
                ,  icons1Style(): CSS.Properties {
                    return {
                      width: this.iconsWidth,
        height: this.iconsHeight
                    }
                  }
                }})
</script>
