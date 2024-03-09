<template>
  <div>
    <div>
      {{ result.name }} - {{ result.Coach?.name }} - {{ result.Category?.name }}
      <NuxtLink :to="`/editItem/${result.id}`"><button>Edit</button></NuxtLink>
      <button @click="deleteResult(result.id)">Delete</button>
      <button @click="showDetails(true)" v-if="!isShowDetails">open</button>
      <button @click="showDetails(false)" v-if="isShowDetails">hide</button>
    </div>
    <div v-if="isShowDetails">
      {{ result.description }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  result: Object
})

const isShowDetails = ref(false);

const showDetails = (show) => {
  isShowDetails.value = show;
};

const apiUrl = process.env.API_ENDPOINT || "http://localhost:3001";

const deleteResult = async (resultId) => {
  await fetch(`${apiUrl}/results/${resultId}`, {
    method: "DELETE",
  });
  results.value = results.value.filter((r) => r.id !== resultId);
};
</script>