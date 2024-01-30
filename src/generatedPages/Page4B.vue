<template>
  <div
    :style="{position: 'relative', backgroundColor: '#000', width: '100%', height: '64rem', overflowY: 'auto', cursor: 'pointer', textAlign: 'center', fontSize: '1.75rem', color: '#000', fontFamily: 'Roboto'}"
    @click="onPage4BContainerClick"
  >
    <b
      :style="{position: 'absolute', top: '22.38rem', left: 'calc(50% + 323px)', textTransform: 'uppercase', display: 'none'}"
      >Offers / Home Banner</b
    ><frame />
    <div
      :style="{position: 'absolute', top: '5.75rem', left: '43.88rem', width: '42.5rem', height: '2.5rem'}"
    >
      <div
        :style="{position: 'absolute', top: '0rem', left: '22.19rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}"
      >
        <HaveAnAccountLogin
          loginMessage="  "
          haveAnAccountLoginPadding="0.13rem"
          haveAnAccountLoginFlexShrink="0"
          alreadyHaveAnContainerFontSize="1rem"
          alreadyHaveAnContainerFontFamily="Roboto"
          alreadyHaveAnContainerColor="#666"
          alreadyHaveAnColor="unset"
          alreadyHaveAnTextDecoration="underline"
        /><button
          buttonText="/icons@2x.png"
          actionText="Sign up"
          buttonBorderRadius="4px"
          buttonBackgroundColor="#db202c"
          buttonWidth="8.19rem"
          buttonHeight="2.5rem"
          buttonPosition="relative"
          buttonFlexShrink="0"
          buttonTop="unset"
          buttonRight="unset"
          buttonBottom="unset"
          buttonLeft="unset"
          frameDivTop="calc(50% - 11px)"
          frameDivLeft="calc(50% - 29.5px)"
          frameDivGap="0.5rem"
          iconsWidth="1.5rem"
          iconsHeight="1.5rem"
          signUpFontSize="1.13rem"
          signUpFontWeight="unset"
          signUpFontFamily="Roboto"
        />
      </div>
      <Dropdown
        displayText="English (united States)"
        iconImageUrl="/icons@2x.png"
        dropdownPadding="0rem 0rem 0rem 0.5rem"
        dropdownGap="0.13rem"
        dropdownPosition="absolute"
        dropdownTop="0.5rem"
        dropdownLeft="0rem"
        textFontSize="1rem"
        textFontFamily="Roboto"
        textColor="#fff"
        iconsWidth="1.5rem"
        iconsHeight="1.5rem"
      />
    </div>
    <img
      :style="{position: 'absolute', height: '6.25%', width: '4.44%', top: '83.98%', right: '76.04%', bottom: '9.77%', left: '19.51%', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'cover'}"
      alt=""
      src="/iconpauseplay@2x.png"
    /><Property1SLIDE1
      property1SLIDE1Width="37.5rem"
      property1SLIDE1Height="57.63rem"
      property1SLIDE1Position="absolute"
      property1SLIDE1Top="2.94rem"
      property1SLIDE1Left="3.13rem"
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
    /><Group2
      imageDimensions="/group-3@2x.png"
      groupIconWidth="5rem"
      groupIconHeight="5rem"
      groupIconPosition="absolute"
      groupIconTop="58rem"
      groupIconLeft="19.38rem"
    />
    <div
      :style="{position: 'absolute', height: '2.34%', width: '1.67%', top: '93.36%', right: '74.86%', bottom: '4.3%', left: '23.47%'}"
    >
      <div
        :style="{position: 'absolute', height: '75%', width: '25%', top: '12.5%', right: '58.33%', bottom: '12.5%', left: '16.67%', borderRadius: '2px', backgroundColor: '#fff'}"
      />
      <div
        :style="{position: 'absolute', height: '75%', width: '25%', top: '12.5%', right: '16.67%', bottom: '12.5%', left: '58.33%', borderRadius: '2px', backgroundColor: '#fff'}"
      />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Frame from "../components/Frame.vue";
  import HaveAnAccountLogin from "../components/HaveAnAccountLogin.vue";
  import Button from "../components/Button.vue";
  import Dropdown from "../components/Dropdown.vue";
  import Property1SLIDE1 from "../components/Property1SLIDE1.vue";
  import Group2 from "../components/Group2.vue";

  export default defineComponent({
    name: "Page4B",
    components: {
      Frame,
      HaveAnAccountLogin,
      Button,
      Dropdown,
      Property1SLIDE1,
      Group2,
    },
    methods: {
      onPage4BContainerClick() {
        this.$router.push("/page-4b2");
      },
    },
  });
</script>
