<template>
  <div
    :style="{position: 'absolute', top: '1rem', left: '2.88rem', width: '38.75rem', height: '55.63rem', textAlign: 'left', fontSize: '0.88rem', color: '#fff', fontFamily: 'Roboto'}"
  >
    <Component35 
      rectangleDivTop="0rem" 
      title="My opinion"
      firstName="STall Z"
      conversation="hello is this the right place  hello is this the right placehello is this the right place" 
    />
    
    <Component35
      rectangleDivTop="11.88rem"/>

    <Component35 rectangleDivTop="23.75rem" />

    <Component35
      rectangleDivTop="35.63rem"/>

    <Component35 rectangleDivTop="46.25rem" />

    <Component35 rectangleDivTop="57.25rem" />

  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Component35 from "./Component35.vue";

  export default defineComponent({
    name: "Group1",
    components: { Component35 },
    setup() {
      const comments = () => {
        console.log('This is a dummy method');
      };

      return {
        comments,
      };
    }, // End of Setup
  });

</script>
