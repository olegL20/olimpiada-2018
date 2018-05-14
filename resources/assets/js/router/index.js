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
    {
        path: '/confirmation/:id',
        name: 'auth.confirmation',
        component: () => import('../pages/auth/EmailConfirmation.vue'),
        meta: {
            guest: true,
        },
    },
    {
        path: '/room',
        name: 'user.room',
        component: () => import('../pages/Room.vue'),
        meta: {
            auth: true,
            user: true,
        },
    },
    {
        path: '/invite/:id',
        name: 'auth.invite',
        component: () => import('../pages/Auth/RegisterInvite.vue'),
        meta: {
            guest: true,
        },
    },
    {
        path: '/admin/home',
        name: 'admin.home',
        component: () => import('../pages/admin/Home.vue'),
        meta: {
            auth: true,
            uniAdmin: true,
            globalAdmin: true,
        },
    },
    {
        path: '/admin/university',
        name: 'admin.university',
        component: () => import('../pages/admin/University.vue'),
        meta: {
            auth: true,
            uniAdmin: true,
        },
    },
    {
        path: '/admin/university/admins',
        name: 'admin.university.admins',
        component: () => import('../pages/admin/UniversityAdmins.vue'),
        meta: {
            auth: true,
            globalAdmin: true,
        },
    },
    {
        path: '/admin/coefficients',
        name: 'admin.coefficients',
        component: () => import('../pages/admin/Coefficients.vue'),
        meta: {
            auth: true,
            uniAdmin: true,
        },
    },
    {
        path: '/admin/tests',
        name: 'admin.tests',
        component: () => import('../pages/admin/tests/Tests.vue'),
        meta: {
            auth: true,
            uniAdmin: true,
        },
    },
    {
        path: '/admin/questions',
        name: 'admin.questions',
        component: () => import('../pages/admin/tests/Questions.vue'),
        meta: {
            auth: true,
            uniAdmin: true,
        },
    },
    {
        path: '/admin/answers',
        name: 'admin.answers',
        component: () => import('../pages/admin/tests/Answers.vue'),
        meta: {
            auth: true,
            uniAdmin: true,
        },
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
        next({
            name: 'auth.login',
            query: {
                redirect: to.fullPath,
            },
        });
    } else if (to.matched.some(record => record.meta.guest) && store.getters['user/logged']) {
        next({
            name: 'home',
        });
    } else if (to.matched.some(record => record.meta.uniAdmin) && store.getters['user/role'] === 'user') {
        next({
            name: 'home',
        });
    } else if (to.matched.some(record => record.meta.globalAdmin) && store.getters['user/role'] === 'user') {
        next({
            name: 'home',
        });
    } else {
        next();
    }
});

sync(store, router);

export default router;
