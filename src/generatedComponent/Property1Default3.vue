<template>
  <div
    :style="{width: '150px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '0px 7px', boxSizing: 'border-box', textAlign: 'left', fontSize: '15px', color: '#fff', fontFamily: 'Roboto', ...property1Default2Style}"
  >
    <div
      :style="{position: 'relative', lineHeight: '35px', textTransform: 'capitalize', fontWeight: '500', ...comedies9Style}"
    >
      {{genre}}
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
  name: "Property1Default3",
  props: {
  genre: { type: String  }
  ,property1DefaultWidth: { type: String  }
  ,property1DefaultPadding: { type: String  }
  ,comediesFontSize: { type: String  }
  ,comediesLineHeight: { type: String  }
  },
  computed: {  property1Default2Style(): CSS.Properties {
                    return {
                      width: this.property1DefaultWidth,
        padding: this.property1DefaultPadding
                    }
                  }
                ,  comedies9Style(): CSS.Properties {
                    return {
                      fontSize: this.comediesFontSize,
        lineHeight: this.comediesLineHeight
                    }
                  }
                }})
</script>
