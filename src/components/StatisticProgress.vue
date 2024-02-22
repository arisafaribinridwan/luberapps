<script setup>
import ProgressBar from "primevue/progressbar";

defineProps({
    name: String,
    percentage: Number
})

</script>

<template>
    <div class="flex gap-4 items-center bg-white shadow-lg px-4 py-2 rounded">
        <div>
            <img src="../assets/icons/home-userprofile.svg" alt="member-profile">
        </div>
        <div class="flex-1">
            <div class="flex justify-between items-center">
                <p>{{ name }}</p>
                <p>{{ percentage }}%</p>
            </div>
            <div>
                <ProgressBar :value="percentage" :show-value="false" :pt="{
                    value:
                        'absolute flex items-center justify-center overflow-hidden bg-secondary dark:bg-tertiery m-0 h-full w-0 border-0 transition-width duration-1000 ease-in-out',
                    root: 'overflow-hidden relative border-0 h-2 rounded-xl bg-surface-200 dark:bg-surface-700',
                }">
                </ProgressBar>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>