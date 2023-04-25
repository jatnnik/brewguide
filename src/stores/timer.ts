import { atom } from "nanostores"

export const $isActive = atom(false)
export const $brewTime = atom<string | null>(null)
