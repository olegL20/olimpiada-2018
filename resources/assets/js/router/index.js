import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';

import store from '../store';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/Home.vue'),
    },
    // {
    //     path: '/confirmation/:id',
    //     name: 'auth.confirmation',
    //     component: () => import('../pages/auth/EmailConfirmation.vue'),
    //     meta: {
    //         guest: true,
    //     },
    // },
    {
        path: '/room',
        name: 'user.room',
        component: () => import('../pages/Room.vue'),
    },
    {
        path: '/invite/:id',
        name: 'auth.invite',
        component: () => import('../pages/Auth/RegisterInvite.vue'),
    },
    {
        path: '/admin/login',
        name: 'admin.login',
        component: () => import('../pages/admin/Login.vue'),
    },

    /**
     * Must be the last entry in array.
     */
    {
        path: '*',
        component: () => import('../pages/NotFound.vue'),
    },
];

const router = new VueRouter({
    routes,
    mode: 'history',
    saveScrollPosition: false,
    linkActiveClass: 'active',
    scrollBehavior() {
        return {
            x: 0,
            y: 0,
        };
    },
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth) && !store.getters['user/logged']) {
        /**
         * If the user is not authenticated and visits
         * a page that requires authentication, redirect to the login page
         */
        next({
            name: 'auth.login',
            query: {
                redirect: to.fullPath,
            },
        });
    } else if (to.matched.some(record => record.meta.guest) && store.getters['user/logged']) {
        /**
         * If the user is authenticated and visits
         * an guest page, redirect to the homepage
         */
        next({
            name: 'home',
        });
    } else {
        next();
    }
});

sync(store, router);

export default router;
