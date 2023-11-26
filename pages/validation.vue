
<template>
  <div class="container card flex justify-content-center">
    <form @submit="onSubmit" class="flex flex-column gap-2">
      <div>I've read and accept the terms & conditions.</div>
      <InputSwitch v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
      <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
      <Button type="submit" label="Submit" />
    </form>
    <Toast />
  </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

const { handleSubmit, resetForm } = useForm();
const { value, errorMessage } = useField('value', validateField);
const toast = useToast();

function validateField(value) {
  if (!value) {
    return 'Value is required.';
  }

  return true;
}

const onSubmit = handleSubmit((values) => {
  if (values.value) {
    toast.add({ severity: 'info', summary: 'Form Submitted', detail: 'The form is successfully submitted.', life: 3000 });
    resetForm();
  }
});
</script>
