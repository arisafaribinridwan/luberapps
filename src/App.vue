<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

let IsSplashScreen = ref(true);

function goToHome() {
  return (IsSplashScreen.value = !IsSplashScreen.value);
}
</script>

<template>
  <main>
    <div
      v-if="IsSplashScreen"
      class="flex flex-col gap-20 justify-center items-center h-screen"
    >
      <div>
        <img
          src="./assets/icons/logo-splashscreen.svg"
          alt="Logo Lunas Bersama"
        />
      </div>
      <div>
        <button
          @click="goToHome"
          class="px-4 py-3 flex text-white bg-primary w-[320px] rounded-lg justify-center"
        >
          Get Started
          <span>
            <img src="./assets/icons/icon-arrow-right.svg" />
          </span>
        </button>
      </div>
    </div>

    <div
      v-else
      class="flex flex-col gap-20 justify-center items-center h-screen"
    >
      <RouterView />
      <nav class="">
        <RouterLink to="/" class="">
          <span>
            <img src="./assets/icons/nav-icon-home.svg" />
          </span>
          Home
        </RouterLink>
        <RouterLink to="/about" class="">Statistic</RouterLink>
        <RouterLink to="/about" class="">History</RouterLink>
        <RouterLink to="/about" class="">Profile</RouterLink>
      </nav>
    </div>
  </main>
</template>

<style scoped></style>
