<template>
  <div>
    <v-row>
      <v-col cols="2">
        <!-- <v-list>
          <template v-for="o in contests">
            <v-list-item
              :to="`/modalidade/${o.id}`"
              :text="o.name"
            />
          </template>
        </v-list> -->

        <div class="flex flex-col py-6">
          <div
            class="px-3 pb-5 text-xs font-semibold uppercase tracking-[0.05em] text-body/60"
          >
            Loterias
          </div>
          <template v-for="o in contests">
            <div>
              <nuxt-link
                title="Dashboard"
                :to="`/modalidade/${o.id}`"
                class="group flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-sm text-start focus:text-accent hover:bg-gray-100 font-medium !text-accent-hover bg-accent/10 hover:!bg-accent/10"
                :style="`color: ${o.color};`"
              >
                <span class="transition text-accent-hover">
                  <v-icon
                    icon="mdi:clover"
                    :color="o.color"
                  />
                </span>
                <span class="">
                  {{ o.name }}
                </span>
              </nuxt-link>
            </div>
          </template>
        </div>
      </v-col>

      <v-col cols="10">
        <nuxt-page
          v-if="
            route.params.id && typeof contests[route.params.id] != 'undefined'
          "
          :modalidade="contests[route.params.id]"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import contests from "@/contests.json";
const route = useRoute();
</script>
