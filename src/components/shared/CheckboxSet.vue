<template>
  <ul>
    <li v-for="add in addOns" :key="add.title + add.desc">
      <label
        :for="add.title + add.desc"
        class="flex items-center border border-multi-lightgray px-4 rounded-lg outer-label cursor-pointer hover:border-multi-purple"
        :class="{ checked: add.value }"
      >
        <label
          :for="add.title + add.desc"
          class="check-box"
          :class="{ 'checked-label': add.value }"
        >
          <img src="@/assets/images/icon-checkmark.svg" alt="" />
          <input
            type="checkbox"
            v-model="add.value"
            :id="add.title + add.desc"
            @change="(e) => updateStore(add.id, e.target.checked)"
          />
        </label>
        <div class="ml-4">
          <h4 class="text-multi-denim text-lg font-medium">{{ add.title }}</h4>
          <p class="text-multi-gray font-normal text-sm">
            {{ add.desc }}
          </p>
        </div>
        <p class="ml-auto text-multi-purple">+${{ add.price.year }}/yr</p>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CheckboxSet",
  emits: ["add-on"],
  data() {
    return {
      addOns: [
        {
          title: "Online Service",
          desc: "Access to multiplayer games",
          id: "online",
          price: {
            year: 10,
          },
          value: false,
        },
        {
          title: "Larger Storage",
          desc: "Extra 1TB of cloud save",
          id: "storage",
          price: {
            year: 20,
          },
          value: false,
        },
        {
          title: "Customizable Profile",
          desc: "Custom theme on your profile",
          id: "custom",
          price: {
            year: 20,
          },
          value: false,
        },
      ],
    };
  },
  methods: {
    updateStore(name, value) {
      this.$emit("add-on", { name, value });
    },
  },
};
</script>

<style scoped>
.outer-label {
  min-height: 70px;
}

li:not(:first-child) {
  margin-top: 24px;
}

.check-box {
  @apply border aspect-square rounded border-multi-lightgray;
  height: 25px;
}

.check-box > input {
  opacity: 0;
  height: 0;
  width: 0;
  visibility: hidden;
  position: absolute;
}

.outer-label.checked {
  @apply border-multi-purple bg-multi-very-lightgray;
}

.checked-label {
  @apply bg-multi-purple flex items-center justify-center;
}
</style>
