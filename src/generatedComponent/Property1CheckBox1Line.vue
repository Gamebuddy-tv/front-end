<template>
  <div
    :style="{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '8px 8px 8px 0px', gap: '8px', textAlign: 'left', fontSize: '16px', color: '#333', fontFamily: 'Poppins', ...property1CheckBox1LineStyle}"
  >
    <img
      alt=""
      :src="rememberMeLabel"
      :style="{position: 'relative', width: '24px', height: '24px', overflow: 'hidden', flexShrink: '0', objectFit: 'cover', ...checkBoxIconStyle}"
    />
    <div :style="{position: 'relative', ...iWantToStyle}">
      {{loginCheckboxLabel}}
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
  name: "Property1CheckBox1Line",
  props: {
  rememberMeLabel: { type: String  }
  ,loginCheckboxLabel: { type: String  }
  ,property1CheckBox1LinePadding: { type: String  }
  ,property1CheckBox1LineGap: { type: String  }
  ,property1CheckBox1LineWidth: { type: String  }
  ,property1CheckBox1LineFlexShrink: { type: String  }
  ,checkBoxIconWidth: { type: String  }
  ,checkBoxIconHeight: { type: String  }
  ,iWantToFontSize: { type: String  }
  ,iWantToFontFamily: { type: String  }
  ,iWantToColor: { type: String  }
  },
  computed: {  property1CheckBox1LineStyle(): CSS.Properties {
                    return {
                      padding: this.property1CheckBox1LinePadding,
        gap: this.property1CheckBox1LineGap,
        width: this.property1CheckBox1LineWidth,
        flexShrink: this.property1CheckBox1LineFlexShrink
                    }
                  }
                ,  checkBoxIconStyle(): CSS.Properties {
                    return {
                      width: this.checkBoxIconWidth,
        height: this.checkBoxIconHeight
                    }
                  }
                ,  iWantToStyle(): CSS.Properties {
                    return {
                      fontSize: this.iWantToFontSize,
        fontFamily: this.iWantToFontFamily,
        color: this.iWantToColor
                    }
                  }
                }})
</script>
