<template>
  <div
    :style="{position: 'absolute', bottom: '1.38rem', left: 'calc(50% - 599.55px)', borderRadius: '24.29px', backgroundColor: 'rgba(45, 45, 45, 0.65)', backdropFilter: 'blur(7.59px)', width: '74.6rem', height: '5.68rem', textAlign: 'left', fontSize: '1.14rem', color: '#fff', fontFamily: 'Poppins'}"
  >
    <div
      :style="{position: 'absolute', top: '1.71rem', left: '3.84rem', width: '72.21rem', height: '2.28rem', flexShrink: '0'}"
    >
      <img
        :style="{position: 'absolute', top: '0rem', left: '0rem', width: '2.28rem', height: '2.28rem', overflow: 'hidden', objectFit: 'cover'}"
        alt=""
        src="/biplaycirclefill@2x.png"
      />
      <div
        :style="{position: 'absolute', top: '0.28rem', left: '5.4rem', width: '54.21rem', height: '1.71rem', flexShrink: '0'}"
      >
        <div
          :style="{position: 'absolute', top: '0rem', right: '9.01rem', flexShrink: '0', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '0.38rem'}"
        >
          <div :style="{position: 'relative'}">0:51</div>
          <div
            :style="{position: 'relative', width: '40.33rem', height: '1.14rem'}"
          >
            <div
              :style="{position: 'absolute', top: '0.33rem', right: '0rem', borderRadius: '18.22px', backgroundColor: 'rgba(255, 255, 255, 0.5)', width: '40.33rem', height: '0.48rem'}"
            />
            <div
              :style="{position: 'absolute', top: '0rem', right: '26.33rem', width: '13.99rem', height: '1.14rem'}"
            >
              <div
                :style="{position: 'absolute', top: '0.33rem', right: '0.57rem', borderRadius: '18.22px', backgroundColor: '#fff', width: '13.43rem', height: '0.48rem'}"
              />
              <div
                :style="{position: 'absolute', top: '0rem', left: '12.86rem', borderRadius: '50%', backgroundColor: '#fff', width: '1.14rem', height: '1.14rem'}"
              />
            </div>
          </div>
          <div :style="{position: 'relative'}">2:31</div>
        </div>
      </div>
      <div
        :style="{position: 'absolute', top: '0.43rem', left: '53.43rem', flexShrink: '0', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '2.84rem'}"
      >
        <img
          :style="{position: 'relative', width: '1.42rem', height: '1.42rem', objectFit: 'cover'}"
          alt=""
          src="/group-48095489@2x.png"
        />
        <div
          :style="{flexShrink: '0', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}"
        >
          <img
            :style="{position: 'relative', width: '1.52rem', height: '1.52rem', overflow: 'hidden', flexShrink: '0', objectFit: 'cover'}"
            alt=""
            src="/volume2@2x.png"
          />
        </div>
        <div
          :style="{flexShrink: '0', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}"
        >
          <img
            :style="{position: 'relative', width: '1.52rem', height: '1.52rem', overflow: 'hidden', flexShrink: '0', objectFit: 'cover'}"
            alt=""
            src="/settings@2x.png"
          />
        </div>
        <img
          :style="{position: 'relative', width: '1.52rem', height: '1.52rem', overflow: 'hidden', flexShrink: '0', objectFit: 'cover'}"
          alt=""
          src="/maximize@2x.png"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Controls",
  });
</script>
