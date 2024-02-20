<template>
    <div>
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
        <div>
          <p><label for="newResultCoach">Coach</label></p>
          <select name="newResultCoach" id="newResultCoach" v-model="newResultCoachId">
            <option v-for="coach in coaches" :key="coach.id" :value="coach.id">{{ coach.name }}</option>
          </select>
        </div>
        <div>
          <p><label for="newResultCategory">Coach</label></p>
          <select name="newResultCategory" id="newResultCategory" v-model="newResultCategoryId">
            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
          </select>
        </div>
        <button
          @click="
            addResult()
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
  const newResultCoachId = ref("");
  const newResultCategoryId = ref("");
  const coaches = ref([]);
  const categories = ref([]);
  
  const getCoaches = async () => {
    const response = await fetch("http://localhost:3001/coaches");
    coaches.value = await response.json();
  };
  const getCategories = async () => {
    const response = await fetch("http://localhost:3001/categories");
    categories.value = await response.json();
  };

  onMounted(getCoaches);
  onMounted(getCategories);
  
  const addResult = async () => {
    const response = await fetch("http://localhost:3001/results", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newResultName.value,
        description: newResultDescription.value,
        CoachId: newResultCoachId.value,
        CategoryId: newResultCategoryId.value,
      }),
    });
    if(response.ok) {
        navigateTo('/login')
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