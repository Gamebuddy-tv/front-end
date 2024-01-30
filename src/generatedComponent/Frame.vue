<template>
  <div
    :style="{position: 'absolute', top: '13.31rem', left: '47.69rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.5)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2.5rem', gap: '2rem', textAlign: 'left', fontSize: '1.75rem', color: '#fff', fontFamily: 'Roboto'}"
  >
    <div
      :style="{flexShrink: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.25rem'}"
    >
      <div :style="{position: 'relative', fontWeight: '500'}">
        Create an account
      </div>
      <div
        :style="{position: 'relative', fontSize: '0.88rem', textAlign: 'center', display: 'inline-block', width: '18.75rem'}"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis
        maximus
      </div>
    </div>
    <div
      :style="{flexShrink: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem'}"
    >
      <Property1GenericTextField
        imageId="/icon@2x.png"
        identifier="designer@gmail.com"
        imageCode="/icons@2x.png"
        :showRectangleDiv="false"
        :showErrorMessage="false"
        property1GenericTextFieldWidth="29.88rem"
        property1GenericTextFieldGap="0.25rem"
        frameDivHeight="1.69rem"
        labelTop="0rem"
        labelLeft="0rem"
        labelFontSize="1rem"
        labelFontFamily="Roboto"
        labelColor="#fff"
        passwordHideSeeTop="0rem"
        passwordHideSeeRight="0.56rem"
        passwordHideSeeWidth="4.56rem"
        passwordHideSeeHeight="1.69rem"
        iconTop="0.19rem"
        iconRight="3.06rem"
        iconWidth="1.5rem"
        iconHeight="1.5rem"
        hideTop="0rem"
        hideRight="0rem"
        hideFontSize="1.13rem"
        textFieldBorderRadius="4px"
        textFieldBorder="1px solid #fff"
        textFieldHeight="3.5rem"
        textFieldBackgroundColor="#fff"
        textFieldOpacity="0.15"
        inputsTop="0.94rem"
        inputsLeft="1.5rem"
        divFontSize="1rem"
        rectangleDivWidth="0.06rem"
        rectangleDivHeight="1.5rem"
        iconsTop="2.5rem"
        iconsRight="1.5rem"
        iconsWidth="1.5rem"
        iconsHeight="1.5rem"
        errorMessageFontSize="0.88rem"
      /><Property1CheckBox1Line
        rememberMeLabel="/check-box@2x.png"
        property1CheckBox1LinePadding="0.5rem 0.5rem 0.5rem 0rem"
        property1CheckBox1LineGap="0.5rem"
        property1CheckBox1LineWidth="29.88rem"
        property1CheckBox1LineFlexShrink="0"
        checkBoxIconWidth="1.5rem"
        checkBoxIconHeight="1.5rem"
        iWantToFontSize="1rem"
        iWantToFontFamily="Roboto"
        iWantToColor="#fff"
      /><button
        buttonText="/icons@2x.png"
        actionText="Log in"
        buttonBorderRadius="4px"
        buttonBackgroundColor="#db202c"
        buttonWidth="29.88rem"
        buttonHeight="4rem"
        buttonPosition="relative"
        buttonFlexShrink="0"
        buttonTop="unset"
        buttonRight="unset"
        buttonBottom="unset"
        buttonLeft="unset"
        frameDivTop="calc(50% - 12px)"
        frameDivLeft="calc(50% - 27.5px)"
        frameDivGap="0.5rem"
        iconsWidth="1.5rem"
        iconsHeight="1.5rem"
        signUpFontSize="1.25rem"
        signUpFontWeight="unset"
        signUpFontFamily="Roboto"
      />
    </div>
    <Divider
      dividerWidth="29.88rem"
      dividerGap="1.44rem"
      dividerFlexShrink="0"
      dividerBackgroundColor="rgba(255, 255, 255, 0.5)"
      dividerHeight="0.13rem"
      dividerOpacity="0.5"
      oRFontSize="1.13rem"
      oRFontFamily="Roboto"
      oRColor="#fff"
      dividerBackgroundColor1="rgba(255, 255, 255, 0.5)"
      dividerHeight1="0.13rem"
      dividerOpacity1="0.5"
    />
    <div
      :style="{flexShrink: '0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '1rem'}"
    >
      <Property1Apple
        socialButtonIcon="/social-media-logo@2x.png"
        loginButtonIcon="Continue with Google"
        property1AppleBorderRadius="4px"
        property1AppleWidth="29.88rem"
        property1AppleHeight="4rem"
        property1ApplePosition="relative"
        property1AppleFlexShrink="0"
        frameDivTop="calc(50% - 13.5px)"
        frameDivLeft="calc(50% - 124.5px)"
        frameDivGap="1rem"
        socialMediaLogoWidth="1.5rem"
        socialMediaLogoHeight="1.5rem"
        continueWithAppleFontSize="1.38rem"
        continueWithAppleFontFamily="Roboto"
      /><Property1Apple
        socialButtonIcon="/social-media-logo@2x.png"
        loginButtonIcon="Continue with Apple"
        property1AppleBorderRadius="4px"
        property1AppleWidth="29.88rem"
        property1AppleHeight="4rem"
        property1ApplePosition="relative"
        property1AppleFlexShrink="0"
        frameDivTop="calc(50% - 16.5px)"
        frameDivLeft="calc(50% - 130.5px)"
        frameDivGap="1rem"
        socialMediaLogoWidth="2rem"
        socialMediaLogoHeight="2rem"
        continueWithAppleFontSize="1.5rem"
        continueWithAppleFontFamily="Roboto"
      />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Property1GenericTextField from "./Property1GenericTextField.vue";
  import Property1CheckBox1Line from "./Property1CheckBox1Line.vue";
  import Button from "./Button.vue";
  import Divider from "./Divider.vue";
  import Property1Apple from "./Property1Apple.vue";

  export default defineComponent({
    name: "Frame",
    components: {
      Property1GenericTextField,
      Property1CheckBox1Line,
      Button,
      Divider,
      Property1Apple,
    },
  });
</script>
