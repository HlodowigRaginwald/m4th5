<script setup>
import { ref, onMounted } from "vue";
const env = ref();

onMounted(() => {
  env.value = import.meta.env;
});
</script>

<template>
  <h1>Debug Env</h1>
  <table>
    <tr v-for="(v, k) in env" :key="k">
      <th>{{ k }}</th>
      <td>{{ v }}</td>
    </tr>
  </table>
</template>
