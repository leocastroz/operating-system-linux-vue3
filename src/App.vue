<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import NavHeader from './components/NavHeader.vue'
import NavLeft from './components/NavLeft.vue'
import DraggableDiv from './components/DraggableDiv.vue';
import MenuItems from './components/MenuItems.vue';
import ModalTop from './components/ModalTop.vue';
import ConfigUbuntu from './components/ConfigUbuntu.vue';
import ConfigFirefox from './components/ConfigFirefox.vue';

const exibirModal = ref(false);

const exibirModalTop = ref(false);

const exibirConfig = ref(false);

const exibirConfigFirefox = ref(false);

const closup = () => {
  exibirModal.value = false;
}

const closeConfig = () => {
  exibirConfig.value = false;
}


const openConfig = () => {
  exibirConfig.value = true;
}

const openConfigFirefox = () => {
  exibirConfigFirefox.value = true;
}

const closeConfigFirefox = () => {
  exibirConfigFirefox.value = false;
}

const lidarComEvento = () => {
  exibirModal.value = true;
}

const fazerEvento = () => {
  exibirModalTop.value = true;
}

const fecharModal = () => {
  exibirModalTop.value = false;
}

</script>

<template>
  <section>
    <div>
      <NavHeader @meu-modal="fazerEvento"  @meu-modal-hidden="fecharModal" />
      <NavLeft @meu-evento="lidarComEvento" @open-config="openConfig" @open-firefox="openConfigFirefox"/>
      <DraggableDiv v-show="false"/>
      <MenuItems v-if="exibirModal" @improve-event="closup" />
      <ModalTop  v-if="exibirModalTop" />
      <ConfigUbuntu v-if="exibirConfig" @improve-config="closeConfig"/>
      <ConfigFirefox v-if="exibirConfigFirefox" @improve-config-firefox="closeConfigFirefox" />
    </div>
  </section>
</template>

<style scoped>
section {
  font-family: 'Ubuntu', sans-serif;
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
  position: absolute;
  top: 34px;
  left: 60px;
  width: 100vw;
  height: 100vh;
  background-color: white;
  padding: 20px;
}
</style>
