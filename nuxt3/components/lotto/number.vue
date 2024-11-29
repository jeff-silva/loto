<template>
  <a
    href="javascript:void(0);"
    class="text-sm p-3 font-mono rounded-full"
    :style="[
      `border: solid 1px ${props.color};`,
      props.selected ? `color: #fff;` : `color: ${props.color};`,
      props.selected ? `background: ${props.color};` : null,
    ]"
  >
    {{ props.text }}
  </a>
</template>

<script setup>
const props = defineProps({
  text: { type: [Number, String], default: null },
  color: { type: [String], default: "#00FF00" },
  selected: { type: [Boolean], default: false },
});
</script>
