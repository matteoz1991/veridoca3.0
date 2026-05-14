import { UserInputData } from "../types";
import { TEMPLATE_CONTENT } from "../translations";

export const fillTemplate = (templateId: string, data: UserInputData, lang: string = 'en'): string => {
  const langKeyMap: Record<string, string> = {
    'se': 'sv', 'uk': 'en', 'us': 'en', 'ca': 'en', 'au': 'en',
    'de': 'de', 'es': 'es', 'fr': 'fr', 'nl': 'nl'
  };

  const currentLangKey = langKeyMap[lang] || 'en';
  // Use consolidated templates, fallback to English
  const templatesForLang = TEMPLATE_CONTENT[currentLangKey] || TEMPLATE_CONTENT['en'];
  
  const rawTemplate = templatesForLang[templateId] || Object.values(templatesForLang)[0];
  
  if (!rawTemplate) {
    return "# ERROR: Template not found\n\nWe apologize, but the selected template is not yet available in your language.";
  }

  let filled = rawTemplate;
  Object.entries(data).forEach(([key, value]) => {
    const placeholder = new RegExp(`{{${key}}}`, 'g');
    filled = filled.replace(placeholder, value || `[${key}]`);
  });

  filled = filled.replace(/{{.*?}}/g, '__________');
  return filled;
};
