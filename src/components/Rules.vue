<template>
  <div class="rules">
    <fieldset>
      <legend>Playing the game</legend>
  
      <p>
        The dm describes a scene, plays the
        npcs, asks the players what they will
        do, the players get up to various forms
        of goblin mischief and the dm describes
        the outcomes based on their actions.
      </p>
  
      <p><strong>To do anything, do it.</strong></p>
  
      <p>
        If your action is contested, or the outcome is
        unclear, roll 1d6:
      </p>
  
      <ul>
        <li>on a 4+ <strong>you do it</strong>,</li>
        <li>1-3 you don't and <strong>suffer the consequences.</strong></li>
      </ul>
  
      <p>
        If doing it would be <strong>hard,</strong>
        you need to roll a <strong>6</strong> to do it and avoid consequences.
        What is hard or not is
        up to the dm, but should be fairly
        obvious.
      </p>
  
      <p>
        You might get <strong>more or less dice</strong>:
      </p>
  
      <ul>
        <li>roll 1 <strong>extra die</strong> if you have a <strong>skill</strong></li>
        <li>roll 1 <strong>extra die</strong> If you have a situational advantage, like a tool or a convenient chandelier</li>
        <li>roll 1 <strong>less</strong> if you're dazed</li>
        <li>roll 1 <strong>less</strong> if the situation is bad, like you can't see or you're suspended over a lake of lava by one hand</li>
        <li>if any roll is reduced to 0 or less, roll 2d6 and pick lowest</li>
      </ul>
    </fieldset>

    <div class="col">
      <fieldset>
        <legend>Risky rolls and the ass roll</legend>
  
        <p>
          If doing something is <strong>risky</strong> (which should be most things) or
          could cause mayhem, mischief, or general chaos, the dm will make you roll
          <strong>ass</strong>.
        </p>
  
        <ul>
          <li>to <strong>roll ass</strong>, roll 1d6 per your goblin's ass size (2d6 pick lowest for 0 ass).</li>
          <li>
            if you get <strong>at least one 6</strong> there's a surprising <em>upside</em>,
            <em>opportunity</em>, or <em>advantage</em>, multiple 6s mean this is extra
            good. This applies even if you fail.
          </li>
          <li>
            if you roll <strong>at least one 1</strong> there's also a <em>downside</em>,
            <em>extra risk</em>, <em>complication</em>, or <em>injury</em>, <strong>multiple 1s</strong> mean this is extra bad. This applies
            even if you succeed.
          </li>
          <li>these may or may not be ass related</li>
          <li>1s and 6s cancel each other out.</li>
        </ul>
      </fieldset>
  
      <fieldset>
        <legend>The chaos clock</legend>
  
        <p>
          Each time players roll at <strong>least one 1</strong> on any final result of any
          ass roll, increment the chaos clock. This tracks
          generally how things are going. If the clock hits midnight and
          you run out of time, shit hits the fan. You have to cut and
          run or try and make a mad dash last bid for the prize. No
          exceptions!
        </p>
      </fieldset>
    </div>
  </div>
</template>

<style scoped>
  .col {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .col > * {
    flex: 1;
  }

  .rules {
    margin: 1em auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
  }

  p:first-of-type {
    margin-top: 0;
  }

  @media (max-width: 600px) {
    .rules {
      grid-template-columns: 1fr;
    }
  }
</style>