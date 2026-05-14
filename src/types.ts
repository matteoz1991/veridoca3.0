export enum DocumentCategory {
  FORETAG = 'BUSINESS',
  PRIVAT = 'PERSONAL',
  FASTIGHET = 'REAL_ESTATE',
  ANSTALLNING = 'EMPLOYMENT',
  FAMILJ = 'FAMILY'
}

export interface DocumentTemplate {
  id: string;
  title: string;
  description: string;
  category: DocumentCategory;
  price: number;
  icon: string;
  formFields: FormField[];
  popular?: boolean;
  countries?: string[]; // e.g., ['se', 'uk']
}

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'date' | 'email' | 'number' | 'textarea' | 'select';
  placeholder?: string;
  required: boolean;
  options?: string[]; // For select inputs
}

export interface UserInputData {
  [key: string]: string;
}

export interface GeneratedDocument {
  content: string; // Markdown or HTML content
  title: string;
  date: string;
}