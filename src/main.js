import { createApp } from "vue";
import App from "./App.vue";

import "./index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// import { faWhatsapp } from '@fortawesome/free-regular-svg-icons';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faWhatsapp,
  faPhone,
  faEnvelope,
  faLocationDot,
  faFacebook,
  faTwitter,
  faInstagram
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
