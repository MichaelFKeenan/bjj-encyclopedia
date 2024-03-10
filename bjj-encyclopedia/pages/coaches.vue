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
          add({ name: newCoachName })
        "
      >
        Add
      </button>
    </div>
  </div>
</template>

<script setup>
const { getCoaches, addCoach } = useApi();

const newCoachName = ref("");
const coaches = ref([]);

const getAll = async () => {
  const response = await getCoaches();
  coaches.value = await response.json();
};
onMounted(getAll);

const add = async () => {
  const response = await addCoach(newCoachName.value);
  const result = await response.json();
  coaches.value.push(result);
  newCoachName.value = "";
};
</script>