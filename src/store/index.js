import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    invoices: [
      {
        invoice_number: "#342343241",
        date: "14/06/2022",
        customer_name: "Ali Veli",
        price: 240,
        status: "Paid",
        "show detail": "",
      },
      {
        invoice_number: "#342343242",
        date: "15/06/2022",
        customer_name: "Ali Veli2",
        price: 5401,
        status: "Pending",
        "show detail": "",
      },
      {
        invoice_number: "#342343243",
        date: "16/06/2022",
        customer_name: "Ali Veli3",
        price: 5402,
        status: "Pending",
        "show detail": "",
      },
    ],
    headers: [
      {
        text: "Invoice Number",
        align: "start",
        sortable: false,
        value: "invoice_number",
      },
      { text: "Date", value: "date" },
      { text: "Customer Name", value: "customer_name" },
      { text: "Price", value: "price" },
      { text: "Status", value: "status" },
      { text: "", value: "show detail" },
    ],
    drawer:false,
  },
  getters: {
    showDrawer(state){
        return state.drawer;
    }
  },
  actions: {
    showDrawer({commit}){
        commit("showDrawer")
    }
  },
  mutations: {
    showDrawer(state){
        state.drawer = !state.drawer;
    }

  },
});
