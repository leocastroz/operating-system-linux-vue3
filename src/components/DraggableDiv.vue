<template>
    <div class="draggable" :style="{ top: posY + 'px', left: posX + 'px' }" @mousedown="startDragging">
      <!-- Conteúdo da div arrastável -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dragging: false, // indica se o elemento está sendo arrastado
        startX: 0, // coordenada X inicial do mouse quando começa a arrastar
        startY: 0, // coordenada Y inicial do mouse quando começa a arrastar
        posX: 0, // posição X atual da div arrastável
        posY: 0, // posição Y atual da div arrastável
      };
    },
    methods: {
      startDragging(event) {
        this.dragging = true;
        this.startX = event.clientX - this.posX;
        this.startY = event.clientY - this.posY;
  
        // Registrar os eventos de movimento e soltar do mouse
        document.addEventListener("mousemove", this.drag);
        document.addEventListener("mouseup", this.stopDragging);
      },
      drag(event) {
        if (this.dragging) {
          // Calcular a nova posição da div arrastável
          this.posX = event.clientX - this.startX;
          this.posY = event.clientY - this.startY;
        }
      },
      stopDragging() {
        this.dragging = false;
  
        // Remover os eventos de movimento e soltar do mouse
        document.removeEventListener("mousemove", this.drag);
        document.removeEventListener("mouseup", this.stopDragging);
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