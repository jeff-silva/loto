<template>
  <div>
    <v-row>
      <v-col cols="2">
        <v-list>
          <template v-for="o in contests">
            <v-list-item
              :to="`/modalidade/${o.id}`"
              :text="o.name"
            />
          </template>
        </v-list>
        <pre>{{ route.params.id }}</pre>
      </v-col>

      <v-col
        cols="10"
        v-if="route.params.id"
      >
        <nuxt-page :modalidade="contests[route.params.id]" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import contests from "@/contests.json";
const route = useRoute();
</script>
