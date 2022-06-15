<template>
  <v-container fluid class="px-10">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Date"
            prepend-icon="mdi-calendar"
            :rules="dateRules"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(date)">
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-text-field
        v-model="name"
        prepend-icon="mdi-account"
        :counter="100"
        :rules="nameRules"
        label="Customer Name"
        required
      ></v-text-field>
      <v-text-field
        prepend-icon="mdi-currency-usd"
        value=""
        label="Price"
        :rules="priceRules"
      ></v-text-field>

      <v-radio-group :rules="statusRules" row>
        <v-col cols="12" md="6" lg="4">
          <v-radio label="Pending" value="pending" color="warning"></v-radio>
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <v-radio label="Paid" value="paid" color="success"></v-radio>
        </v-col>
      </v-radio-group>

      <div class="d-flex justify-end">
        <v-btn color="error" class="mr-4" @click="reset"> Clear </v-btn>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Create Invoice
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "InvoiceForm",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    dateRules: [(v) => !!v || "Date is required"],
    menu: false,
    priceRules: [(v) => !!v || "Price is required"],
    statusRules: [(v) => !!v || "Status is required"],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
