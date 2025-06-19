<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        md="5"
      >
        <template v-for="t in modalidade.value.tables">
          <table class="mb-4">
            <caption class="text-h6 text-left pa-2">
              {{
                t.name
              }}
            </caption>
            <tbody>
              <template v-for="cols in t.data">
                <tr>
                  <template v-for="n in cols">
                    <td class="pa-1">
                      <lotto-number
                        :text="n"
                        :color="props.modalidade.color"
                        :selected="contest.value.numbers.includes(n)"
                        class="mx-auto"
                      />
                    </td>
                  </template>
                </tr>
              </template>
            </tbody>
          </table>
        </template>
      </v-col>
      <v-col
        cols="12"
        md="7"
      >
        <v-data-table-virtual
          class="border elevation-10"
          :fixed-header="true"
          :disable-sort="true"
          select-strategy="single"
          height="calc(100vh - 78px)"
          :items="modalidade.value.contests"
          :headers="[
            { title: 'Sorteio', key: 'contest', width: 0 },
            { title: 'Data', key: 'date', width: 100 },
            { title: 'Números', key: 'numbers' },
          ]"
        >
          <template #item.contest="scope">
            <a
              href="javascript:void(0);"
              @click="contest.set(scope.item)"
            >
              {{ scope.item.contest }}
            </a>
          </template>
          <template #item.date="scope">
            <div style="width: 100px">
              {{ scope.item.date }}
            </div>
          </template>
          <template #item.numbers="scope">
            <div class="flex gap-2">
              <template v-for="n in scope.item.numbers">
                <lotto-number
                  :text="n"
                  :selected="true"
                  :color="props.modalidade.color"
                />
              </template>
            </div>
          </template>
        </v-data-table-virtual>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const props = defineProps({
  modalidade: { type: Object, deault: () => ({}) },
});

const modalidade = reactive({
  value: null,
  set(value) {
    modalidade.value = JSON.parse(JSON.stringify(value));
    modalidade.value.contests = modalidade.value.contests.reverse();
  },
});

modalidade.set(props.modalidade);

const contest = reactive({
  value: null,
  set(value) {
    contest.value = value;
  },
});

contest.set(props.modalidade.contests[0]);

import Base from "@/loto-algorithms/Base.js";
const algorithms = await Base.all(modalidade.value);
</script>
