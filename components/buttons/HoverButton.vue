<template>
  <div>
    <template v-if="type=== 'link'">
      <nuxt-link :to="to">
        <button class="original-button">{{ text }}</button>
      </nuxt-link>
    </template>
    <template v-if="type=== 'icon'">
      <nuxt-link :to="to">
        <button class="original-button"><i :class="iconClass" style="font-size: 1rem"></i> {{ text }}</button>
      </nuxt-link>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  text:{ type: String, default: '' },
  to:{type: String, default: '/'},
  type:{type: String, default: ''},
  iconClass: {type: String, default: 'pi pi-play'}
})
</script>

<style lang="scss" scoped>
.original-button {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-decoration: none;
  color: #5a78ad;
  font-size: 16px;
  border-radius: 18px;
  padding: 8px 20px;
  font-weight: 600;
  border: 2px solid #5a78ad;
  transition: 0.3s;
  box-shadow: 3px 3px 0px 0px #5a78ad;
  background-color: #ffffff;
}

.original-button:hover {
  box-shadow: 0 0 #5a78ad;
  color: #fff;
  background-color: #5a78ad;
}

</style>