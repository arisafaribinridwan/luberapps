<script setup>
import { RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue'

defineProps({
    to: String,
    label: String,
    icon: String
})
</script>

<template>
    <RouterLink :to="to" custome v-slot="{ href, isActive }">
        <a class=" text-center w-14 h-8 " :href="href" :class="{ 'router-link-active': isActive }">
            <span class="flex justify-center items-center rounded-full px-2 py-1 w-14 h-8"
                :class="isActive ? 'bg-primary-400' : 'bg-transparent'">
                <Icon :icon="icon" width="24px" height="24px" :class="isActive ? 'text-white' : 'text-slate-400'" />
            </span>
            <p class="text-center text-xs" :class="isActive ? 'font-bold text-primary-400' : ''">{{ label }}</p>
        </a>
    </RouterLink>
</template>
