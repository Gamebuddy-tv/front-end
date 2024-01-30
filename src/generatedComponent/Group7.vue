<template>
  <div
    :style="{position: 'absolute', top: '40.75rem', left: '4.88rem', width: '50.13rem', height: '4.28rem', textAlign: 'left', fontSize: '1.13rem', color: '#fff', fontFamily: 'Roboto', ...groupDiv6Style}"
  >
    <div
      :style="{position: 'absolute', top: '0rem', left: '0rem', width: '50.13rem', height: '4.28rem'}"
    >
      <div
        :style="{position: 'absolute', top: '0rem', left: '0rem', backgroundColor: '#dedcdc', width: '50.13rem', height: '4.28rem', opacity: '0.05', ...cardStyle}"
      />
      <div
        :style="{position: 'absolute', top: '1.33rem', left: '2.33rem', letterSpacing: '0.26px', lineHeight: '1.53rem', fontWeight: '500', display: 'inline-block', width: '8.23rem'}"
      >
        Chelsea
      </div>
      <div
        :style="{position: 'absolute', top: '0.7rem', left: '17.63rem', width: '9.93rem', height: '2.49rem', textAlign: 'center', fontSize: '0.88rem'}"
      >
        <div
          :style="{position: 'absolute', top: '0rem', left: '0rem', width: '9.93rem', height: '2.49rem'}"
        >
          <div
            :style="{position: 'absolute', top: '0rem', left: '0rem', width: '9.93rem', height: '2.49rem'}"
          >
            <div
              :style="{position: 'absolute', top: '0rem', left: '0rem', fontWeight: '500', display: 'inline-block', width: '9.93rem'}"
            >
              27 Oct 2023
            </div>
            <div
              :style="{position: 'absolute', top: '1.49rem', left: '3.16rem', fontWeight: '500', display: 'inline-block', width: '4.19rem'}"
            >
              01.40
            </div>
          </div>
        </div>
      </div>
      <div
        :style="{position: 'absolute', top: '1.33rem', left: '36.39rem', fontSize: '1rem', letterSpacing: '0.26px', lineHeight: '1.53rem', fontWeight: '500', display: 'inline-block', width: '8.23rem'}"
      >
        Leeds Unit
      </div>
    </div>
    <img
      :style="{position: 'absolute', top: '1.26rem', left: '46.5rem', width: '1.5rem', height: '1.5rem', overflow: 'hidden', objectFit: 'cover'}"
      alt=""
      :src="dimensionCode"
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
  name: "Group7",
  props: {
  dimensionCode: { type: String  }
  ,propTop: { type: String  }
  ,propBackgroundColor: { type: String  }
  ,propOpacity: { type: String  }
  },
  computed: {  groupDiv6Style(): CSS.Properties {
                    return {
                      top: this.propTop
                    }
                  }
                ,  cardStyle(): CSS.Properties {
                    return {
                      backgroundColor: this.propBackgroundColor,
        opacity: this.propOpacity
                    }
                  }
                }})
</script>
