<template>
    <div :style="{width: '62px', height: '22px', textAlign: 'left', fontSize: '16px', color: '#efefef', fontFamily: 'Roboto', ...property1DefaultStyle}">
      <div v-if="showSearch"  :style="{position: 'absolute', top: '0%', left: '0%', lineHeight: '140%', opacity: '0.6', ...searchStyle}">{{search}}</div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type * as CSS from "csstype"; const getStyleValue = (key: string, value: string | number | undefined) => {
              if(value === undefined || value === '') return;
              return {[key]: value};
            }

export default defineComponent({
name: "Property1Default",
props: {
search: { type: String  }
,showSearch: { type: Boolean  }
,property1DefaultWidth: { type: String  }
,property1DefaultHeight: { type: String  }
,property1DefaultPosition: { type: String  }
,property1DefaultTop: { type: String  }
,property1DefaultRight: { type: String  }
,property1DefaultBottom: { type: String  }
,property1DefaultLeft: { type: String  }
,searchFontSize: { type: String  }
},
computed: {  property1DefaultStyle(): CSS.Properties {
                  return {
                    width: this.property1DefaultWidth,
      height: this.property1DefaultHeight,
      position: this.property1DefaultPosition,
      top: this.property1DefaultTop,
      right: this.property1DefaultRight,
      bottom: this.property1DefaultBottom,
      left: this.property1DefaultLeft
                  }
                }
              ,  searchStyle(): CSS.Properties {
                  return {
                    fontSize: this.searchFontSize
                  }
                }
              }})</script>