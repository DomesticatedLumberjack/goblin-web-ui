<script setup lang="ts">
import Header from '@/components/Header.vue';
import Rules from '@/components/Rules.vue';
import ScenarioReadonly from '@/components/ScenarioReadonly.vue';
import PlayerSheet from '@/components/PlayerSheet.vue';
import DiceWizard from '@/components/DiceWizard.vue';
</script>

<template>
  <div class="goblin">
    <RouterLink class="back" to="/">Back</RouterLink>

    <div class="container">
      <Header posttitle="You are a" title="Goblin with a fat ass" />
      <ScenarioReadonly />
      <DiceWizard/>
      <PlayerSheet />
      <Rules />
    </div>
  </div>
</template>

<style>
  .back {
    position: absolute;
    top: 1em;
    left: 1em;
    z-index: 100;
  }

  .goblin {
    height: 100%;
    overflow: auto;
    padding-bottom: 1em;
    position: relative;
  }

  .container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 1em;
  }
</style>
