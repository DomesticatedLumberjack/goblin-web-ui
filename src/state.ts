import { ref, watch } from 'vue';
import { randomRange } from './utils';
import {
  assOrigins,
  assSizes,
  classes,
  containers,
  defaultPocketContents,
  locations,
  marks,
  protectors,
  richPeople
} from './data';
import { parties, species } from 'fantastical';

export const state = ref({
  richPerson: randomRange(0, richPeople.length - 1),
  location: randomRange(0, locations.length - 1),
  mark: randomRange(0, marks.length - 1),
  protector: randomRange(0, protectors.length - 1),
  container: randomRange(0, containers.length - 1),
  chaosClock: 0,
  goblin: {
    name: species.goblin(),
    assSize: randomRange(0, assSizes.length - 1),
    assOrigin: randomRange(0, assOrigins.length - 1),
    class: randomRange(0, classes.length - 1),
    pocketContents: defaultPocketContents[randomRange(0, defaultPocketContents.length - 1)],
    note: `Belongs to the "${parties.guild()}" guild.`
  },
});

watch(state, saveLocalState, { deep: true });

const localKey = 'goblin-with-a-fat-ass';

export function loadLocalState() {
  const existingData = localStorage.getItem(localKey);

  if (existingData) {
    state.value = JSON.parse(existingData);
  } else {
    saveLocalState();
  }
}

export function saveLocalState() {
  const data = JSON.stringify(state.value);
  localStorage.setItem(localKey, data);
}

loadLocalState();