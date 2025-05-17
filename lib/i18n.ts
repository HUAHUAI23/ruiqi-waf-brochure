export type Locale = 'en' | 'zh';

export const defaultLocale: Locale = 'zh';

export const locales: Locale[] = ['en', 'zh'];

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

// 使用 Record 和递归类型定义字典
export type DictionaryValue = string | string[] | Record<string, any>;
export type Dictionary = Record<string, DictionaryValue>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return import(`../messages/${locale}/common.json`).then(
    (module) => module.default
  );
}

// Helper function to get nested values from a dictionary using a path like "a.b.c"
export function getTranslation(dictionary: Dictionary, path: string, fallback = '') {
  const keys = path.split('.');
  let current: any = dictionary;

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return fallback;
    }
  }

  return typeof current === 'string' ? current : fallback;
}

// Helper function specifically for retrieving arrays from translations
export function getTranslationArray(dictionary: Dictionary, path: string): string[] {
  const keys = path.split('.');
  let current: any = dictionary;

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return [];
    }
  }

  return Array.isArray(current) ? current : [];
} 