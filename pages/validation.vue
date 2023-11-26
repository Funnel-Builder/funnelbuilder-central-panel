
<template>
  <div class="container card flex justify-content-center">
    <form @submit="onSubmit" class="">
      <InputText v-model="title.value.value" :class="{ 'invalid': title.errorMessage.value }" aria-describedby="text-error" />
      <form-input-error :message="title.errorMessage.value" />
      <div class="my-4">
        <Button type="submit" label="Submit" />
      </div>
    </form>
    <Toast />
  </div>
</template>

<script setup>
import { useField, useForm } from 'vee-validate';

//validation rules
const {handleSubmit, isSubmitting, handleReset, setErrors} = useForm({
  validationSchema: {
    title(value) {
      if (value) return true
      return 'Title is required'
    }
  }
})
//form fields
const title = useField('title');

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>
