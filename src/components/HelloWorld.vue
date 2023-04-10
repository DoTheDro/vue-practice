<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const dynamicId = "dynamicId"
const count = ref(0)
</script>

<template>
  
  <h1 :id="dynamicId">{{ msg }}</h1>
  <button @click="count += 2">{{ count }}</button>

</template>
