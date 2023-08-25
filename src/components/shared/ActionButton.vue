<template>
  <button :class="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
button {
  @apply px-4 py-3 font-medium text-sm;
  min-width: 97px;
  text-align: center;
}

.secondary {
  @apply text-multi-gray;
}

.primary {
  @apply bg-multi-denim text-white rounded-md;
}

.special {
  @apply bg-multi-purple text-white rounded-md;
}
</style>
