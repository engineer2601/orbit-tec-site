import { ru } from './translations/ru'
import { en } from './translations/en'
import { sr } from './translations/sr'

export type Lang = 'ru' | 'en' | 'sr'
export type Translations = typeof ru

export const translations: Record<Lang, Translations> = { ru, en, sr }

export const defaultLang: Lang = 'ru'
export const supportedLangs: Lang[] = ['ru', 'en', 'sr']

export const langLabels: Record<Lang, string> = {
  ru: 'RU',
  en: 'EN',
  sr: 'SR',
}

export function getT(lang: Lang): Translations {
  return translations[lang] ?? translations[defaultLang]
}

export function isValidLang(lang: string): lang is Lang {
  return supportedLangs.includes(lang as Lang)
}
