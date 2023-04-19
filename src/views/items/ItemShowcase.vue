<script>
    export default {
        data() {
            return {
                item: null,
                text: 'This page is for a specific item.',
                itemName: this.$route.params.itemName
            }
        },
        mounted() {
            fetch('http://localhost:5173/items/' + this.id)
                .then(res => res.json())
                .then(data => this.item = data)
                .catch(err => console.log('fetching error'))
        }
    }
</script>

<template>
    <h2 class="text-2xl text-red-800 text-center font-bold">{{ text }}</h2>
    <div v-if="this.item">
        <p class="text-lg text-center font-semibold mt-10">Current item name is {{ itemName }}</p>
        <p>{{ item }}</p>
    </div>
    <div v-else>
        <p class="text-lg text-center font-semibold mt-10">Loading item data</p>
    </div>
</template>