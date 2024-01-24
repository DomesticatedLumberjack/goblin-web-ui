<script setup lang="ts">
import { computed } from 'vue';
import { state } from '@/state';

const tickerAngle = computed(() => {
  return state.value.chaosClock * 30;
});
const tickerStyle = computed(() => {
  return {
    transform: `translate(-50%, -50%) rotate(${tickerAngle.value}deg)`
  };
});

function incrementClock() {
  state.value.chaosClock++;
  if (state.value.chaosClock > 11) state.value.chaosClock = 0;
}
</script>

<template>
  <fieldset>
    <legend>The Chaos Clock</legend>

    <div class="clock" @click="incrementClock">
      <img src="@/assets/images/chaos-clock.png" />
      <img :style="tickerStyle" class="ticker" src="@/assets/images/chaos-clock-ticker.png" />
    </div>
  </fieldset>
</template>

<style scoped>
  fieldset {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .clock {
    height: 300px;
    position: relative;
    cursor: pointer;
  }

  .clock img {
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: center;
    transform: translate(-50%, -50%);
    transition: all 0.2s;
  }
</style>