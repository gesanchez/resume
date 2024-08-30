<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton>
        <slot></slot>
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
      >
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }" v-for="option in options">
            <button
              @click="$emit('click', option)"
              :class="[
                active ? 'bg-secondary text-white' : 'text-primary',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
              ]"
            >
            <TheIcon v-if="option.icon" :name="option.icon" class="mr-2 h-5 w-5"/>
            {{ option.label }}
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import type { PropType } from "vue";
defineOptions({
  inheritAttrs: false
});
const props = defineProps({
  options: {
    type: Array as PropType<
      Array<{ label: string; icon?: string; value?: any }>
    >,
    required: true,
  },
});
</script>
