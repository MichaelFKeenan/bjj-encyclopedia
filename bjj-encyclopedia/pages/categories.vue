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
          add({ name: newCategoryName })
        "
      >
        Add
      </button>
    </div>
  </div>
</template>

<script setup>
const { getCategories, addCategory, } = useApi();

const newCategoryName = ref("");
const categories = ref([]);

const getAll = async () => {
  const response = await getCategories();
  categories.value = await response.json();
};
onMounted(getAll);

const add = async () => {
  const response = await addCategory(newCategoryName.value);
  const result = await response.json();
  categories.value.push(result);
  newCategoryName.value = "";
};
</script>