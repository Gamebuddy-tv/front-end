<template>
  <div
    :style="{position: 'relative', backgroundColor: '#000', width: '100%', height: '64rem', overflowY: 'auto', cursor: 'pointer', textAlign: 'center', fontSize: '1.75rem', color: '#000', fontFamily: 'Roboto'}"
    @click="onPage4BContainerClick"
  >
    <b
      :style="{position: 'absolute', top: '22.38rem', left: 'calc(50% + 323px)', textTransform: 'uppercase', display: 'none'}"
      >Offers / Home Banner</b
    >
    <div
      :style="{position: 'absolute', height: 'calc(100% - 848px)', width: 'calc(100% - 1140px)', top: '26.81rem', right: '11.31rem', bottom: '26.19rem', left: '59.94rem'}"
    >
      <button
        buttonText="/icons@2x.png"
        actionText="Log in"
        buttonBorderRadius="4px"
        buttonBackgroundColor="#db202c"
        buttonWidth="100%"
        buttonHeight="calc(100% - 112px)"
        buttonPosition="absolute"
        buttonFlexShrink="unset"
        buttonTop="0rem"
        buttonRight="0rem"
        buttonBottom="7rem"
        buttonLeft="0rem"
        frameDivTop="calc(50% - 12px)"
        frameDivLeft="calc(50% - 27.5px)"
        frameDivGap="0.5rem"
        iconsWidth="1.5rem"
        iconsHeight="1.5rem"
        signUpFontSize="1.25rem"
        signUpFontWeight="unset"
        signUpFontFamily="Roboto"
      /><button
        buttonText="/icons@2x.png"
        actionText="Sign in"
        buttonBorderRadius="4px"
        buttonBackgroundColor="#db202c"
        buttonWidth="100%"
        buttonHeight="calc(100% - 112px)"
        buttonPosition="absolute"
        buttonFlexShrink="unset"
        buttonTop="7rem"
        buttonRight="0rem"
        buttonBottom="0rem"
        buttonLeft="0rem"
        frameDivTop="calc(50% - 12px)"
        frameDivLeft="calc(50% - 30px)"
        frameDivGap="0.5rem"
        iconsWidth="1.5rem"
        iconsHeight="1.5rem"
        signUpFontSize="1.25rem"
        signUpFontWeight="unset"
        signUpFontFamily="Roboto"
      />
    </div>
    <div
      :style="{position: 'absolute', top: 'calc(50% - 12px)', left: '51.44rem', color: '#fff', textAlign: 'left'}"
    >
      OR
    </div>
    <Group8 />
    <div
      :style="{position: 'absolute', top: '11.94rem', left: '4.31rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.5)', boxSizing: 'border-box', width: '40.75rem', height: '40.75rem'}"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Button from "../components/Button.vue";
  import Group8 from "../components/Group8.vue";

  export default defineComponent({
    name: "Page4B1",
    components: { Button, Group8 },
    methods: {
      onPage4BContainerClick() {
        this.$router.push("/page-5a");
      },
    },
  });
</script>
