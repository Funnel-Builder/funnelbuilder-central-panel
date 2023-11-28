
<template>
  <div class="card flex justify-content-center">
    <Toast />
  </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
import {onMounted, watch} from "vue";
const toast = useToast();
const props = defineProps({
  showToast: {type: Boolean, default: false},
  severity: {type: String, default: "warn"},
  summary: {type: String, default: "dd"},
  detail: {type: String, default: "dd"},
  life: {type: Number, default: 2000},
});

watch(() => props.showToast, (value) => {
  if (value) {
    show()
  }
})

onMounted(() => {
  if (props.showToast) {
    show()
  }
})

const show = () => {
  toast.add({ severity: props.severity, summary: props.summary, detail: props.detail, life: props.life });
};
</script>
