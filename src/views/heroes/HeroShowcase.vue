<script>
    export default {
        data() {
            return {
                text: 'This page is for a specific hero.',
                heroName: this.$route.params.heroName
            }
        }
    }
</script>

<template>
    <h2 class="text-3xl text-red-800 text-center font-bold">{{ text }}</h2>
    <p class="text-lg text-center font-semibold mt-10">Current hero name is {{ heroName }}</p>
</template>