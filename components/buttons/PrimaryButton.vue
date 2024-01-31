<template>
  <div>
    <template v-if="type=== 'link'">
      <nuxt-link :to="to"  class="buttonHover text-[14px] xl:text-[16px] hover:ring-1 hover:ring-[white] bg-[#5A78AD] text-white px-4 py-1.5 rounded-full font-[600]">{{ text }}</nuxt-link>
    </template>
    <template v-if="type=== 'icon'">
      <nuxt-link :to="to">
        <div class="buttonHover hover:ring-1 hover:ring-[white] text-white flex items-center bg-[#5A78AD] gap-x-1 rounded-full px-4 py-1.5 hover:cursor-pointer">
          <i :class="iconClass" style="font-size: 1rem"></i>
          <p class="font-[600] text-[14px] xl:text-[16px]">{{ text }}</p>
        </div>
      </nuxt-link>
    </template>
    <template v-if="type==='contact'">
      <nuxt-link :to="to"  class="buttonHover text-[14px] xl:text-[16px] hover:ring-1 hover:ring-[white] bg-[#5A78AD] text-white px-4 py-1.5 rounded-lg font-[600]">{{ text }}</nuxt-link>
    </template>
    <template v-if="type==='trail'">
      <nuxt-link :to="to"  class="buttonHover text-[14px] xl:text-[16px] bg-[white] text-[#5A78AD] px-4 py-1.5 rounded-lg font-[600]">{{ text }}</nuxt-link>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  type:{type: String, default: ''},
  text:{ type: String, default: 'Primary Button' },
  to:{type: String, default: '/'},
  iconClass: {type: String, default: 'pi pi-play'}
})

</script>

<style lang="scss" scoped>
.buttonHover:hover{
  background: #415984;
  color: white;
  transition: 0.6s;
}
</style>