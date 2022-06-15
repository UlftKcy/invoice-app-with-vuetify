<template>
  <v-data-table
    :headers="headers"
    :items="invoices"
    :sort-by="['price', 'date']"
    :sort-desc="[false, true]"
    multi-sort
    class="elevation-1"
  >
    <template v-slot:[`item.status`]="{ item }">
      <v-chip :color="getColor(item.status)" dark>
        {{ item.status }}
      </v-chip>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "InvoiceItems",
  data() {
    return {};
  },
  computed: {
    invoices() {
      return this.$store.state.invoices;
    },
    headers() {
      return this.$store.state.headers;
    },
  },
  methods: {
    getColor(status) {
      if (status === "Paid") return "green";
      else return "orange";
    },
  },
};
</script>
