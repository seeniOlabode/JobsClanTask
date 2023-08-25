import { createStore } from "vuex";

const tabs = {
  1: "personalInfo",
  2: "plan",
  3: "addOns",
  4: "finishUp",
};

const plans = {
  Arcade: {
    mo: 9,
    yr: 90,
  },
  Advanced: {
    mo: 12,
    yr: 120,
  },
  Pro: {
    mo: 15,
    yr: 150,
  },
};

const addons = {
  storage: {
    name: "Larger Storage",
    price: 2,
  },
  online: {
    name: "Online Service",
    price: 1,
  },
  custom: {
    name: "Customizable Profile",
    price: 2,
  },
};

export default createStore({
  state: {
    displayedTabId: 1,
    planYearly: false,
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      complete: false,
    },
    plan: {
      plan: "",
      yearly: false,
      complete: false,
    },
    addOns: {
      online: false,
      storage: false,
      custom: false,
      complete: true,
    },
    finishUp: {},
  },
  getters: {
    getCurrentTab(state) {
      let tabName = tabs[state.displayedTabId];
      return state[tabName];
    },
    getPlan(state) {
      const planData = {};
      const planForm = state.plan;
      const planString = planForm.yearly ? "Yearly" : "Monthly";
      const priceSlug = planForm.yearly ? "yr" : "mo";
      planData.name = `$${planForm.plan} (${planString})`;
      planData.price = `${plans[planForm.plan][priceSlug]}/${priceSlug}`;
      return planData;
    },
    getAddons(state) {
      const addonForm = state.addOns;
      const selectedAddons = [];
      for (const key in addonForm) {
        if (addonForm[key] && key != "complete") {
          let price = addons[key].price;
          let priceSlug = this.planYearly ? "yr" : "mo";
          selectedAddons.push({
            name: key,
            price: `$${state.planYearly ? price * 10 : price}/${priceSlug}`,
          });
        }
      }
      return selectedAddons;
    },
  },
  mutations: {
    updateDisplayedTab(state, payload) {
      state.displayedTabId = payload;
    },
    storeFormData(state, payload) {
      state[tabs[payload.tab]] = payload.data;
    },
  },
  actions: {},
  modules: {},
});
