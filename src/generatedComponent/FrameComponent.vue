<template>
    <div :style="{width: '345px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '10px', boxSizing: 'border-box', textAlign: 'left', fontSize: '11px', color: '#000', fontFamily: 'Roboto', ...frameDiv13Style}">
      <div v-if="showFrameDiv"  :style="{position: 'relative', borderRadius: '5px', backgroundColor: '#000', width: '212px', height: '36px', ...frameDiv14Style}">
        <img v-if="!icon1"  alt=""  :src=iconImageUrl :style="{position: 'absolute', top: '10px', left: '10px', width: '24px', height: '24px', overflow: 'hidden', objectFit: 'cover', display: 'none', ...icon1Style}" />
        <div :style="{position: 'absolute', top: '6px', left: '10px', width: '22px', height: '22px', ...groupDiv3Style}">
          <div :style="{position: 'absolute', top: '0px', left: '0px', width: '22px', height: '22px', ...groupDiv4Style}">
            <div :style="{position: 'absolute', top: '0px', left: '0px', borderRadius: '50%', backgroundColor: '#fff', width: '22px', height: '22px', ...ellipseDivStyle}" />
            <div :style="{position: 'absolute', top: '5px', left: '7px', ...aStyle}">{{letterImageUrl}}</div>
          </div>
          <img v-if="!groupIcon"  alt=""  :src=dimensionImageUrl :style="{position: 'absolute', top: '0px', left: '0px', width: '22px', height: '22px', objectFit: 'cover', display: 'none', ...groupIcon1Style}" />
        </div>
        <div :style="{position: 'absolute', top: '11px', left: '41px', color: '#fff', ...optionStyle}">Option</div>
      </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type * as CSS from "csstype";

export default defineComponent({
name: "FrameComponent",
props: {
iconImageUrl: { type: String  }
,letterImageUrl: { type: String  }
,dimensionImageUrl: { type: String  }
,showFrameDiv: { type: Boolean  }
,icon1: { type: Boolean  }
,groupIcon: { type: Boolean  }
,frameDivWidth: { type: String  }
,frameDivPosition: { type: String  }
,frameDivHeight: { type: String  }
,frameDivTop: { type: String  }
,frameDivRight: { type: String  }
,frameDivBottom: { type: String  }
,frameDivLeft: { type: String  }
,frameDivPadding: { type: String  }
,frameDivBackgroundColor: { type: String  }
,frameDivWidth1: { type: String  }
,frameDivHeight1: { type: String  }
,iconTop: { type: String  }
,iconLeft: { type: String  }
,iconWidth: { type: String  }
,iconHeight: { type: String  }
,groupDivTop: { type: String  }
,groupDivLeft: { type: String  }
,groupDivWidth: { type: String  }
,groupDivHeight: { type: String  }
,groupDivTop1: { type: String  }
,groupDivLeft1: { type: String  }
,groupDivWidth1: { type: String  }
,groupDivHeight1: { type: String  }
,ellipseDivTop: { type: String  }
,ellipseDivLeft: { type: String  }
,ellipseDivWidth: { type: String  }
,ellipseDivHeight: { type: String  }
,aTop: { type: String  }
,aLeft: { type: String  }
,aFontSize: { type: String  }
,groupIconTop: { type: String  }
,groupIconLeft: { type: String  }
,groupIconWidth: { type: String  }
,groupIconHeight: { type: String  }
,optionTop: { type: String  }
,optionLeft: { type: String  }
,optionFontSize: { type: String  }
},
computed: {  frameDiv13Style(): CSS.Properties {
                  return {
                    width: this.frameDivWidth,
      position: this.frameDivPosition,
      height: this.frameDivHeight,
      top: this.frameDivTop,
      right: this.frameDivRight,
      bottom: this.frameDivBottom,
      left: this.frameDivLeft,
      padding: this.frameDivPadding
                  }
                }
              ,  frameDiv14Style(): CSS.Properties {
                  return {
                    backgroundColor: this.frameDivBackgroundColor,
      width: this.frameDivWidth1,
      height: this.frameDivHeight1
                  }
                }
              ,  icon1Style(): CSS.Properties {
                  return {
                    top: this.iconTop,
      left: this.iconLeft,
      width: this.iconWidth,
      height: this.iconHeight
                  }
                }
              ,  groupDiv3Style(): CSS.Properties {
                  return {
                    top: this.groupDivTop,
      left: this.groupDivLeft,
      width: this.groupDivWidth,
      height: this.groupDivHeight
                  }
                }
              ,  groupDiv4Style(): CSS.Properties {
                  return {
                    top: this.groupDivTop1,
      left: this.groupDivLeft1,
      width: this.groupDivWidth1,
      height: this.groupDivHeight1
                  }
                }
              ,  ellipseDivStyle(): CSS.Properties {
                  return {
                    top: this.ellipseDivTop,
      left: this.ellipseDivLeft,
      width: this.ellipseDivWidth,
      height: this.ellipseDivHeight
                  }
                }
              ,  aStyle(): CSS.Properties {
                  return {
                    top: this.aTop,
      left: this.aLeft,
      fontSize: this.aFontSize
                  }
                }
              ,  groupIcon1Style(): CSS.Properties {
                  return {
                    top: this.groupIconTop,
      left: this.groupIconLeft,
      width: this.groupIconWidth,
      height: this.groupIconHeight
                  }
                }
              ,  optionStyle(): CSS.Properties {
                  return {
                    top: this.optionTop,
      left: this.optionLeft,
      fontSize: this.optionFontSize
                  }
                }
              }})</script>