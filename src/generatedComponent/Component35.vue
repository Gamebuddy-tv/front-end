<template>
  <div
    :style="{position: 'absolute', top: '0rem', left: '0rem', width: '38.75rem', height: '9.38rem', textAlign: 'left', fontSize: '0.88rem', color: '#fff', fontFamily: 'Roboto', ...component35Style}"
  >
    <div
      :style="{position: 'absolute', height: '100%', width: '104.84%', top: '0%', right: '-4.84%', bottom: '0%', left: '0%', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.5)', boxSizing: 'border-box', mixBlendMode: 'normal'}"
    />
    <div
      :style="{position: 'absolute', height: '75%', width: '95.48%', top: '12.53%', right: '-0.16%', bottom: '12.47%', left: '4.68%'}"
    >
      <!-- USERNAME -->
      <div
        v-if="firstName"
        :style="{position: 'absolute', height: '16.71%', width: '11.49%', top: '83.38%', left: '23.99%', letterSpacing: '0.26px', lineHeight: '1.53rem', fontWeight: '500', color: '#db202c', display: 'inline-block'}"
      >
        {{firstName}}
      </div>
      <div
        v-else
        :style="{position: 'absolute', height: '16.71%', width: '11.49%', top: '83.38%', left: '23.99%', letterSpacing: '0.26px', lineHeight: '1.53rem', fontWeight: '500', color: '#db202c', display: 'inline-block'}"
      >
        Anonymous
      </div>
      <!-- USERNAME -->

      <!-- TIME -->
      <div
        :style="{position: 'absolute', height: '16.71%', width: '10.3%', top: '83.38%', left: '84.63%', letterSpacing: '0.26px', lineHeight: '1.53rem', fontWeight: '500', display: 'inline-block', opacity: '0.5'}"
      >
        2 hrs ago
      </div>
      <!-- TIME -->

      <!-- PROFILE PIC -->
        <img
          v-if="profilePic"
          :style="{position: 'absolute', height: '87.11%', width: '16.55%', top: '6.22%', right: '83.45%', bottom: '6.67%', left: '0%', borderRadius: '50%', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'cover'}"
          alt=""
          :src="profilePic"
        />
        <img
          v-else
          :style="{position: 'absolute', height: '87.11%', width: '16.55%', top: '6.22%', right: '83.45%', bottom: '6.67%', left: '0%', borderRadius: '50%', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'cover'}"
          alt=""
          src="/giphy.gif"
        />
      <!-- PROFILE PIC -->

      <div
        :style="{position: 'absolute', height: '63.38%', width: '76.01%', top: '0%', right: '0%', bottom: '36.62%', left: '23.99%', fontSize: '1.25rem'}"
      >
        <!-- TITLE  -->
        <b
          v-if="title != null"
          :style="{position: 'absolute', height: '26.37%', width: '70.67%', top: '0%', left: '0%', letterSpacing: '0.26px', lineHeight: '1.53rem', textTransform: 'uppercase', display: 'inline-block'}"
          >{{ title }}</b
        >

        <b
        v-else
          :style="{position: 'absolute', height: '26.37%', width: '70.67%', top: '0%', left: '0%', letterSpacing: '0.26px', lineHeight: '1.53rem', textTransform: 'uppercase', display: 'inline-block'}"
          >Posted assignments of work</b
        >
        <!-- TITLE -->

        <div
          :style="{position: 'absolute', height: '56.8%', width: '100%', top: '43.2%', right: '0%', bottom: '0%', left: '0%', fontSize: '1.13rem'}"
        >

          <div
            v-if="conversation"
            :style="{position: 'absolute', height: '100%', width: '100%', top: '0%', left: '0%', letterSpacing: '0.26px', lineHeight: '1.69rem', fontWeight: '500', display: 'inline-block'}"
            class="overflow-scroll"
          >
            {{ conversation }}
          </div>

          <div
            v-else
            :style="{position: 'absolute', height: '100%', width: '100%', top: '0%', left: '0%', letterSpacing: '0.26px', lineHeight: '1.69rem', fontWeight: '500', display: 'inline-block'}"
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import type * as CSS from "csstype";

  export default defineComponent({
  name: "Component35",
  props: {
    rectangleDivTop: { type: String  },
    profilePic: { type: String, default:null },
    title: { type: String },
    conversation: { type: String},
    time: { type: String, default: null },
    firstName : { type: String, default: null },
    userId: { type: Number, default: null },
  },
  computed: {  
    component35Style(): CSS.Properties {
        return {
          top: this.rectangleDivTop
        }
      }
    }})

</script>
