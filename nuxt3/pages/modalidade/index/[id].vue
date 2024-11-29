<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        md="5"
      >
        <v-table class="border">
          <tbody>
            <template v-for="cols in numbers">
              <tr>
                <template v-for="n in cols">
                  <td class="text-center">
                    <lotto-number
                      :text="n"
                      :color="modalidade.color"
                      :selected="contest.value.numbers.includes(n)"
                    />
                  </td>
                </template>
              </tr>
            </template>
          </tbody>
        </v-table>
        <!-- <pre>contest: {{ contest }}</pre> -->
        <pre>modalidade.contests.length: {{ modalidade.contests.length }}</pre>
      </v-col>
      <v-col
        cols="12"
        md="7"
      >
        <v-data-table-virtual
          class="border"
          :items="modalidade.contests"
          :disable-sort="true"
          :headers="[
            { title: 'Sorteio', key: 'contest', width: 0 },
            { title: 'Data', key: 'date', width: 150 },
            { title: 'Números', key: 'numbers' },
          ]"
          height="calc(100vh - 78px)"
        >
          <template #item.numbers="scope">
            <div class="flex gap-2">
              <template v-for="n in scope.item.numbers">
                <lotto-number
                  :text="n"
                  :selected="true"
                  :color="modalidade.color"
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

const numbers = computed(() => {
  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  return chunk(
    [...Array(props.modalidade.rangeFinal).keys()].map((n) =>
      (n + 1).toString().padStart(2, "0")
    ),
    props.modalidade.rangePerRow
  );
});

const contest = reactive({
  value: null,
  set(value) {
    contest.value = value;
  },
});

contest.set(props.modalidade.contests[0]);
</script>
