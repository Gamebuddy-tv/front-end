<template>
  <div
    :style="{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '2px', textAlign: 'left', fontSize: '16px', color: '#111', fontFamily: 'Poppins', ...haveAnAccountLoginStyle}"
  >
    <div
      :style="{position: 'relative', whiteSpace: 'pre-wrap', ...alreadyHaveAnContainerStyle}"
    >
      <span :style="{color: '#333'}">Already have an ccount?</span>
      <span :style="{color: '#666'}"> </span>
      <span :style="{textDecoration: 'underline'}">Log in </span>
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
  name: "HaveAnAccountLogin",
  props: {
  loginMessage: { type: String  }
  ,haveAnAccountLoginPadding: { type: String  }
  ,haveAnAccountLoginFlexShrink: { type: String  }
  ,alreadyHaveAnContainerFontSize: { type: String  }
  ,alreadyHaveAnContainerFontFamily: { type: String  }
  ,alreadyHaveAnContainerColor: { type: String  }
  ,alreadyHaveAnColor: { type: String  }
  ,alreadyHaveAnTextDecoration: { type: String  }
  },
  computed: {  haveAnAccountLoginStyle(): CSS.Properties {
                    return {
                      padding: this.haveAnAccountLoginPadding,
        flexShrink: this.haveAnAccountLoginFlexShrink
                    }
                  }
                ,  alreadyHaveAnContainerStyle(): CSS.Properties {
                    return {
                      fontSize: this.alreadyHaveAnContainerFontSize,
        fontFamily: this.alreadyHaveAnContainerFontFamily,
        color: this.alreadyHaveAnContainerColor
                    }
                  }
                ,  alreadyHaveAnStyle(): CSS.Properties {
                    return {
                      color: this.alreadyHaveAnColor,
        textDecoration: this.alreadyHaveAnTextDecoration
                    }
                  }
                }})
</script>
