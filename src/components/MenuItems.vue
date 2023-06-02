<script>
export default {
	methods: {
		fecharModal() {
			this.$emit('improve-event')
		}
	}
}
</script>
<template>
	<div class="modal">
		<div class="modal-content">
			<h2>Minha Modal</h2>
			<p>fechar</p>
			<img @click="fecharModal" src="https://archlinux-drab.vercel.app/themes/Yaru/window/window-close-symbolic.svg" alt="">
		</div>
	</div>
</template>

<style scoped>
.modal {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(55, 255, 102, 0.5);
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
	background-color: #c04b4b;
	padding: 20px;
}

.modal-content img {
	background-color: red;
	border-radius: 100%;
}
</style>