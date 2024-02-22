<script setup>
import { RouterView } from "vue-router";
import ProgressBar from "primevue/progressbar";
import NavLink from "@/components/NavLink.vue";
</script>

<template>
  <RouterView />

  <!-- Bottom Nav section -->
  <nav class="fixed bottom-0 w-[360px]">
    <div class="h-[94px] w-full bg-blue50 flex justify-around px-3 pt-2">
      <NavLink to="/dashboard/home" label="Home" icon="solar:home-2-bold" />
      <NavLink to="/dashboard/statistic" label="Statistic" icon="solar:pie-chart-bold" />
      <NavLink to="/dashboard/history" label="History" icon="solar:clock-circle-outline" />
      <NavLink to="/dashboard/profile" label="Profile" icon="mingcute:user-4-fill" />
    </div>
  </nav>
</template>
