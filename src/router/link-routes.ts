

export interface RouterLink {
    name: string;
    path: string;
    title: string;
}


export const routerLinks: RouterLink[] = [
    {
        path: '/dashboard', name: 'dashboard', title: 'Dashboard'
    },
    {
        path: '/games', name: 'games', title: 'Juegos'
    }
];