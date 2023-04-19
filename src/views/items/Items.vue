<script>
    export default {
        data() {
            return {
                text: 'This is Item page',
                items: [
                    { id: 1, name: 'forcestaff', cost: 977 },
                    { id: 2, name: 'dagon', cost: 946 },
                    { id: 3, name: 'bkb', cost: 698 },
                ]
            }
        }
    }
</script>

<template>
    <h2 class="text-3xl text-red-800 text-center font-bold">{{ text }}</h2>
    <div class="w-96 mx-auto" v-for="item in items" :key="item['id']">
        <router-link class="w-96 mx-auto" :to="{ name: 'ItemShowcase', params: { id: item['id'] } }">
            <h3 class="text-2xl text-blue-600 text-center mt-8 font-semibold bg-slate-200 hover:bg-slate-700">{{ item['name'] }}</h3>
        </router-link>
    </div>
</template>