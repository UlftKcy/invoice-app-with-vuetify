<template>
  <v-container fluid class="px-10">
    <v-form
      @submit.prevent="saveInvoice"
      ref="form"
      v-model="valid"
      lazy-validation
    >
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
        :counter="30"
        :rules="nameRules"
        label="Customer Name"
        required
      ></v-text-field>
      <v-text-field
        prepend-icon="mdi-currency-usd"
        v-model="price"
        label="Price"
        :rules="priceRules"
      ></v-text-field>

      <v-radio-group :rules="statusRules" v-model="status" row>
        <v-col cols="12" md="6">
          <v-radio label="Pending" value="Pending" color="warning"></v-radio>
        </v-col>
        <v-col cols="12" md="6">
          <v-radio label="Paid" value="Paid" color="success"></v-radio>
        </v-col>
      </v-radio-group>

      <div class="d-flex flex-wrap justify-start justify-sm-end">
        <v-btn color="error" class="mr-4 mb-2" @click="reset"> Clear </v-btn>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4 mb-2"
          type="submit"
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
    price: "",
    status: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 30) || "Name must be less than 30 characters",
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
    saveInvoice() {
      const newInvoice = {
        invoice_number: Math.floor(Math.random() * 100000),
        date: this.date,
        customer_name: this.name,
        price: this.price,
        status: this.status,
      };
      this.$store.dispatch("saveInvoice", newInvoice);
      this.$refs.form.reset();
    },
  },
};
</script>
