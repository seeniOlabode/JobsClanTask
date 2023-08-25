<template>
  <div
    class="bg-multi-very-lightgray rounded-lg py-4 flex justify-center items-center gap-6 text-multi-gray"
  >
    <span class="font-medium" :class="{ 'text-multi-denim': !yearly }"
      >Monthly</span
    >
    <label class="switch">
      <input type="checkbox" :value="yearly" @change="$emit('toggle-plan')" />
      <span class="slider round"></span>
    </label>
    <span class="font-medium" :class="{ 'text-multi-denim': yearly }"
      >Yearly</span
    >
  </div>
</template>

<script>
export default {
  name: "ToggleComponent",
  emits: ["toggle-plan"],
  props: {
    yearly: {
      type: Boolean,
    },
  },
  methods: {},
};
</script>

<style>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 38px;
  height: 20px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #022959;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 12px;
  width: 12px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider:before {
  -webkit-transform: translateX(17px);
  -ms-transform: translateX(17px);
  transform: translateX(17px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
