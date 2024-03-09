<template>
  <div>
    <h1>Coaches</h1>

    <ul>
      <li v-for="coach in coaches" :key="coach.id">
        {{ coach.name }}
      </li>
    </ul>

    <div class="coach-form">
      <h2>Add a coach</h2>
      <div>
        <p><label for="newCoachName">Name</label></p>
        <input type="text" v-model="newCoachName" />
      </div>
      <button
        @click="
          addCoach({ name: newCoachName })
        "
      >
        Add
      </button>
    </div>
  </div>
</template>

<script setup>
const newCoachName = ref("");
const coaches = ref([]);

const apiUrl = process.env.API_ENDPOINT || "http://localhost:3001";

const getCoaches = async () => {
  const response = await fetch(`${apiUrl}/coaches`);
  coaches.value = await response.json();
};
onMounted(getCoaches);

const addCoach = async () => {
  const response = await fetch(`${apiUrl}/coaches`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newCoachName.value
    }),
  });
  const result = await response.json();
  coaches.value.push(result);
  newCoachName.value = "";
};
</script>