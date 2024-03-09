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
const results = ref([]);
const categories = ref([]);
const coaches = ref([]);

const apiUrl = process.env.API_ENDPOINT || "https://main.d2vy4qzsof71mx.amplifyapp.com";

//move all this stuff into a state store, expose via getters, populate store in middleware (before page load)
const getResults = async () => {
  const response = await fetch(`${apiUrl}/results`);
  results.value = await response.json();
};

const getCategories = async () => {
  const response = await fetch(`${apiUrl}/categories`);
  categories.value = await response.json();
};

const getCoaches = async () => {
  const response = await fetch(`${apiUrl}/coaches`);
  coaches.value = await response.json();
};

onMounted(getResults);
onMounted(getCoaches);
onMounted(getCategories);

//move all this filtering onto state store
const filterCoach = (id) => {
  results.value = results.value.filter(x=>x.Coach.id == id);
}

const filterCategory = (id) => {
  results.value = results.value.filter(x=>x.Category.id == id);
}
</script>
