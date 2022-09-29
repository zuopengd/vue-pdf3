import VuePdf3 from "./viewer.js";

const install = function (app) {
  app.component(VuePdf3.name, VuePdf3);
};

export default install;