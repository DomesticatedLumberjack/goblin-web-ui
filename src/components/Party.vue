<script setup lang="ts">
import {
  assOrigins,
  assSizes,
  classes,
} from '@/data';
import { getDie } from '@/dice';
import SocketManager from '@/socketManager';
import { liveState, state } from '@/state';
import type { Goblin } from '@/types';
import { onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const dm = route.name === 'dm';
const socketManager = new SocketManager(dm);
const joinRoomInput = ref('');

function handleCreate() {
  const scenarioCode = `${state.value.richPerson}${state.value.location}${state.value.mark}${state.value.protector}${state.value.container}`;
  socketManager.createRoom(scenarioCode);
}

function handleJoin() {
  socketManager.joinRoom(joinRoomInput.value);
}

function getSkills(member: Goblin) {
  const originSkills = assOrigins[member.assOrigin].skills.map(skill => skill.toString());
  const classSkills = classes[member.class].skills;

  return originSkills.concat(classSkills).join(', ');
}

function dieStyles(num: number) {
  const style = {
    background: `url(${getDie(num, 'white')}`
  };

  return style;
}

onMounted(() => socketManager.connect());
onUnmounted(() => socketManager.disconnect());
</script>

<template>
  <div class="container">
    <fieldset>
      <legend>Party</legend>
      <div class="info">
        <p v-if="liveState.roomCode">Room Code: {{ liveState.roomCode }}</p>
        <div v-else-if="dm">
          <button @click="handleCreate()">Create Room</button>
        </div>
        <div v-else>
          <input type="text" v-model="joinRoomInput" placeholder="Room Code">
          <button @click="handleJoin()">Join Room</button>
        </div>
      </div>
      <div class="member-list">
        <fieldset v-for="member, i in liveState.party">
          <legend>{{ member.playerData.name }}</legend>
          <p><strong>Ass Size:</strong> {{ assSizes[member.playerData.assSize] }}</p>
          <p><strong>Origin:</strong> {{ assOrigins[member.playerData.assOrigin].desc }}</p>
          <p><strong>Class:</strong> {{ classes[member.playerData.class].name }}</p>
          <p><strong>Skills:</strong> {{ getSkills(member.playerData) }}</p>
          <p><strong>Pocket Contents:</strong> {{ member.playerData.pocketContents }}</p>
          <p><strong>Notes:</strong> {{ member.playerData.note }}</p>
          <div class="dice-area">
            <div v-for="index in 7" :key="index" class="die" :class="{'die-with-value': member.playerData.dice && member.playerData.dice[index - 1]}" >
              <div v-if="member.playerData.dice && member.playerData.dice[index - 1]" :style="dieStyles(member.playerData.dice[index - 1])" class="inner-die"></div>
            </div>
          </div>
        </fieldset>
      </div>
    </fieldset>
  </div>
</template>


<style scoped>
.container {
  padding: 0px;
  margin-bottom: 1em;
}

.member-list {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.info,
.info div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
}

.dice-area{
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1em;
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

.die-with-value {
  border: 2px solid black;
}

.inner-die {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 700px) {
  .dice-area {
    gap: 0.5em;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>