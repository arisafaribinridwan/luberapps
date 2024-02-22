<script setup>
import moneyIn from '../assets/icons/money-receive.svg'
import moneyOut from '../assets/icons/money-send.svg'
defineProps({
    name: String,
    amount: Number,
    date: String,
    isSetor: Boolean
})
</script>



<template>
    <div class="flex justify-between items-center">
        <div class="flex">
            <img :src="isSetor ? moneyIn : moneyOut" alt="logo-transaction">
            <div class="ml-2">
                <p>{{ name }}</p>
                <p class="text-[10px] text-gray-400">{{ date }}</p>
            </div>
        </div>
        <p class="font-medium" :class="[isSetor ? 'text-success' : 'text-danger']">Rp. {{ amount }}</p>
    </div>
</template>


<style lang="scss" scoped></style>