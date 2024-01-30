<template>
  <div
    :style="{position: 'relative', backgroundColor: '#000', width: '100%', height: '64rem', overflowY: 'auto', cursor: 'pointer'}"
    @click="onPage4B1ContainerClick"
  >
    <Group9 /><Property1SLIDE1
      property1SLIDE1Width="37.5rem"
      property1SLIDE1Height="57.63rem"
      property1SLIDE1Position="absolute"
      property1SLIDE1Top="3.56rem"
      property1SLIDE1Left="2.25rem"
      maskGroupIconTop="0rem"
      maskGroupIconLeft="0rem"
      maskGroupIconWidth="37.5rem"
      maskGroupIconHeight="18.75rem"
      maskGroupIconTop1="19.63rem"
      maskGroupIconLeft1="0rem"
      maskGroupIconWidth1="37.5rem"
      maskGroupIconHeight1="18.75rem"
      maskGroupIconTop2="39.25rem"
      maskGroupIconLeft2="0rem"
      maskGroupIconWidth2="37.5rem"
      maskGroupIconHeight2="18.75rem"
      maskGroupIconTop3="58.88rem"
      maskGroupIconLeft3="0rem"
      maskGroupIconWidth3="37.5rem"
      maskGroupIconHeight3="18.75rem"
      maskGroupIconTop4="78.5rem"
      maskGroupIconLeft4="0rem"
      maskGroupIconWidth4="37.5rem"
      maskGroupIconHeight4="18.75rem"
      maskGroupIconTop5="98.13rem"
      maskGroupIconLeft5="0rem"
      maskGroupIconWidth5="37.5rem"
      maskGroupIconHeight5="18.75rem"
      maskGroupIconTop6="117.75rem"
      maskGroupIconLeft6="0rem"
      maskGroupIconWidth6="37.5rem"
      maskGroupIconHeight6="18.75rem"
    />
    <img
      :style="{position: 'absolute', top: '57.94rem', left: '19.38rem', width: '5rem', height: '5rem', objectFit: 'cover'}"
      alt=""
      src="/group-1000002286@2x.png"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Group9 from "../components/Group9.vue";
  import Property1SLIDE1 from "../components/Property1SLIDE1.vue";

  export default defineComponent({
    name: "Page4B11",
    components: { Group9, Property1SLIDE1 },
    methods: {
      onPage4B1ContainerClick() {
        this.$router.push("/page-4b3");
      },
    },
  });
</script>
