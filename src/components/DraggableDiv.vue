<template>
  <div>
    <div
      class="draggable"
      :style="{ top: posY + 'px', left: posX + 'px', width: draggableWidth + 'px', height: draggableHeight + 'px', transition: transition }"
      @mousedown="startDragging"
    >
    <button @click="expandDiv">Expandir Div</button>
    <button @click="shrinkDiv">Diminuir Div</button>
      <!-- Conteúdo da div arrastável -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dragging: false,
      startX: 0,
      startY: 0,
      posX: 0,
      posY: 0,
      draggableWidth: 600,
      draggableHeight: 200,
      transition: 'none',
    };
  },
  methods: {
    startDragging(event) {
      this.dragging = true;
      this.startX = event.clientX - this.posX;
      this.startY = event.clientY - this.posY;

      document.addEventListener("mousemove", this.drag);
      document.addEventListener("mouseup", this.stopDragging);
    },
    drag(event) {
      if (this.dragging) {
        const maxX = window.innerWidth - this.draggableWidth;
        const maxY = window.innerHeight - this.draggableHeight;

        let newPosX = event.clientX - this.startX;
        let newPosY = event.clientY - this.startY;

        newPosX = Math.max(0, Math.min(newPosX, maxX));
        newPosY = Math.max(0, Math.min(newPosY, maxY));

        this.posX = newPosX;
        this.posY = newPosY;
      }
    },
    stopDragging() {
      this.dragging = false;

      document.removeEventListener("mousemove", this.drag);
      document.removeEventListener("mouseup", this.stopDragging);
    },
    expandDiv() {
      this.transition = 'width 0.5s, height 0.5s, top 0.5s, left 0.5s';
      this.posX = 0;
      this.posY = 0;
      this.draggableWidth = window.innerWidth;
      this.draggableHeight = window.innerHeight;
      setTimeout(() => {
        this.transition = 'none';
      }, 500);
    },
    shrinkDiv() {
      this.transition = 'width 0.5s, height 0.5s, top 0.5s, left 0.5s';
      this.posX = 150;
      this.posY = 150;
      this.draggableWidth = 600;
      this.draggableHeight = 200;
      setTimeout(() => {
        this.transition = 'none';
      }, 500);
    },
  },
};
</script>

<style scoped>
.draggable {
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: #ccc;
}
</style>