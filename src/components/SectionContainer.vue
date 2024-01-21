<template>

  <Section 
    v-for="(item, index) in items" 
    :key="index" v-bind="item" 
    :title="item.title"
    :name="item.name"
    :dataShared="item.data"
    :mode="mode"
  />
</template>

<script>
import Section from "./Section.vue";
import Button from "./Button.vue";

export default {
  props: ["items", "mode"],
  components: { Section, Button },
};
</script>

<style>
</style>