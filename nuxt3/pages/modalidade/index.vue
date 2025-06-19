<template>
  <nuxt-layout name="site">
    <div v-if="modalidade">
      <h2 class="text-h4">{{ modalidade.name }}</h2>
      <br />
      <nuxt-page :modalidade="modalidade" />
    </div>
  </nuxt-layout>
</template>

<script setup>
import contests from "@/contests.json";
const route = useRoute();

const modalidade = computed(() => {
  if (!route.params.id) return null;
  if (typeof contests[route.params.id] == "undefined") {
    return null;
  }
  return contests[route.params.id];
});
</script>
