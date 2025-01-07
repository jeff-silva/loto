<template>
  <nuxt-layout name="site">
    <div v-if="modalidade">
      <h2 class="text-h4">{{ modalidade.name }}</h2>
      <br />
      <nuxt-page :modalidade="modalidade" />
    </div>
  </nuxt-layout>
  <!-- <div>
    <v-app-layout>
      <template #default="scope">
        <nuxt-page
          v-if="modalidade"
          :modalidade="modalidade"
        />
      </template>

      <template
        #header="scope"
        v-if="modalidade"
      >
        <div class="text-h4">{{ modalidade.name }}</div>
        <v-spacer />
        <v-dialog
          v-if="modalidade.tutorials.length > 0"
          max-width="700"
          scrollable
        >
          <template #activator="scope">
            <v-btn
              text="Como Jogar?"
              v-bind="scope.props"
            />
          </template>

          <template #default="scope">
            <v-card>
              <v-card-text class="pa-0">
                <template v-for="o in modalidade.tutorials">
                  <iframe
                    :src="o.embed_url"
                    style="border: none; width: 100%; height: 400px"
                  ></iframe>
                </template>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text="Fechar"
                  @click="scope.isActive.value = false"
                />
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </template>

      <template #drawer="scope">
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
      </template>
    </v-app-layout>
  </div> -->
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
