<template>
  <div
    class="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto mb-44 items-center"
  >
    <h3
      class="absolute top-28 uppercase tracking-[20px] text-[#F1916D] text-2xl"
    >
      Contacto
    </h3>
    <div class="flex flex-col space-y-10 pt-16">
      <h4 class="text-2xl font-semibold text-center text-[#F5D7DB]">
        Necesitas saber algo? <span
          class="decoration-[#F1916D]/50 underline"
          >Hablemos!</span
        >
      </h4>
      <div class="space-y-4">
        <div class="flex items-center space-x-5 justify-center">
          <font-awesome-icon
            icon="fa-solid fa-phone"
            class="text-[#F1916D] h-5 w-5 animate-bounce"
          />
          <p class="text-base text-[#F5D7DB]">+54 3482 417738</p>
        </div>
        <div class="flex items-center space-x-5 justify-center">
          <font-awesome-icon
            icon="fa-solid fa-envelope"
            class="text-[#F1916D] h-5 w-5 animate-bounce"
          />
          <p class="text-base text-[#F5D7DB]">sanchezpatricia643@gmail.com</p>
        </div>
        <div class="flex items-center space-x-5 justify-center">
          <font-awesome-icon
            icon="fa-solid fa-location-dot"
            class="text-[#F1916D] h-5 w-5 animate-bounce"
          />
          <p class="text-base text-[#F5D7DB]">Reconquista - Santa Fe - Argentina</p>
        </div>
      </div>
      <form
        class="flex flex-col space-y-2 w-fit mx-auto"
        @submit.prevent="onSubmit"
      >
        <div class="flex space-x-2">
          <input
            v-model="name"
            type="text"
            placeholder="Name"
            class="contactInput"
          />
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="contactInput"
          />
        </div>
        <input
          v-model="subject"
          type="text"
          placeholder="Tema"
          class="contactInput"
        />
        <textarea
          v-model="message"
          placeholder="Que quisieras saber?"
          class="contactInput"
        ></textarea>
        <button
          type="submit"
          class="bg-[#F1916D] py-4 px-10 rounded-md text-black font-bold"
        >
          Enviar
        </button>
      </form>
    </div>
    <div class="w-full absolute top-[22%] bg-[#06142ea6] left-0 h-[490px] -skew-y-12 z-[-1]"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");

const onSubmit = () => {
  const mailtoLink = `mailto:aleframirez5@gmail.com?subject=${subject.value}&body=Hola, soy ${name.value}.%0D%0A${message.value}.%0D%0A Mi correo es el siguiente: ${email.value}`;
  window.location.href = mailtoLink;
};
</script>

<style scoped>
</style>