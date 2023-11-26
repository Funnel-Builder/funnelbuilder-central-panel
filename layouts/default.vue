<template>
  <main class="min-h-screen">
    <Header/>
    <main class="min-h-[100vh] pt-6 md:pt-[60px]">
      <slot></slot>
    </main>
    <Footer/>
  </main>
</template>

<script setup lang="ts">
import Footer from "~/components/common/Footer.vue";
import Header from "~/components/common/Header.vue";
</script>