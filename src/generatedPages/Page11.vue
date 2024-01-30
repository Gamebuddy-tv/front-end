<template>
  <div
    :style="{position: 'relative', backgroundColor: '#000', width: '100%', height: '64rem', overflowY: 'auto', textAlign: 'left', fontSize: '1.38rem', color: '#fff', fontFamily: 'Roboto'}"
  >
    <b
      :style="{position: 'absolute', top: '22.38rem', left: 'calc(50% - 637px)', fontSize: '1.75rem', textTransform: 'uppercase', display: 'none', color: '#000', textAlign: 'center'}"
      >Offers / Home Banner</b
    >
    <b
      :style="{position: 'absolute', top: '109.28%', left: '5.76%', textTransform: 'uppercase'}"
      >Related Videos</b
    >

    <b
      :style="{position: 'absolute', top: '84.96%', left: '5.76%', fontSize: '1.75rem', textTransform: 'uppercase'}"
      >Kabaddi Match Highlights 2023 Davis Cup | Knockout State : 26-27 November
      2023 | Spain</b
    >
    <b
      :style="{position: 'absolute', top: '149.32%', left: '5.76%', textTransform: 'uppercase'}"
      >Kabaddi</b
    >
    <div
      :style="{position: 'absolute', top: '2rem', left: '4rem', borderRadius: '4px', backgroundColor: '#fff', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '0.5rem 1rem 0.5rem 0.75rem', cursor: 'pointer'}"
      @click="onPlayButtonContainerClick"
    >
      <img
        :style="{position: 'relative', width: '1.5rem', height: '1.5rem', overflow: 'hidden', flexShrink: '0', objectFit: 'contain'}"
        alt=""
        src="/chevronright@2x.png"
      />
    </div>

    <!-- SECTION  -->
    <div
      :style="{position: 'absolute', top: '73.88rem', left: '5.19rem', width: '205.69rem', height: '20.06rem'}"
    >
      <div
        :style="{position: 'absolute', top: '0rem', left: '0rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '0.81rem'}"
      >

      <Property1Variant31
          imageDimensions="/mask-group@2x.png"
          imageId="/group-1@2x.png"
          :groupIcon="false"
          property1Variant3Width="25rem"
          property1Variant3Height="20.06rem"
          property1Variant3Position="relative"
          property1Variant3Cursor="unset"
          groupDivWidth="0rem"
          groupDivHeight="0rem"
          loremIpsumDolorFontSize="1.13rem"
          loremIpsumDolorLineHeight="2.19rem"
          sLVsBANFontSize="0.88rem"
          sLVsBANLineHeight="1.53rem"
          divFontSize="3.88rem"
          divLineHeight="3.25rem"
        />

      </div>
    </div>
    <!-- SECTION  -->

    <!-- SECTION  -->
    <div
      :style="{position: 'absolute', top: '99.25rem', left: '5.19rem', width: '205.69rem', height: '20.06rem'}"
    >
      <div
        :style="{position: 'absolute', top: '0rem', left: '0rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '0.81rem'}"
      >

        <Property1Variant31
          imageDimensions="/mask-group@2x.png"
          imageId="/group-1@2x.png"
          :groupIcon="false"
          property1Variant3Width="25rem"
          property1Variant3Height="20.06rem"
          property1Variant3Position="relative"
          property1Variant3Cursor="unset"
          groupDivWidth="0rem"
          groupDivHeight="0rem"
          loremIpsumDolorFontSize="1.13rem"
          loremIpsumDolorLineHeight="2.19rem"
          sLVsBANFontSize="0.88rem"
          sLVsBANLineHeight="1.53rem"
          divFontSize="3.88rem"
          divLineHeight="3.25rem"
        />

      </div>
    </div>
    <!-- SECTION  -->

    <!-- VIDEO PLAYER TOOLS -->
    <div
      :style="{position: 'absolute', top: '7.45rem', left: '5.19rem', backgroundColor: '#fff', width: '81.81rem', height: '44.91rem', overflow: 'hidden', textAlign: 'center', fontSize: '1.31rem', fontFamily: 'Gilroy'}"
    >

      <!-- THUMBNAIL PLAY IFRAME -->
      <!-- <img
        :style="{position: 'absolute', top: '0rem', left: '-5.15rem', width: '89.46rem', height: '47.61rem', objectFit: 'cover'}"
        alt=""
        src="/image-15@2x.png"
      /> -->

      <iframe width="1000" height="500" 
      :style="{position: 'absolute', top: '0rem', left: '0.0rem', width: '82.75rem', height: '45.61rem', objectFit: 'cover'}"
        src="https://www.youtube.com/embed/GJwKyryFL6Q?rel=0" 
        title="CLASSIC RUSH GAMES | ONLY RUSH GAMES | BGMI WITH REGALTOS" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
        web-share" allowfullscreen /> 
      <!-- THUMBNAIL PLAY IFRAME -->

      <!-- <Controls /> -->


      <!-- <div
        :style="{position: 'absolute', height: '24.97%', width: '13.71%', top: '37.25%', right: '23.05%', bottom: '37.78%', left: '63.24%'}"
      >
        <div
          :style="{position: 'absolute', top: '4.86rem', left: '3.8rem', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start'}"
        >
          <div
            :style="{position: 'relative', fontWeight: '600', display: 'inline-block', width: '0.81rem', height: '1.62rem', flexShrink: '0', opacity: '0'}"
          >
            +
          </div>
          <div
            :style="{position: 'relative', fontWeight: '600', display: 'inline-block', width: '2.06rem', height: '1.62rem', flexShrink: '0'}"
          >
            10
          </div>
        </div>
        <img
          :style="{position: 'absolute', top: '3.54rem', left: '3.54rem', width: '4.18rem', height: '4.18rem', objectFit: 'contain'}"
          alt=""
          src="/ellipse-2@2x.png"
        />
      </div>
      <img
        :style="{position: 'absolute', height: '24.97%', width: '13.71%', top: '37.25%', right: '68.15%', bottom: '37.78%', left: '18.15%', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'contain'}"
        alt=""
        src="/back@2x.png"
      />
      <div
        :style="{position: 'absolute', top: '16.89rem', left: '33.61rem', width: '11.45rem', height: '11.34rem'}"
      >
        <PlaybackPause
          playbackPauseWidth="11.45rem"
          playbackPauseHeight="11.34rem"
          playbackPausePosition="absolute"
          playbackPauseTop="0rem"
          playbackPauseLeft="0rem"
          groupDivTop="4.13rem"
          groupDivLeft="4.7rem"
          groupDivWidth="2.06rem"
          groupDivHeight="3.09rem"
          rectangleDivTop="0rem"
          rectangleDivLeft="0rem"
          rectangleDivWidth="0.63rem"
          rectangleDivHeight="3.09rem"
          rectangleDivTop1="0rem"
          rectangleDivLeft1="1.43rem"
          rectangleDivWidth1="0.63rem"
          rectangleDivHeight1="3.09rem"
        />

      </div> -->
    </div>
    <!-- VIDEO PLAYER TOOLS -->

    <!-- DESCRIPTION  -->
      <div
        :style="{position: 'absolute', top: '59.5rem', left: '5rem', width: '79.94rem', height: '7.81rem'}"
      >
        <b
          :style="{position: 'absolute', top: '0rem', left: '0rem', lineHeight: '2rem'}"
          >Description</b
        >
        <b
          :style="{position: 'absolute', height: '60%', width: '100%', top: '40%', left: '0%', fontSize: '1.75rem', textTransform: 'capitalize', display: 'inline-block', opacity: '0.5'}"
          >Kabaddi Match Highlights 2023 Davis Cup | Knockout State : 26-27
          November 2023 | Spain | Kabaddi Match Highlights 2023 Davis Cup |
          Knockout State : 26-27 November 2023 | Spain
        </b>
      </div>
    <!-- DESCRIPTION  -->

  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Property1Variant31 from "../components/Property1Variant31.vue";
  import Controls from "../components/Controls.vue";
  import PlaybackPause from "../components/PlaybackPause.vue";

  export default defineComponent({
    name: "Page11",
    components: { Property1Variant31, Controls, PlaybackPause },
    methods: {
      onPlayButtonContainerClick() {
        this.$router.push("/page-6");
      },
    },
  });
</script>
