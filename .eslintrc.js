module.exports = {
  // eslint-configs
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  // enabling/disabling/changing level of rules
  rules: {
    "class-methods-use-this": "off",
    "import/order": "warn",
    "import/prefer-default-export": "off",
    "no-plusplus": "off",
    "no-restricted-globals": "off",
    "prettier/prettier": [
      "error",
      // configure Prettier for ESLint
      {
        arrowParens: "avoid",
        printWidth: 100,
        singleQuote: true,
        trailingComma: "all",
      },
    ],
  },
};
