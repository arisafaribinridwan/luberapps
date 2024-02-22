<script setup>
import { Icon } from '@iconify/vue';

defineProps({
    icon: String,
    label: String,
    number: String
})
</script>
<template>
    <div class="p-4 h-32 w-32 bg-white rounded-lg flex-shrink-0 shadow-lg">
        <Icon :icon="icon" width="40px" height="40px" color="#FF9A27" />
        <p class="mt-4 text-xs text-gray-500">{{ label }}</p>
        <div class="flex justify-between items-end mt-1">
            <p class="font-bold text-primary">{{ number }}</p>
            <Icon icon="mingcute:arrows-right-line" color="#8D939A" width="24px" height="24px" />
        </div>
    </div>
</template>


<style lang="scss" scoped></style>