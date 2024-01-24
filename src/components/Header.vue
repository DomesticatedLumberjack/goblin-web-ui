<script setup lang="ts">
withDefaults(defineProps<{
  posttitle?: string;
  title?: string;
}>(), {
  posttitle: `You are a group of ne'rdowells with one goal: to rob the richest person in town blind, (un)fortunately for you, you are each a`,
  title: 'Goblin with a fat ass'
});
</script>

<template>
  <div class="header">
    <p>{{ posttitle }}</p>
    <h1>{{ title }}</h1>
  </div>
</template>

<style scoped>
  .header {
    text-align: center;
    padding-top: 1em;
  }

  p {
    margin: 0;
    font-style: italic;
    opacity: 0.6;
  }

  h1 {
    font-size: 4em;
    margin: 0;
    font-family: 'Caudex', serif;
    text-transform: uppercase;
  }
</style>