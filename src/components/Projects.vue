<template>
  <div class="projects">
    <div class="titulo">
      <!-- <h1>Nuestros trajes</h1> -->
    </div>
    <div class="container">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="['box', `box-${index + 1}`]"
        :style="{ '--img': `url(${image.src})` }"
        :data-text="image.name"
      ></div>
    </div>
  </div>
</template>

<script setup>
const images = [
  {
    src: "https://img.freepik.com/foto-gratis/glamorosa-mujer-hispana-camisa-amarilla-disfrutando-divertido-baile-amigos-retrato-interior-tres-chicas-alegres-escalofriantes_197531-4027.jpg?w=996&t=st=1705183443~exp=1705184043~hmac=22971d9cd84586505716acaa314b208084e8756e5659d4855dfe1efa9b8ca35e",
    name: "Nombre",
  },
  {
    src: "https://img.freepik.com/foto-gratis/atractiva-mujer-morena-traje-verano-brillante-sonriendo_197531-16699.jpg?w=996&t=st=1705183446~exp=1705184046~hmac=962e8deb073be0af60fc85a5c3cf45e3f87693260da57c4713b47e9866febd15",
    name: "Nombre",
  },
  {
    src: "https://img.freepik.com/foto-gratis/mujer-hermosa-joven-mirando-camara-chica-moda-verano-casual-camiseta-blanca-pantalones-vaqueros-gafas-sol-redondas-hembra-positiva-muestra-emociones-faciales-modelo-divertido-aislado-amarillo_158538-15804.jpg?w=900&t=st=1705183447~exp=1705184047~hmac=b4eadd287120228bc5d5ed29c847a7a7d8c083450281df6490db2a5d50a69fb9",
    name: "Nombre",
  },
  {
    src: "https://img.freepik.com/foto-gratis/hermosa-chica-blanca-pelo-largo-ondulado-posando-emocion-retrato-interior-mujer-jengibre-optimista-bromeando-rosa_197531-11054.jpg?w=996&t=st=1705183448~exp=1705184048~hmac=8a247aa86aea3d36b3786cc81008172d4b182e92264e0252dcc99d9de540240b",
    name: "Nombre",
  },
  {
    src: "https://img.freepik.com/foto-gratis/hermosa-mujer-cabello-ondulado-rubio-elegante-vestido-beige_273443-1756.jpg?w=996&t=st=1705183845~exp=1705184445~hmac=9e821863e4ff2dda3d0a54b6db89021919919b1bb2447719b92b0dd1f5528f2a",
    name: "Nombre",
  },
  {
    src: "https://img.freepik.com/foto-gratis/dos-jovenes-hermosas-chicas-hipster-sonrientes-ropa-moda-verano-mujeres-despreocupadas-sexy-posando-fondo-calle-gafas-sol-modelos-positivos-divirtiendose-abrazandose_158538-15968.jpg?w=996&t=st=1705183457~exp=1705184057~hmac=d8d6fda4c2fe0d7e7d1252fe16572d5a37f767c08ef753842f4b6220437ce090",
    name: "Nombre",
  },
  {
    src: "https://img.freepik.com/foto-gratis/tres-jovenes-hermosas-chicas-sonrientes-ropa-deportiva-moda-verano-sexy-mujer-despreocupada-posando-modelos-positivos-gafas-sol-redondas-divirtiendose-abrazando_158538-5198.jpg?w=900&t=st=1705183439~exp=1705184039~hmac=6de686a07771607e5f8b4c6c4bf116939a792781a4c5855a0c6e6bd4a336567d",
    name: "Nombre",
  },
  {
    src: "https://img.freepik.com/foto-gratis/imagen-al-aire-libre-moda-mujer-joven-elegante-divirtiendose-bar-ciudad-empanada-fin-semana-atuendo-moda-pelos-largos-estado-animo-positivo_291049-1734.jpg?w=360&t=st=1705183321~exp=1705183921~hmac=00571ab7983c87bd78a0cabfce9b75d160ef44181da7678e360ff6aa85de9c32",
    name: "Nombre",
  },
  {
    src: "https://img.freepik.com/foto-gratis/retrato-joven-hermosa-nina-sonriente-ropa-moda-verano-mujer-sexy-despreocupada-posando-modelo-positivo-divirtiendose-gafas-sol-redondas_158538-5254.jpg?w=900&t=st=1705183324~exp=1705183924~hmac=c7dabe5a47ebd01f9c30e24e50f3a742214b749ac182ae377f3200f9d8e8650d",
    name: "Nombre",
  },
  {
    src: "https://img.freepik.com/foto-gratis/joven-mujer-bonita-morena-posando-fondo-marmol-beige-vistiendo-pantalones-cortos-lino-beige-bolso-lujo-cuero-caramelo-camisa-blanca-accesorios-dorados-traje-estilo-callejero_291049-1753.jpg?w=360&t=st=1705183278~exp=1705183878~hmac=48b0b1b36d774269c2022f3102b52b4812c58d9391adc0930657391364c413c7",
    name: "Nombre",
  },
];
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Figtree&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Figtree", sans-serif;
}

