<template>
  <div class="bg-multi-bg relative">
    <side-bar @change-tab="changeTab" />
    <form-section @change-tab="changeTab" />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import FormSection from "@/components/form/FormSection.vue";

export default {
  name: "App",
  components: { SideBar, FormSection },
  provide() {
    return {
      getDisplayedTabId: () => {
        return this.displayedTabId;
      },
    };
  },
  data() {
    return {
      displayedTabId: 1,
    };
  },
  watch: {
    displayedTabId(value) {
      this.$store.commit("updateDisplayedTab", value);
    },
  },
  computed: {
    currentTab() {
      return this.$store.getters.getCurrentTab;
    },
  },
  methods: {
    nextTab() {
      this.displayedTabId++;
    },
    previousTab() {
      this.displayedTabId--;
    },
    switchToTab(index) {
      this.displayedTabId = index;
    },
    changeTab(val) {
      if (val > this.displayedTabId && !this.currentTab.complete) {
        return null;
      }
      switch (val) {
        case "-":
          this.previousTab();
          break;
        case "+":
          this.nextTab();
          break;
        default:
          this.switchToTab(val);
          break;
      }
    },
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply bg-multi-bg;
}

#app > div {
  min-height: 100vh;
}
</style>
