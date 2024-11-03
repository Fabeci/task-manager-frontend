<template>
    <header class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold">Task Manager</h1>
        <nav>
          <router-link to="/tasks" class="mr-4">Mes Tâches</router-link>
          <router-link to="/tasks/create" class="mr-4">Nouvelle Tâche</router-link>
          <button @click="logout" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
            Déconnexion
          </button>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    methods: {
      ...mapActions(['logout']),
    },
  };
  </script>
  
  <style scoped>
  /* Ajoutez des styles si nécessaire */
  </style>
  