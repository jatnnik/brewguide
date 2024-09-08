import { z, defineCollection } from "astro:content"

const brewCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    amountOfWater: z.string().optional(),
    waterTemperature: z.string().optional(),
    caffeineSource: z.enum(["Tee", "Espresso", "Kaffee", "Matcha"]),
    grams: z.string(),
    additionalStuff: z.string().optional(),
    brewTime: z.string().optional(),
    grind: z.string().optional(),
  }),
})

export const collections = {
  brews: brewCollection,
}
