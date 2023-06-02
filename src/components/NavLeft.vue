<script>
export default {
	methods: {
		emitirEvento() {
			this.$emit('meu-evento')
		},
		abrirConfig() {
			this.$emit('open-config')
		},
		abrirFirefox() {
			this.$emit('open-firefox')
		}
	}
}
</script>
<template>
	<aside>
		<div>
			<img @click="abrirFirefox" width="26" height="26" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Firefox_logo%2C_2017.svg/800px-Firefox_logo%2C_2017.svg.png" alt="firefox">
			<img width="26" height="26" src="https://archlinux-drab.vercel.app/themes/Yaru/system/user-home.png" alt="">
			<img width="26" height="26" src="https://archlinux-drab.vercel.app/themes/Yaru/apps/vscode.png" alt="">
			<img width="26" height="26" src="https://archlinux-drab.vercel.app/themes/Yaru/apps/bash.png" alt="">
			<img width="26" height="26" src="https://archlinux-drab.vercel.app/themes/Yaru/apps/spotify.png" alt="">
			<img width="26" src="https://archlinux-drab.vercel.app/themes/Yaru/apps/youtube.png" alt="">
			<img @click="abrirConfig" width="26" src="https://archlinux-drab.vercel.app/themes/Yaru/apps/gnome-control-center.png" alt="configurações">
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
	padding: 10px 0;
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
}</style>
  
