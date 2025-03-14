const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const HostConfigModuleFederationPlugin = withModuleFederationPlugin({
  remotes: {
    products: "http://localhost:4201/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      requiredVersion: "auto",
    }),
  },
});

HostConfigModuleFederationPlugin.output.publicPath = "http://localhost:4200/";
module.exports = HostConfigModuleFederationPlugin;
