<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 class="text-2xl font-semibold text-center mb-6">Inscription</h1>
        <form @submit.prevent="register">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Nom</label>
            <input type="text" v-model="name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" id="name" required />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" v-model="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" id="email" required />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input type="password" v-model="password" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" id="password" required />
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">S'inscrire</button>
        </form>
      </div>
    </div>
  </template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
        };
    },
    methods: {
        async register() {
            try {
                await axios.post('http://localhost:8000/api/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                });
                alert('Inscription réussie !');
                this.$router.push('/login');
            } catch (error) {
                console.error(error);
                alert('Erreur lors de l\'inscription.');
            }
        },
    },
};
</script>
