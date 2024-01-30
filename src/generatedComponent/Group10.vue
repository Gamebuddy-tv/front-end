<template>
  <div
    :style="{position: 'absolute', top: '37.69rem', left: '32.56rem', width: '24.88rem', height: '3.38rem', textAlign: 'left', fontSize: '1rem', color: '#fff', fontFamily: 'Roboto'}"
  >
    <div
      :style="{position: 'absolute', top: '0rem', left: '13.56rem', borderRadius: '4px', backgroundColor: '#db202c', width: '11.31rem', height: '3.38rem', overflow: 'hidden'}"
    >
      <div :style="{position: 'absolute', top: '0.94rem', left: '1.5rem'}" />
      <img
        :style="{position: 'absolute', top: '2.5rem', right: '1.5rem', width: '1.5rem', height: '1.5rem', overflow: 'hidden', objectFit: 'cover', display: 'none'}"
        alt=""
        src="/icons@2x.png"
      />
    </div>
    <b :style="{position: 'absolute', top: '1.13rem', left: '17.38rem'}"
      >Validate</b
    ><TypePrimarySizeLarge
      iconImageUrl="/hugeiconmultimedia-and-audiosolidfavourite@2x.png"
      text="Cancel"
      iconTextId="/hugeiconmultimedia-and-audiosolidfavourite@2x.png"
      :iconRight="false"
      :iconLeft="false"
      typePrimarySizeLargeBorderRadius="4px"
      typePrimarySizeLargeBackgroundColor="#fff"
      typePrimarySizeLargeHeight="3.38rem"
      typePrimarySizeLargePadding="0rem 1.5rem"
      typePrimarySizeLargePosition="absolute"
      typePrimarySizeLargeWidth="11.31rem"
      typePrimarySizeLargeTop="0rem"
      typePrimarySizeLargeRight="unset"
      typePrimarySizeLargeBottom="unset"
      typePrimarySizeLargeLeft="0rem"
      textFlexShrink="unset"
      textDetailGap="0.5rem"
      defaultoutlinearrowRightIWidth="1.5rem"
      defaultoutlinearrowRightIHeight="1.5rem"
      defaultoutlinearrowRightIOverflow="hidden"
      defaultoutlinearrowRightIFlexShrink="0"
      primaryButtonFontSize="1rem"
      primaryButtonLineHeight="1.5rem"
      primaryButtonFontFamily="Roboto"
      primaryButtonColor="#000"
      defaultoutlinearrowRightIWidth1="1.5rem"
      defaultoutlinearrowRightIHeight1="1.5rem"
      defaultoutlinearrowRightIOverflow1="hidden"
      defaultoutlinearrowRightIFlexShrink1="0"
      minWidthLineWidth="5.5rem"
      minWidthLineHeight="0rem"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import TypePrimarySizeLarge from "./TypePrimarySizeLarge.vue";

  export default defineComponent({
    name: "Group10",
    components: { TypePrimarySizeLarge },
  });
</script>
