<template>
  <div>
    <h1>BJJ! ({{ results.length }})</h1>

    <ul>
      <li v-for="result in results" :key="result.id">
        {{ result.name }} - {{ result.description }}
        <button @click="updateResult(result.id)">Update</button>
        <button @click="deleteResult(result.id)">Delete</button>
      </li>
    </ul>

    <div class="result-form">
      <h2>Add a result</h2>
      <div>
        <p><label for="newResultName">Name</label></p>
        <input type="text" v-model="newResultName" />
      </div>
      <div>
        <p><label for="newResultDescription">Description</label></p>
        <textarea
          class="result-form__description-input"
          type="text"
          v-model="newResultDescription"
        />
      </div>
      <button
        @click="
          addResult({ name: newResultName, description: newResultDescription })
        "
      >
        Add
      </button>
    </div>
  </div>
</template>

<script setup>
const newResultName = ref("");
const newResultDescription = ref("");
const results = ref([]);

const getResults = async () => {
  const response = await fetch("http://localhost:3001/results");
  results.value = await response.json();
};
onMounted(getResults);

const addResult = async () => {
  const response = await fetch("http://localhost:3001/results", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newResultName.value,
      description: newResultDescription.value,
    }),
  });
  const result = await response.json();
  results.value.push(result);
  newResultName.value = "";
  newResultDescription.value = "";
};

const updateResult = async (result) => {
  await fetch(`http://localhost:3001/results/${result.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(result),
  });
};

const deleteResult = async (resultId) => {
  await fetch(`http://localhost:3001/results/${resultId}`, {
    method: "DELETE",
  });
  results.value = results.value.filter((r) => r.id !== resultId);
};
</script>

<style scoped lang="scss">
.result-form {
  &__description-input {
    min-height: 250px;
    min-width: 250px;
  }
}
</style>