body {
  display: grid;
  place-content: center;
  min-height: 100vh;
  background: #000;
}

.projects {
  width: 100%;
  height: auto;
  max-width: 1200px;
  margin: 5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.titulo {
  margin-bottom: -8rem;
  color: #bd83b8;
}

.container {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1em;
  width: 100%;
  max-width: 1200px;
  height: 300px;
  margin: 15rem auto;
  padding: 0 2rem;
  transition: all 400ms;
}

.container:hover .box {
  filter: grayscale(100%) opacity(24%);
}

.box {
  position: relative;
  background: var(--img) center center;
  background-size: cover;
  transition: all 400ms;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .box:hover {
  filter: grayscale(0%) opacity(100%);
}

.container:has(.box-1:hover) {
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

.container:has(.box-2:hover) {
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

.container:has(.box-3:hover) {
  grid-template-columns: 1fr 1fr 3fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

.container:has(.box-4:hover) {
  grid-template-columns: 1fr 1fr 1fr 3fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

.container:has(.box-5:hover) {
  grid-template-columns: 1fr 1fr 1fr 1fr 3fr 1fr 1fr 1fr 1fr 1fr;
}

.container:has(.box-6:hover) {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 3fr 1fr 1fr 1fr 1fr;
}

.container:has(.box-7:hover) {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 3fr 1fr 1fr 1fr;
}

.container:has(.box-8:hover) {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 3fr 1fr 1fr;
}

.container:has(.box-9:hover) {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 3fr 1fr;
}

.container:has(.box-10:hover) {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 3fr;
}

.box:nth-child(odd) {
  transform: translateY(-16px);
}

.box:nth-child(even) {
  transform: translateY(16px);
}

.box::after {
  content: attr(data-text);
  position: absolute;
  bottom: 20px;
  background: #000;
  color: #fff;
  padding: 10px 10px 10px 14px;
  letter-spacing: 4px;
  text-transform: uppercase;
  transform: translateY(60px);
  opacity: 0;
  transition: all 400ms;
}

.box:hover::after {
  transform: translateY(0);
  opacity: 1;
  transition-delay: 400ms;
}

@media only screen and (max-width: 768px) {
  .container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 1em;
    width: 100%;
    max-width: 1200px;
    height: 300px;
    margin: 15.5rem auto;
    padding: 0 2rem;
    transition: all 400ms;
  }
  .container:has(.box-1:hover) {
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
  }

  .container:has(.box-2:hover) {
    grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
  }

  .container:has(.box-3:hover) {
    grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
  }

  .container:has(.box-4:hover) {
    grid-template-columns: 1fr 1fr 1fr 3fr 1fr;
  }

  .container:has(.box-5:hover) {
    grid-template-columns: 1fr 1fr 1fr 1fr 3fr;
  }
  .container .box-6 {
    display: none;
  }
  .container .box-7 {
    display: none;
  }
  .container .box-8 {
    display: none;
  }
  .container .box-9 {
    display: none;
  }
  .container .box-10 {
    display: none;
  }
}
</style>