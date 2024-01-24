<script setup lang="ts">
import {
  assSizes,
  assOrigins,
  classes,
  defaultPocketContents,
  AssOriginSkills
} from '@/data';
import { randomRange } from '@/utils';
import { state } from '@/state';
import { parties, species } from 'fantastical';

function randomize() {
  const areYouSure = confirm('Are you sure you want to reroll your character? You will lose your notes and pocket contents.');
  if (!areYouSure) return;

  randomizeName();
  randomizeStats();
  rerollPockets(true);
  randomizeNotes(true);
}

function randomizeName() {
  state.value.goblin.name = species.goblin();
}

function rerollPockets(force = false) {
  if (!force) {
    const areYouSure = confirm('Are you sure you want to reroll your pockets? You will lose whatever is there now and get random new items.');
    if (!areYouSure) return;
  }

  state.value.goblin.pocketContents = defaultPocketContents[randomRange(0, defaultPocketContents.length - 1)];
}

function randomizeStats() {
  state.value.goblin.assOrigin = randomRange(0, assOrigins.length - 1);
  state.value.goblin.assSize = randomRange(0, assSizes.length - 1);
  state.value.goblin.class = randomRange(0, classes.length - 1);
}

function randomizeNotes(force = false) {
  if (!force) {
    const areYouSure = confirm('Are you sure you want to reroll your notes? You will lose whatever is there now.');
    if (!areYouSure) return;
  }

  state.value.goblin.note = `Belongs to the "${parties.guild()}" guild.`;
}
</script>

<template>
  <fieldset>
    <legend>Player Sheet</legend>

    <input spellcheck="false" autocomplete="off" class="name" type="text" v-model="state.goblin.name">

    <div class="field">
      <label><strong>Ass size:</strong></label>
      <select v-model="state.goblin.assSize">
        <option v-for="(size, index) in assSizes" :value="index">{{ size }}</option>
      </select>
    </div>

    <div class="field">
      <label><strong>How did you get your ass?</strong></label>
      <select v-model="state.goblin.assOrigin">
        <option v-for="(origin, index) in assOrigins" :value="index">{{ origin.desc }}</option>
      </select>
      <p style="margin: 0">
        <strong>Granted skills:</strong> <span>{{ assOrigins[state.goblin.assOrigin].skills.join(', ') }}</span>
      </p>
    </div>

    <div class="field">
      <label><strong>Class:</strong></label>
      <select v-model="state.goblin.class">
        <option v-for="(c, index) in classes" :value="index">{{ c.name }}</option>
      </select>
      <p style="margin: 0">
        <strong>Granted skills:</strong> <span>{{ classes[state.goblin.class].skills }}</span>
      </p>
      <p style="margin: 0">
        <strong>Ability:</strong> <span>{{ classes[state.goblin.class].ability }}</span>
      </p>
    </div>

    <div class="field">
      <label><strong>Pocket contents:</strong></label>
      <textarea spellcheck="false" autocomplete="off" rows="5" v-model="state.goblin.pocketContents"></textarea>
    </div>

    <div class="field">
      <label><strong>Notes:</strong></label>
      <textarea spellcheck="false" autocomplete="off" rows="5" v-model="state.goblin.note"></textarea>
    </div>

    <div class="buttons">
      <button @click="randomizeName()">reroll name</button>
      <button @click="randomizeStats()">reroll stats</button>
      <button @click="rerollPockets()">reroll pockets</button>
      <button @click="randomizeNotes()">reroll notes</button>
      <button @click="randomize()">reroll entire character</button>
    </div>
  </fieldset>
</template>

<style scoped>
  input {
    display: block;
    width: 100%;
  }

  .buttons {
    margin-top: auto;
    display: flex;
    gap: 0.5em;
  }

  .name {
    font-family: 'Caudex', serif;
    font-size: 2em;
    border: 1px solid transparent;
  }

  .name:hover {
    border: 1px solid black;
  }

  .field {
    margin-bottom: 1em;
  }

  textarea {
    display: block;
    resize: vertical;
    width: 100%;
    border: 1px solid black;
    font-size: inherit;
    font-family: inherit;
    padding: 0.5em;
  }
</style>