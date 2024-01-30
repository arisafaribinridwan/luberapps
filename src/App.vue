<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const name = ref("Vue.js");

function greet() {
  alert(`Hello ${name.value}!`);
  // `event` is the native DOM event
}
</script>

<template>
  <main
    class="my-0 mx-auto min-h-screen max-w-[360px] bg-blue50 flex justify-center items-center"
  >
    <RouterView />

    <!-- <div
      class="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-background pb-[66px]"
      >
    </div>

    <nav
      class="fixed bottom-0 z-[2] m-0 flex justify-between items-center w-full max-w-[360px] bg-blue50 h-[94px] px-3 py-2"
    >
      <RouterLink to="/" class="w-[82px] h-[52px] flex flex-col items-center">
        <span>
          <img src="./assets/icons/nav-icon-home.svg" />
        </span>
        Home
      </RouterLink>
      <RouterLink
        to="/about"
        class="w-[82px] h-[52px] grid place-content-center"
        >Statistic</RouterLink
      >
      <RouterLink
        to="/about"
        class="w-[82px] h-[52px] grid place-content-center"
        >History</RouterLink
      >
      <RouterLink
        to="/about"
        class="w-[82px] h-[52px] grid place-content-center"
        >Profile</RouterLink
      >
    </nav> -->
  </main>
</template>

<style scoped></style>
