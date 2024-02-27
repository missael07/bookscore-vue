

export interface RouterLink {
    name: string;
    path: string;
    title: string;
}


export const routerLinks: RouterLink[] = [
    {
        path: '/games', name: 'games', title: 'Juegos'
    }
];