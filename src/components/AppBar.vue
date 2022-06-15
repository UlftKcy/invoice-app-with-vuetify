<template>
    <v-app-bar app dark class="blue-grey darken-4 white--text mx-auto">
      <v-toolbar-title>
        <span class="headline">Invoices &nbsp;</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn rounded depressed color="purple" @click="showDrawer">
      <v-icon>mdi-plus</v-icon>
        <span class="mr-2 text-capitalize font-weight-bold">New Invoice</span>
      </v-btn>
    </v-app-bar>
</template>

<script>

export default {
    name:"AppBar",

  methods:{
    showDrawer(){
      return this.$store.dispatch("showDrawer");
    }
  }
}
</script>