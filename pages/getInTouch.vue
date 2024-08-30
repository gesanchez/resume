<template>
  <div
    class="container grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
  >
    <div class="p-6">
      <h1 class="text-5xl text-center">{{ $t("getInTouchT.title") }}</h1>
      <p class="text-lg mt-5">
        {{ $t("getInTouchT.subtitle") }}
      </p>
      <div class="flex mt-5">
        <TheIcon name="Mail" :color="'#9ca3af'" :stroke-width="'2px'"/>
        <a class="ml-2.5" href="mailto:hello@gesq.me">hello@gesq.me</a>
      </div>
      <div class="flex mt-5">
        <TheIcon name="MapPin" :color="'#9ca3af'" :stroke-width="'2px'"/>
        <span class="ml-2.5">Argentina</span>
      </div>
    </div>
    <div class="lg:mt-6">
      <form>
        <div
          class="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1"
        >
          <div>
            <label
              for="first-name"
              class="block text-sm font-semibold leading-6 text-primary"
              >{{ $t("getInTouchT.name") }}</label
            >
            <div class="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="off"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              for="first-name"
              class="block text-sm font-semibold leading-6 text-primary"
              >{{ $t("getInTouchT.email") }}</label
            >
            <div class="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="off"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div class="mt-2.5">
          <label
            for="message"
            class="block text-sm font-semibold leading-6 text-primary"
            >{{ $t("getInTouchT.message") }}</label
          >
          <div class="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows="4"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
        <div class="mt-2.5">
          <button
            type="submit"
            class="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {{ $t("getInTouchT.send") }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
