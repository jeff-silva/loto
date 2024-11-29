<template>
  <div>
    <v-table class="border">
      <colgroup>
        <col width="20px" />
        <col width="200px" />
        <col width="*" />
      </colgroup>
      <thead>
        <tr>
          <th>Sorteio</th>
          <th>Data</th>
          <th>Números</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="o in modalidade.contests">
          <tr>
            <td>{{ o.contest }}</td>
            <td>{{ o.date }}</td>
            <td>{{ o.numbers.join(", ") }}</td>
          </tr>
        </template>
      </tbody>
    </v-table>
    <!-- <pre>{{ modalidade }}</pre> -->
  </div>
</template>

<script setup>
const props = defineProps({
  modalidade: { type: Object, deault: () => ({}) },
});
</script>
