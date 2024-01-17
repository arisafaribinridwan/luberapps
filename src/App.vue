<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main class="my-0 mx-auto min-h-full max-w-[360px]">
    <div
      class="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-green-100 pb-[66px]"
    >
      <RouterView />
    </div>

    <nav
      class="fixed bottom-0 z-[2] m-0 flex justify-between items-center w-full max-w-[360px] bg-sky-50 h-[94px] px-3 py-2"
    >
      <RouterLink to="/" class="w-[82px] h-[52px] grid place-content-center">
        <span>icon</span>
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
    </nav>
  </main>
</template>

<style scoped></style>
