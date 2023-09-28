import initCanvasArt from "../js/art.js";
import { carousel } from "../js/banner.js";

var IMAGES = [
  "./assets/imgs/mendoza/mendoza_0_s4egmr/mendoza_0_s4egmr_c_scale,w_811.jpg",
  "./assets/imgs/mendoza/main-mendoza_jfuf3k/main-mendoza_jfuf3k_c_scale,w_814.jpg",
  "./assets/imgs/mendoza/Bodega-Andeluna-1_ug4kcy/Bodega-Andeluna-1_ug4kcy_c_scale,w_743.jpg",
];

export class LandingPage extends HTMLElement {
  constructor() {
    super();

    //shadow DOM
    this.root = this.attachShadow({ mode: "open" });
    this.root.injectStyles("./Landing/LandingPage.css");
  }
  connectedCallback() {
    //OBTENEMOS LA PLANTILLA A INSTANCIAR
    const template = document.getElementById("landing-page-template");
    const content = template.content.cloneNode(true);
    //Inyectamos el nuevo componente en el DOM
    this.root.appendChild(content);
    // initCanvasArt(this.root);

    const carouselContainer = this.root.getElementById("carousel");
    carousel(document, carouselContainer, IMAGES, 3000);
  }
}

customElements.define("landing-page", LandingPage);
