<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
	data() {
		return {
			dragging: false,
			startX: 0,
			startY: 0,
			posX: 150,
			posY: 150,
			draggableWidth: 1200,
			draggableHeight: 700,
			transition: 'none',
		}
	},
	methods: {
		fecharConfig() {
			this.$emit('improve-config-firefox')	
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
			this.draggableWidth = 1200;
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
				<p>Firefox</p>
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
			<div class="conteudo">
				<div>
					<span class="material-symbols-outlined">
						arrow_back
					</span>
					<span class="material-symbols-outlined">
						arrow_forward
					</span>
					<span class="material-symbols-outlined">
						refresh
					</span>
				</div>
				<div>
					<div class="submit-line">
						<input type="text" placeholder="Search with Google or enter address" />
						<button class="submit-lente" type="submit">
						  <i class="fa fa-search"></i>
						</button>
					</div>
				</div>
				<div>
					<span class="material-symbols-outlined">
						shield_lock
					</span>
					<span class="material-symbols-outlined">
						menu
					</span>
				</div>
			</div>
			<div class="sub-items">
				 <nav>
					<RouterLink to="/">
						<div>
							<img width="15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Firefox_logo%2C_2017.svg/800px-Firefox_logo%2C_2017.svg.png" alt="firefox">
							Firefox start
						</div>
					</RouterLink>
					<RouterLink to="/github">
						<div>
							<img width="15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png" alt="github">
							Github - leocastroz
						</div>	
					</RouterLink>
					<RouterLink to="/instagram">
						<div>
							<img width="15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" alt="instagram">
							Instagram - leocastro_x
						</div>	
					</RouterLink>
					<RouterLink to="/linkedin">
						<div>
							<img width="15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" alt="linkedin">
							Linkedin - leoscastro
						</div>
					</RouterLink>
				</nav>
			</div>
			<RouterView />
		</div>
	</div>
</template>

<style scoped>
.sub-items {
	padding: 5px;
}

nav {
	display: flex;
}

nav a div {
	display: flex;
	align-items: center;
	background-color: rgb(103, 103, 103);
	border-radius: 3px;
	padding: 5px 10px;
}

nav a div:hover {
	background-color: #fcb14d;
	color: #000;
}

nav a div img {
	margin-right: 6px;
}

nav a {
	color: #c3c3c3;
	text-decoration: none;
	padding: 0 10px;
}

.container {
	position: fixed;
	background-color: #eaeaea;
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
	height: 120px;
	background-color: #fff;
	position: absolute;
	background-color: #414141;
	margin: 40px 0;
}

.conteudo {
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	padding: 20px 0;
}

span {
	margin: 0 10px;
	font-size: 20px;
	color: #d6d6d6;
}



.submit-lente {
	position: absolute;
	top:0; 
	left:0;
	z-index:10;
	border:none;
	background:transparent;
	outline:none;
	margin: 10px 0 0 8px;

  }
  
.submit-line {
	position: relative;
}

.submit-line input {
	text-indent: 25px;
}

.submit-line input::placeholder {
	color: #a9a7a7;
}
  
.submit-line input {
	min-width: 700px;
	padding: 10px;
	border-radius: 5px;
	display: flex;	
	align-items: center;

}

</style>
