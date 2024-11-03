<template>
    <div class="max-w-lg mx-auto p-4">
      <h2 class="text-2xl font-bold mb-4">Mes Tâches</h2>
      <button 
        @click="createTask"
        class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 ease-in-out mb-4"
      >
        Nouvelle Tâche
      </button>
      <ul class="bg-white shadow-md rounded-lg">
        <li v-for="task in tasks" :key="task.id" class="flex justify-between items-center p-4 border-b last:border-b-0">
          <p class="text-lg">{{ task.title }}</p>
          <div>
            <button 
              @click="editTask(task.id)"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out mr-2"
            >
              Éditer
            </button>
            <button 
              @click="deleteTask(task.id)"
              class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 ease-in-out"
            >
              Supprimer
            </button>
          </div>
        </li>
      </ul>
      <p v-if="tasks.length === 0" class="text-center text-gray-500 mt-4">Aucune tâche disponible.</p>
    </div>
  </template>
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['tasks'])
    },
    mounted() {
        this.$store.dispatch('fetchTasks');
    },
    methods: {
        createTask() {
      this.$router.push('/create-task'); // Redirige vers la page de création de tâche
    },
      editTask(id) {
        this.$router.push(`/tasks/edit/${id}`);
      },
      deleteTask(id) {
        this.$store.dispatch('deleteTask', id);
        alert('Tâche supprimée avec succès');
      }
    }
  };
  </script>
  