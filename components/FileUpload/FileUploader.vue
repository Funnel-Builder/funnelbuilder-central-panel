<template>
    <div>
        <div class="container" @click="openUploader">
            <input type="file" id="file" accept="image/*" @change="uploadImage" hidden>
            <div class="img-area" data-img="">
                <i id="icon" style="font-size: 2rem; color: gray;" class="pi pi pi-cloud-upload"></i>
            </div>
        </div>
        <p v-if="errorMessage && errorMessage.length" class="text-red-500 text-center pt-2">{{ errorMessage }}</p>
    </div>
</template>
<script setup>
const errorMessage = ref('')
const openUploader = () => {
    const inputFile = document.querySelector('#file');
    inputFile.click()
}
const uploadImage = () => {
    const inputFile = document.querySelector('#file');
    const imgArea = document.querySelector('.img-area');
    const image = inputFile.files[0]
    if (image.size < 200000) {
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
            imgArea.dataset.img = image.name;
        }
        reader.readAsDataURL(image);
    } else {
        errorMessage.value = "Image size more than 2MB";
    }
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