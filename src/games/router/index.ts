import type { RouteRecordRaw } from "vue-router";

const ROUTE_NAME = 'games';

export const gamesRoutes: RouteRecordRaw = {
    path: `/${ROUTE_NAME}`,
    redirect: `/${ROUTE_NAME}/list`,
    name: 'games',
    component: () => import('@/games/layouts/GamesLayout.vue'),
    children: [
        {
            path: `/${ROUTE_NAME}/list`,
            name: 'games-list',
            component: () => import('@/games/pages/GameList.vue'),
            props: {
                title: 'Listado de Juegos'
            }
        },
        {
            path: `/${ROUTE_NAME}/create`,
            name: 'games-create',
            component: () => import('@/games/pages/CreateGame.vue'),
            props: {
                title: 'Empezar Juego'
            }
        }
    ]
}