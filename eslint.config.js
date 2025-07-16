const { defineConfig } = require("eslint/config");
const pluginImport = require("eslint-plugin-import");
const typescript = require("typescript-eslint");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  // Configuração base do Expo
  ...expoConfig,

  // Suporte ao import alias @
  {
    plugins: {
      import: pluginImport,
    },
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      "import/no-unresolved": "error",
      // outras regras que quiser adicionar
    },
  },

  {
    ignores: ["dist/*"],
  },
]);
