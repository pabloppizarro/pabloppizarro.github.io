import Router from "./router.js";

//Link Web Componentes
import { LandingPage } from "./Landing/LandingPage.js";
//****** */

var options = {
  once: true,
  passive: true,
};
window.app = {};
app.router = Router;
// Este evento va a ser disparado cuando el DOM este listo para ser manipulado
window.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("Hi there");
    // loadData();
    Router.init();
  },
  options
);

//CUSTOM EVENTS

//Bindings
ShadowRoot.prototype.injectStyles = function (path) {
  const styles = document.createElement("style");
  this.appendChild(styles);

  //IIFE
  (async function () {
    const req = await fetch(path);
    const css = await req.text();
    styles.textContent = css;
  })();

  return styles;
};
