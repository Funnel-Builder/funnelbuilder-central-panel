
<template>
  <div class="card">
    <FileUpload name="images[]" :chooseLabel="label" :showUploadButton="false" :showCancelButton="false" @select="submitHandler" @remove="remove" :multiple="multiple" :accept="accept" :maxFileSize="maxFileSize">
      <template #empty>
        <p>Drag and drop files to here to upload.</p>
      </template>
    </FileUpload>
    <div class="mt-1">
      <ProgressBar v-if="uploadPercentage > 0" :value="uploadPercentage"></ProgressBar>
    </div>
  </div>
</template>

<script setup>
const props =defineProps({
  label: {type: String, default: 'Select Photo'},
  multiple: {type: Boolean, default: false},
  uploadPath: {type: String, default: 'uploads'},
  accept: {type: String, default: 'image/*'},
  maxFileSize: {type: Number, default: 1000000},
  oldImages: {type: Array, default: () => []},
})

const loading = ref(false)
let uploadPercentage = ref(0)
let downloadPercentage = ref(0)
let uploadedPhoto = ref([])
const tempPhotos = ref([])

const emit = defineEmits(['photoUploaded', 'photoDeleted', 'loading'])

watch(uploadedPhoto, async (newVal, oldVal) => {
  if (newVal) emit('photoUploaded', uploadedPhoto.value)
})
watch(loading, async (newVal, oldVal) => {
  emit('loading', newVal)
})
const submitHandler = async (event) => {
  for (const fileItem of event.files) {
    await getSignedUrl(fileItem)
  }
}
const remove = async (event) => {
  if (event.files.length === 0){
    uploadedPhoto.value = []
    tempPhotos.value = []
    uploadPercentage.value = 0
  }
  tempPhotos.value = tempPhotos.value.filter((item) => item.name !== event.file.name)
  uploadedPhoto.value = tempPhotos.value.map((item) => item.url)
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
    if (props.multiple) {
      uploadedPhoto.value.push(resp ? signedUrl : null)
      tempPhotos.value.push({name: file.name, url: resp ? signedUrl : null})
    } else {
      uploadedPhoto = resp ? signedUrl : null
      tempPhotos.value = [{name: file.name, url: resp ? signedUrl : null}]
    }

    emit('photoUploaded', uploadedPhoto.value)
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
