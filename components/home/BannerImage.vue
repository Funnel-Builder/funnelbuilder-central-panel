<template>
  <div class="py-[130px] items-center">
    <div class="">
      <div class="absolute z-10 pos">
        <div class="flex  justify-center items-center">
          <img class="h-[600px]" src="/banner/builder.svg" alt="Banner Image"/>
        </div>
      </div>
      <div class="clipPath relative py-28"></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.clipPath{
  background-color: #5a78ad;
  clip-path: polygon(100% 100%, 61% 62%, 100% 0, 100% 100%, 0 100%, 0 1%);
  background-image:conic-gradient(from 0deg at 50% 50%, #5a78ad 0deg, #5a78ad 90deg, #5a78ad 180deg, #5a78ad 270deg, #5a78ad 360deg);
  width: 100%;
  //height: 400px;
}
.pos{
  top: 73%;
  left: 0;
  right: 0;
}
</style>