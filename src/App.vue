<script>
import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue'
import ModalTwo from './components/ModalTwo.vue'

export default {
  components: { Modal, ModalTwo },
  data() {
    return {
      title: 'Sample Title',
      sampleDigit: 1,
      passedContent: 'Modal Content',
      contentTwo: 'Modal Content 2',
      show: false,
      showTwo: false
    }
  },
  methods: {
    handleClick() {
      this.sampleDigit++
    },
    showModal() {
      this.show = !this.show
    },
    showModalTwo() {
      this.showTwo = !this.showTwo
    }
  }
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="handleClick">{{ sampleDigit }} Clicks</button>
  </div>
  <div class="btn-con">
    <button @click="showModal">Show Modal One</button>
    <button @click="showModalTwo">Show Modal Two</button>
  </div>
  <div v-if="show">
    <Modal :content="passedContent" @close="showModal" />
  </div>
  <div v-else-if="showTwo">
    <ModalTwo :content="contentTwo">
      <div class="modal-bg" @click.self="showModalTwo">
        <div class="modal">
            <h1>{{ this.contentTwo }}</h1>
        </div>
      </div>
    </ModalTwo>
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
  .btn-con {
    padding-top: 15px;
    display: flex;
    gap: 2em;
  }

</style>