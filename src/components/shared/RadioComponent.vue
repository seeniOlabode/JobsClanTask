<template>
  <div>
    <label
      v-for="radio in radios"
      :key="radio.title + radio.price"
      :for="radio.title + radio.listName + radio.price"
      class="rounded-lg border-multi-lightgray border flex items-center px-4 cursor-pointer hover:border-multi-purple"
      :class="{ selected: pickedPlan === radio.title }"
    >
      <img :src="radio.image" alt="" />
      <div class="ml-4">
        <h3 class="font-medium text-multi-denim text-lg">{{ radio.title }}</h3>
        <p class="text-multi-gray font-normal text-sm">
          N{{ radio.price }}/{{ paymentBasis }}
        </p>
      </div>
      <input
        type="radio"
        :id="radio.title + radio.listName + radio.price"
        class="radio-element"
        name="plan"
        v-model="pickedPlan"
        :value="radio.title"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioComponent",
  emits: ["plan"],
  data() {
    return {
      radios: [
        {
          title: "Arcade",
          image: require("@/assets/images/icon-arcade.svg"),
          price: 19,
        },
        {
          title: "Advanced",
          image: require("@/assets/images/icon-advanced.svg"),
          price: 12,
        },
        {
          title: "Pro",
          image: require("@/assets/images/icon-pro.svg"),
          price: 15,
        },
      ],
      pickedPlan: "",
    };
  },
  watch: {
    pickedPlan() {
      this.$emit("plan", this.pickedPlan);
    },
  },
  props: {
    yearly: {
      type: Boolean,
    },
  },
  computed: {
    paymentBasis() {
      return this.yearly ? "yr" : "mo";
    },
  },
  // mounted() {
  //   let plan = this.store.tabs.get("2").data.plan;
  //   if (plan.length > 1) {
  //     this.pickedPlan = plan;
  //   }
  // },
};
</script>

<style scoped>
.radio-element {
  opacity: 0;
  width: 0;
  height: 0;
}

label {
  min-height: 77px;
}

label:not(:first-child) {
  margin-top: 24px;
}

label.selected {
  @apply border-multi-purple bg-multi-very-lightgray;
}
</style>
