import { z, defineCollection } from "astro:content"

const recipeCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    amountOfWater: z.string().optional(),
    waterTemperature: z.string().optional(),
    caffeineSource: z.enum(["Tee", "Espresso", "Kaffeepulver"]),
    caffeineWeight: z.string(),
    additionalStuff: z.string().optional(),
    brewTime: z.string().optional(),
    grind: z.string().optional(),
  }),
})

export const collections = {
  recipes: recipeCollection,
}
