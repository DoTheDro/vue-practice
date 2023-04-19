<script>
    export default {
        data() {
            return {
                text: 'This page is for a specific item.',
                itemName: this.$route.params.itemName
            }
        }
    }
</script>

<template>
    <h2 class="text-2xl text-red-800 text-center font-bold">{{ text }}</h2>
    <p class="text-lg text-center font-semibold mt-10">Current item name is {{ itemName }}</p>
    <p>{{ $route }}</p>
</template>