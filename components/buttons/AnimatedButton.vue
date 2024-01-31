<template>
  <div>
    <nuxt-link :to="to">
      <button class="btn">{{ text }}</button>
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
.btn{
  text-decoration: none;
  border: 1px solid #5A78AD;
  border-radius: 20px;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;
  padding: 4px 30px;
  transform: translate(-50%,-50%);
  overflow: hidden;
  transition: all 0.3s;
  color:#5A78AD;
  display: block;
  position: absolute;
}

.btn:before{
  content: '';
  position: absolute;
  border-radius: 130px;
  top: 30px;
  left: 50%;
  width: 320px;
  height: 320px;
  background: #5A78AD;
  border: 2px solid #5A78AD;
  transition: all 1s;
  animation: wave 5s infinite linear;
  z-index: -1;
  color:white;
}

@keyframes wave {
  0%{
    transform: translateX(-50%) rotate(0deg);
  }
  100%{
    transform: translateX(-50%) rotate(360deg);
  }
}

.btn:hover{
  color: white;
}

.btn:hover:before{
  top: -50px;
  background: #5A78AD;
  color: white;
}
@media only screen and (max-width: 600px) {
  .btn{
    text-decoration: none;
    border: 1px solid #5A78AD;
    border-radius: 20px;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 1px;
    padding: 6px 24px;
    transform: translate(-50%,-50%);
    overflow: hidden;
    transition: all 0.3s;
    color:#5A78AD;
    display: block;
    position: absolute;
  }
}

</style>