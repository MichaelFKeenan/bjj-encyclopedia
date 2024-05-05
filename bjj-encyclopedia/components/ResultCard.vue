<template>
  <div>
    <div>
      {{ result.name }} - {{ result.Coach?.name }} - {{ result.Category?.name }}
      <NuxtLink :to="`/editItem/${result.id}`"><button>Edit</button></NuxtLink>
      <button @click="deleteItem(result.id)">Delete</button>
      <button @click="showDetails(true)" v-if="!isShowDetails">open</button>
      <button @click="showDetails(false)" v-if="isShowDetails">hide</button>
    </div>
    <div v-if="isShowDetails">
      {{ result.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Props } from './ResultCard';

const { deleteResult } = useApi();

withDefaults(defineProps<Props>(), {});

const isShowDetails = ref(false);

const showDetails = (show) => {
  isShowDetails.value = show;
};

const deleteItem = async (resultId) => {
  await deleteResult(resultId);
  results.value = results.value.filter((r) => r.id !== resultId);
};
</script>