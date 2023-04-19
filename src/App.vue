<template>
  <div class="flex flex-row gap-8 justify-center mb-8" id="nav">
    <router-link class="text-2xl text-gray-900 font-medium" to="/">Home</router-link>
    <router-link class="text-2xl text-gray-900 font-medium" :to="{ name: 'About' }">About</router-link>
    <router-link class="text-2xl text-gray-900 font-medium" :to="{ name: 'Heroes' }">Heroes</router-link>
  </div>
  <router-view />
</template>

<style>
  .router-link-active{
    text-decoration: underline;
  }
</style>