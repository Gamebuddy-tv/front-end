<template>
  <div :style="{width: '341px', height: '338px', ...playbackPauseStyle}">
    <div
      :style="{position: 'absolute', top: '123px', left: '140px', width: '61.3px', height: '92px', ...groupDivStyle}"
    >
      <div
        :style="{position: 'absolute', top: '0px', left: '0px', borderRadius: '2.67px', backgroundColor: '#fff', width: '18.7px', height: '92px', ...rectangleDivStyle}"
      />
      <div
        :style="{position: 'absolute', top: '0px', left: '42.7px', borderRadius: '2.67px', backgroundColor: '#fff', width: '18.7px', height: '92px', ...rectangleDiv1Style}"
      />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "PlaybackPause",
    props: {
      playbackPauseWidth: { type: [String, Number, Boolean] },
      playbackPauseHeight: { type: [String, Number, Boolean] },
      playbackPausePosition: { type: String },
      playbackPauseTop: { type: [String, Number, Boolean] },
      playbackPauseLeft: { type: [String, Number, Boolean] },
      groupDivTop: { type: [String, Number, Boolean] },
      groupDivLeft: { type: [String, Number, Boolean] },
      groupDivWidth: { type: [String, Number, Boolean] },
      groupDivHeight: { type: [String, Number, Boolean] },
      rectangleDivTop: { type: [String, Number, Boolean] },
      rectangleDivLeft: { type: [String, Number, Boolean] },
      rectangleDivWidth: { type: [String, Number, Boolean] },
      rectangleDivHeight: { type: [String, Number, Boolean] },
      rectangleDivTop1: { type: [String, Number, Boolean] },
      rectangleDivLeft1: { type: [String, Number, Boolean] },
      rectangleDivWidth1: { type: [String, Number, Boolean] },
      rectangleDivHeight1: { type: [String, Number, Boolean] },
    },
    computed: {
      playbackPauseStyle(): CSS.Properties {
        return {
          width: this.playbackPauseWidth,
          height: this.playbackPauseHeight,
          position: this.playbackPausePosition,
          top: this.playbackPauseTop,
          left: this.playbackPauseLeft
        }
      },
      groupDivStyle(): CSS.Properties {
        return {
          top: this.groupDivTop,
          left: this.groupDivLeft,
          width: this.groupDivWidth,
          height: this.groupDivHeight
        }
      },
      rectangleDivStyle(): CSS.Properties {
        return {
          top: this.rectangleDivTop,
          left: this.rectangleDivLeft,
          width: this.rectangleDivWidth,
          height: this.rectangleDivHeight
        }
      },
      rectangleDiv1Style(): CSS.Properties {
        return {
          top: this.rectangleDivTop1,
          left: this.rectangleDivLeft1,
          width: this.rectangleDivWidth1,
          height: this.rectangleDivHeight1
        }
      }
    }
  })
</script>
