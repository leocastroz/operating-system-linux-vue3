<script>
import DataTime from './DataTime.vue'

export default {
  components: {
    DataTime
  },
  data() {
    return {
      modalClickTop: true
    }
  },
  methods: {
    modalTop() {
      this.$emit('meu-modal')
      this.modalClickTop = false;
    },
    ModalHidden() {
      this.$emit('meu-modal-hidden')
      this.modalClickTop = true;
    }
  }
}
</script>
<template>
  <header>
    <div>
      <p class="activities">Activities</p>
    </div>
    <div>
      <DataTime />
      <!-- <p>Wed May 31 12:11 PM</p> -->
    </div>
    <div class="icons">
      <img width="16" height="16" src="https://archlinux-drab.vercel.app/themes/Yaru/status/network-wireless-signal-good-symbolic.svg" alt="">
      <img width="16" height="16" src="https://archlinux-drab.vercel.app/themes/Yaru/status/audio-volume-medium-symbolic.svg" alt="">
      <img width="16" height="16" src="https://archlinux-drab.vercel.app/themes/Yaru/status/battery-good-symbolic.svg" alt="">
      <span v-if="modalClickTop" @click="modalTop" class="material-symbols-outlined">
        arrow_drop_down
      </span>
      <span v-else @click="ModalHidden" class="material-symbols-outlined">
        arrow_left
      </span>
    </div>
  </header>
</template>

<style scoped>
header {
  padding: 5px 0px;
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100% ;
  background-color: #131313;
  color: #fff;
}

p {
  font-size: 14px;
}

.activities {
  padding: 0 12px;

}

.icons {
  display: flex;
  align-items: center;
}

.icons img {
  cursor: pointer;
  padding: 0 5px;
}

.icons span {
  cursor: pointer;
  padding: 0 5px 0 0;
}
</style>
