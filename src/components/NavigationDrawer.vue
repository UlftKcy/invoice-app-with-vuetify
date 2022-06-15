<template>
  <v-navigation-drawer app v-model="drawer" width="30vw">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6 pl-6">
          New Invoice
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <InvoiceForm />
  </v-navigation-drawer>
</template>
<script>
import InvoiceForm from "./InvoiceForm.vue";
export default {
  name: "NavigationDrawer",
  components: {
    InvoiceForm,
  },
  computed: {
    drawer: {
      get() {
        return this.$store.getters.showDrawer;
      },
      set(newValue) {
        return newValue;
      },
    },
  },
};
</script>
