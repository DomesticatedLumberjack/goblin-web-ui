<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Header from '@/components/Header.vue';
</script>

<template>
  <div class="home">
    <Header />

    <RouterLink class="btn" to="/dm">I am the dm (disaster master)</RouterLink>
    <RouterLink class="btn" to="/goblin">I am a goblin with a fat ass</RouterLink>

    <footer>
      coded by <a href="https://topheranselmo.com/">topher</a><br>
      based on <a target="_blank" href="https://x.com/Orbitaldropkick/status/1728889290040680461?s=20">this tweet by Tom Bloom</a>.
    </footer>
  </div>
</template>

<style scoped>
  .home {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }

  h1 {
    text-align: center;
    font-size: 4em;
    margin: 0;
    font-family: 'Caudex', serif;
  }

  footer {
    position: absolute;
    bottom: 1em;
    left: 0;
    right: 0;
    text-align: center;
    opacity: 0.5;
  }

  footer:hover {
    opacity: 1;
  }

  .btn {
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    background-color: #00C130;
    border-color: transparent;
    border-style: solid;
    border-width: 4px;
    padding: 1em;
    border-radius: 50px;
    color: white;
    transform-origin: center;
    transition: all 0.2s;
    text-decoration: none;
  }

  .btn:hover {
    transform: scale(1.2);
    background-color: black;
    border-color: #00C130;
  }
</style>