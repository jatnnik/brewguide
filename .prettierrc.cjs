module.exports = {
  semi: false,
  trailingComma: "es5",
  printWidth: 80,
  singleQuote: false,
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
