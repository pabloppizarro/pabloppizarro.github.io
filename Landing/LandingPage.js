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
  }
}

customElements.define("landing-page", LandingPage);
