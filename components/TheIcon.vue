<template>
  <component
    :is="Component"
    :size="size"
    :color="color"
    :stroke-width="strokeWidth"
    :default-class="defaultClass"
  />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: Number,
  color: String,
  strokeWidth: Number,
  defaultClass: String,
})
const Component = defineAsyncComponent(async () => {
  const icon = await import('lucide-vue-next');
  if (icon && props.name) {
    return icon[props.name]
  }
  return icon;
});
</script>