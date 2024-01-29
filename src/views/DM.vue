<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Header from '@/components/Header.vue';
import Rules from '@/components/Rules.vue';
import DMRules from '@/components/DMRules.vue';
import DiceWizard from '@/components/DiceWizard.vue';
import Party from '@/components/Party.vue';
</script>

<template>
  <div class="dm">
    <RouterLink class="back" to="/">Back</RouterLink>

    <div class="container">
      <Header posttitle="You are the" title="disaster master" />
      <Party/>
      <DiceWizard/>
      <DMRules />
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

  .dm {
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
