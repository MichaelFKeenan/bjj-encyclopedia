<template>
  <div>
    <NuxtLink to="/newItem">Add</NuxtLink>
    <ul>
      <li v-for="result in results" :key="result.id">
        <ResultCard :result="result" />
      </li>
    </ul>
  </div>
</template>

<script setup>
const results = ref([]);

const getResults = async () => {
  const response = await fetch("http://localhost:3001/results");
  results.value = await response.json();
};

onMounted(getResults);
</script>
