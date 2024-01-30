<template>
    <div :style="{width: '665px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '4px', textAlign: 'left', fontSize: '16px', color: '#666', fontFamily: 'Poppins', ...property1GenericTextFieldStyle}">
      <div :style="{alignSelf: 'stretch', position: 'relative', height: '27px', ...frameDiv10Style}">
        <div :style="{position: 'absolute', top: '0px', left: '0px', ...labelStyle}">Email</div>
        <div :style="{position: 'absolute', top: '0px', right: '8.9px', width: '73px', height: '27px', display: 'none', textAlign: 'right', fontSize: '18px', color: 'rgba(102, 102, 102, 0.8)', ...passwordHideSeeStyle}">
          <img alt=""  :src=imageId :style="{position: 'absolute', top: '3px', right: '49px', width: '24px', height: '24px', overflow: 'hidden', objectFit: 'cover', ...iconStyle}" />
          <div :style="{position: 'absolute', top: '0px', right: '0px', ...hideStyle}">Hide</div>
        </div>
      </div>
      <div :style="{alignSelf: 'stretch', position: 'relative', borderRadius: '12px', border: '1px solid rgba(102, 102, 102, 0.35)', boxSizing: 'border-box', height: '56px', overflow: 'hidden', flexShrink: '0', color: '#111', ...textFieldStyle}">
        <div :style="{position: 'absolute', top: '15px', left: '24px', display: 'none', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', ...inputsStyle}">
          <div :style="{position: 'relative', ...divStyle}">{{identifier}}</div>
          <div v-if="showRectangleDiv"  :style="{position: 'relative', backgroundColor: '#111', width: '1px', height: '24px', ...rectangleDiv2Style}" />
        </div>
        <img alt=""  :src=imageCode :style="{position: 'absolute', top: '40px', right: '24px', width: '24px', height: '24px', overflow: 'hidden', objectFit: 'cover', display: 'none', ...iconsStyle}" />
      </div>
      <div v-if="showErrorMessage"  :style="{position: 'relative', fontSize: '14px', color: '#ee1d52', ...errorMessageStyle}">Error message</div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type * as CSS from "csstype"; const getStyleValue = (key: string, value: string | number | undefined) => {
              if(value === undefined || value === '') return;
              return {[key]: value};
            }

export default defineComponent({
name: "Property1GenericTextField",
props: {
imageId: { type: String  }
,identifier: { type: String  }
,imageCode: { type: String  }
,showRectangleDiv: { type: Boolean  }
,showErrorMessage: { type: Boolean  }
,property1GenericTextFieldWidth: { type: String  }
,property1GenericTextFieldGap: { type: String  }
,frameDivHeight: { type: String  }
,labelTop: { type: String  }
,labelLeft: { type: String  }
,labelFontSize: { type: String  }
,labelFontFamily: { type: String  }
,labelColor: { type: String  }
,passwordHideSeeTop: { type: String  }
,passwordHideSeeRight: { type: String  }
,passwordHideSeeWidth: { type: String  }
,passwordHideSeeHeight: { type: String  }
,iconTop: { type: String  }
,iconRight: { type: String  }
,iconWidth: { type: String  }
,iconHeight: { type: String  }
,hideTop: { type: String  }
,hideRight: { type: String  }
,hideFontSize: { type: String  }
,textFieldBorderRadius: { type: String  }
,textFieldBorder: { type: String  }
,textFieldHeight: { type: String  }
,textFieldBackgroundColor: { type: String  }
,textFieldOpacity: { type: String  }
,inputsTop: { type: String  }
,inputsLeft: { type: String  }
,divFontSize: { type: String  }
,rectangleDivWidth: { type: String  }
,rectangleDivHeight: { type: String  }
,iconsTop: { type: String  }
,iconsRight: { type: String  }
,iconsWidth: { type: String  }
,iconsHeight: { type: String  }
,errorMessageFontSize: { type: String  }
},
computed: {  property1GenericTextFieldStyle(): CSS.Properties {
                  return {
                    width: this.property1GenericTextFieldWidth,
      gap: this.property1GenericTextFieldGap
                  }
                }
              ,  frameDiv10Style(): CSS.Properties {
                  return {
                    height: this.frameDivHeight
                  }
                }
              ,  labelStyle(): CSS.Properties {
                  return {
                    top: this.labelTop,
      left: this.labelLeft,
      fontSize: this.labelFontSize,
      fontFamily: this.labelFontFamily,
      color: this.labelColor
                  }
                }
              ,  passwordHideSeeStyle(): CSS.Properties {
                  return {
                    top: this.passwordHideSeeTop,
      right: this.passwordHideSeeRight,
      width: this.passwordHideSeeWidth,
      height: this.passwordHideSeeHeight
                  }
                }
              ,  iconStyle(): CSS.Properties {
                  return {
                    top: this.iconTop,
      right: this.iconRight,
      width: this.iconWidth,
      height: this.iconHeight
                  }
                }
              ,  hideStyle(): CSS.Properties {
                  return {
                    top: this.hideTop,
      right: this.hideRight,
      fontSize: this.hideFontSize
                  }
                }
              ,  textFieldStyle(): CSS.Properties {
                  return {
                    borderRadius: this.textFieldBorderRadius,
      border: this.textFieldBorder,
      height: this.textFieldHeight,
      backgroundColor: this.textFieldBackgroundColor,
      opacity: this.textFieldOpacity
                  }
                }
              ,  inputsStyle(): CSS.Properties {
                  return {
                    top: this.inputsTop,
      left: this.inputsLeft
                  }
                }
              ,  divStyle(): CSS.Properties {
                  return {
                    fontSize: this.divFontSize
                  }
                }
              ,  rectangleDiv2Style(): CSS.Properties {
                  return {
                    width: this.rectangleDivWidth,
      height: this.rectangleDivHeight
                  }
                }
              ,  iconsStyle(): CSS.Properties {
                  return {
                    top: this.iconsTop,
      right: this.iconsRight,
      width: this.iconsWidth,
      height: this.iconsHeight
                  }
                }
              ,  errorMessageStyle(): CSS.Properties {
                  return {
                    fontSize: this.errorMessageFontSize
                  }
                }
              }})</script>