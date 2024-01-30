<template>
  <div
    :style="{position: 'relative', backgroundColor: '#000', width: '100%', height: '64rem', overflowY: 'auto', cursor: 'pointer', textAlign: 'center', fontSize: '1.25rem', color: '#fff', fontFamily: 'Roboto'}"
    @click="onPage2B1ContainerClick"
  >
    <div
      :style="{position: 'absolute', top: '8.44rem', left: '4.44rem', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.1)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px solid rgba(255, 255, 255, 0.5)', boxSizing: 'border-box', width: '81.13rem', height: '23.25rem', mixBlendMode: 'normal'}"
    />
    <div
      :style="{position: 'absolute', top: '35.75rem', left: '4.5rem', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.1)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px solid rgba(255, 255, 255, 0.5)', boxSizing: 'border-box', width: '81rem', height: '23.13rem', mixBlendMode: 'normal'}"
    />
    <b
      :style="{position: 'absolute', top: '22.38rem', left: 'calc(50% + 323px)', fontSize: '1.75rem', textTransform: 'uppercase', display: 'none', color: '#000'}"
      >Offers / Home Banner</b
    >
    <div
      :style="{position: 'absolute', top: '3.38rem', left: '5.19rem', width: '11.75rem', height: '1.75rem', textAlign: 'left', fontSize: '1.5rem'}"
    >
      <b
        :style="{position: 'absolute', top: '0rem', left: '0rem', textTransform: 'uppercase'}"
        >Welcome Titan</b
      >
    </div>
    <b
      :style="{position: 'absolute', top: '10.19rem', left: '6.44rem', textTransform: 'uppercase', textAlign: 'left'}"
      >Select Sport</b
    >
    <b
      :style="{position: 'absolute', top: '37.56rem', left: '6.44rem', textTransform: 'uppercase', textAlign: 'left'}"
      >Select Leagues</b
    >
    <div
      :style="{position: 'absolute', height: '0.32%', width: '9.65%', top: '18.55%', right: '83.19%', bottom: '81.12%', left: '7.15%', backgroundColor: '#fff'}"
    />
    <div
      :style="{position: 'absolute', height: '0.32%', width: '11.25%', top: '61.43%', right: '81.6%', bottom: '38.25%', left: '7.15%', backgroundColor: '#fff'}"
    />
    <div
      :style="{position: 'absolute', top: '14.69rem', left: '7.38rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: '2rem', fontSize: '1.88rem', fontFamily: 'Font Awesome 5 Free'}"
    >
      <div
        :style="{borderRadius: '83.81px', backgroundColor: 'rgba(255, 255, 255, 0.15)', width: '3.13rem', height: '3.13rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0.57rem 0.63rem 0.57rem 0.51rem', boxSizing: 'border-box'}"
      >
        <div
          :style="{position: 'relative', lineHeight: '120%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.19rem', height: '2.19rem', flexShrink: '0'}"
        >
          chevron-left
        </div>
      </div>
      <Component30
        imageDescription="/ellipse-355@2x.png"
        sportImageUrl="Cricket"
        propFontWeight="500"
      /><Component30
        imageDescription="/ellipse-355@2x.png"
        sportImageUrl="Food ball"
        propOpacity="unset"
        propOpacity1="0.7"
        propOpacity2="0.7"
        propFontWeight="500"
      /><Component30
        imageDescription="/ellipse-355@2x.png"
        sportImageUrl="Volleyball"
        propOpacity="0.7"
        propOpacity1="unset"
        propOpacity2="unset"
        propFontWeight="500"
      /><Component30
        imageDescription="/ellipse-355@2x.png"
        sportImageUrl="Hockey"
        propOpacity="0.7"
        propOpacity1="unset"
        propOpacity2="unset"
        propFontWeight="500"
      /><Component30
        imageDescription="/ellipse-355@2x.png"
        sportImageUrl="Tennis"
        propOpacity="0.7"
        propOpacity1="unset"
        propOpacity2="unset"
        propFontWeight="500"
      />
      <div
        :style="{borderRadius: '83.81px', backgroundColor: 'rgba(255, 255, 255, 0.15)', width: '3.13rem', height: '3.13rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0.57rem 0.63rem 0.57rem 0.51rem', boxSizing: 'border-box', transform: ' rotate(-180deg)'}"
      >
        <div
          :style="{position: 'relative', lineHeight: '120%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.19rem', height: '2.19rem', flexShrink: '0'}"
        >
          chevron-left
        </div>
      </div>
    </div>
    <div
      :style="{position: 'absolute', top: '42.06rem', left: '5.69rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: '2rem', fontSize: '1.88rem', fontFamily: 'Font Awesome 5 Free'}"
    >
      <div
        :style="{borderRadius: '83.81px', backgroundColor: 'rgba(255, 255, 255, 0.15)', width: '3.13rem', height: '3.13rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0.57rem 0.63rem 0.57rem 0.51rem', boxSizing: 'border-box'}"
      >
        <div
          :style="{position: 'relative', lineHeight: '120%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.19rem', height: '2.19rem', flexShrink: '0'}"
        >
          chevron-left
        </div>
      </div>
      <Component30
        imageDescription="/ellipse-355@2x.png"
        sportImageUrl="English"
        propOpacity="0.7"
        propOpacity1="unset"
        propOpacity2="unset"
        propFontWeight="unset"
      /><Component30
        imageDescription="/ellipse-355@2x.png"
        sportImageUrl="Hindi"
        propOpacity="unset"
        propOpacity1="unset"
        propOpacity2="unset"
        propFontWeight="500"
      /><Component30
        imageDescription="/ellipse-355@2x.png"
        sportImageUrl="Japanese"
        propOpacity="0.7"
        propOpacity1="unset"
        propOpacity2="unset"
        propFontWeight="unset"
      /><Component30
        imageDescription="/ellipse-355@2x.png"
        sportImageUrl="Arabic"
        propOpacity="0.7"
        propOpacity1="0.7"
        propOpacity2="0.7"
        propFontWeight="unset"
      /><Component30
        imageDescription="/ellipse-355@2x.png"
        sportImageUrl="Malaysian"
        propOpacity="0.7"
        propOpacity1="unset"
        propOpacity2="unset"
        propFontWeight="unset"
      />
      <div
        :style="{borderRadius: '83.81px', backgroundColor: 'rgba(255, 255, 255, 0.15)', width: '3.13rem', height: '3.13rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0.57rem 0.63rem 0.57rem 0.51rem', boxSizing: 'border-box', transform: ' rotate(-180deg)'}"
      >
        <div
          :style="{position: 'relative', lineHeight: '120%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.19rem', height: '2.19rem', flexShrink: '0'}"
        >
          chevron-left
        </div>
      </div>
    </div>
    <img
      :style="{position: 'absolute', top: '42.5rem', left: '32.81rem', width: '2.88rem', height: '2.88rem', objectFit: 'cover', cursor: 'pointer'}"
      alt=""
      src="/group-1@2x.png"
      :onClick="onGroupIconClick"
    />
    <img
      :style="{position: 'absolute', top: '14.75rem', left: '21.38rem', width: '2.88rem', height: '2.88rem', objectFit: 'cover', cursor: 'pointer'}"
      alt=""
      src="/group-50@2x.png"
      :onClick="onGroupIcon1Click"
    />
    <img
      :style="{position: 'absolute', top: '42.5rem', left: '32.81rem', width: '2.88rem', height: '2.88rem', objectFit: 'cover', cursor: 'pointer'}"
      alt=""
      src="/group-1@2x.png"
      :onClick="onGroupIcon2Click"
    />
    <img
      :style="{position: 'absolute', top: '42.5rem', left: '32.81rem', width: '2.88rem', height: '2.88rem', objectFit: 'cover', cursor: 'pointer'}"
      alt=""
      src="/group-50@2x.png"
      :onClick="onGroupIcon3Click"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Component30 from "../components/Component30.vue";

  export default defineComponent({
    name: "Page2B1",
    components: { Component30 },
    methods: {
      onPage2B1ContainerClick() {
        this.$router.push("/page-6");
      },
      onGroupIconClick() {
        const anchor = document.querySelector(
          "[data-scroll-to='component31Container']"
        );
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onGroupIcon1Click() {
        const anchor = document.querySelector(
          "[data-scroll-to='component31Container']"
        );
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onGroupIcon2Click() {
        const anchor = document.querySelector(
          "[data-scroll-to='component31Container']"
        );
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onGroupIcon3Click() {
        const anchor = document.querySelector(
          "[data-scroll-to='component31Container']"
        );
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
    },
  });
</script>
