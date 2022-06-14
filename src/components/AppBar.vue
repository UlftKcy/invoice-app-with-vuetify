<template>
    <v-app-bar app dark class="blue-grey darken-4 white--text mx-auto">
      <v-toolbar-title>
        <span class="display-1">Invoices &nbsp;</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn rounded depressed color="purple">
      <v-icon>mdi-plus</v-icon>
        <span class="mr-2">New Invoice</span>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name:"AppBar"
}
</script>