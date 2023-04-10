<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      title: 'Sample Title',
      sampleDigit: 1
    }
  },
  methods: {
    handleClick() {
      this.sampleDigit++
    }
  }
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="handleClick">{{ sampleDigit }} Clicks</button>
  </div>
  <div>
    <h1>Hello</h1>
  </div>
</template>
