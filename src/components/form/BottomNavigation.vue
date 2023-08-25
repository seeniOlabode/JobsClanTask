<template>
  <nav class="bg-white shadow">
    <div class="p-4 button-holder">
      <action-button-vue
        v-if="displayedTabId != 1"
        type="secondary"
        @click="$emit('change-tab', '-')"
        >Go Back</action-button-vue
      >
      <action-button-vue
        v-if="displayedTabId != 4"
        type="primary"
        class="end-button"
        @click="$emit('change-tab', '+')"
        >Next Step</action-button-vue
      >
      <action-button-vue v-else type="special" class="end-button"
        >Confirm</action-button-vue
      >
    </div>
  </nav>
</template>

<script>
import ActionButtonVue from "../shared/ActionButton.vue";

export default {
  name: "BottomNavigation",
  emits: ["change-tab"],
  inject: ["getDisplayedTabId"],
  components: { ActionButtonVue },
  data() {
    return {};
  },
  computed: {
    displayedTabId() {
      return this.getDisplayedTabId();
    },
  },
};
</script>

<style scoped>
.button-holder {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
}

.end-button {
  grid-column-start: 2;
}
</style>
