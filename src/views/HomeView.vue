<script setup>
import ProgressBar from "primevue/progressbar";
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
    <section class="bg-primary text-light p-6 rounded-lg">
      <p class="text-xs font-medium">Saldo</p>
      <p class="text-3xl font-bold mb-6">Rp 110,000,000</p>
      <ProgressBar
        :value="50"
        :pt="{
          label: { style: { fontSize: '12px' } },
        }"
      ></ProgressBar>
      <p class="text-xs font-bold text-right mt-1">
        <span class="font-normal">Pinjaman</span> Rp. 210,000,000
      </p>
    </section>
  </main>

  <!-- Bottom Nav section -->
  <nav class="fixed bottom-0 w-full">
    <div
      class="h-[94px] w-full bg-blue50 flex justify-around px-3 pt-2 rounded-b-3xl"
    >
      <div>
        <button class="text-xs font-semibold">
          <div
            class="w-14 h-8 flex justify-center items-center bg-primary rounded-full"
          >
            <img src="../assets/icons/nav-icon-home.svg" alt="home" />
          </div>
          Home
        </button>
      </div>
      <div>
        <button class="text-xs">
          <div class="w-14 h-8 flex justify-center items-center rounded-full">
            <img src="../assets/icons/nav-icon-statistic.svg" alt="Statistic" />
          </div>
          Statistic
        </button>
      </div>
      <div>
        <button class="text-xs">
          <div class="w-14 h-8 flex justify-center items-center rounded-full">
            <img src="../assets/icons/nav-icon-history.svg" alt="History" />
          </div>
          History
        </button>
      </div>
      <div>
        <button class="text-xs">
          <div class="w-14 h-8 flex justify-center items-center rounded-full">
            <img src="../assets/icons/nav-icon-profile.svg" alt="Profile" />
          </div>
          Profile
        </button>
      </div>
    </div>
  </nav>
</template>
