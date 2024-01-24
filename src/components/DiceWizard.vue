<script setup lang="ts">
import { ref } from 'vue';
import { getDie } from '@/dice';

const selectedDice = ref<boolean[]>([]);
const diceResults = ref<number[]>([ 1, 2, 3, 4, 5, 6 ]);
diceResults.value.forEach((_, i) => selectedDice.value.push(false));
const total = ref<number | null>(null);

function rollDice(){
  total.value = 0;
  selectedDice.value.forEach((x, i) => {
    if (!x || total.value == null) return;

    const roll = Math.floor(Math.random() * 6) + 1;
    total.value += roll
    diceResults.value[i] = roll;
  });

  if (total.value === 0) total.value = null;
}
</script>

<template>
  <div class="container">
    <fieldset>
      <legend>Dice</legend>
      <div class="dice-area">
        <img 
        v-for="res, i in diceResults" 
        :src="getDie(res, 'red')"
        :class="selectedDice[i] ? 'selected' : 'not-selected'"
        @click="() => selectedDice[i] = !selectedDice[i]"
        >  
        <div class="results">
          <button 
            :disabled="!selectedDice.includes(true)"
            @click="rollDice()"
            >
            Roll
          </button>
          <div>
            Result: {{ total }}
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<style scoped>

.container {
  padding: 0px;
  margin-bottom: 1em;
}
.dice-area {
  display: flex;
  justify-content: space-around;
}

.results{
  display: flex;
  flex-direction: column;
  width: 150px;
  justify-content: center;
}

button {
  margin-bottom: 10px;
}

img {
  margin: auto;
  border: 1px solid black;
  border-radius: 25%;
}

.selected {
  filter: brightness(100%);
}

.not-selected {
  filter: brightness(30%);
}

@media screen and (max-width: 700px) {
  .dice-area {
    display: grid;
    gap: 5px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .results {
    width: 100%;
    grid-column: span 3;
  }

  .results > button {
    margin-top: 10px;
    padding: 10px;
  }

  .results > div {
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 5px;
  }
}
</style>