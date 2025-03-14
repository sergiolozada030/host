const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const ProductModuleFederationConfigPlugin = withModuleFederationPlugin({
  name: "mf-products",

  exposes: {
    "./AppComponent": "./src/app/app.component.ts",
  },

  shared: {
    ...shareAll({
      requiredVersion: "auto",
    }),
  },
});

ProductModuleFederationConfigPlugin.output.publicPath =
  "http://localhost:4202/";
module.exports = ProductModuleFederationConfigPlugin;
