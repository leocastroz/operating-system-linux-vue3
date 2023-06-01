<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import NavHeader from './components/NavHeader.vue'
import NavLeft from './components/NavLeft.vue'
import DraggableDiv from './components/DraggableDiv.vue';

const exibirModal = ref(false);

const lidarComEvento = () => {
  exibirModal.value = true;
}
</script>

<template>
  <section>
    <div>
      <NavHeader />
      <NavLeft @meu-evento="lidarComEvento" />
      <DraggableDiv v-show="false"/>
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <RouterView /> -->
      <div v-if="exibirModal" class="modal">
        <div class="modal-content">
          <h2>Minha Modal</h2>
          <p @click="exibirModal = false">fechar</p>
          <!-- Modal content -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
}
section {
  width: 100%;
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: content-box;
  background-image: url('./assets/ubt.png');
}


nav {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: red;
}
</style>
