<template>
  <div
    :style="{position: 'relative', backgroundColor: '#000', width: '100%', height: '64rem', overflowY: 'auto', textAlign: 'left', fontSize: '1.38rem', color: '#fff', fontFamily: 'Roboto'}"
  >
    <Property1DefaultImage
      property1DefaultIconWidth="83.13rem"
      property1DefaultIconHeight="35.63rem"
      property1DefaultIconPosition="absolute"
      property1DefaultIconTop="2.25rem"
      property1DefaultIconLeft="5.44rem"
    />
    <b
      :style="{position: 'absolute', top: '22.38rem', left: 'calc(50% - 637px)', fontSize: '1.75rem', textTransform: 'uppercase', display: 'none', color: '#000', textAlign: 'center'}"
      >Offers / Home Banner</b
    >

    <!-- CONTENT-SECTION #1 -->
    <div
      :style="{position: 'absolute', height: '35.55%', width: '228.54%', top: '105.37%', right: '-134.31%', bottom: '-40.92%', left: '5.76%'}"
    >
      <b
        :style="{position: 'absolute', top: '0%', left: '0%', textTransform: 'uppercase'}"
        >Football</b
      >
      <div
        :style="{position: 'absolute', top: '2.69rem', left: '0rem', width: '205.69rem', height: '20.06rem'}"
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
    </div>
    <!-- SECTION #1 -->

    <!-- CONTENT-SECTION #2 -->
    <div
      :style="{position: 'absolute', height: '42.49%', width: '228.54%', top: '63.09%', right: '-134.31%', bottom: '-5.58%', left: '5.76%'}"
    >
      <b
        :style="{position: 'absolute', top: '0%', left: '0%', textTransform: 'uppercase'}"
        >Cricket</b
      >
      <div
        :style="{position: 'absolute', top: '3.13rem', left: '0rem', width: '205.69rem', height: '20.06rem'}"
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
            property1Variant3Cursor="pointer"
            groupDivWidth="0rem"
            groupDivHeight="0rem"
            loremIpsumDolorFontSize="1.13rem"
            loremIpsumDolorLineHeight="2.19rem"
            sLVsBANFontSize="0.88rem"
            sLVsBANLineHeight="1.53rem"
            divFontSize="3.88rem"
            divLineHeight="3.25rem"
            :onImageContainer8Click="onImageContainer8Click"
          />

          <!-- HIGHLIGHT TEXT -->
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
          <!-- HIGHLIGHT TEXT -->
          
        </div>
          <!-- HIGHLIGTED TEXT START -->
          <ImageVariant2
            imageDimensions="/mask-group@2x.png"
            imageVariant2Width="15.65%"
            imageVariant2Height="95.4%"
            imageVariant2Position="absolute"
            imageVariant2Top="4.6%"
            imageVariant2Right="74.48%"
            imageVariant2Bottom="0%"
            imageVariant2Left="9.88%"
            groupDivLeft="2.51rem"
            groupDivWidth="17.77rem"
            loremIpsumDolorLeft="3.46rem"
            loremIpsumDolorFontSize="1.13rem"
            loremIpsumDolorLineHeight="1.69rem"
            sLVsBANFontSize="0.88rem"
            sLVsBANLineHeight="1.33rem"
            divFontSize="4.59rem"
            divLineHeight="3.86rem"
          />
          <!-- HIGHLIGTED TEXT END -->

      </div>

    </div>
    <!-- CONTENT-SECTION #2 -->

    <!-- NAVIGATION -->
      <Navigation
        dimensionLabel="/group-1000002298@2x.png"
        property1DefaultWidth="10.63rem"
        property1DefaultHeight="64rem"
        property1DefaultPosition="absolute"
        property1DefaultTop="0rem"
        property1DefaultLeft="0.19rem"
        searchFontSize="1rem"
        searchFontSize1="1rem"
        searchFontSize2="1rem"
        searchFontSize3="1rem"
        searchFontSize4="1rem"
        searchFontSize5="1rem"
        searchFontSize6="1rem"
        :onGroupContainerClick="onGroupContainer21Click"
        :onGroupContainer1Click="onGroupContainer22Click"
        :onGroupContainer2Click="onGroupContainer23Click"
        :onGroupContainer3Click="onGroupContainer24Click"
        :onGroupContainer4Click="onGroupContainer25Click"
        :onGroupContainer5Click="onGroupContainer26Click"
        :showSearch="false"
      />
    <!-- NAVIGATION -->

  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Property1DefaultImage from "../components/Property1DefaultImage.vue";
  import Property1Variant31 from "../components/Property1Variant31.vue";
  import ImageVariant2 from "../components/ImageVariant2.vue";
  import Navigation from "../components/Navigation.vue";

  export default defineComponent({
    name: "Page6",
    components: {
      Property1DefaultImage,
      Property1Variant31,
      ImageVariant2,
      Navigation,
    },
    methods: {
      onImageContainer8Click() {
        this.$router.push("/page-11");
      },
      onGroupContainer21Click() {
        this.$router.push("/page-12");
      },

      // CTA TO CONTENT PAGE
      onGroupContainer22Click() {
        this.$router.push("/page-6");
      },

      // CTA TO EXPLORE PAGE
      onGroupContainer23Click() {
        this.$router.push("/page-2b1");
      },

      onGroupContainer24Click() {
        this.$router.push("/page-2b");
      },
      onGroupContainer25Click() {
        this.$router.push("/page-2a");
      },
      onGroupContainer26Click() {
        this.$router.push("/page-4b");
      },
    },
  });
</script>
