<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRafFn } from '@vueuse/core'
import { getDie } from '@/dice';
import { randomRange } from '@/utils';
import { liveState } from '@/state';

const viewingResults = ref(false);

watch(viewingResults, () => {
  viewingResults.value ?
    liveState.value.dice = diceValues.value.filter(die => die.active).map(die => die.value) :
    liveState.value.dice = [];
});

interface Die {
  value: number;
  active: boolean;
}

const color = 'white';

const diceCount = 7;
const diceValues = ref<Die[]>([]);
for (var i = 0; i < diceCount; i++) {
  diceValues.value.push({
    value: 1,
    active: false
  });
}

const lastAngle = ref(-5);

const fpsLimit = 30;
const intervalLimit = 1000 / fpsLimit;
let previousFrameTimestamp = Date.now();

const angleFpsLimit = 15;
const angleIntervalLimit = 1000 / angleFpsLimit;
let previousAngleFrameTimestamp = Date.now();
useRafFn(() => {
  const delta = Date.now() - previousFrameTimestamp;

  if (delta > intervalLimit) {
    previousFrameTimestamp = Date.now();
    animate();
  }

  const angleDelta = Date.now() - previousAngleFrameTimestamp;
  if (angleDelta > angleIntervalLimit) {
    previousAngleFrameTimestamp = Date.now();
    lastAngle.value = lastAngle.value * -1;
  }
});

function animate() {
  if (viewingResults.value) return;

  diceValues.value = diceValues.value.map(die => {
    die.value = randomRange(1, 6);
    return die;
  });
}

function reset() {
  viewingResults.value = false;
  mouseLeaveDie();
}

function dieStyles(index: number) {
  const die = diceValues.value[index];

  return {
    background: die.active ? `url(${getDie(die.value, color)}` : '',
    opacity: viewingResults.value ? 1 : 0.5
  }
}

function dieContainerStyles(index: number) {
  const die = diceValues.value[index];

  return {
    transform: (!viewingResults.value && die.active) ? `rotate(${lastAngle.value}deg)` : '',
    borderStyle: (viewingResults.value && die.active) ? 'solid' : 'dotted'
  }
}

function mouseDownDie(index: number) {
  if (viewingResults.value) return;

  diceValues.value = diceValues.value.map((die, i) => {
    if (i <= index) die.active = true;
    return die;
  });

  viewingResults.value = true;
}

function mouseEnterDie(index: number) {
  if (viewingResults.value) return;

  diceValues.value = diceValues.value.map((die, i) => {
    if (i <= index) die.active = true;
    return die;
  });
}

function mouseLeaveDie() {
  if (viewingResults.value) return;

  diceValues.value = diceValues.value.map(die => {
    die.active = false;
    return die;
  });
}
</script>

<template>
  <div class="container">
    <fieldset>
      <legend>Dice</legend>

      <div class="dice-area">
        <div
          class="die"
          v-for="(_, index) in diceCount"
          @mouseenter="mouseEnterDie(index)"
          @mouseleave="mouseLeaveDie()"
          @mousedown="mouseDownDie(index)"
          @click="mouseDownDie(index)"
          :style="dieContainerStyles(index)"
        >
          <div :style="dieStyles(index)" class="inner-die"></div>
        </div>
        <div class="results">
          <button @click="reset()">Reset</button>
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

.inner-die {
  width: 100%;
  height: 100%;
}

.die {
  margin: auto;
  border: 2px dotted black;
  border-radius: 25%;
  height: 66px;
  width: 66px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.1s;
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