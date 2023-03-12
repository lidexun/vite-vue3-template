<script setup lang="ts">
import { login } from '@/api/user'

// login({
//   username: '',
//   code: ''
// }).then(res => {
//   console.log(res);
// })
</script>

<template>
  <a-space>
    <a-button type="primary">Primary</a-button>
    <a-button>Secondary</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="outline">Outline</a-button>
    <a-button type="text">Text</a-button>
  </a-space>
</template>
<style scoped></style>
