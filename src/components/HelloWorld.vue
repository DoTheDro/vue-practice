<script>
export default {
  props: []
}

</script>

<template>
  
  <h1 :id="dynamicId">{{ msg }}</h1>
  <button @click="count += 2">{{ count }}</button>

</template>
