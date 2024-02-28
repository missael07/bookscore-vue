
<template>
  <nav>
    <template v-if="!$props.isSecondary">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
      <span v-if="$props.title">{{ $props.title }}</span>
    </template>
    <RouterLink :to="{ name: route.name }" v-for="route in routerLinks" :key="route.name"> {{  route.title }}</RouterLink>
  </nav>
</template>

<script setup lang="ts">

import type { RouterLink } from '@/router/link-routes';

interface Props {
  title?: string;
  routerLinks: RouterLink[];
  isSecondary?: boolean
}

 const props = withDefaults(defineProps<Props>(), {
  title: 'Book Score',
  isSecondary: false
  
 });

</script>

<style scoped>
nav {
    align-items: flex-start;
    display: flex;
    font-size: 12px;
    margin-top: 10px;
    text-align: center;
    width: 100%;
}

img {
    margin-right: 5px;
}

span {
    margin-right: 10px;
}

a {
   margin-right: 5px; 
}

nav a.router-link-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}</style>
