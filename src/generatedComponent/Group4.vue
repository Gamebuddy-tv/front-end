<template>
  <div
    :style="{position: 'absolute', top: '14.5rem', left: '1.44rem', width: '24.94rem', height: '8.62rem', textAlign: 'center', fontSize: '0.81rem', color: '#fff', fontFamily: 'Roboto', ...groupDiv9Style}"
  >
    <div
      :style="{position: 'absolute', top: '0rem', left: '0rem', width: '24.94rem', height: '8.62rem'}"
    >
      <img
        :style="{position: 'absolute', top: '0rem', left: '0rem', width: '24.94rem', height: '8.62rem', objectFit: 'cover', opacity: '0.1'}"
        alt=""
        src="/rectangle-22015@2x.png"
      />
      <div
        :style="{position: 'absolute', height: '70.85%', width: '90.15%', top: '14.72%', right: '5.01%', bottom: '14.43%', left: '4.84%'}"
      >
        <div
          :style="{position: 'absolute', height: '100%', width: '17.24%', top: '0%', right: '82.76%', bottom: '0%', left: '0%', overflow: 'hidden'}"
        >
          <div
            :style="{position: 'absolute', height: '92.53%', width: '100%', top: '8.5%', right: '0%', bottom: '-1.02%', left: '0%'}"
          >
            <img
              :style="{position: 'absolute', height: '72.12%', width: '100%', top: '0%', right: '0%', bottom: '27.88%', left: '0%', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'cover'}"
              alt=""
              src="/logo@2x.png"
            />
            <div
              :style="{position: 'absolute', width: '75%', top: 'calc(50% + 30.2px)', left: '12.58%', letterSpacing: '0.92px', fontWeight: '500', display: 'inline-block'}"
            >
              Spain
            </div>
          </div>
        </div>
        <div
          :style="{position: 'absolute', height: '100%', width: '17.24%', top: '0%', right: '0%', bottom: '0%', left: '82.76%', overflow: 'hidden'}"
        >
          <div
            :style="{position: 'absolute', height: '92.53%', width: '100%', top: '8.5%', right: '0%', bottom: '-1.02%', left: '0%'}"
          >
            <div
              :style="{position: 'absolute', height: '72.12%', width: '100%', top: '0%', right: '0%', bottom: '27.88%', left: '0%'}"
            >
              <div
                :style="{position: 'absolute', height: '100%', width: '100%', top: '0%', right: '0%', bottom: '0%', left: '0%', borderRadius: '32.18px', backgroundColor: '#e2eae9'}"
              />
            </div>
            <div
              :style="{position: 'absolute', width: '58.39%', top: 'calc(50% + 30.2px)', left: '21.61%', letterSpacing: '0.92px', fontWeight: '500', display: 'inline-block'}"
            >
              India
            </div>
          </div>
        </div>
        <div
          :style="{position: 'absolute', width: '14.37%', top: 'calc(50% - 14.15px)', right: '43.09%', left: '42.54%', height: '1.75rem', fontSize: '1.49rem'}"
        >
          <div
            :style="{position: 'absolute', width: '100%', top: 'calc(50% - 14px)', left: '0%', letterSpacing: '0.92px', fontWeight: '500', display: 'inline-block'}"
          >
            VS
          </div>
        </div>
      </div>
    </div>
    <img
      :style="{position: 'absolute', height: '47.28%', width: '15.54%', top: '20.67%', right: '79.62%', bottom: '32.05%', left: '4.84%', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'cover'}"
      alt=""
      src="/mask-group@2x.png"
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
  name: "Group4",
  props: {
  propTop: { type: String  }
  },
  computed: {  groupDiv9Style(): CSS.Properties {
                    return {
                      top: this.propTop
                    }
                  }
                }})
</script>
