<script setup>
import Button from 'primevue/button'
import ButtonFilter from '@/components/HistoryButtons.vue'
import HistoryList from '@/components/HistoryList.vue'
import { reactive } from 'vue';

let Transactions = reactive([
    { id: 1, name: "Dewantoro N", amount: 1000000, date: "01/08/2023", isSetor: true },
    { id: 2, name: "Nur Rokhim", amount: 3000000, date: "03/08/2023", isSetor: true },
    { id: 3, name: "Agus Effendi", amount: -98000000, date: "03/08/2023", isSetor: false },
    { id: 4, name: "Rudyan S", amount: 1000000, date: "05/07/2023", isSetor: true },
    { id: 5, name: "Ari Safari", amount: 1500000, date: "04/07/2023", isSetor: true },
])
</script>

<template>
    <main>
        <!-- Header -->
        <header class="px-5 pt-10 pb-4 bg-blue50 rounded-b-2xl mb-4">
            <h1 class="font-bold text-lg mb-6 text-dark">History</h1>
            <div class="px-4 py-2 flex justify-between ">
                <ButtonFilter label="All" />
                <ButtonFilter label="Setor" />
                <ButtonFilter label="Tarik" />
                <ButtonFilter label="Download" />
            </div>
        </header>

        <!-- List Section -->
        <div class="space-y-2 px-5">
            <HistoryList v-for="transaction in Transactions" :key="transaction.id" :amount="transaction.amount"
                :is-setor="transaction.isSetor" :date="transaction.date" />
        </div>
    </main>
</template>


