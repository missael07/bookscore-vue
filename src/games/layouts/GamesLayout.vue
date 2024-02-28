<template>
    <div>
        <NavBar :routerLinks="routeLinks" is-secondary/>
    </div>
    
    <RouterView  :isSecondary="true"/>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '@/shared/components/NavBarView.vue';
import type { RouterLink } from '@/router/link-routes';
import { gamesRoutes } from '@/games/router/index';

const routeLinks: RouterLink[] = gamesRoutes.children?.map( ({name, path, props}) => {
    return {
        name: name?.toString() ?? 'test',
        path: path,
        title: (props as {title: string}).title
    } 
}) || [];

</script>

<style scoped>

</style>