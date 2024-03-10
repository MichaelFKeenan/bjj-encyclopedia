<template>
  <div>
    <div class="result-form">
      <div>
        <p><label for="resultName">Name</label></p>
        <input type="text" v-model="resultName" />
      </div>
      <div>
        <p><label for="resultDescription">Description</label></p>
        <textarea
          class="result-form__description-input"
          type="text"
          v-model="resultDescription"
        />
      </div>
      <div>
        <p><label for="resultCoach">Coach</label></p>
        <select name="resultCoach" id="resultCoach" v-model="resultCoachId">
          <option v-for="coach in coaches" :key="coach.id" :value="coach.id">
            {{ coach.name }}
          </option>
        </select>
      </div>
      <div>
        <p><label for="resultCategory">Coach</label></p>
        <select
          name="resultCategory"
          id="resultCategory"
          v-model="resultCategoryId"
        >
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <button @click="save()">Save</button>
    </div>
  </div>
</template>

<script setup>
const { getCategories, getCoaches, getResult } = useApi();

const result = ref({});

const route = useRoute();

const resultName = ref("");
const resultDescription = ref("");
const resultCoachId = ref("");
const resultCategoryId = ref("");
const coaches = ref([]);
const categories = ref([]);

const getItem = async () => {
  const response = await getResult(route.params.id);
  result.value = await response.json();
};

const getAllCoaches = async () => {
  const response = await getCoaches();
  coaches.value = await response.json();
};

const getAllCategories = async () => {
  const response = await getCategories();
  categories.value = await response.json();
};

onMounted(async () => {
  await getItem();

  resultName.value = result.value.name;
  resultDescription.value = result.value.description;
  resultCoachId.value = result.value.CoachId;
  resultCategoryId.value = result.value.CategoryId;

  await getAllCoaches();
  await getAllCategories();
});

const save = async () => {
  const editedResult = {
    id: result.value.id,
    name: resultName.value,
    description: resultDescription.value,
    CoachId: resultCoachId.value,
    CategoryId: resultCategoryId.value,
  };

  const response = await fetch(`${apiUrl}/results/${result.value.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedResult),
  });

  if (response.ok) {
    navigateTo("/");
  }
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
