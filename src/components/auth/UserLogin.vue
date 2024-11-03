<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 class="text-2xl font-semibold text-center mb-6">Connexion</h1>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              v-model="email"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              id="email"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input
              type="password"
              v-model="password"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              id="password"
            />
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  </template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('http://localhost:8000/api/login', {
                    email: this.email,
                    password: this.password,
                });
                localStorage.setItem('token', response.data.token);
                alert('Connexion réussie !');
                this.$router.push('/tasks-list');
            } catch (error) {
                console.error(error);
                alert('Erreur lors de la connexion.');
            }
        },
    },
};
</script>
