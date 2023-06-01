<script>
export default {
  methods: {
    emitirEvento() {
      this.$emit('meu-evento', { dados: 'Meus dados do evento' })
    }
  }
}
</script>
<template>
	<aside>
		<div>
			<img width="26" src="https://archlinux-drab.vercel.app/themes/Yaru/apps/brave-logo.png" alt="">
			<img width="26" src="https://archlinux-drab.vercel.app/themes/Yaru/system/user-home.png" alt="">
			<img width="26" src="https://archlinux-drab.vercel.app/themes/Yaru/apps/vscode.png" alt="">
			<img width="26" src="https://archlinux-drab.vercel.app/themes/Yaru/apps/bash.png" alt="">
			<img width="26" src="https://archlinux-drab.vercel.app/themes/Yaru/apps/spotify.png" alt="">
			<img width="26" src="https://archlinux-drab.vercel.app/themes/Yaru/apps/youtube.png" alt="">
			<img width="26" src="https://archlinux-drab.vercel.app/themes/Yaru/apps/gnome-control-center.png" alt="">
		</div>
		<div>
			<img @click="emitirEvento" width="26" src="https://archlinux-drab.vercel.app/themes/Yaru/system/view-app-grid-symbolic.svg" alt="menu-de-items">
		</div>
	</aside>
</template>
  
<style scoped>
aside {
	font-family: 'Ubuntu', sans-serif;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 6vh;
	height: 96.9vh;
	background-color: #1313135f;
}

aside div {
	display: flex;
	flex-direction: column;
	align-items: center;
}

aside img {
	cursor: pointer;
	border-radius: 2px;
	padding: 10px;
}

aside img:hover {
	background-color: #cecece1a;
}
</style>
  
