<template>
  <div>
    <Gallery :title="'Halloween'" :images="halloweenImages" />
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <Gallery :title="'Fiestas Patrias'" :images="fiestasPatrias" />
  </div>
</template>

<script setup>
import Gallery from './Gallery.vue';

const halloweenImages = [
  {
    src: "https://img.freepik.com/foto-gratis/glamorosa-mujer-hispana-camisa-amarilla-disfrutando-divertido-baile-amigos-retrato-interior-tres-chicas-alegres-escalofriantes_197531-4027.jpg?w=996&t=st=1705183443~exp=1705184043~hmac=22971d9cd84586505716acaa314b208084e8756e5659d4855dfe1efa9b8ca35e",
    name: "Nombre",
  },
  {
    src: "https://img.freepik.com/foto-gratis/glamorosa-mujer-hispana-camisa-amarilla-disfrutando-divertido-baile-amigos-retrato-interior-tres-chicas-alegres-escalofriantes_197531-4027.jpg?w=996&t=st=1705183443~exp=1705184043~hmac=22971d9cd84586505716acaa314b208084e8756e5659d4855dfe1efa9b8ca35e",
    name: "Nombre",
  },
  {
    src: "https://img.freepik.com/foto-gratis/glamorosa-mujer-hispana-camisa-amarilla-disfrutando-divertido-baile-amigos-retrato-interior-tres-chicas-alegres-escalofriantes_197531-4027.jpg?w=996&t=st=1705183443~exp=1705184043~hmac=22971d9cd84586505716acaa314b208084e8756e5659d4855dfe1efa9b8ca35e",
    name: "Nombre",
  },
  {
    src: "https://img.freepik.com/foto-gratis/glamorosa-mujer-hispana-camisa-amarilla-disfrutando-divertido-baile-amigos-retrato-interior-tres-chicas-alegres-escalofriantes_197531-4027.jpg?w=996&t=st=1705183443~exp=1705184043~hmac=22971d9cd84586505716acaa314b208084e8756e5659d4855dfe1efa9b8ca35e",
    name: "Nombre",
  },
  {
    src: "https://img.freepik.com/foto-gratis/glamorosa-mujer-hispana-camisa-amarilla-disfrutando-divertido-baile-amigos-retrato-interior-tres-chicas-alegres-escalofriantes_197531-4027.jpg?w=996&t=st=1705183443~exp=1705184043~hmac=22971d9cd84586505716acaa314b208084e8756e5659d4855dfe1efa9b8ca35e",
    name: "Nombre",
  },
  {
    src: "https://img.freepik.com/foto-gratis/glamorosa-mujer-hispana-camisa-amarilla-disfrutando-divertido-baile-amigos-retrato-interior-tres-chicas-alegres-escalofriantes_197531-4027.jpg?w=996&t=st=1705183443~exp=1705184043~hmac=22971d9cd84586505716acaa314b208084e8756e5659d4855dfe1efa9b8ca35e",
    name: "Nombre",
  },
  {
    src: "https://img.freepik.com/foto-gratis/glamorosa-mujer-hispana-camisa-amarilla-disfrutando-divertido-baile-amigos-retrato-interior-tres-chicas-alegres-escalofriantes_197531-4027.jpg?w=996&t=st=1705183443~exp=1705184043~hmac=22971d9cd84586505716acaa314b208084e8756e5659d4855dfe1efa9b8ca35e",
    name: "Nombre",
  },
];

const fiestasPatrias = [
  {
    src: "https://img.freepik.com/foto-gratis/tres-jovenes-hermosas-chicas-sonrientes-ropa-deportiva-moda-verano-sexy-mujer-despreocupada-posando-modelos-positivos-gafas-sol-redondas-divirtiendose-abrazando_158538-5198.jpg?w=900&t=st=1705183439~exp=1705184039~hmac=6de686a07771607e5f8b4c6c4bf116939a792781a4c5855a0c6e6bd4a336567d",
    name: "Nombre",
  },
  {
    src: "https://img.freepik.com/foto-gratis/tres-jovenes-hermosas-chicas-sonrientes-ropa-deportiva-moda-verano-sexy-mujer-despreocupada-posando-modelos-positivos-gafas-sol-redondas-divirtiendose-abrazando_158538-5198.jpg?w=900&t=st=1705183439~exp=1705184039~hmac=6de686a07771607e5f8b4c6c4bf116939a792781a4c5855a0c6e6bd4a336567d",
    name: "Nombre",
  },
  {
    src: "https://img.freepik.com/foto-gratis/tres-jovenes-hermosas-chicas-sonrientes-ropa-deportiva-moda-verano-sexy-mujer-despreocupada-posando-modelos-positivos-gafas-sol-redondas-divirtiendose-abrazando_158538-5198.jpg?w=900&t=st=1705183439~exp=1705184039~hmac=6de686a07771607e5f8b4c6c4bf116939a792781a4c5855a0c6e6bd4a336567d",
    name: "Nombre",
  },
  {
    src: "https://img.freepik.com/foto-gratis/tres-jovenes-hermosas-chicas-sonrientes-ropa-deportiva-moda-verano-sexy-mujer-despreocupada-posando-modelos-positivos-gafas-sol-redondas-divirtiendose-abrazando_158538-5198.jpg?w=900&t=st=1705183439~exp=1705184039~hmac=6de686a07771607e5f8b4c6c4bf116939a792781a4c5855a0c6e6bd4a336567d",
    name: "Nombre",
  },
];
</script>

<style scoped>
</style>