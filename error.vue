<template>
  <div class="error-page">
    <div class="error-container">
      <h1 class="error-code">{{ errorCode }}</h1>
      <p class="error-message">{{ errorMessage }}</p>
      <router-link to="/" class="back-to-home">Back to Home</router-link>
    </div>
  </div>
</template>

<script setup>
const errorCode = ref('404'); // Replace with dynamic error code if available
const errorMessage = ref('Oops! Something went wrong.'); // Replace with dynamic error message if available
</script>

<style scoped>
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.error-container {
  text-align: center;
}

.error-code {
  font-size: 8rem;
  color: #e74c3c; /* Red color */
  margin-bottom: 20px;
}

.error-message {
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 20px;
}

.back-to-home {
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db; /* Blue color */
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.back-to-home:hover {
  background-color: #2980b9; /* Darker blue on hover */
}
</style>
