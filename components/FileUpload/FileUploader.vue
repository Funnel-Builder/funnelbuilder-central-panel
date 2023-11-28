<template>
  <div>
    <!-- <div v-if="loading">
      <div class="card flex justify-content-center">
        <ProgressSpinner/>
      </div>
    </div> -->
    <div class="flex justify-center">
      <div class="container" @click="openUploader">
        <input type="file" id="file" accept="image/*" @change="uploadImage" hidden>
        <div class="img-area" data-img="">
          <i id="icon" style="font-size: 2rem; color: gray;" class="pi pi pi-cloud-upload"></i>
        </div>
      </div>
      <p v-if="errorMessage && errorMessage.length" class="text-red-500 text-center pt-2">{{ errorMessage }}</p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  uploadPath: { type: String, default: 'uploads' },
})
const emit = defineEmits(['photoUploaded', 'loading'])
const loading = ref(false)

let uploadedPhoto = ref(null)
const errorMessage = ref('')
let uploadPercentage = ref(0)
let downloadPercentage = ref(0)


watch(uploadedPhoto, async (newVal, oldVal) => {
  if (newVal) emit('photoUploaded', uploadedPhoto.value)
})
watch(loading, async (newVal, oldVal) => {
  emit('loading', newVal)
})

const openUploader = () => {
  const inputFile = document.querySelector('#file');
  inputFile.click()
}
const uploadImage = async () => {
  const inputFile = document.querySelector('#file');
  const imgArea = document.querySelector('.img-area');
  const image = inputFile.files[0]
  if (image.size < 200000) {
    await getSignedUrl(image)
    const reader = new FileReader();
    reader.onload = () => {
      const allImg = imgArea.querySelectorAll('img');
      allImg.forEach(item => item.remove());
      const imgUrl = reader.result;
      let icon = document.getElementById("icon");
      icon?.parentNode?.removeChild(icon);
      const img = document.createElement('img');
      img.src = imgUrl;
      imgArea.appendChild(img);
      imgArea.classList.add('active');
      imgArea.dataset.img = 'Upload image';
    }
    reader.readAsDataURL(image);
  } else {
    errorMessage.value = "Image size more than 2MB";
  }
}

const getSignedUrl = async (file) => {
  loading.value = true
  const formData = new FormData()
  const extension = file.name.split('.').pop()
  const fileName = `${props.uploadPath}/${randomString(32)}.${extension}`

  formData.append('file_name', fileName)
  let signedUrl = ''
  const { data, pending, error, refresh } = await postData('get-signed-url', formData)
  if (error && error.value) {
    console.log(error.value)
  } else {
    signedUrl = data.value.signed_url
    const resp = await uploadFile(signedUrl, file)
    uploadedPhoto = resp ? signedUrl : null
    emit('photoUploaded', uploadedPhoto)
  }
  loading.value = false
}

const uploadFile = async (url, file = file) => {
  const xhr = new XMLHttpRequest()

  return await new Promise((resolve) => {
    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        uploadPercentage.value = parseInt(Math.round((event.loaded / event.total) * 100))
      }

    })
    xhr.addEventListener('progress', (event) => {
      if (event.lengthComputable)
        downloadPercentage = parseInt(Math.round((event.loaded / event.total) * 100))
    })
    xhr.addEventListener('loadend', () => {
      resolve(xhr.readyState === 4 && xhr.status === 200)
    })
    xhr.onreadystatechange = function () {
      // if (xhr.readyState === 4 && xhr.status === 200) console.log(xhr.responseXML)
    }
    xhr.onload = function () {
      //
    }
    xhr.open('PUT', url, true)
    xhr.setRequestHeader('Content-Type', 'application/octet-stream')
    xhr.send(file)
  })
}
</script>
<style scoped lang="scss">
.container {
  max-width: 131px;
  height: 118px;
  width: 100%;
  background: #EFF1F7;
  border-radius: 20px;
  cursor: pointer;
}

.img-area {
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.img-area img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1999;
}

.img-area::before {
  content: attr(data-img);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  color: #fff;
  font-size: 10px;
  font-weight: 500;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  opacity: 0;
  transition: all .3s ease;
  z-index: 200;
}

.img-area.active:hover::before {
  opacity: 1;
}

.select-image {
  display: block;
  width: 100%;
  padding: 16px 0;
  border-radius: 15px;
  background: var(--blue);
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all .3s ease;
}

.select-image:hover {
  background: var(--dark-blue);
}
</style>