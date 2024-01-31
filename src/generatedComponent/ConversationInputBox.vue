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
      <!-- <div
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
      </div> -->
      <!-- USERNAME -->

      <!-- TIME -->
      <!-- <div
        :style="{position: 'absolute', height: '16.71%', width: '10.3%', top: '83.38%', left: '84.63%', letterSpacing: '0.26px', lineHeight: '1.53rem', fontWeight: '500', display: 'inline-block', opacity: '0.5'}"
      >
        2 hrs ago
      </div> -->
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
        :style="{position: 'absolute', 
        height: '63.38%', width: '76.01%', 
        top: '0%', right: '0%', bottom: '36.62%', left: '23.99%', 
        fontSize: '1.25rem'}"
      >

        <!-- INPUT BOX & SUBMIT BUTTON -->
        <div
          class="w-full h-full"
          :style="{position: 'absolute', top: '43.2%', right: '0%', 
            bottom: '0%', left: '0%', fontSize: '1.13rem'}"
          >
          <!-- INPUT BOX -->
            <textarea
              class="text-black text-sm bg-blend-darken w-full h-full p-2 px-4 focus:outline-none border rounded-md"
              :style="{width: '100%', height: '100%', fontFamily: 'Roboto', resize: 'vertical', fontSize: '1.13rem'}"
              placeholder="Enter your message..."
            />

          <!-- SUBMIT BUTTON -->
            <div
              :style="{position: 'absolute', height: '100%', width: '10.3%', top: '0%', right: '0%', bottom: '0%', left: '89.7%', fontSize: '1.13rem'}"
            >
              <div
                :style="{position: 'absolute', height: '100%', width: '100%', top: '0%', right: '0%', bottom: '0%', left: '0%', borderRadius: '5px', backgroundColor: '#db202c', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}"
              >
                <img
                  :style="{position: 'relative', width: '1.5rem', height: '1.5rem', overflow: 'hidden', flexShrink: '0', objectFit: 'contain'}"
                  alt=""
                  src="/chevronright@2x.png"
                />
            </div>
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
  name: "ConversationInputBox",
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
