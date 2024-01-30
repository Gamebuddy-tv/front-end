<template>
  <div
    :style="{position: 'absolute', top: '80.81rem', left: '47.06rem', width: '38.75rem', height: '32.5rem', textAlign: 'left', fontSize: '1.5rem', color: '#fff', fontFamily: 'Roboto'}"
  >
    <div
      :style="{position: 'absolute', top: '0rem', left: '0rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px solid #746767', boxSizing: 'border-box', width: '38.75rem', height: '32.5rem'}"
    />
    <div
      :style="{position: 'absolute', top: '2.36rem', left: '1.5rem', textTransform: 'uppercase', fontWeight: '900'}"
    >
      nEWS
    </div>
    <img
      :style="{position: 'absolute', top: '6.96rem', left: '35.86rem', width: '1.61rem', height: '1.8rem', objectFit: 'cover'}"
      alt=""
      src="/group-13@2x.png"
    /><Group14
      dimensions="/rectangle-3@2x.png"
      propTop="5.06rem"
      propBorderRadius="5px"
    /><Group14
      dimensions="/rectangle-3@2x.png"
      propTop="18.5rem"
      propBorderRadius="unset"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Group14 from "./Group14.vue";

  export default defineComponent({
    name: "Group13",
    components: { Group14 },
  });
</script>
