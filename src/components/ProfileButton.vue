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
    <RouterLink :to="to" custome v-slot="{ href, isExactActive }">
        <a class="p-4 bg-blue50 rounded-lg flex justify-between w-full" :href="href">
            <div class="flex gap-x-4">
                <Icon :icon="icon" width="24px" height="24px" />
                <span>{{ label }}</span>
            </div>
            <Icon icon="fe:arrow-right" width="24px" height="24px" />
        </a>
    </RouterLink>
</template>
