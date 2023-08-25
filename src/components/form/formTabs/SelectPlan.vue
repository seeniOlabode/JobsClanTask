<template>
  <div class="form-modal">
    <h2 class="font-bold text-xl text-multi-denim">Select your plan</h2>
    <p
      class="text-multi-gray font-normal mt-2 text-base"
      style="line-height: 25px"
    >
      You have the option of monthly or yearly billing.
    </p>

    <form class="mt-6">
      <radio-component @plan="setPlan" :yearly="formData.yearly" />
      <toggle-component
        :yearly="formData.yearly"
        @toggle-plan="() => (formData.yearly = !formData.yearly)"
        class="mt-6"
      />
    </form>
  </div>
</template>

<script>
import RadioComponent from "@/components/shared/RadioComponent.vue";
import ToggleComponent from "@/components/shared/ToggleComponent.vue";

import { Plan } from "@/models";

export default {
  name: "SelectPlan",
  components: {
    RadioComponent,
    ToggleComponent,
  },
  data() {
    return {
      plan: "",
      formData: new Plan(),
    };
  },
  methods: {
    setPlan(input) {
      this.formData.plan = input;
      this.plan = input;
    },
  },
  computed: {
    formComplete() {
      return this.formData.plan != "";
    },
  },
  watch: {
    formComplete(value) {
      this.formData.complete = value;
      this.$store.commit("storeFormData", {
        tab: 2,
        data: this.formData,
      });
    },
  },
};
</script>
