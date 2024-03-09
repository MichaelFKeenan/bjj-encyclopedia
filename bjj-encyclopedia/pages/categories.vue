<template>
  <div>
    <h1>Categories</h1>

    <ul>
      <li v-for="category in categories" :key="category.id">
        {{ category.name }}
      </li>
    </ul>

    <div class="category-form">
      <h2>Add a category</h2>
      <div>
        <p><label for="newCategoryName">Name</label></p>
        <input type="text" v-model="newCategoryName" />
      </div>
      <button
        @click="
          addCategory({ name: newCategoryName })
        "
      >
        Add
      </button>
    </div>
  </div>
</template>

<script setup>
const newCategoryName = ref("");
const categories = ref([]);

const apiUrl = process.env.API_ENDPOINT || "https://main.d2vy4qzsof71mx.amplifyapp.com";

const getCategories = async () => {
  const response = await fetch(`${apiUrl}/categories`);
  categories.value = await response.json();
};
onMounted(getCategories);

const addCategory = async () => {
  const response = await fetch(`${apiUrl}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newCategoryName.value
    }),
  });
  const result = await response.json();
  categories.value.push(result);
  newCategoryName.value = "";
};
</script>