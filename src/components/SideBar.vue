<template>
  <nav class="h-44 pt-8 absolute left-0 right-0">
    <ul class="flex justify-center gap-5">
      <li
        v-for="tab in tabs"
        :key="tab"
        @click="$emit('change-tab', tab)"
        :class="{ active: displayedTab == tab }"
      >
        <button class="multi-button">{{ tab }}</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "SideBar",
  emits: ["change-tab"],
  inject: ["getDisplayedTabId"],
  data() {
    return {
      tabs: [1, 2, 3, 4],
    };
  },
  computed: {
    displayedTab() {
      return this.getDisplayedTabId();
    },
  },
};
</script>

<style scoped>
nav {
  background: url("@/assets/images/bg-sidebar-mobile.svg") no-repeat;
  background-size: cover;
}

.multi-button {
  @apply rounded-full border border-solid h-12 aspect-square flex items-center justify-center text-white font-bold hover:opacity-90 hover:bg-multi-skyblue hover:bg-opacity-10;
}

li.active > .multi-button {
  @apply text-multi-denim bg-multi-skyblue border-none;
}
</style>
