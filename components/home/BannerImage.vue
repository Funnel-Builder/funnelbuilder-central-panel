<template>
  <div class="items-center">
    <div class="py-0 md:py-[60px] lg:py-[80px] xl:py-[100px] 2xl:py-[120px] ">
      <div class="hidden md:block z-10 pos">
        <div class="hidden md:flex  justify-center items-center">
          <img class=" md:h-[350px] lg:h-[420px] xl:h-[500px] 2xl:h-[600px]" src="/banner/builder.svg"
               alt="Banner Image"/>
        </div>
      </div>
      <div class="clipPath relative py-8 md:py-16 lg:py-20 xl:py-24 2xl:py-28"></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.clipPath {
  background-color: #5a78ad;
  clip-path: polygon(50% 64%, 100% 0, 100% 100%, 0 100%, 0 0);
  background-image: conic-gradient(from 0deg at 50% 50%, #5a78ad 0deg, #5a78ad 90deg, #5a78ad 180deg, #5a78ad 270deg, #5a78ad 360deg);
  width: 100%;
}

.pos{
  position : absolute;
}
@media (max-width: 1920px) {
  .pos {
    top: 73%;
    left: 0;
    right: 0;
    bottom: 50%;
  }
  .clipPath {
    background-color: #5a78ad;
    clip-path: polygon(50% 64%, 100% 0, 100% 100%, 0 100%, 0 0);
    background-image: conic-gradient(from 0deg at 50% 50%, #5a78ad 0deg, #5a78ad 90deg, #5a78ad 180deg, #5a78ad 270deg, #5a78ad 360deg);
    width: 100%;
  }
}

@media (max-width: 1536px) {
  .pos {
    top: 60%;
    left: 0;
    right: 0;
    bottom: 50%;
  }
  .clipPath {
    background-color: #5a78ad;
    clip-path: polygon(50% 64%, 100% 0, 100% 100%, 0 100%, 0 0);
    background-image: conic-gradient(from 0deg at 50% 50%, #5a78ad 0deg, #5a78ad 90deg, #5a78ad 180deg, #5a78ad 270deg, #5a78ad 360deg);
    width: 100%;
  }
}

@media (max-width: 1280px) {
  .pos {
    top: 75%;
    left: 0;
    right: 0;
    bottom: 50%;
  }
  .clipPath {
    background-color: #5a78ad;
    clip-path: polygon(50% 65%, 100% 0, 100% 100%, 0 100%, 0 0);
    background-image: conic-gradient(from 0deg at 50% 50%, #5a78ad 0deg, #5a78ad 90deg, #5a78ad 180deg, #5a78ad 270deg, #5a78ad 360deg);
    width: 100%;
  }
}

@media (max-width: 1024px) {
  .pos {
    top: 65%;
    left: 0;
    right: 0;
    bottom: 50%;
  }
  .clipPath {
    background-color: #5a78ad;
    clip-path: polygon(50% 65%, 100% 0, 100% 100%, 0 100%, 0 0);
    background-image: conic-gradient(from 0deg at 50% 50%, #5a78ad 0deg, #5a78ad 90deg, #5a78ad 180deg, #5a78ad 270deg, #5a78ad 360deg);
    width: 100%;
  }
}

@media (max-width: 768px) {
  .pos {
    top: 70%;
    left: 0;
    right: 0;
    bottom: 50%;
  }
  .clipPath {
    background-color: #5a78ad;
    clip-path: polygon(50% 65%, 100% 0, 100% 100%, 0 100%, 0 0);
    background-image: conic-gradient(from 0deg at 50% 50%, #5a78ad 0deg, #5a78ad 90deg, #5a78ad 180deg, #5a78ad 270deg, #5a78ad 360deg);
    width: 100%;
  }
}
</style>