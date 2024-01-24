<script setup lang="ts">
import Scenario from './Scenario.vue';
import ChaosClock from './ChaosClock.vue';
import ScenarioReadonly from './ScenarioReadonly.vue';
import DiceWizard from './DiceWizard.vue';
</script>

<template>
  <div class="consequences">
    <div class="controls-column">
      <Scenario />
      <ChaosClock />
    </div>

    <fieldset>
      <legend>Consequences</legend>
  
      <p>
        Oh no! Someone failed a roll, or rolled
        some 1s on an ass roll. As the dm, it's time to do one
        or more of the following:
      </p>

      <p>
        <strong>Pay a cost</strong>: In attention (a goblin is
        preoccupied for a while), effectiveness
        (needs a little extra help from
        someone else to get the job done), or
        danger (the situation gets more
        dangerous or tense)
      </p>

      <p>- OR -</p>

      <p>
        <strong>Smack someone</strong>: daze a goblin or knock a goblin out.
      </p>

      <ul>
        <li>
          <em>Dazed</em> - A dazed goblin gets -1d6
          to do anything and if hurt again is
          knocked out. Goblins recover from
          being dazed after a scene is over.
        </li>
        <li>
          <em>Knocked out</em> - A knocked out
          goblin must be carried around like
          a sack of pear shaped potatoes
          and wakes up in the next scene as
          long as they make it out ok, and are
          captured if they are left behind.
          It's pretty easy for a human of
          average strength to knock a goblin
          out with a big enough implement.
        </li>
      </ul>

      <p>- OR -</p>

      <p>
        <strong>Start a ticking clock</strong>: write
        <em>something bad</em> down (the lava is
        released, the dogs are loosed, the
        alarm is set off, someone's knocked
        out, the door jams, you lose control of
        the vehicle), the next time there's a
        fuckup in the same situation it comes
        true or maybe the next time after that
      </p>

      <p>- OR -</p>

      <strong><p>Escalate the situation (choose one or roll 1d6):</p></strong>

      <ul>
        <li>
          guards are alerted or start catching up
        </li>
        <li>light something on fire</li>
        <li>something that wasn't supposed to break breaks</li>
        <li>drop or lose track of something important</li>
        <li>something goes wildly out of control</li>
        <li>someone gets split from the group (guards, convenient hrach, slide)</li>
      </ul>
    </fieldset>
  </div>
</template>

<style scoped>
  .consequences {
    margin: 1em auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
  }

  p:first-of-type {
    margin-top: 0;
  }

  .controls-column {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .controls-column > * {
    flex: 1;
  }

  @media (max-width: 1160px) {
    .consequences {
      grid-template-columns: 1fr;
    }
  }
</style>