<script setup>
import moneyIn from '../assets/icons/money-receive.svg'
import moneyOut from '../assets/icons/money-send.svg'
defineProps({
    amount: Number,
    date: String,
    isSetor: Boolean
})
</script>



<template>
    <div class="flex justify-between items-center bg-white px-4 py-2 rounded shadow-md">
        <div class="flex gap-2">
            <img :src="isSetor ? moneyIn : moneyOut" alt="logo-transaction">
            <p class="text-dark">{{ date }}</p>
        </div>
        <p class="font-medium" :class="[isSetor ? 'text-success' : 'text-danger']">Rp. {{ amount }}</p>
    </div>
</template>

