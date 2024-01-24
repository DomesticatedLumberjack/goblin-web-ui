<script setup lang="ts">
import {
  containersReadonly,
  locationsReadonly,
  marksReadonly,
  protectorsReadonly,
  richPeopleReadonly
} from '@/data';
import { state } from '@/state';

async function parseCode() {
  const code = prompt('Paste code here');
  
  if (code && code.length === 5 && !isNaN(parseInt(code))) {
    state.value.richPerson = parseInt(code[0]);
    state.value.location = parseInt(code[1]);
    state.value.mark = parseInt(code[2]);
    state.value.protector = parseInt(code[3]);
    state.value.container = parseInt(code[4]);
  }
}
</script>

<template>
  <fieldset>
    <legend>Scenario</legend>

    <p>
      You are going to <strong>{{ locationsReadonly[state.location] }}</strong>
      to try and steal <strong>{{ marksReadonly[state.mark] }}</strong>
      from <strong>{{ richPeopleReadonly[state.richPerson] }}</strong>.
      Your target is guarded by numerous poorly paid guards and <strong>{{ protectorsReadonly[state.protector] }}</strong>
      and is held in <strong>{{ containersReadonly[state.container] }}</strong>.
    </p>

    <div class="buttons">
      <button @click="parseCode()">paste code</button>
    </div>
  </fieldset>
</template>

<style scoped>
  fieldset {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1em;
  }

  .buttons {
    margin-top: auto;
    display: flex;
    gap: 0.5em;
  }

  strong {
    color: #00C130;
  }

  p {
    margin: 0.5em 0;
  }
</style>