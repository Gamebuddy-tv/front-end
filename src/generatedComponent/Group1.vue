<template>
  <div
    :style="{position: 'absolute', top: '1rem', left: '2.88rem', width: '38.75rem', height: '55.63rem', textAlign: 'left', fontSize: '0.88rem', color: '#fff', fontFamily: 'Roboto'}"
  >

    <Component35
      v-for=" (item, index) in [1,2,3,4,5,6,7,8,9,10]" :key="index"
      :rectangleDivTop="(index * 11.88) + 'rem' " 
      :title="item.toString()"
      :firstName="item.toString()"
      :conversation="item.toString()"
      :createdOn = "item.toString()"
    />

    <!-- IF OWNER - ADD TEXT -->
    <ConversationInputBox
      :rectangleDivTop="(11.88 * 10 ) + 'rem' "
    />

  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Component35 from "./Component35.vue";
  import ConversationInputBox from "./ConversationInputBox.vue"

  export default defineComponent({
    name: "Group1",
    components: { Component35, ConversationInputBox},
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
