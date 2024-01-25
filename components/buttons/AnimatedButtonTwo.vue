<template>
  <div>
    <nuxt-link :to="to">
      <button class="original-button">{{ text }}</button>
    </nuxt-link>
  </div>
</template>

<script setup>
const props = defineProps({
  text:{ type: String, default: '' },
  to:{type: String, default: '/'},
})
</script>

<style lang="scss" scoped>
.original-button {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-decoration: none;
  color:  #5A78AD;
  font-size: 16px;
  border-radius: 0px;
  width: 200px;
  height: 40px;
  position: relative;
  font-weight:600;
  transition: 0.3s;
  //background: #121FCF;
  //background: linear-gradient(to right, #5A78AD 0%, #DC6803 100%);
  //-webkit-background-clip: text;
  //-webkit-text-fill-color: transparent;
}

.original-button::before, .original-button::after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: .3s;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, #5A78AD,#5A78AD) 1;
}

.original-button::before {
  top: -2px;
  left: -2px;
}

.original-button::after {
  top: 2px;
  left: 2px;
}

.original-button:hover::before, .original-button:hover::after {
  top: 0;
  left: 0;
  //background-color: #5a78ad;
}
@media screen and (max-width: 768px) {
  .original-button {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    text-decoration: none;
    color:  #5A78AD;
    font-size: 12px;
    border-radius: 0px;
    width: 160px;
    height: 34px;
    position: relative;
    font-weight:600;
    transition: 0.3s;
    //background: #121FCF;
    //background: linear-gradient(to right, #5A78AD 0%, #DC6803 100%);
    //-webkit-background-clip: text;
    //-webkit-text-fill-color: transparent;
  }
}
</style>