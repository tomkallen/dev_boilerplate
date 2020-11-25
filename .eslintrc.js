module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
    serviceworker: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["prettier"],
  ignorePatterns: [
    "node_modules/**",
    ".storybook/**",
    "src/stories/**",
    "*.d.ts",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["prettier", "@typescript-eslint"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
      ],
    },
  ],
}
