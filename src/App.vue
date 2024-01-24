<template>
  <div class="background-img"></div>
  <Navbar />
  <Projects />
  <AboutMe />
  <Customes />
  <Contact />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import AboutMe from "./components/AboutMe.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";
import Contact from "./components/Contact.vue";
import Customes from "./components/customes/Customes.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Projects,
    AboutMe,
    Contact,
    Customes,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  position: relative;
  overflow: hidden;
}

.background-img {
  /* background: url("https://img.freepik.com/foto-gratis/propietario-boutique-moda-mide-vestido-estudio-blanco-negro-generado-ia_188544-11428.jpg?w=1060&t=st=1704578911~exp=1704579511~hmac=57d3da72019c5915cba74bf41ab1d26240066e31079d2d36bd16c13cc7a82272"); */
  background-image: url("@/assets/moda-background.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(2px);
}

body {
  margin: 0;
  padding: 0;
}
</style>
