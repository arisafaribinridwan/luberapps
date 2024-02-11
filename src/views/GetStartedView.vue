<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="min-h-screen bg-blue50 flex justify-center items-center">
    <img src="../assets/icons/logo-splashscreen.svg" alt="Logo Lunas Bersama" />
    <router-link
      to="/login"
      class="px-4 py-3 gap-2 absolute bottom-1/4 flex text-white bg-primary w-[320px] rounded-lg justify-center"
    >
      Get Started
      <span>
        <img src="../assets/icons/icon-arrow-right.svg" />
      </span>
    </router-link>

    
  </div>
</template>
