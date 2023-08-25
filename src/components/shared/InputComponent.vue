<template>
  <div
    class="flex-col flex input-container"
    :class="{ error: !validation.pass }"
  >
    <label class="text-sm text-multi-denim">{{ title }}</label>
    <input
      @input="$emit('update:modelValue', $event.target.value)"
      class="mt-1"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
    />
    <span v-show="!validation.pass" class="error-message">{{
      validation.message
    }}</span>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  emits: ["validation-change"],
  props: {
    validationCallback: {
      type: Function,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  computed: {
    validation() {
      return this.validationCallback(this.modelValue);
    },
  },
  watch: {
    validation(value) {
      this.$emit("validation-change", value.pass);
    },
  },
};
</script>

<style scoped>
.input-container {
  position: relative;
}

input {
  border: solid 1px #d6d9e6;
  @apply rounded py-2 px-4 font-medium;
}

input:focus {
  outline: none;
  @apply border-multi-purple;
}

.error input {
  @apply border-multi-red-error;
}

.error .error-message {
  position: absolute;
  right: 0;
  @apply text-multi-red-error text-xs;
}
</style>
