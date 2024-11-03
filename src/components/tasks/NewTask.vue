<template>
    <div class="max-w-lg mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Créer une Nouvelle Tâche</h1>
      <form @submit.prevent="createTask">
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-700">Titre</label>
          <input
            type="text"
            v-model="title"
            id="title"
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div class="mb-4">
          <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            v-model="description"
            id="description"
            rows="4"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          ></textarea>
        </div>
        <div class="mb-4">
          <label for="due_date" class="block text-sm font-medium text-gray-700">Date d'échéance</label>
          <input
            type="date"
            v-model="due_date"
            id="due_date"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div class="mb-4">
          <label for="status" class="block text-sm font-medium text-gray-700">Statut</label>
          <select
            v-model="status"
            id="status"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option :value="true">Complétée</option>
            <option :value="false">Non Complétée</option>
          </select>
        </div>
        <button 
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Ajouter Tâche
        </button>
      </form>
      <button 
        @click="cancel"
        class="mt-4 text-gray-500 hover:underline"
      >
        Annuler
      </button>
    </div>
  </template>
  
  <script>
//   import { mapState } from 'vuex';
  
  export default {
    data() {
      return {
        title: '',
        description: '',
        due_date: '',
        status: false,
      };
    },
    methods: {
      async createTask() {
        try {
          await this.$store.dispatch('createTask', {
            title: this.title,
            description: this.description,
            due_date: this.due_date,
            status: this.status,
          });
          alert('Tâche créée avec succès !');
          this.$router.push('/tasks-list'); // Redirection vers la liste des tâches
        } catch (error) {
          console.error(error);
          alert('Erreur lors de la création de la tâche.');
        }
      },
      cancel() {
        this.$router.push('/tasks-list'); // Redirection vers la liste des tâches si l'utilisateur annule
      }
    }
  };
  </script>
  