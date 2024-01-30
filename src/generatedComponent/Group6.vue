<template>
  <div
    :style="{position: 'absolute', top: '67.19rem', left: '4.88rem', width: '50.44rem', height: '12.19rem', textAlign: 'left', fontSize: '0.75rem', color: '#fff', fontFamily: 'Roboto', ...groupDiv7Style}"
  >
    <img
      :style="{position: 'absolute', top: '0rem', left: '0rem', width: '50.13rem', height: '12.19rem', objectFit: 'cover', opacity: '0.05'}"
      alt=""
      src="/rectangle-3@2x.png"
    />
    <div
      :style="{position: 'absolute', top: '4rem', left: '20.75rem', fontSize: '0.88rem', lineHeight: '1.56rem', display: 'inline-block', width: '26.88rem'}"
    >
      Estoril and Santa Clara will be playing against each other on Monday,
      November 29th, 2022, in a Liga Bwin football game in Portugal, check the
      Estoril vs Santa Clara betting tip 2022/2023 to win with your bets.
    </div>
    <b
      :style="{position: 'absolute', top: '10.19rem', left: '20.75rem', display: 'inline-block', width: '10.26rem'}"
      >George Washington
    </b>
    <b
      :style="{position: 'absolute', top: '10.19rem', left: '39rem', display: 'inline-block', textAlign: 'right', width: '8.66rem'}"
      >Thurday 09 2022</b
    >
    <img
      :style="{position: 'absolute', top: '1.06rem', left: '48.19rem', width: '2.26rem', height: '1.5rem', overflow: 'hidden', objectFit: 'cover'}"
      alt=""
      src="/claritybookmarksolid@2x.png"
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
  name: "Group6",
  props: {
  propTop: { type: String  }
  },
  computed: {  groupDiv7Style(): CSS.Properties {
                    return {
                      top: this.propTop
                    }
                  }
                }})
</script>
