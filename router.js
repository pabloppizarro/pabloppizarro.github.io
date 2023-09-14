const Router = {
  init: () => {
    //Ya que es una SPA, la navegacion la manejamos
    //con este custom router, y no por defaul de las etiquetas <a>
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const url = e.target.getAttribute("href");
        Router.go(url);
      });
    });
    //Event handler browser URL navigation
    window.addEventListener("popstate", (e) => {
      Router.go(e.state.route, false);
    });

    //check the initial URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log("going to: ", route);

    if (addToHistory) {
      history.pushState({ route }, "", route);
    }

    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement("landing-page");
        break;

      case "/":
        break;

      case "/":
        break;

      default:
        break;
    }
    if (pageElement) {
      const main = document.querySelector("main");
      main.innerHTML = "";
      main.appendChild(pageElement);
      window.scrollTo({ left: 0, top: 0 });
    }
  },
};

export default Router;
