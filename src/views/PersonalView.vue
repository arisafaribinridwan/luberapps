<!-- <script setup>
import Avatar from 'primevue/avatar';
</script>

<template>
    <main class="mb-10">
        <header class="h-[164px] bg-blue50 rounded-b-2xl p-5 mb-8">
            <h1 class="mt-5 font-bold text-lg mb-3">Data Pribadi</h1>
            <div class="flex justify-between items-center">
                <div class="text-primary">
                    <h2 class="font-bold">Dewantoro D.</h2>
                    <p class="text-sm">LUBER19-06</p>
                </div>
                <Avatar size="xlarge" shape="circle" image="/src/assets/icons/profile-datapribadi.svg" />
            </div>
        </header>
        <section class="px-5 mb-10">
            <FormKit type="form" id="data-pribadi" submit-label="Simpan" @submit="saveData()" #default="{ value }">
                <FormKit type="text" name="namalengkap" label="Nama Lengkap" placeholder="Fulan bin Fulan"
                    validation="required" />
                <FormKit type="text" name="namapanggilan" label="Nama Panggilan" placeholder="Fulan"
                    validation="required" />
                <FormKit type="text" name="tempatlahir" label="Kota Kelahiran" placeholder="Karawang"
                    validation="required" />
                <FormKit type="date" name="tanggallahir" label="Tanggal Lahir"
                    validation="required|date_before:2000-01-01" />
                <FormKit type="textarea" auto-height name="alamat" label="Alamat"
                    placeholder="Perum Karaba Indah Blok A No.1" validation="required" />
                <FormKit type="tel" name="handphone" label="No. Handphone" placeholder="821123342342"
                    help="tanpa angka nol didepan" /> -->
<!-- <FormKit type="select" name="pekerjaan" label="Pekerjaan" :options="['Karyawan', 'Wirausaha']" validation="required" />
<FormKit type="text" name="namaperusahaan" label="Nama Perusahaan" placeholder="Makmur Abadi Jaya"
    validation="required" /> 
<FormKit type="text" name="namaperusahaan" label="Nama Perusahaan" placeholder="Makmur Abadi Jaya"
    validation="required" />
<FormKit type="text" name="namaperusahaan" label="Nama Perusahaan" placeholder="Makmur Abadi Jaya"
    validation="required" />
<FormKit type="text" name="namaperusahaan" label="Nama Perusahaan" placeholder="Makmur Abadi Jaya"
    validation="required" />
<FormKit type="text" name="namaperusahaan" label="Nama Perusahaan" placeholder="Makmur Abadi Jaya"
    validation="required" />

</FormKit>
</section>
</main>
</template> -->

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
    <main class="pb-32">
        <header class="h-[164px] bg-blue50 rounded-b-2xl p-5 mb-8">
            <h1 class="mt-5 font-bold text-lg mb-3">Data Pribadi</h1>
            <div class="flex justify-between items-center">
                <div class="text-primary">
                    <h2 class="font-bold">Dewantoro D.</h2>
                    <p class="text-sm">LUBER19-06</p>
                </div>
                <Avatar size="xlarge" shape="circle" image="/src/assets/icons/profile-datapribadi.svg" />
            </div>
        </header>
        <section class="px-5 mb-10">
            <FormKit type="form" id="data-pribadi" submit-label="Simpan" @submit="saveData()" #default="{ value }">
                <FormKit type="text" name="namalengkap" label="Nama Lengkap" placeholder="Fulan bin Fulan"
                    validation="required" />
                <FormKit type="text" name="namapanggilan" label="Nama Panggilan" placeholder="Fulan"
                    validation="required" />
                <FormKit type="text" name="tempatlahir" label="Kota Kelahiran" placeholder="Karawang"
                    validation="required" />
                <FormKit type="date" name="tanggallahir" label="Tanggal Lahir"
                    validation="required|date_before:2000-01-01" />
                <FormKit type="textarea" auto-height name="alamat" label="Alamat"
                    placeholder="Perum Karaba Indah Blok A No.1" validation="required" />
                <FormKit type="tel" name="handphone" label="No. Handphone" placeholder="821123342342"
                    help="tanpa angka nol didepan" />
                <FormKit type="select" name="pekerjaan" label="Pekerjaan" :options="['Karyawan', 'Wirausaha']"
                    validation="required" />
                <FormKit type="text" name="namaperusahaan" label="Nama Perusahaan" placeholder="Makmur Abadi Jaya"
                    validation="required" />
                <FormKit type="textarea" auto-height name="alamatperusahaan" label="Alamat Perusahaan"
                    placeholder="KIIC Jl. Harapan Raya Lot H1-5" validation="required" />
                <FormKit type="number" name="gaji" label="Penghasilan per Bulan" placeholder="1000000"
                    validation="required" />
                <FormKit type="date" name="mulaimember" label="Tanggal Bergabung"
                    validation="required|date_after:2019-01-01" />
                <FormKit type="file" label="Foto Profile" help="tidak lebih dari 1MB" />

                <p class="font-bold text-primary mt-6">Data Keluarga</p>
                <FormKit type="text" name="namapasangan" label="Nama Pasangan" placeholder="Fulana binti Fulan"
                    validation="required" />
                <FormKit type="date" name="tanggallahirpasangan" label="Tanggal Lahir Pasangan"
                    validation="required|date_before:2000-01-01" />
                <FormKit type="tel" name="handphonepasangan" label="No. Handphone" placeholder="821123342342"
                    help="tanpa angka nol didepan" />
                <FormKit type="number" name="anak" label="Jumlah Anak" placeholder="3" validation="required" />
            </FormKit>
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