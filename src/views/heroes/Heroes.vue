<script>
import HeroShowcase from './HeroShowcase.vue';

    export default {
        data() {
            return {
                text: 'This is Hero page',
                heroes: [
                    { id: 1, name: 'pudge', primaryAttr: 'Strength', attackType: 'Melee' },
                    { id: 2, name: 'dazzle', primaryAttr: 'Intelligence', attackType: 'Range' },
                    { id: 3, name: 'sniper', primaryAttr: 'Agility', attackType: 'Range' },
                ]
            }
        }
    }
</script>

<template>
    <h2 class="text-3xl text-red-800 text-center font-bold">{{ text }}</h2>
    <div class="w-96 mx-auto" v-for="hero in heroes" :key="hero['name']">
        <router-link class="w-96 mx-auto" :to="{ name: 'HeroShowcase', params: { heroName: hero['name'] } }">
            <h3 class="text-2xl text-blue-600 text-center mt-8 font-semibold bg-slate-200 hover:bg-slate-700">{{ hero['name'] }}</h3>
        </router-link>
    </div>
</template>