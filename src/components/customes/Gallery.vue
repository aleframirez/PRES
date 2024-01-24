<template>
   <section>
     <div class="flex justify-center items-center my-5">
       <h3 :class="titleClasses">{{ title }}</h3>
     </div>
     <div class="layout grid grid-rows-auto grid-cols-3 gap-8 mx-9">
       <div v-for="(image, index) in props.images" :key="index">
         <img :src="image.src" :alt="image.name" loading="lazy" class="rounded-md"/>
       </div>
     </div>
   </section>
 </template>
 
 <script setup>
import { computed } from "vue";

// eslint-disable-next-line no-undef
const props = defineProps(['title', 'images'])

 const titleClasses = computed(() => {
   return {
     'uppercase': true,
     'tracking-[20px]': true,
     'text-[#F1916D]': true,
     'text-2xl': true,
     'mb-6': true,
   };
 });
 </script>
 
 <style scoped>
 /* Puedes agregar estilos específicos para este componente si es necesario */
 </style>
 