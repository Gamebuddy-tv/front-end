<template>
  <div
    :style="{position: 'relative', backgroundColor: '#000', width: '100%', height: '143.75rem', overflowY: 'auto', textAlign: 'center', fontSize: '1.75rem', color: '#000', fontFamily: 'Roboto'}"
  >
    <img
      :style="{position: 'absolute', top: 'calc(50% - 1042px)', left: 'calc(50% - 677px)', borderRadius: '5px', width: '84.63rem', height: '133.94rem', objectFit: 'cover'}"
      alt=""
      src="/rectangle-22038@2x.png"
    />
    <div
      :style="{position: 'absolute', top: '78.31rem', left: '4.19rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px solid #746767', boxSizing: 'border-box', width: '38.75rem', height: '59.38rem'}"
    />
    <b
      :style="{position: 'absolute', top: '22.38rem', left: 'calc(50% - 156px)', textTransform: 'uppercase', display: 'none'}"
      >Offers / Home Banner</b
    >
    <img
      :style="{position: 'absolute', top: '8.38rem', left: 'calc(50% - 482px)', borderRadius: '5px', width: '60.31rem', height: '33.94rem', objectFit: 'cover'}"
      alt=""
      src="/dcvskkr-1@2x.png"
    />
    <img
      :style="{position: 'absolute', top: '84.06rem', left: '6.63rem', width: '33.88rem', height: '46.88rem', objectFit: 'contain'}"
      alt=""
      src="/image-18@2x.png"
    />
    
    <Property1Default2
      dimensions="/youtube-logo@2x.png"
      property1DefaultIconWidth="8.4%"
      property1DefaultIconHeight="3.78%"
      property1DefaultIconPosition="absolute"
      property1DefaultIconTop="14.26%"
      property1DefaultIconRight="45.49%"
      property1DefaultIconBottom="81.96%"
      property1DefaultIconLeft="46.11%"
      property1DefaultIconMaxWidth="100%"
      property1DefaultIconOverflow="hidden"
      property1DefaultIconMaxHeight="100%"
    />

      <Group16 />
      <Group15 />
      <Group13 />

    <!-- <img
      :style="{position: 'absolute', top: '84.75rem', left: '81.38rem', width: '2.39rem', height: '1.88rem', objectFit: 'cover'}"
      alt=""
      src="/group-143726088@2x.png"
    /> -->

    <!-- <img
      :style="{position: 'absolute', top: '98.19rem', left: '81.38rem', width: '2.39rem', height: '1.88rem', objectFit: 'cover'}"
      alt=""
      src="/group-143726088@2x.png"
    /> -->
    
    <TypePrimarySizeLarge
      iconImageUrl="/hugeiconmultimedia-and-audiosolidfavourite@2x.png"
      text="Submit"
      iconTextId="/hugeiconmultimedia-and-audiosolidfavourite@2x.png"
      :iconRight="false"
      :iconLeft="false"
      typePrimarySizeLargeBorderRadius="4px"
      typePrimarySizeLargeBackgroundColor="#db202c"
      typePrimarySizeLargeHeight="3.38rem"
      typePrimarySizeLargePadding="0rem 1.5rem"
      typePrimarySizeLargePosition="absolute"
      typePrimarySizeLargeWidth="11.31rem"
      typePrimarySizeLargeTop="133.69rem"
      typePrimarySizeLargeRight="unset"
      typePrimarySizeLargeBottom="unset"
      typePrimarySizeLargeLeft="17.94rem"
      textFlexShrink="unset"
      textDetailGap="0.5rem"
      defaultoutlinearrowRightIWidth="1.5rem"
      defaultoutlinearrowRightIHeight="1.5rem"
      defaultoutlinearrowRightIOverflow="hidden"
      defaultoutlinearrowRightIFlexShrink="0"
      primaryButtonFontSize="1rem"
      primaryButtonLineHeight="1.5rem"
      primaryButtonFontFamily="Roboto"
      primaryButtonColor="#fff"
      defaultoutlinearrowRightIWidth1="1.5rem"
      defaultoutlinearrowRightIHeight1="1.5rem"
      defaultoutlinearrowRightIOverflow1="hidden"
      defaultoutlinearrowRightIFlexShrink1="0"
      minWidthLineWidth="5.5rem"
      minWidthLineHeight="0rem"
    />
    
    <Group12 />
    
    <!-- BACK TO MAIN PAGE -->
    <div
      :style="{position: 'absolute', top: '3.25rem', left: '3.38rem', borderRadius: '4px', backgroundColor: '#fff', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '0.5rem 1rem 0.5rem 0.75rem', cursor: 'pointer', textAlign: 'left', fontSize: '0.88rem', color: '#2b2b2b'}"
      @click="onPlayButtonContainerClick" >
      <img
        :style="{position: 'relative', width: '1.5rem', height: '1.5rem', overflow: 'hidden', flexShrink: '0', objectFit: 'contain'}"
        alt=""
        src="/chevronright@2x.png"
      />
      <b :style="{position: 'relative'}">Back to List</b>
    </div>

  </div>

</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Property1Default2 from "../components/Property1Default2.vue";
  import Group16 from "../components/Group16.vue";
  import Group15 from "../components/Group15.vue";
  import Group13 from "../components/Group13.vue";
  import TypePrimarySizeLarge from "../components/TypePrimarySizeLarge.vue";
  import Group12 from "../components/Group12.vue";

  export default defineComponent({
    name: "Page3B",
    components: {
      Property1Default2,
      Group16,
      Group15,
      Group13,
      TypePrimarySizeLarge,
      Group12,
    },
    methods: {
      onPlayButtonContainerClick() {
        this.$router.push("/page-2b");
      },
    },
  });
</script>
