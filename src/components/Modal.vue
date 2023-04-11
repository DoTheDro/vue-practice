<script>
export default {
    props: ['content'],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<template>
    <div class="modal-bg" @click.self="closeModal">
        <div class="modal">
        <h1>{{ content }}</h1>
        </div>
    </div>
</template>

<style scoped>
    .modal-bg {
        top: 0;
        left: 0;
        position: fixed;
        background-color: #ffffffa1;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: #FFF;
        border-radius: 10px;
    }

    .modal h1 {
        color: #121212;
    }
</style>