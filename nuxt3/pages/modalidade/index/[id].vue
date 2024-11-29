<template>
  <div>
    <div class="d-flex align-items-center justify-end pa-3">
      <div>
        <strong>{{ modalidade.name }}</strong>
      </div>
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
    </div>
    <!-- <pre>{{ modalidade }}</pre> -->

    <div style="width: 100%; max-height: 600px; overflow: auto">
      <v-table class="border">
        <colgroup>
          <col width="20px" />
          <col width="200px" />
          <template v-for="o in modalidade.drawnNumbers">
            <col width="0" />
          </template>
        </colgroup>
        <thead>
          <tr>
            <th>Sorteio</th>
            <th>Data</th>
            <template v-for="n in modalidade.drawnNumbers">
              <th>Nº{{ n }}</th>
            </template>
          </tr>
        </thead>
        <tbody>
          <template v-for="o in modalidade.contests">
            <tr>
              <td>{{ o.contest }}</td>
              <td>{{ o.date }}</td>
              <template v-for="n in o.numbers">
                <td>{{ n }}</td>
              </template>
            </tr>
          </template>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modalidade: { type: Object, deault: () => ({}) },
});
</script>
