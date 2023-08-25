<template>
  <div class="form-modal">
    <h2 class="font-bold text-xl text-multi-denim">Pick add-ons</h2>
    <p
      class="text-multi-gray font-normal mt-2 text-base"
      style="line-height: 25px"
    >
      Add-ons help enhance your gaming experience.
    </p>

    <form class="mt-6">
      <checkbox-set @add-on="update" />
    </form>
  </div>
</template>

<script>
import CheckboxSet from "@/components/shared/CheckboxSet.vue";

import { AddOns } from "@/models";

export default {
  name: "AddOns",
  components: { CheckboxSet },
  data() {
    return {
      formData: new AddOns(),
    };
  },
  methods: {
    update(input) {
      this.formData[input.name] = input.value;
      this.$store.commit("storeFormData", {
        tab: 3,
        data: this.formData,
      });
    },
  },
};
</script>
