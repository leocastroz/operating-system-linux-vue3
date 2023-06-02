<script>
export default {
	data() {
		return {
			dragging: false,
			startX: 0,
			startY: 0,
			posX: 150,
			posY: 150,
			draggableWidth: 600,
			draggableHeight: 700,
			transition: 'none',
		}
	},
	methods: {
		fecharConfig() {
			this.$emit('improve-config')	
		},
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
			this.posY = 33;
			this.draggableWidth = window.innerWidth;
			this.draggableHeight = window.innerHeight;
			this.divExpanded = true;
			setTimeout(() => {
				this.transition = 'none';
			}, 500);
		},
		shrinkDiv() {
			this.transition = 'width 0.5s, height 0.5s, top 0.5s, left 0.5s';
			this.posX = 150;
			this.posY = 150;
			this.draggableWidth = 600;
			this.draggableHeight = 700;
			this.divExpanded = false;
			setTimeout(() => {
				this.transition = 'none';
			}, 500);
		},
	},
};
</script>

<template>
	<div class="container draggable"
		:style="{ top: posY + 'px', left: posX + 'px', width: draggableWidth + 'px', height: draggableHeight + 'px', transition: transition }"
		@mousedown="startDragging">
		<div class="box">
			<div></div>
			<div>
				<p>Settings</p>
			</div>
			<div class="icons">
				<img width="20" height="20"
					src="https://archlinux-drab.vercel.app/themes/Yaru/window/window-minimize-symbolic.svg" alt="minimizar">
				<img v-if="divExpanded" @click="shrinkDiv"
					src="https://archlinux-drab.vercel.app/themes/Yaru/window/window-restore-symbolic.svg" alt="">
				<img v-else @click="expandDiv" width="20" height="20"
					src="https://archlinux-drab.vercel.app/themes/Yaru/window/window-maximize-symbolic.svg" alt="maximizar">
				<img width="20" height="20" class="fechar" @click="fecharConfig"
					src="https://archlinux-drab.vercel.app/themes/Yaru/window/window-close-symbolic.svg" alt="fechar">
			</div>
		</div>
		<div class="conte">
			<p>leonardo silva castro</p>
		</div>
	</div>
</template>



<style scoped>
.container {
	position: absolute;
	top: 100px;
	left: 10%;
	min-width: 900px;
	height: 300px;
	background-color: #333333;
	border-radius: 5px;
	box-shadow: 0 0 10px 0 #201f1f;
}

div p {
	color: #fff;
}

div .box {
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: absolute;
	min-width: 100%;
	height: 40px;
	background-color: #201f1f;
	border-radius: 5px 5px 0 0;
}


.icons img {
	margin: 0 6px;
}

.fechar {
	background-color: #d54f20;
	border-radius: 100%;
}

.conte {
	width: 100%;
	height: 100px;
	background-color: #fff;
	position: absolute;
	background-color:red;
	margin: 40px 0;
}

</style>
