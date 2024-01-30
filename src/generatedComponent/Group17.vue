<template>
  <div
    :style="{position: 'absolute', top: '5.5rem', left: '2.56rem', width: '33.63rem', height: '8.62rem', textAlign: 'left', fontSize: '1.13rem', color: '#fff', fontFamily: 'Roboto', ...groupDiv10Style}"
  >
    <img
      :style="{position: 'absolute', top: '0rem', left: '0rem', borderRadius: '5px', width: '33.63rem', height: '8.62rem', objectFit: 'cover', opacity: '0.05'}"
      alt=""
      :src="dimensionCode"
    />
    <img
      :style="{position: 'absolute', top: '1.38rem', left: '1.81rem', borderRadius: '50%', width: '5.88rem', height: '5.88rem', objectFit: 'cover'}"
      alt=""
      src="/ellipse-1@2x.png"
    />
    <div
      :style="{position: 'absolute', top: '2.75rem', left: '9.27rem', width: '8.38rem', height: '3.14rem'}"
    >
      <div
        :style="{position: 'absolute', top: '0rem', left: '0rem', fontWeight: '500'}"
      >
        Websters Shivaji
      </div>
      <div
        :style="{position: 'absolute', top: '2.14rem', left: '0rem', fontSize: '0.88rem'}"
      >
        764 members
      </div>
    </div>
    <div
      :style="{position: 'absolute', top: '2.88rem', left: '30.19rem', width: '1.69rem', height: '2.84rem', fontSize: '0.88rem'}"
    >
      <div :style="{position: 'absolute', top: '1.84rem', left: '0rem'}">
        Join
      </div>
      <img
        :style="{position: 'absolute', height: '49.78%', width: '83.7%', top: '0%', right: '11.11%', bottom: '50.22%', left: '5.19%', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'cover'}"
        alt=""
        :src="dimensionCodeImageUrl"
      />
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
  name: "Group17",
  props: {
  dimensionCode: { type: String  }
  ,dimensionCodeImageUrl: { type: String  }
  ,propTop: { type: String  }
  },
  computed: {  groupDiv10Style(): CSS.Properties {
                    return {
                      top: this.propTop
                    }
                  }
                }})
</script>
