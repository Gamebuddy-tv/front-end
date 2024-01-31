<template>
  <div
    :style="{position: 'relative', backgroundColor: '#000', width: '100%', height: '64rem', overflowY: 'auto', textAlign: 'left', fontSize: '1.25rem', color: '#fff', fontFamily: 'Roboto'}"
  >
    <img
      :style="{position: 'absolute', top: 'calc(50% - 414px)', left: 'calc(50% - 677px)', borderRadius: '5px', width: '84.63rem', height: '53rem', objectFit: 'cover'}"
      alt=""
      src="/rectangle-22038@2x.png"
    />
    <div
      :style="{position: 'absolute', top: '8.75rem', left: '5.25rem', width: '43rem', height: '47.75rem'}"
    >
      <b
        :style="{position: 'absolute', top: '0rem', left: '0rem', letterSpacing: '0.26px', lineHeight: '1.53rem', textTransform: 'uppercase'}"
        >Posted assignments of work</b
      >
      <div
        :style="{position: 'absolute', top: '3.06rem', left: '0rem', width: '43rem', height: '44.69rem', fontSize: '0.88rem'}"
      >
        <img
          :style="{position: 'absolute', top: '5.5rem', left: '0rem', borderRadius: '5px', width: '30.75rem', height: '35.06rem', objectFit: 'cover'}"
          alt=""
          src="/image-19@2x.png"
        />
        <div
          :style="{position: 'absolute', top: '0rem', left: '0rem', fontSize: '1.13rem', letterSpacing: '0.26px', lineHeight: '1.53rem', fontWeight: '500', display: 'inline-block', width: '30rem'}"
        >
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </div>
        <div
          :style="{position: 'absolute', top: '43.13rem', left: '3.13rem', letterSpacing: '0.26px', lineHeight: '1.53rem', fontWeight: '500', color: '#db202c'}"
        >
          Virat Kohli
        </div>
        <div
          :style="{position: 'absolute', top: '43.13rem', left: '26.94rem', letterSpacing: '0.26px', lineHeight: '1.53rem', fontWeight: '500', color: 'rgba(255, 255, 255, 0.5)'}"
        >
          2 hrs ago
        </div>
        <div
          :style="{position: 'absolute', top: '22.69rem', left: '43rem', letterSpacing: '0.26px', lineHeight: '1.53rem', fontWeight: '500'}"
        ></div>
      </div>
    </div>
    <b
      :style="{position: 'absolute', top: '22.38rem', left: 'calc(50% + 323px)', fontSize: '1.75rem', textTransform: 'uppercase', display: 'none', color: '#000', textAlign: 'center'}"
      >Offers / Home Banner</b
    >
    <div
      :style="{position: 'absolute', top: '2.63rem', left: '3.38rem', borderRadius: '4px', backgroundColor: '#fff', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '0.5rem 1rem 0.5rem 0.75rem', cursor: 'pointer', fontSize: '0.88rem', color: '#2b2b2b'}"
      @click="onPlayButtonContainerClick"
    >
      <img
        :style="{position: 'relative', width: '1.5rem', height: '1.5rem', overflow: 'hidden', flexShrink: '0', objectFit: 'contain'}"
        alt=""
        src="/chevronright@2x.png"
      />
      <b :style="{position: 'relative'}">Back to List</b>
    </div>

    <!-- PROFILE PIC -->
    <img
      :style="{position: 'absolute', top: '54.44rem', left: '5.25rem', borderRadius: '50%', width: '2.5rem', height: '2.5rem', objectFit: 'cover'}"
      alt=""
      src="/giphy.gif"
    />
    <!-- PROFILE PIC -->

    <div
      :style="{position: 'absolute', top: '7.06rem', left: '42rem', width: '45.31rem', height: '51.06rem', overflowY: 'auto'}"
    >

      <!-- CONVERSATION GROUP -->
      <Group1 />
      <!-- CONVERSATION GROUP -->

    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Group1 from "../generatedComponent/Group1.vue";

  export default defineComponent({
    name: "Page3A",
    components: { Group1 },
    methods: {
      onPlayButtonContainerClick() {
        this.$router.push("/page-2b1");
      },
    },
  });
</script>
