// src/store/index.js
import { createStore } from 'vuex';
import axios from 'axios';


const store = createStore({
    state() {
        return {
            user: null,
            tasks: [],
            token: localStorage.getItem('token') || null, // stocke le token d'authentification
        };
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        },
        logout(state) {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
        },
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        addTask(state, task) {
            state.tasks.push(task);
        },
        updateTask(state, updatedTask) {
            const index = state.tasks.findIndex(task => task.id === updatedTask.id);
            if (index !== -1) {
                state.tasks.splice(index, 1, updatedTask);
            }
        },
        deleteTask(state, taskId) {
            state.tasks = state.tasks.filter(task => task.id !== taskId);
        },
    },
    actions: {
        async login({ commit }, userData) {
            const response = await axios.post('http://localhost:8000/api/login', userData);
            commit('setUser', response.data.user);
            commit('setToken', response.data.token);
            localStorage.setItem('token', response.data.token);
        },
        async logout({ commit }) {
            await axios.post('http://localhost:8000/api/logout', {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            commit('logout');
        },
        async fetchTasks({ commit }) {
            try {
                const response = await axios.get('http://localhost:8000/api/tasks', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                    
                });
                
                commit('setTasks', response.data);
                console.log("okkkkk")
            } catch (error) {
                console.error('Erreur lors de la récupération des tâches:', error);
            }
        },
        async createTask({ commit }, taskData) {
            const response = await axios.post('http://localhost:8000/api/tasks', taskData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            commit('addTask', response.data);
        },
        async updateTask({ commit }, { id, taskData }) {
            const response = await axios.put(`http://localhost:8000/api/tasks/${id}`, taskData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            commit('updateTask', response.data);
        },
        async deleteTask({ commit }, taskId) {
            await axios.delete(`http://localhost:8000/api/tasks/${taskId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            commit('deleteTask', taskId);
        },
    },
});

export default store;
