<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/shared/components/NavBarView.vue'
import { routerLinks } from '@/router/link-routes';
</script>

<template>
  <header>
    <NavBar  :routerLinks="routerLinks"/>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

</style>
