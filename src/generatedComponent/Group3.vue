<template>
  <div
    :style="{position: 'absolute', top: '36.13rem', left: '60.19rem', width: '27.81rem', height: '63.19rem', textAlign: 'center', fontSize: '0.81rem', color: '#fff', fontFamily: 'Roboto'}"
  >
    <div
      :style="{position: 'absolute', top: '0rem', left: '0rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px solid #746767', boxSizing: 'border-box', width: '27.81rem', height: '63.19rem'}"
    />
    <div
      :style="{position: 'absolute', top: '1.38rem', left: '1.06rem', fontSize: '1.5rem', textTransform: 'uppercase', fontWeight: '900', textAlign: 'left'}"
    >
      Upcoming Match
    </div>
    <Group5 propTop="4.88rem" /><Group5 propTop="24.13rem" /><Group5
      propTop="43.38rem"
    /><Group4 propTop="14.5rem" /><Group4 propTop="33.75rem" /><Group4
      propTop="53rem"
    />
    <img
      :style="{position: 'absolute', height: '6.45%', width: '13.93%', top: '25.77%', right: '9.66%', bottom: '67.78%', left: '76.4%', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'cover'}"
      alt=""
      src="/mask-group@2x.png"
    />
    <img
      :style="{position: 'absolute', height: '6.45%', width: '13.93%', top: '56.23%', right: '9.66%', bottom: '37.32%', left: '76.4%', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'cover'}"
      alt=""
      src="/mask-group@2x.png"
    />
    <img
      :style="{position: 'absolute', height: '6.45%', width: '13.93%', top: '86.7%', right: '9.66%', bottom: '6.85%', left: '76.4%', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'cover'}"
      alt=""
      src="/mask-group@2x.png"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Group5 from "./Group5.vue";
  import Group4 from "./Group4.vue";

  export default defineComponent({
    name: "Group3",
    components: { Group5, Group4 },
  });
</script>
