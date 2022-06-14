<template>
  <v-app>
    <v-container>
      <AppBar />
      <v-main>
        <InvoiceItems/>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import InvoiceItems from "./components/InvoiceItems.vue";

export default {
  name: "App",

  components: {
    AppBar,
    InvoiceItems,
  },

  data: () => ({
    //
  }),
};
</script>