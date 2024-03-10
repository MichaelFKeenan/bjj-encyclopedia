<template>
  <div>
    <NuxtLink to="/newItem">Add</NuxtLink>
    <div>
      <p>category filter:</p>
      <button v-for="category in categories" :key="category.id" @click="filterCategory(category.id)">{{ category.name }}</button>
    </div>
    <div>
      <p>coach filter:</p>
      <button v-for="coach in coaches" :key="coach.id" @click="filterCoach(coach.id)">{{ coach.name }}</button>
    </div>
    <ul>
      <li v-for="result in results" :key="result.id">
        <ResultCard :result="result" />
      </li>
    </ul>
  </div>
</template>

<script setup>
const { getResults, getCategories, getCoaches } = useApi();

const results = ref([]);
const categories = ref([]);
const coaches = ref([]);

//move all this stuff into a state store, expose via getters, populate store in middleware (before page load)
const getAllResults = async () => {
  const response = await getResults();
  results.value = await response.json();
};

const getAllCategories = async () => {
  const response = await getCategories();
  categories.value = await response.json();
};

const getAllCoaches = async () => {
  const response = await getCoaches();
  coaches.value = await response.json();
};

onMounted(getAllResults);
onMounted(getAllCoaches);
onMounted(getAllCategories);

//move all this filtering onto state store
const filterCoach = (id) => {
  results.value = results.value.filter(x=>x.Coach.id == id);
}

const filterCategory = (id) => {
  results.value = results.value.filter(x=>x.Category.id == id);
}
</script>
