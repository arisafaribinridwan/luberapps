<script setup>
import ProgressBar from "primevue/progressbar";
import IconNavHome from "@/components/icons/IconNavHome.vue";
import IconNavStatistic from "@/components/icons/IconNavStatistic.vue";
import IconNavHistory from "@/components/icons/IconNavHistory.vue";
import IconNavProfile from "@/components/icons/IconNavProfile.vue";
</script>

<template>
  <main class="px-5 py-10 flex flex-col relative">
    <!-- Header section -->
    <header class="flex justify-between items-center mb-6">
      <div>
        <p>Selamat Datang</p>
        <h2 class="font-bold text-lg">Fulan bin Fulan</h2>
      </div>
      <div>
        <img src="../assets/icons/home-userprofile.svg" alt="logo-profile" />
      </div>
    </header>

    <!-- Main Content Section -->
    <section>
      <!-- Main Card Secion -->
      <div class="bg-primary text-light p-6 rounded-lg">
        <p class="text-xs font-medium">Saldo</p>
        <p class="text-3xl font-bold mb-6">Rp 110,000,000</p>
        <ProgressBar
          :value="50"
          :pt="{
            value:
              'absolute flex items-center justify-center overflow-hidden bg-tertiery dark:bg-tertiery m-0 h-full w-0 border-0 transition-width duration-1000 ease-in-out',
            label:
              'inline-flex text-light dark:text-surface-900 leading-6 text-xs',
            root: 'overflow-hidden relative border-0 h-6 rounded-sm bg-surface-100 dark:bg-surface-700',
          }"
        >
        </ProgressBar>
        <p class="text-xs font-bold text-right mt-2">
          <span class="font-normal">Pinjaman</span> Rp. 210,000,000
        </p>
      </div>

      <!-- Main Detail Information -->
      <div class="mt-10 space-y-4">
        <!-- Card Status -->
        <div
          class="h-16 px-6 py-5 flex justify-between rounded- items-center bg-white rounded-lg shadow-lg"
        >
          <div class="flex gap-2">
            <img src="../assets/icons/home-status.svg" alt="status-logo" />
            <p class="font-medium">Status</p>
          </div>
          <div class="rounded-lg bg-green100">
            <p class="text-xs px-2 py-1">Dilunasi</p>
          </div>
        </div>

        <!-- Card Kolektibilitas -->
        <div
          class="h-16 px-6 py-5 flex justify-between items-center bg-white rounded-lg shadow-lg"
        >
          <div class="flex gap-2">
            <img
              src="../assets/icons/home-kolektibilitas.svg"
              alt="kolektibilitas-logo"
            />
            <p class="font-medium">Kolektibilitas</p>
          </div>
          <div class="rounded-lg bg-red100">
            <p class="text-xs px-2 py-1">Macet</p>
          </div>
        </div>

        <!-- Card Sisa Hutang -->
        <div
          class="h-16 px-6 py-5 flex justify-between items-center bg-white rounded-lg shadow-lg"
        >
          <div class="flex gap-2">
            <img
              src="../assets/icons/home-sisahutang.svg"
              alt="sisahutang-logo"
            />
            <p class="font-medium">Sisa Hutang</p>
          </div>
          <div class="rounded-lg bg-blue100">
            <p class="text-xs px-2 py-1">Rp 100,000,000</p>
          </div>
        </div>

        <!-- Card Dilunasi Pada -->
        <div
          class="h-16 px-6 py-5 flex justify-between items-center bg-white rounded-lg shadow-lg"
        >
          <div class="flex gap-2">
            <img src="../assets/icons/icon-calendar.svg" alt="calendar-logo" />
            <p class="font-medium">Dilunasi pada</p>
          </div>
          <div class="rounded-lg bg-blue100">
            <p class="text-xs px-2 py-1">12/12/2020</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Bottom Nav section -->
  <nav class="fixed bottom-0 w-[360px]">
    <div
      class="h-[94px] w-full bg-blue50 flex justify-around px-3 pt-2 rounded-b-3xl"
    >
      <div>
        <button class="text-xs font-semibold">
          <div
            class="w-14 h-8 flex justify-center items-center bg-primary rounded-full"
          >
            <IconNavHome />
          </div>
          Home
        </button>
      </div>
      <div>
        <button class="text-xs">
          <div class="w-14 h-8 flex justify-center items-center rounded-full">
            <IconNavStatistic />
          </div>
          Statistic
        </button>
      </div>
      <div>
        <button class="text-xs">
          <div class="w-14 h-8 flex justify-center items-center rounded-full">
            <IconNavHistory />
          </div>
          History
        </button>
      </div>
      <div>
        <button class="text-xs">
          <div class="w-14 h-8 flex justify-center items-center rounded-full">
            <IconNavProfile />
          </div>
          Profile
        </button>
      </div>
    </div>
  </nav>
</template>
