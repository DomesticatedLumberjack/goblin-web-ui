<script setup lang="ts">
import {
  containers,
  locations,
  marks,
  protectors,
  richPeople
} from '@/data';
import { state } from '@/state';
import { randomRange } from '@/utils';

function randomize() {
  state.value.richPerson = randomRange(0, richPeople.length - 1),
  state.value.location = randomRange(0, locations.length - 1),
  state.value.mark = randomRange(0, marks.length - 1),
  state.value.protector = randomRange(0, protectors.length - 1),
  state.value.container = randomRange(0, containers.length - 1)
}

function copyCode() {
  let code = `${state.value.richPerson}${state.value.location}${state.value.mark}${state.value.protector}${state.value.container}`
  navigator.clipboard.writeText(code);
}
</script>

<template>
  <fieldset>
    <legend>Scenario</legend>

    <div class="story-select">
      <label>The rich person the goblins are trying to steal from:</label>
      <select v-model="state.richPerson">
        <option v-for="(person, index) in richPeople" :value="index">{{ person }}</option>
      </select>
    </div>

    <div class="story-select">
      <label>The location of the heist:</label>
      <select v-model="state.location">
        <option v-for="(location, index) in locations" :value="index">{{ location }}</option>
      </select>
    </div>

    <div class="story-select">
      <label>The mark:</label>
      <select v-model="state.location">
        <option v-for="(mark, index) in marks" :value="index">{{ mark }}</option>
      </select>
    </div>

    <div class="story-select">
      <label>Protected by a cadre of <em>numerous</em> but <em>poorly paid</em> guards and:</label>
      <select v-model="state.protector">
        <option v-for="(protector, index) in protectors" :value="index">{{ protector }}</option>
      </select>
    </div>

    <div class="story-select">
      <label>Locked in:</label>
      <select v-model="state.container">
        <option v-for="(container, index) in containers" :value="index">{{ container }}</option>
      </select>
    </div>

    <div class="buttons">
      <button @click="randomize()">randomize</button>
      <button @click="copyCode()">copy code</button>
    </div>
  </fieldset>
</template>

<style scoped>
  fieldset {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .buttons {
    margin-top: auto;
    display: flex;
    gap: 0.5em;
  }

  .story-select {
    margin: 0 auto;
    margin-bottom: 1em;
    text-align: center;
  }

  .story-select label {
    display: block;
  }

  select {
    text-align: center;
  }
</style>