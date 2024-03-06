<script setup>
import { Icon } from '@iconify/vue';
import { RouterLink } from 'vue-router';
import ProfileButton from '@/components/ProfileButton.vue'
import router from '@/router';
import password from '@/presets/luber/password';

</script>

<template>
    <header class="h-[280px] bg-blue50 rounded-b-2xl flex justify-center items-center">
        <div class="text-center">
            <h1 class="font-bold text-xl">Dewantoro D.</h1>
            <p class="font-medium">LUBER19-06</p>
        </div>
    </header>
    <div class="p-5 flex flex-col gap-4">
        <ProfileButton to="/dashboard/personal" label="Data Pribadi" icon="mynaui:user-square" />
        <ProfileButton to="/dashboard/password" label="Ubah Password" icon="solar:key-minimalistic-square-outline" />
        <ProfileButton to="/dashboard/logout" label="Log out" icon="solar:logout-2-outline" />
    </div>

</template>