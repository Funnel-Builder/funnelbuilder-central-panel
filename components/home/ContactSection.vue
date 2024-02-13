<template>
  <div class="container mx-auto pt-20 px-4 md:px-16">
    <div class="bg-[#EFF1F7] rounded-2xl py-8">
      <div class="flex justify-center">
        <div>
          <img src="/contact/avatar.svg" alt="image"/>
        </div>
      </div>
      <div>
        <div class="text-center pt-4">
          <p class="text-[18px] xl:text-[20px] font-[500] textColor">Still have questions?</p>
          <span class="text-[14px] lg:text-[18px] textColor">Can’t find the answer you’re looking for? Please chat to our friendly team.</span>
        </div>
        <form @submit.prevent="submitForm">
          <div class="flex justify-center">
            <div class="grid grid-cols-1 gap-x-8 px-4 md:px-16 w-full md:w-[100%] lg:w-[88%] xl:w-[68%] 2xl:w-[56%]">
              <div class="pt-5">
                <label class="inputGroupLabel" for="username">Full Name<span class="text-[#D92D20]">*</span></label><br>
                <InputText v-model="name.value.value" :class="{ 'invalid': name.errorMessage.value }"
                           class="inputGroupField focus:shadow-none py-2 sm:py-2" id="username" type="text"
                           placeholder="Enter your name" />
                <form-input-error :message="name.errorMessage.value" text-color="#D92D20" />
              </div>
              <div class="pt-4">
                <label class="inputGroupLabel" for="email">Email Address<span class="text-[#D92D20]">*</span></label><br>
                <InputText v-model="email.value.value" :class="{ 'invalid': email.errorMessage.value }"
                           class="inputGroupField focus:shadow-none py-2 sm:py-2" id="email" type="email"
                           placeholder="Enter email address" />
                <form-input-error :message="email.errorMessage.value" text-color="#D92D20" />
              </div>
              <div class="pt-4">
                <label class="inputGroupLabel" for="username">Subject<span class="text-[#D92D20]">*</span></label><br>
                <InputText v-model="subject.value.value" :class="{ 'invalid': subject.errorMessage.value }"
                           class="inputGroupField focus:shadow-none py-2 sm:py-2" id="username" type="text"
                           placeholder="Enter subject" />
                <form-input-error :message="subject.errorMessage.value" text-color="#D92D20" />
              </div>
              <div class="pt-4">
                <label class="inputGroupLabel" for="username">Message<span class="text-[#D92D20]">*</span></label><br>
                <Textarea v-model="message.value.value" autoResize rows="5" cols="30" :class="{ 'invalid': message.errorMessage.value }"
                          class="inputGroupField focus:shadow-none py-2 sm:py-2" id="username" type="text"
                          placeholder="Enter subject" />
                <form-input-error :message="message.errorMessage.value" text-color="#D92D20" />
              </div>
            </div>
          </div>
          <div  class="text-center pt-4 xl:pt-8">
            <button  @click="submitForm"
                    :class="isActive ? 'buttonHover text-[14px] xl:text-[16px] hover:ring-1 hover:ring-[white] bg-[#5A78AD] text-white px-4 py-1.5 rounded-lg font-[600] cursor-pointer' : 'text-[14px] xl:text-[16px] hover:ring-1 hover:ring-[white] bg-[#667085] cursor-default text-white px-4 py-1.5 rounded-lg font-[600] cursor-default'">
              Get in touch
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useField, useForm } from 'vee-validate';
import { useToast } from "vue-toastification";
//validation rules
const { handleSubmit, isSubmitting, handleReset, setErrors } = useForm({
  validationSchema: {
    name(value) {
      if (!value) return 'Name is required'
      else if (value.length < 3 || value.length > 100) return 'Name must be between 3 and 100 characters'
      return true;
    },
    email(value) {
      if (!value) return 'Email is required'
      else if (/^[a-z0-9.-]+@[a-z0-9.-]+.[a-z]+$/i.test(value)) return true;
      return "Invalid email";
    },
    subject(value) {
      if (!value) return 'Subject is required'
      else if (value.length < 3 || value.length > 100) return 'Subject must be between 3 and 100 characters'
      return true;
    },
    message(value) {
      if (!value) return 'Message is required'
      else if (value.length < 3 || value.length > 100) return 'Message must be between 3 and 100 characters'
      return true;
    },
  }
})

//form fields
const name = useField('name');
const email = useField('email');
const subject = useField('subject');
const message = useField('message');

const toast = useToast()


const isActive = computed(() => {
  if((name.value.value && name.value.value.length >= 3) && email.value.value && (subject.value.value && subject.value.value.length >= 3) && (message.value.value && message.value.value.length >= 3)){
    return true
  }
  else{
    return false
  }
});


const submitForm = handleSubmit(async (values) => {
  console.log(values)
  const { data, error } = await postData('contact-us', values);
  if (error && error.value) {
    if (error.value.statusCode === 422) {
      setErrors(error.value.data.errors || {})
    }
  } else {
    toast.success('Your message has been sent successfully');
    handleReset()
  }
});

</script>

<style lang="scss" scoped>
.inputGroupLabel {
  color: black;
  padding-left: .2rem;
}
.inputGroupField {
  background-color: white;
  width: 100%;
  border-radius: 10px;
  color: black;
  border: none;
}

.buttonHover:hover{
  background: #415984;
  color: white;
  transition: 0.6s;
}
</style>