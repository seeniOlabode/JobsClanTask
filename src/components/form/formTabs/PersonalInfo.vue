<template>
  <div class="form-modal">
    <h2 class="font-bold text-xl text-multi-denim">Personal Info</h2>
    <p
      class="text-multi-gray font-normal mt-2 text-base"
      style="line-height: 25px"
    >
      Please provide your name, email address, and phone number.
    </p>

    <form class="mt-6">
      <input-component-vue
        title="Name"
        type="text"
        placeholder="e.g. Stephen King"
        v-model="formData.name"
        ref="name"
        :validationCallback="validation.name"
        @validation-change="(value) => (formValid.name = value)"
      />
      <input-component-vue
        class="mt-6"
        title="Email"
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        v-model="formData.email"
        ref="email"
        :validationCallback="validation.email"
        @validation-change="(value) => (formValid.email = value)"
      />
      <input-component-vue
        class="mt-6"
        title="Phone Number"
        type="tel"
        placeholder="e.g. +1 234 567 890"
        v-model="formData.phone"
        ref="phone"
        :validationCallback="validation.phone"
        @validation-change="(value) => (formValid.phone = value)"
      />
    </form>
  </div>
</template>

<script>
import InputComponentVue from "@/components/shared/InputComponent.vue";

import { PersonalInfo } from "@/models";

import {
  ValidateEmail,
  ValidateName,
  ValidatePhoneNumber,
} from "@/helpers/validation";

export default {
  name: "PersonalInfo",
  components: { InputComponentVue },
  data() {
    return {
      validation: {
        email: ValidateEmail,
        name: ValidateName,
        phone: ValidatePhoneNumber,
      },
      formData: new PersonalInfo(),
      formValid: {
        email: false,
        name: false,
        phone: false,
      },
    };
  },
  computed: {
    formComplete() {
      return (
        this.formValid.email && this.formValid.name && this.formValid.phone
      );
    },
  },
  watch: {
    formComplete(value) {
      this.formData.complete = value;
      this.$store.commit("storeFormData", {
        tab: 1,
        data: this.formData,
      });
    },
  },
};
</script>

<style scoped>
:global(.form-modal) {
  @apply bg-white mx-4 rounded-md py-8 px-6 shadow;
}
</style>
