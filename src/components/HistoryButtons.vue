<script setup>
import Button from 'primevue/button';
defineProps({
    label: String
})
</script>

<template>
    <Button :label="label" outlined :pt="{
        root: 'relative items-center inline-flex text-center align-bottom justify-center leading-[normal] px-4 py-2 rounded-md text-primary-500 dark:text-surface-900 bg-white dark:bg-primary-400 border border-primary-500 dark:border-primary-400 focus:text-white focus:bg-primary-500 focus:outline-none focus:outline-offset-0 focus:ring hover:bg-primary-600 hover:text-white dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300 focus:ring-primary-400/50 dark:focus:ring-primary-300/50 transition duration-200 ease-in-out cursor-pointer overflow-hidden select-none',
        label: 'text-xs'
    }" />
</template>

