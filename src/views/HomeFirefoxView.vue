
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
  </main>
</template>

<style scoped>

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
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

</style>
