<template>
  <div class="form-modal">
    <h2 class="font-bold text-xl text-multi-denim">Finishing Up</h2>
    <p
      class="text-multi-gray font-normal mt-2 text-base"
      style="line-height: 25px"
    >
      Double-check everything looks OK before confirming.
    </p>

    <div class="mt-6">
      <div class="details-container bg-multi-very-lightgray p-4 rounded-lg">
        <div
          class="detail flex justify-between items-center pb-3 border-b border-multi-gray border-opacity-20"
        >
          <div>
            <h6 class="text-multi-denim font-medium text-base">
              {{ finishedData.plan.name }}
            </h6>
            <button class="underline text-xs text-multi-gray">Change</button>
          </div>
          <p class="text-multi-denim font-bold">
            {{ finishedData.plan.price }}
          </p>
        </div>

        <ul class="pt-3 flex flex-col gap-3">
          <li class="flex justify-between items-center">
            <div class="text-multi-gray">Online Service</div>
            <p class="text-multi-denim font-normal text-sm">+$1/mo</p>
          </li>
          <li class="flex justify-between items-center">
            <div class="text-multi-gray">Larger Storage</div>
            <p class="text-multi-denim font-normal text-sm">+$2/mo</p>
          </li>
        </ul>
      </div>
      <div class="flex justify-between px-4 mt-6 items-center">
        <p class="text-multi-gray font-normal">Total (per month)</p>
        <p class="text-multi-purple font-bold text-lg">+$12/mo</p>
      </div>
    </div>
  </div>
</template>

<script>
import { multiForm } from "@/App.vue";

export default {
  name: "FinishUp",
  data() {
    return {
      store: multiForm,
    };
  },
  computed: {
    finishedData() {
      const data = {
        plan: {},
      };

      data.plan = this.$store.getters.getPlan;
      return data;
    },
  },
};
</script>
