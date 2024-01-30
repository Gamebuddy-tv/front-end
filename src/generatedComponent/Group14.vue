<template>
  <div
    :style="{position: 'absolute', top: '5.06rem', left: '1.51rem', width: '35.72rem', height: '12.5rem', textAlign: 'left', fontSize: '0.75rem', color: '#db202c', fontFamily: 'Roboto', ...groupDiv11Style}"
  >
    <img
      alt=""
      :src="dimensions"
      :style="{position: 'absolute', top: '0rem', left: '0rem', borderRadius: '5px', width: '35.72rem', height: '12.5rem', objectFit: 'cover', opacity: '0.05', ...rectangleIconStyle}"
    />
    <div
      :style="{position: 'absolute', top: '2.81rem', left: '14.79rem', fontSize: '0.88rem', lineHeight: '1.56rem', color: '#fff', whiteSpace: 'pre-wrap', display: 'inline-block', width: '19.15rem', height: '6.25rem'}"
    >
      Estoril and Santa Clara will be playing against each other onN ovember
      29th, 2022, in a Liga Bwin football game in Portugal, Estoril vs Santa
      Clara betting tip 2022/2023 to win with your bets.
    </div>
    <b
      :style="{position: 'absolute', top: '10.04rem', left: '14.79rem', display: 'inline-block', width: '7.31rem', height: '1.05rem'}"
      >George Washington
    </b>
    <b
      :style="{position: 'absolute', top: '10.04rem', left: '27.79rem', display: 'inline-block', textAlign: 'right', width: '6.17rem', height: '1.05rem'}"
      >Thurday 09 2022</b
    >
    <img
      :style="{position: 'absolute', top: '1.44rem', left: '1.11rem', width: '12.88rem', height: '9.56rem', overflow: 'hidden', objectFit: 'cover'}"
      alt=""
      src="/frame-758530920@2x.png"
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
  name: "Group14",
  props: {
  dimensions: { type: String  }
  ,propTop: { type: String  }
  ,propBorderRadius: { type: String  }
  },
  computed: {  groupDiv11Style(): CSS.Properties {
                    return {
                      top: this.propTop
                    }
                  }
                ,  rectangleIconStyle(): CSS.Properties {
                    return {
                      borderRadius: this.propBorderRadius
                    }
                  }
                }})
</script>
