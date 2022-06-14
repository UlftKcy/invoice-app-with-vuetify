import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    invoices: [
      {
        name: "#34234324",
        date: "14/06/2022",
        person: "Ali Veli",
        price: 240,
        status: "Paid",
        "show detail": "",
      },
      {
        name: "#34234324",
        date: "15/06/2022",
        person: "Ali Veli",
        price: 540,
        status: "Pending",
        "show detail": "",
      },
      {
        name: "#34234324",
        date: "16/06/2022",
        person: "Ali Veli",
        price: 540,
        status: "Draft",
        "show detail": "",
      },
    ],
    headers: [
      {
        text: "Invoice Number",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Date", value: "date" },
      { text: "Person", value: "person" },
      { text: "Price", value: "price" },
      { text: "Status", value: "status" },
      { text: "", value: "show detail" },
    ],
  },
  getters: {},
  actions: {},
  mutations: {},
});
