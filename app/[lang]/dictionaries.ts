import 'server-only';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  pl: () => import('@/dictionaries/pl.json').then((module) => module.default),
  ua: () => import('@/dictionaries/ua.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) =>
  ['en', 'ua', 'pl'].includes(locale)
    ? dictionaries[locale as 'en' | 'ua' | 'pl']()
    : dictionaries.en();
