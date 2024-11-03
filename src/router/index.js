import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
import UserRegister from '@/components/auth/UserRegister.vue';
import UserLogin from '@/components/auth/UserLogin.vue';
import TasksList from '@/components/tasks/TasksList.vue';
import NewTask from '@/components/tasks/NewTask.vue';
import EditTask from '@/components/tasks/EditTask.vue';
// import store from '@/store';

const routes = [
    // { path: '/', component: Home },
    { path: '/register', component: UserRegister },
    { path: '/login', component: UserLogin },
    { path: '/tasks-list', component: TasksList },
    { path: '/create-task', component: NewTask },
    {
        path: '/tasks/edit/:id',
        component: EditTask,
        props: true
      }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// router.beforeEach((to, from, next) => {
//     const loggedIn = store.state.isLoggedIn;
//     if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
//       next('/login');
//     } else {
//       next();
//     }
//   });

export default router;
