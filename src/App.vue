<template>
  <v-app>
    <v-container>
      <AppBar />
      <NavigationDrawer/>
      <v-main>
        <InvoiceItems/>
      </v-main>
    </v-container>
  </v-app>
</template>
<script>
import AppBar from "./components/AppBar.vue";
import InvoiceItems from "./components/InvoiceItems.vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";

export default {
  name: "App",
  components: {
    AppBar,
    InvoiceItems,
    NavigationDrawer
  },
};
</script>