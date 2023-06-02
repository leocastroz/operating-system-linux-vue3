<template>
  <div class="about">
    <img class="profile" width="150" src="https://avatars.githubusercontent.com/u/72839343?v=4" alt="">
    <div class="apresent">
      <img width="50" src="https://mwcorvettes.com/wp-content/uploads/2019/03/savethewave-300x252.gif" alt="">
      <h1>Welcome!</h1>
    </div>
    <p>I´m Leonardo Castro</p>
    <p>I´m a <span>Frontend Developer</span></p>
    <br>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

.about {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

.about .profile {
  border-radius: 100%;
  margin: 40px 0;
}

h1 {
  color: #1c602a;
}

p {
  font-weight: 500;
  margin: 30px 0;
  font-size: 25px;
  color: #1c602a;
}

span {
  font-weight: 700  ;
  text-shadow: #00ff33 1px 0 10px;
  color: #323232;
}

.apresent {
  display: flex;
  flex-direction: row;
}

.apresent h1 {
  margin-left: 10px;
  font-size: 40px;
  font-weight: 700;
}

</style>


