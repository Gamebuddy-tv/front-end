<template>
  <div
    :style="{position: 'relative', backgroundColor: '#000', width: '100%', height: '64rem', overflowY: 'auto', cursor: 'pointer', textAlign: 'center', fontSize: '1.75rem', color: '#000', fontFamily: 'Roboto'}"
    @click="onPage4B2ContainerClick"
  >
    <div
      :style="{position: 'absolute', top: 'calc(50% - 359px)', left: 'calc(50% - 501px)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.5)', boxSizing: 'border-box', width: '62.63rem', height: '43.88rem'}"
    />
    <b
      :style="{position: 'absolute', top: '29.19rem', left: 'calc(50% - 62px)', textTransform: 'uppercase', display: 'none'}"
      >Offers / Home Banner</b
    ><Group11 /><Group10 />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Group11 from "../components/Group11.vue";
  import Group10 from "../components/Group10.vue";

  export default defineComponent({
    name: "Page4B2",
    components: { Group11, Group10 },
    methods: {
      onPage4B2ContainerClick() {
        this.$router.push("/page-2b11");
      },
    },
  });
</script>
