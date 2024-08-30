<template>
  <header class="bg-white">
    <nav class="mx-auto flex items-center justify-between p-6" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">GS</span>
          <NuxtImg class="h-20 w-auto" src="/images/logo.svg" alt="logo"/>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <NuxtLink class="text-sm font-semibold leading-6 hover:underline hover:underline-offset-8 hover:decoration-secondary hover:bg-gray-50" :to="localePath('/')">{{ $t('home') }}</NuxtLink>
        <NuxtLink class="text-sm font-semibold leading-6 hover:underline hover:underline-offset-8 hover:decoration-secondary hover:bg-gray-50" :to="localePath('skills')">{{ $t('skills') }}</NuxtLink>
        <NuxtLink class="text-sm font-semibold leading-6 hover:underline hover:underline-offset-8 hover:decoration-secondary" :to="localePath('works')">{{ $t('workExperience') }}</NuxtLink>
        <a href="#" class="text-sm font-semibold leading-6 hover:underline hover:underline-offset-8 hover:decoration-secondary">{{ $t('projects') }}</a>
        <NuxtLink class="text-sm font-semibold leading-6 hover:underline hover:underline-offset-8 hover:decoration-secondary" :to="localePath('getInTouch')">{{ $t('getInTouch') }}</NuxtLink>
        <TheDropDown class="leading-6" :options="languages" @click="onChangeLanguage">
          <a href="#" class="text-sm font-semibold leading-6 hover:underline hover:underline-offset-8 hover:decoration-secondary">{{ $t('language') }}</a>
        </TheDropDown>
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div class="lg:hidden" role="dialog" aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-10"></div>
      <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">GS</span>
            <NuxtImg class="h-20 w-auto" src="/images/logo.svg" alt="logo"/>
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <NuxtLink class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" :to="localePath('/')">{{ $t('home') }}</NuxtLink>
              <NuxtLink class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" :to="localePath('skills')">{{ $t('skills') }}</NuxtLink>
              <NuxtLink class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" :to="localePath('works')">{{ $t('workExperience') }}</NuxtLink>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ $t('projects') }}</a>
              <NuxtLink class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" :to="localePath('getInTouch')">{{ $t('getInTouch') }}</NuxtLink>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" v-for="locale in availableLocales" :key="locale.code" @click.prevent.stop="setLocale(locale.code)">
                {{ locale.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';

const { locale, locales, setLocale, t } = useI18n();
const localePath = useLocalePath();
const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
});
const languages = computed(() => {
  return locales.value.map((element) => ({
    label: t(element.code),
    value: element.code,
    icon: element.code === locale.value ? 'Check' : ''
  }));
});
const onChangeLanguage = (option) => {
  setLocale(option.value)
};
</script>