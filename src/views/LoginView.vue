<script setup>
import { ref, reactive } from "vue";
import router from "@/router";

const formData = ref();

const userAccount = reactive({
  username: "admin",
  password: "admin",
});

// function login() {
//   // retrieve the core node (several ways to do this):
//   const node = formData.value.node;
//   // submit the form!
//   node.submit();
// }

function submitHandler(data) {
  // alert("Submitted successfully!");
  console.log(data.username);
  // console.log(userAccount.username);
  if (data.username == userAccount.username) {
    console.log("user ada");
    router.push("/home");
    console.log(data);
  } else {
    console.log("user tidak ditemukan");
  }

  const node = formData.value.node;
  node.reset();
}
</script>

<template>
  <main class="px-5 py-10 min-h-screen flex flex-col">
    <div>
      <h2 class="font-bold text-xl mb-3">Assalamu’alaikum</h2>
      <p class="text-gray800 mb-6 bg-blue50">
        Senang berjumpa lagi. Kamu dapat melanjutkan login untuk memeriksa
        keuanganmu.
      </p>
    </div>
    <div class="">
      <FormKit
        type="form"
        id="login-form"
        ref="formData"
        :actions="false"
        #default="{ value }"
        @submit="submitHandler"
      >
        <FormKit
          type="text"
          label="User Name"
          id="username"
          name="username"
          validation="required"
          :classes="{
            label: 'rounded-sm',
            input: 'px-4 py-2',
          }"
        />
        <FormKit
          type="password"
          label="Password"
          id="password"
          name="password"
          validation="required"
          :classes="{
            label: 'rounded-sm',
            input: 'px-4 py-2',
          }"
        />

        <a href="#" class="text-sm text-primary">Forgot password ?</a>

        <FormKit
          type="submit"
          label="Login"
          id="loginButton"
          name="loginButton"
          inputClass="w-full mt-[50px] bg-primary text-white justify-center"
          wrapperClass="text-center"
        />
      </FormKit>
    </div>
    <div class="mt-auto justify-center flex">
      <img
        class=""
        src="../assets/icons/logo-luber.svg"
        alt="luber-logo-small"
      />
    </div>
  </main>
</template>

<style></style>
