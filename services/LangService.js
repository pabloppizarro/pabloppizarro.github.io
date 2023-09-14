import API from "../API.js";

//TODO: INVESTIGAR COMO TOMAR EL IDIOMA DEL NAVEGADOR.
const LangService = {
  current: "",
  data: {},
  set: (langKey) => {
    //TODO: VAMOS A SETEAR EL IDIOMA POR DEFECTO
    //O EN CASO DE CAMBIARLO
    this.data = API.get(`lang/${langKey}.json`);
  },
  getValue(key) {
    return this.data[key] || "";
  },
};

export default LangService;
