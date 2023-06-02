<script>
import { RouterLink } from 'vue-router'
</script>
<template>
  <main>
    <div class="firefox-header">
      <img width="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Firefox_logo%2C_2017.svg/800px-Firefox_logo%2C_2017.svg.png" alt="firefox">
      <p>Firefox</p>
    </div>
    <div class="submit-line">
      <input type="text" placeholder="Google search" />
      <button class="submit-lente" type="submit">
        <img width="18" src="https://logopng.com.br/logos/google-37.png" alt="Google">
      </button>
    </div>
    <div class="sub-items">
      <RouterLink to="/">
        <div>
          <img width="45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Firefox_logo%2C_2017.svg/800px-Firefox_logo%2C_2017.svg.png" alt="firefox">
          <h6>Firefox</h6>
        </div>
      </RouterLink> 
      <RouterLink to="/github">
        <div>
          <img width="45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png" alt="github">
          <h6>GitHub</h6>
        </div>
      </RouterLink> 
      <RouterLink to="/instagram">
        <div>
          <img width="45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" alt="instagram">
          <h6>Instagram</h6>
        </div>
      </RouterLink> 
      <RouterLink to="/linkedin">
        <div>
          <img width="45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" alt="linkedin">
          <h6>Linkedin</h6>
        </div>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
  color: #fff;
}

main p {
  color: #000;
  font-size: 30px;
  font-weight: bold;
  margin: 0 10px;
  text-align: center;
  margin-top: 10px;
}

.firefox-header {
  display: flex;
  align-items: center;
  padding: 40px 0;
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
  margin-top: 1px;
	text-indent: 30px;
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

.sub-items {
  min-width: 700px;
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
}

.sub-items a {
  text-decoration: none;
}

.sub-items div {
  min-width: 80px;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #c8c8c8;
  padding: 20px;
  border-radius: 5px;
  color: #7e7e7e;
  box-shadow: 0 0 2px 0 #000;
  transition:all 0.3s ease;
  cursor: pointer;
}

.sub-items div:hover {
  box-shadow: 0 0 2px 0 #000;
  background-color: #fcb14d;
  color: #fff;
  -webkit-transform: rotateZ(-30deg);
  -ms-transform: rotateZ(-30deg);
  transform: rotateZ(-30deg);
  width: 80px;
  height: 80px;
  font-size: 12px;
}

.sub-items div h6 {
  margin-top: 10px;
}

</style>
