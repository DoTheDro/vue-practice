<script>
export default {
    props: ['content'],
    methods: {
        closeModalTwo() {
            this.$emit('close')
        }
    }
}
</script>

<template>
    <slot></slot>
</template>