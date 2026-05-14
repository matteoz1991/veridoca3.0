// Consolidated translations and templates for Veridoca
import { DocumentTemplate } from './types';

export const TRANSLATIONS = {
  en: {
    common: {
      error_generating: "Something went wrong during generation. Please try again.",
      loading: "Loading...",
      back: "Back",
      select: "Select"
    },
    nav: {
      howItWorks: "How it works",
      support: "Support",
      home: "Home"
    },
    hero: {
      title: "Professional Legal Documents",
      subtitle: "Create legally binding contracts in minutes. Free, simple, and secure.",
      cta: "Browse Templates",
      trust: "Trusted by thousands of users worldwide"
    },
    form: {
      back: "Back to library",
      generating: "Generating your document...",
      preparing: "Preparing {{title}}...",
      qualityChecked: "Quality checked",
      tipTitle: "TIP!",
      tipDescription: "Fill in the information as accurately as possible. The more detailed you are, the better the legal protection in the document.",
      sectionTitle: "Contract Information",
      selectOption: "Select option...",
      generate: "Generate Document",
      required: "Please fill out this field."
    },
    fields: {
      date: { placeholder: "yyyy-mm-dd" },
      landlordName: { label: "Landlord Name", placeholder: "First Last" },
      landlordID: { label: "Landlord ID/SSN", placeholder: "YYYYMMDD-XXXX" },
      tenantName: { label: "Tenant Name", placeholder: "First Last" },
      tenantID: { label: "Tenant ID/SSN", placeholder: "YYYYMMDD-XXXX" },
      propertyAddress: { label: "Property Address", placeholder: "Street, City, Zip" },
      rentAmount: { label: "Monthly Rent", placeholder: "e.g. 1000" },
      securityDeposit: { label: "Security Deposit", placeholder: "e.g. 2000" },
      includedInRent: { label: "Included in Rent", placeholder: "Water, Electricity, etc." },
      startDate: { label: "Start Date" },
      endDate: { label: "End Date (if fixed)" },
      partner1Name: { label: "Partner 1 Name" },
      partner1ID: { label: "Partner 1 ID" },
      partner2Name: { label: "Partner 2 Name" },
      partner2ID: { label: "Partner 2 ID" }
    }
  },
  sv: {
    common: {
      error_generating: "Något gick fel vid sammanställningen. Försök igen.",
      loading: "Laddar...",
      back: "Tillbaka",
      select: "Välj"
    },
    nav: {
      howItWorks: "Så funkar det",
      support: "Support",
      home: "Hem"
    },
    hero: {
      title: "Professionella juridiska dokument",
      subtitle: "Skapa juridiskt bindande avtal på några minuter. Gratis, enkelt och säkert.",
      cta: "Utforska mallar",
      trust: "Används av tusentals användare varje månad"
    },
    form: {
      back: "Tillbaka till biblioteket",
      generating: "Genererar ditt dokument...",
      preparing: "Förbereder {{title}}...",
      qualityChecked: "Kvalitetsgranskad",
      tipTitle: "TIPS!",
      tipDescription: "Fyll i informationen så noggrant som möjligt. Ju mer detaljerad du är, desto bättre blir det juridiska skyddet i dokumentet.",
      sectionTitle: "Avtalsinformation",
      selectOption: "Välj alternativ...",
      generate: "Generera dokument",
      required: "Fyll i det här fältet."
    },
    fields: {
      date: { placeholder: "ÅÅÅÅ-MM-DD" },
      landlordName: { label: "Uthyrarens namn", placeholder: "Förnamn Efternamn" },
      landlordID: { label: "Uthyrarens personnummer", placeholder: "ÅÅÅÅMMDD-XXXX" },
      tenantName: { label: "Hyresgästens namn", placeholder: "Förnamn Efternamn" },
      tenantID: { label: "Hyresgästens personnummer", placeholder: "ÅÅÅÅMMDD-XXXX" },
      propertyAddress: { label: "Gatuadress", placeholder: "Gata, Stad, Postnummer" },
      rentAmount: { label: "Månadshyra", placeholder: "t.ex. 5000" },
      securityDeposit: { label: "Deposition", placeholder: "t.ex. 5000" },
      includedInRent: { label: "Ingår i hyran", placeholder: "El, Bredband, Vatten..." },
      startDate: { label: "Startdatum" },
      endDate: { label: "Slutdatum (om bestämd tid)" }
    }
  }
  // ... other languages can be added here or in a separate file if this gets too big
};

export const TEMPLATE_CONTENT: Record<string, Record<string, string>> = {
  en: {
    '1': "# SUBLEASE AGREEMENT\n\nThis agreement is made between {{landlordName}} and {{tenantName}} regarding the property at {{propertyAddress}}...",
    '3': "# COHABITATION AGREEMENT\n\nWe, {{partner1Name}} and {{partner2Name}}, have agreed on the following regarding our joint home..."
  },
  sv: {
    '1': "# ANDRAHANDSAVTAL\n\nMellan {{landlordName}} och {{tenantName}} har följande avtal träffats gällande lägenheten på {{propertyAddress}}...",
    '3': "# SAMBOAVTAL\n\nVi, {{partner1Name}} och {{partner2Name}}, har idag kommit överens om följande gällande vår gemensamma bostad..."
  }
};
