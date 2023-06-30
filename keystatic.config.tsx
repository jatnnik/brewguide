import { config, fields, collection } from "@keystatic/core"

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    brews: collection({
      label: "Brews",
      slugField: "title",
      path: "src/content/brews/*",
      format: { contentField: "instructions" },
      schema: {
        title: fields.slug({ name: { label: "Titel" } }),
        caffeineSource: fields.text({
          label: "Brühmaterial (Espresso, Kaffee, Tee)",
        }),
        grams: fields.text({ label: "Gramm" }),
        grind: fields.text({ label: "Mahlgrad" }),
        amountOfWater: fields.text({ label: "Wasser (ml)" }),
        brewTime: fields.text({ label: "Bezugszeit" }),
        additionalStuff: fields.array(fields.text({ label: "Zutat" }), {
          label: "Zutaten",
          itemLabel: (props) => props.value,
        }),
        instructions: fields.document({
          label: "Anleitung",
          formatting: true,
          dividers: true,
          links: true,
        }),
      },
    }),
  },
})
