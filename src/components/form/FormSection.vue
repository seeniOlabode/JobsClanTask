<template>
  <section
    class="w-full absolute bottom-0 top-0 left-0 right-0 z-10 mt-28 flex flex-col"
  >
    <personal-info-vue v-if="displayedTab == 1" />
    <select-plan-vue v-if="displayedTab == 2" />
    <add-ons v-if="displayedTab == 3" />
    <finish-up v-if="displayedTab == 4" />
    <bottom-navigation-vue
      class="mt-auto"
      @change-tab="(val) => $emit('change-tab', val)"
    />
  </section>
</template>

<script>
import BottomNavigationVue from "./BottomNavigation.vue";
import PersonalInfoVue from "./formTabs/PersonalInfo.vue";
import SelectPlanVue from "./formTabs/SelectPlan.vue";
import AddOns from "./formTabs/AddOns.vue";
import FinishUp from "./formTabs/FinishUp.vue";

export default {
  name: "FormSection",
  emits: ["change-tab"],
  components: {
    BottomNavigationVue,
    PersonalInfoVue,
    SelectPlanVue,
    AddOns,
    FinishUp,
  },
  inject: ["getDisplayedTabId"],
  computed: {
    displayedTab() {
      return this.getDisplayedTabId();
    },
  },
};
</script>
