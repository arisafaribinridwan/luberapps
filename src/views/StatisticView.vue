<script setup>
import BarChart from '@/components/BarChart.vue';
import { Icon } from '@iconify/vue';
import StatisticCard from '@/components/StatisticCard.vue';
import StatLatestTrans from '@/components/StatLatestTrans.vue';
import StatisticProgress from '@/components/StatisticProgress.vue'
import { reactive } from 'vue';

let LastTransactions = reactive([
    { id: 1, name: "Dewantoro N", amount: 1000000, date: "01/08/2023", isSetor: true },
    { id: 2, name: "Nur Rokhim", amount: 3000000, date: "03/08/2023", isSetor: true },
    { id: 3, name: "Agus Effendi", amount: -98000000, date: "03/08/2023", isSetor: false },
    { id: 4, name: "Rudyan S", amount: 1000000, date: "05/07/2023", isSetor: true },
    { id: 5, name: "Ari Safari", amount: 1500000, date: "04/07/2023", isSetor: true },
])

let membersProgress = reactive([
    { id: 1, name: "Anwarudin", percentage: 70 },
    { id: 2, name: "Ari Safari", percentage: 100 },
    { id: 3, name: "Jeje Jaenuri", percentage: 100 },
    { id: 4, name: "Rudyan Suryana", percentage: 50 },
    { id: 5, name: "Nur Rokhim", percentage: 50 },
])
</script>


<template>
    <main class="mb-48">
        <!-- Header -->
        <header class="px-5 pt-10 pb-4 bg-blue50 rounded-b-2xl mb-4">
            <h1 class="font-bold text-lg mb-6 text-dark">Statistic</h1>
            <p class="font-semibold text-primary mb-4">Setoran Masuk <span class="font-medium text-sm text-gray-400">(6
                    Bulan terakhir)</span></p>
            <BarChart />
        </header>

        <!-- slider card -->
        <section class="p-5 flex flex-row space-x-5 overflow-x-auto scroll-smooth">
            <StatisticCard icon="uil:users-alt" label="Members" number="20" />
            <StatisticCard icon="bxs:wallet" label="Pengajuan" number="2,3M" />
            <StatisticCard icon="material-symbols-light:order-approve-outline" label="Dilunasi" number="1,1M" />
            <StatisticCard icon="mdi:human-queue" label="Antrian" number="7" />
        </section>


        <!-- top 5 latest transaction -->
        <section class="p-5 bg-blue50 mb-3">
            <h2 class="font-bold text-dark">Transaksi terbaru</h2>
            <div class="mt-2 space-y-2">
                <StatLatestTrans v-for="transaction in LastTransactions" :key="transaction.id" :name="transaction.name"
                    :amount="transaction.amount" :date="transaction.date" :isSetor="transaction.isSetor" />
            </div>
        </section>

        <!-- Progress -->
        <section class="p-5 mb-30">
            <h2 class="font-bold text-dark mb-3">Progress</h2>
            <div class="space-y-2">
                <StatisticProgress v-for="progress in membersProgress" :key="progress.id" :name="progress.name"
                    :percentage="progress.percentage" />
            </div>
        </section>
    </main>
</template>


<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>