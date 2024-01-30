<template>
  <div
    :style="{position: 'relative', backgroundColor: '#000', width: '100%', height: '64rem', overflowY: 'auto', cursor: 'pointer', textAlign: 'left', fontSize: '1.75rem', color: '#000', fontFamily: 'Roboto'}"
    @click="onPage2A1ContainerClick"
  >

  <!-- NOT UTILISED NAVIGATION -->

    <!-- <b
      :style="{position: 'absolute', top: '22.38rem', left: 'calc(50% + 323px)', textTransform: 'uppercase', display: 'none', textAlign: 'center'}"
      >Offers / Home Banner</b
    >
    <div
      :style="{position: 'absolute', top: '30.31rem', left: '8.56rem', width: '16.56rem', height: '1.63rem', fontSize: '1.38rem'}"
    >
      <div
        :style="{position: 'absolute', top: '0%', left: '0%', textTransform: 'uppercase', fontWeight: '900'}"
      >
        Hello World Category
      </div>
    </div> -->

    <div
      :style="{position: 'absolute', top: '6.69rem', left: '285.19rem', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.06)', width: '82.25rem', height: '54.44rem'}"
    />
    <div
      :style="{position: 'absolute', top: '6.63rem', left: '2.63rem', width: '84.63rem', height: '54.44rem', fontSize: '1.25rem', color: '#fff'}"
    >
      <div
        :style="{position: 'absolute', top: '0rem', left: '0rem', width: '84.63rem', height: '54.44rem'}"
      >
        <div
          :style="{position: 'absolute', top: '-0.06rem', left: '-0.06rem', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.06)', border: '1px solid #746767', boxSizing: 'border-box', width: '84.75rem', height: '54.56rem'}"
        />
        <div
          :style="{position: 'absolute', top: '0rem', left: '38.31rem', width: '46.31rem', height: '43.13rem', overflowY: 'auto'}"
        >
          <div
            :style="{position: 'absolute', height: '100%', width: '100%', top: '0%', right: '0%', bottom: '0%', left: '0%', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0)'}"
          />

          <!-- Question #1 -->
          <Group
            cricketTriviaQuestion=" GROUP  Component 1"
            propTop="8.7%"
            propBottom="69.86%"
          />

          <!-- Question #2 -->
          <Group
            cricketTriviaQuestion=" GROUP  Component 2"
            propTop="39.71%"
            propBottom="34.06%"
          />

          <!-- Question #3 -->
          <Group
            cricketTriviaQuestion=" GROUP  Component 3"
            propTop="(72.94)%"
            propBottom="10%"
          />

          <!-- Question #4 -->
          <Group
            cricketTriviaQuestion=" GROUP  Component 4"
            propTop="104.78%"
            propBottom="-16.23%"
          />

          <!-- Question #5 -->
          <Group
            cricketTriviaQuestion=" GROUP  Componen 5"
            propTop="147.78%"
            propBottom="-69%"
          />

          <!-- Question #6 -->
          <Group
            cricketTriviaQuestion=" GROUP  Componen 6"
            propTop="177.78%"
            propBottom="-69%"
          />

        </div>

        <!-- END Of QUESTIONS & OPTIONS LIST -->


        <!-- CTA TO SAVE OPTIONS -->
        <div
          :style="{position: 'absolute', height: '13.55%', width: '54.73%', top: '86.45%', right: '0%', bottom: '0%', left: '45.27%'}"
        >
          <div
            :style="{position: 'absolute', height: '100%', width: '100%', top: '0%', right: '0%', bottom: '0%', left: '0%', borderRadius: '5px', backgroundColor: '#0f0f0f'}"
          />
          <div
            :style="{position: 'absolute', height: '45.76%', width: '51.96%', top: '27.12%', right: '24.02%', bottom: '27.12%', left: '24.02%'}"
          >
            <TypePrimarySizeLarge
              iconImageUrl="/hugeiconmultimedia-and-audiosolidfavourite@2x.png"
              text="Submit"
              iconTextId="/hugeiconmultimedia-and-audiosolidfavourite@2x.png"
              :iconRight="false"
              :iconLeft="false"
              typePrimarySizeLargeBorderRadius="4px"
              typePrimarySizeLargeBackgroundColor="#db202c"
              typePrimarySizeLargeHeight="100%"
              typePrimarySizeLargePadding="0rem 1.5rem"
              typePrimarySizeLargePosition="absolute"
              typePrimarySizeLargeWidth="47.01%"
              typePrimarySizeLargeTop="0%"
              typePrimarySizeLargeRight="0%"
              typePrimarySizeLargeBottom="0%"
              typePrimarySizeLargeLeft="52.99%"
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
            
            
            <TypePrimarySizeLarge
              iconImageUrl="/hugeiconmultimedia-and-audiosolidfavourite@2x.png"
              text="Cancel"
              iconTextId="/hugeiconmultimedia-and-audiosolidfavourite@2x.png"
              :iconRight="false"
              :iconLeft="false"
              typePrimarySizeLargeBorderRadius="4px"
              typePrimarySizeLargeBackgroundColor="#fff"
              typePrimarySizeLargeHeight="100%"
              typePrimarySizeLargePadding="0rem 1.5rem"
              typePrimarySizeLargePosition="absolute"
              typePrimarySizeLargeWidth="47.01%"
              typePrimarySizeLargeTop="0%"
              typePrimarySizeLargeRight="52.99%"
              typePrimarySizeLargeBottom="0%"
              typePrimarySizeLargeLeft="0%"
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
        </div>

        <!-- LEFT HAND SIDE IMAGE & DESCRIPTION OF THE TRIVIA -->
        <div
          :style="{position: 'absolute', top: '1.94rem', left: '2.13rem', width: '35rem', height: '24.56rem', fontSize: '1.13rem'}"
        >
          <div
            :style="{position: 'absolute', top: '0rem', left: '0rem', width: '35rem', height: '24.56rem'}"
          >
            <div
              :style="{position: 'absolute', top: '0rem', left: '0rem', width: '35rem', height: '24.56rem'}"
            >
              <img
                :style="{position: 'absolute', top: '0rem', left: '0rem', borderRadius: '5px', width: '35rem', height: '17.93rem', objectFit: 'cover'}"
                alt=""
                src="/image-19@2x.png"
              />
              <div
                :style="{position: 'absolute', top: '19.31rem', left: '0rem', letterSpacing: '0.26px', lineHeight: '1.53rem', fontWeight: '500', display: 'inline-block', width: '35rem'}"
              >
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </div>
              <div
                :style="{position: 'absolute', top: '23rem', left: '0rem', fontSize: '0.88rem', letterSpacing: '0.26px', lineHeight: '1.53rem', fontWeight: '500', color: '#db202c', display: 'inline-block', width: '18.94rem'}"
              >
                SL vs BAN Live Updates(AP)
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- CTA BACK TO LISTING -->
    <div
      :style="{position: 'absolute', top: '2rem', left: '4rem', borderRadius: '4px', backgroundColor: '#fff', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '0.5rem 1rem 0.5rem 0.75rem', cursor: 'pointer', fontSize: '0.88rem', color: '#2b2b2b'}"
      @click="onPlayButtonContainerClick"
    >
      <img
        :style="{position: 'relative', width: '1.5rem', height: '1.5rem', overflow: 'hidden', flexShrink: '0', objectFit: 'contain'}"
        alt=""
        src="/chevronright@2x.png"
      />
      <b :style="{position: 'relative'}">Back to List</b>
    </div>
    <!-- CTA BACK TO LISTING -->


  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import FrameComponent from "../GeneratedComponent/FrameComponent.vue";
  import Group from "../GeneratedComponent/Group.vue";
  import TypePrimarySizeLarge from "../GeneratedComponent/TypePrimarySizeLarge.vue";

  export default defineComponent({
    name: "Page2A1",
    components: { FrameComponent, Group, TypePrimarySizeLarge },
    methods: {
      onPage2A1ContainerClick() {
        this.$router.push("/page-4b1");
      },
      onPlayButtonContainerClick() {
        this.$router.push("/page-2a");
      },
    },
  });
</script>
