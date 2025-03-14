const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const ProductModuleFederationConfigPlugin = withModuleFederationPlugin({
  name: "mf-user",

  exposes: {
    "./AppModule": "./src/bootstrap.ts",
  },

  shared: {
    ...shareAll({
      requiredVersion: "auto",
    }),
  },
});

ProductModuleFederationConfigPlugin.output.publicPath =
  "http://localhost:4201/";
module.exports = ProductModuleFederationConfigPlugin;
