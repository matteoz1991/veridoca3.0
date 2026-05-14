import { DocumentCategory, DocumentTemplate } from "./types";
import React from 'react';
import { 
  Briefcase, 
  Home, 
  Heart, 
  FileText, 
  Building2, 
  Scroll, 
  Users, 
  Lock, 
  PenTool,
  Scale,
  Car,
  Hammer,
  ShieldAlert,
  FileBadge
} from 'lucide-react';

// Common price for all documents (Free utility)
const FIXED_PRICE = 0;

export const DOCUMENT_TEMPLATES: DocumentTemplate[] = [
  // --- FASTIGHET & BOENDE (SE) ---
  {
    id: '1',
    title: 'Andrahandskontrakt Bostad',
    description: 'Tryggt avtal för uthyrning av bostadsrätt eller hyresrätt i andra hand.',
    category: DocumentCategory.FASTIGHET,
    price: FIXED_PRICE,
    icon: 'home',
    popular: true,
    countries: ['se', 'en', 'uk', 'us', 'de', 'es', 'fr', 'ca', 'au', 'nl'],
    formFields: [
      { id: 'landlordName', label: 'Uthyrarens namn', type: 'text', required: true, placeholder: 'Förnamn Efternamn' },
      { id: 'landlordID', label: 'Uthyrarens personnummer', type: 'text', required: true, placeholder: 'ÅÅÅÅMMDD-XXXX' },
      { id: 'tenantName', label: 'Hyresgästens namn', type: 'text', required: true, placeholder: 'Förnamn Efternamn' },
      { id: 'tenantID', label: 'Hyresgästens personnummer', type: 'text', required: true, placeholder: 'ÅÅÅÅMMDD-XXXX' },
      { id: 'propertyAddress', label: 'Bostadens adress', type: 'text', required: true, placeholder: 'Gatuadress, Postnummer Ort' },
      { id: 'rentAmount', label: 'Hyra (SEK/månad)', type: 'number', required: true, placeholder: 't.ex. 8000' },
      { id: 'securityDeposit', label: 'Deposition (SEK)', type: 'number', required: false, placeholder: 't.ex. 8000' },
      { id: 'startDate', label: 'Inflyttningsdatum', type: 'date', required: true },
      { id: 'endDate', label: 'Utflyttningsdatum', type: 'date', required: true },
      { id: 'includedInRent', label: 'Ingår i hyran', type: 'textarea', required: false, placeholder: 'T.ex. El, bredband, vatten...' },
    ]
  },
  
  // --- INTERNATIONAL TEMPLATES (UK/US) ---
  {
    id: 'uk-1',
    title: 'Freelance Contract Template (UK)',
    description: 'A professional contract for freelancers and contractors in the UK.',
    category: DocumentCategory.FORETAG,
    price: FIXED_PRICE,
    icon: 'briefcase',
    popular: true,
    countries: ['uk'],
    formFields: [
      { id: 'clientName', label: 'Client Name', type: 'text', required: true },
      { id: 'freelancerName', label: 'Freelancer Name', type: 'text', required: true },
      { id: 'projectScope', label: 'Project Scope', type: 'textarea', required: true },
      { id: 'paymentTerms', label: 'Payment Terms', type: 'text', required: true, placeholder: 'e.g., Net 30' },
    ]
  },
  {
    id: 'us-1',
    title: 'Independent Contractor Agreement (US)',
    description: 'Standard agreement for hiring independent contractors in the USA.',
    category: DocumentCategory.FORETAG,
    price: FIXED_PRICE,
    icon: 'briefcase',
    popular: true,
    countries: ['us'],
    formFields: [
      { id: 'companyName', label: 'Company Name', type: 'text', required: true },
      { id: 'contractorName', label: 'Contractor Name', type: 'text', required: true },
      { id: 'services', label: 'Description of Services', type: 'textarea', required: true },
      { id: 'compensation', label: 'Compensation', type: 'text', required: true },
    ]
  },
  
  // --- FAMILJ & RELATIONER (SE) ---
  {
    id: '3',
    title: 'Samboavtal',
    description: 'Reglera vad som händer med bostad och bohag vid en separation.',
    category: DocumentCategory.FAMILJ,
    price: FIXED_PRICE,
    icon: 'heart',
    popular: true,
    countries: ['se', 'en', 'uk', 'us', 'de', 'es', 'fr', 'ca', 'au', 'nl'],
    formFields: [
      { id: 'partner1Name', label: 'Sambo 1 Namn', type: 'text', required: true },
      { id: 'partner1ID', label: 'Sambo 1 Personnummer', type: 'text', required: true, placeholder: 'ÅÅÅÅMMDD-XXXX' },
      { id: 'partner2Name', label: 'Sambo 2 Namn', type: 'text', required: true },
      { id: 'partner2ID', label: 'Sambo 2 Personnummer', type: 'text', required: true, placeholder: 'ÅÅÅÅMMDD-XXXX' },
      { id: 'propertyAddress', label: 'Gemensam adress', type: 'text', required: true },
      { id: 'agreementType', label: 'Vad ska avtalas?', type: 'select', required: true, options: ['Sambolagen ska inte gälla alls', 'Viss egendom ska undantas'] },
    ]
  },
  {
    id: '16',
    title: 'Äktenskapsförord',
    description: 'Bestäm vad som ska vara enskild egendom i äktenskapet.',
    category: DocumentCategory.FAMILJ,
    price: FIXED_PRICE,
    icon: 'heart', // Using heart for marriage context too
    popular: true,
    countries: ['se', 'en', 'uk', 'us', 'de', 'es', 'fr', 'ca', 'au', 'nl'],
    formFields: [
      { id: 'spouse1', label: 'Make 1 Namn', type: 'text', required: true },
      { id: 'spouse1ID', label: 'Make 1 Personnummer', type: 'text', required: true, placeholder: 'ÅÅÅÅMMDD-XXXX' },
      { id: 'spouse2', label: 'Make 2 Namn', type: 'text', required: true },
      { id: 'spouse2ID', label: 'Make 2 Personnummer', type: 'text', required: true, placeholder: 'ÅÅÅÅMMDD-XXXX' },
      { id: 'scope', label: 'Omfattning', type: 'select', required: true, options: ['All egendom ska vara enskild', 'Allt vi ägde innan giftemål ska vara enskilt', 'Specifik egendom ska vara enskild'] },
      { id: 'specifics', label: 'Specifikation (om vald ovan)', type: 'textarea', required: false, placeholder: 'T.ex. Sommarstugan på adress X...' },
    ]
  },
  {
    id: '5',
    title: 'Testamente',
    description: 'Säkerställ att din kvarlåtenskap fördelas enligt din vilja.',
    category: DocumentCategory.FAMILJ,
    price: FIXED_PRICE,
    icon: 'scroll',
    popular: true,
    countries: ['se', 'en', 'uk', 'us', 'de', 'es', 'fr', 'ca', 'au', 'nl'],
    formFields: [
      { id: 'testatorName', label: 'Testatorns namn', type: 'text', required: true },
      { id: 'testatorID', label: 'Personnummer', type: 'text', required: true, placeholder: 'ÅÅÅÅMMDD-XXXX' },
      { id: 'beneficiaries', label: 'Vilka ska ärva?', type: 'textarea', required: true, placeholder: 'Namn på personer eller organisationer...' },
      { id: 'specificGifts', label: 'Specifika legat (om några)', type: 'textarea', required: false, placeholder: 'T.ex. Min klocka till X...' },
      { id: 'privateProperty', label: 'Ska arvet vara enskild egendom?', type: 'select', required: true, options: ['Ja', 'Nej'] },
    ]
  },
  {
    id: '6',
    title: 'Gåvobrev',
    description: 'Dokument för att ge bort egendom, t.ex. fastighet eller pengar, som gåva.',
    category: DocumentCategory.FAMILJ,
    price: FIXED_PRICE,
    icon: 'gift',
    countries: ['se', 'en', 'uk', 'us', 'de', 'es', 'fr', 'ca', 'au', 'nl'],
    formFields: [
      { id: 'giverName', label: 'Givarens namn', type: 'text', required: true },
      { id: 'giverID', label: 'Givarens Pers.nr', type: 'text', required: true },
      { id: 'receiverName', label: 'Mottagarens namn', type: 'text', required: true },
      { id: 'receiverID', label: 'Mottagarens Pers.nr', type: 'text', required: true },
      { id: 'description', label: 'Vad består gåvan av?', type: 'textarea', required: true, placeholder: 'T.ex. Fastigheten Beteckning 1:1 eller 100 000 kr...' },
      { id: 'conditions', label: 'Villkor', type: 'textarea', required: false, placeholder: 'T.ex. Gåvan ska vara enskild egendom' },
    ]
  },
  {
    id: '17',
    title: 'Bodelningsavtal',
    description: 'Avtal för att dela upp egendom vid separation eller skilsmässa.',
    category: DocumentCategory.FAMILJ,
    price: FIXED_PRICE,
    icon: 'scale',
    countries: ['se', 'en', 'uk', 'us', 'de', 'es', 'fr', 'ca', 'au', 'nl'],
    formFields: [
      { id: 'party1', label: 'Part 1 Namn', type: 'text', required: true },
      { id: 'party1ID', label: 'Part 1 Pers.nr', type: 'text', required: true },
      { id: 'party2', label: 'Part 2 Namn', type: 'text', required: true },
      { id: 'party2ID', label: 'Part 2 Pers.nr', type: 'text', required: true },
      { id: 'date', label: 'Brytdag (när ansökan gjordes)', type: 'date', required: true },
      { id: 'property', label: 'Hur fördelas egendomen?', type: 'textarea', required: true, placeholder: 'Part 1 behåller bostaden och löser ut Part 2 med X kr...' },
    ]
  },

  // --- FÖRETAG & AFFÄRER ---
  {
    id: '18',
    title: 'Aktieägaravtal (Enkelt)',
    description: 'Reglera samarbetet mellan delägare i ett aktiebolag.',
    category: DocumentCategory.FORETAG,
    price: FIXED_PRICE,
    icon: 'users',
    popular: true,
    countries: ['se', 'en', 'uk', 'us', 'de', 'es', 'fr', 'ca', 'au', 'nl'],
    formFields: [
      { id: 'company', label: 'Bolagets namn', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Bolagets Org.nr', type: 'text', required: true, placeholder: '55XXXX-XXXX' },
      { id: 'owners', label: 'Ägare (Namn och ägarandel)', type: 'textarea', required: true, placeholder: 'Anna Andersson (YYMMDD-XXXX) - 50%, Bertil...' },
      { id: 'roles', label: 'Arbetsfördelning', type: 'textarea', required: true },
      { id: 'vesting', label: 'Vesting (Tid innan man får fullt ägande)', type: 'select', required: true, options: ['Ingen vesting', '3 år', '4 år'] },
      { id: 'hembud', label: 'Hembudsklausul?', type: 'select', required: true, options: ['Ja, aktier ska först erbjudas övriga ägare', 'Nej'] },
    ]
  },
  {
    id: '8',
    title: 'Sekretessavtal (NDA)',
    description: 'Skydda din affärshemligheter och känslig information.',
    category: DocumentCategory.FORETAG,
    price: FIXED_PRICE,
    icon: 'lock',
    countries: ['se', 'en', 'uk', 'us', 'de', 'es', 'fr', 'ca', 'au', 'nl'],
    formFields: [
      { id: 'party1', label: 'Part 1 (Ägare av info)', type: 'text', required: true },
      { id: 'party1ID', label: 'Part 1 Org.nr/Pers.nr', type: 'text', required: true },
      { id: 'party2', label: 'Part 2 (Mottagare)', type: 'text', required: true },
      { id: 'party2ID', label: 'Part 2 Org.nr/Pers.nr', type: 'text', required: true },
      { id: 'purpose', label: 'Syftet med informationsdelning', type: 'textarea', required: true },
      { id: 'duration', label: 'Giltighetstid (år)', type: 'number', required: true, placeholder: '3' },
      { id: 'penalty', label: 'Vitesbelopp vid brott (SEK)', type: 'number', required: false, placeholder: '50000' },
    ]
  },
  {
    id: '9',
    title: 'Konsultavtal',
    description: 'Avtal mellan uppdragsgivare och konsult/frilansare.',
    category: DocumentCategory.FORETAG,
    price: FIXED_PRICE,
    icon: 'pen-tool',
    countries: ['se', 'en', 'uk', 'us', 'de', 'es', 'fr', 'ca', 'au', 'nl'],
    formFields: [
      { id: 'clientName', label: 'Uppdragsgivare', type: 'text', required: true },
      { id: 'clientOrgNum', label: 'Uppdragsgivare Org.nr', type: 'text', required: true },
      { id: 'consultantName', label: 'Konsultbolag', type: 'text', required: true },
      { id: 'consultantOrgNum', label: 'Konsultbolag Org.nr', type: 'text', required: true },
      { id: 'assignment', label: 'Uppdragsbeskrivning', type: 'textarea', required: true },
      { id: 'hourlyRate', label: 'Timpris (exkl. moms)', type: 'number', required: true },
      { id: 'startDate', label: 'Startdatum', type: 'date', required: true },
    ]
  },
  {
    id: '13',
    title: 'Styrelseprotokoll',
    description: 'Mall för styrelsemöte i mindre aktiebolag.',
    category: DocumentCategory.FORETAG,
    price: FIXED_PRICE,
    icon: 'building',
    countries: ['se', 'en', 'uk', 'us', 'de', 'es', 'fr', 'ca', 'au', 'nl'],
    formFields: [
      { id: 'companyName', label: 'Bolagets namn', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Bolagets Org.nr', type: 'text', required: true },
      { id: 'meetingDate', label: 'Datum för mötet', type: 'date', required: true },
      { id: 'chairperson', label: 'Mötesordförande (Namn)', type: 'text', required: true },
      { id: 'secretary', label: 'Protokollförare (Namn)', type: 'text', required: true },
      { id: 'adjuster', label: 'Justeringsperson (Namn)', type: 'text', required: true },
      { id: 'attendees', label: 'Övriga närvarande', type: 'textarea', required: true, placeholder: 'Lista på övriga deltagare...' },
      { id: 'decisions', label: 'Beslut som fattades', type: 'textarea', required: true, placeholder: 'Punkt 1, Punkt 2...' },
    ]
  },
  {
    id: '19',
    title: 'Bolagsordning (Standard)',
    description: 'Grundläggande regelverk för ett aktiebolag.',
    category: DocumentCategory.FORETAG,
    price: FIXED_PRICE,
    icon: 'building',
    countries: ['se', 'en', 'uk', 'us', 'de', 'es', 'fr', 'ca', 'au', 'nl'],
    formFields: [
      { id: 'company', label: 'Bolagsnamn', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Organisationsnummer', type: 'text', required: false, placeholder: 'Om bolaget redan är bildat' },
      { id: 'seat', label: 'Styrelsens säte (Kommun)', type: 'text', required: true },
      { id: 'business', label: 'Verksamhetsbeskrivning', type: 'textarea', required: true },
      { id: 'capital', label: 'Aktiekapital (min-max)', type: 'text', required: true, placeholder: '25 000 - 100 000 kr' },
    ]
  },

  // --- ARBETE & HR ---
  {
    id: '2',
    title: 'Anställningsavtal',
    description: 'Heltäckande anställningsavtal för tillsvidare- eller visstidsanställning.',
    category: DocumentCategory.ANSTALLNING,
    price: FIXED_PRICE,
    icon: 'briefcase',
    popular: true,
    countries: ['se', 'en', 'uk', 'us', 'de', 'es', 'fr', 'ca', 'au', 'nl'],
    formFields: [
      { id: 'companyName', label: 'Arbetsgivare (Företag)', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Arbetsgivarens Org.nr', type: 'text', required: true, placeholder: '55XXXX-XXXX' },
      { id: 'employeeName', label: 'Arbetstagare', type: 'text', required: true },
      { id: 'employeeID', label: 'Arbetstagarens Pers.nr', type: 'text', required: true, placeholder: 'ÅÅÅÅMMDD-XXXX' },
      { id: 'jobTitle', label: 'Befattning', type: 'text', required: true },
      { id: 'salary', label: 'Månadslön (SEK)', type: 'number', required: true },
      { id: 'employmentType', label: 'Anställningsform', type: 'select', required: true, options: ['Tillsvidareanställning', 'Provanställning (6 mån)', 'Visstidsanställning'] },
      { id: 'startDate', label: 'Tillträdesdag', type: 'date', required: true },
      { id: 'vacationDays', label: 'Semesterdagar per år', type: 'number', required: true, placeholder: '25' },
    ]
  },
  {
    id: '12',
    title: 'Arbetsgivarintyg',
    description: 'Intyg som bekräftar anställningstid och arbetsuppgifter.',
    category: DocumentCategory.ANSTALLNING,
    price: FIXED_PRICE,
    icon: 'scroll',
    countries: ['se', 'en', 'uk', 'us', 'de', 'es', 'fr', 'ca', 'au', 'nl'],
    formFields: [
      { id: 'companyName', label: 'Arbetsgivare', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Arbetsgivarens Org.nr', type: 'text', required: true },
      { id: 'employeeName', label: 'Arbetstagare', type: 'text', required: true },
      { id: 'employeeID', label: 'Personnummer', type: 'text', required: true },
      { id: 'periodStart', label: 'Anställd fr.o.m.', type: 'date', required: true },
      { id: 'periodEnd', label: 'Anställd t.o.m.', type: 'date', required: true },
      { id: 'duties', label: 'Huvudsakliga arbetsuppgifter', type: 'textarea', required: true },
      { id: 'reason', label: 'Orsak till slut', type: 'text', required: false },
    ]
  },
  {
    id: '20',
    title: 'Uppsägning av anställd',
    description: 'Formellt besked om uppsägning från arbetsgivarens sida.',
    category: DocumentCategory.ANSTALLNING,
    price: FIXED_PRICE,
    icon: 'shield-alert',
    countries: ['se', 'en', 'uk', 'us', 'de', 'es', 'fr', 'ca', 'au', 'nl'],
    formFields: [
      { id: 'companyName', label: 'Arbetsgivare', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Arbetsgivarens Org.nr', type: 'text', required: true },
      { id: 'employeeName', label: 'Arbetstagare', type: 'text', required: true },
      { id: 'employeeID', label: 'Arbetstagarens Pers.nr', type: 'text', required: true },
      { id: 'reason', label: 'Orsak', type: 'select', required: true, options: ['Arbetsbrist', 'Personliga skäl'] },
      { id: 'lastDay', label: 'Sista anställningsdag', type: 'date', required: true },
      { id: 'contact', label: 'Kontaktperson för frågor', type: 'text', required: true },
    ]
  },

  // --- PRIVAT & ÖVRIGT ---
  {
    id: '4',
    title: 'Skuldebrev',
    description: 'Reglera privatlån mellan privatpersoner.',
    category: DocumentCategory.PRIVAT,
    price: FIXED_PRICE,
    icon: 'file-text',
    countries: ['se', 'en', 'uk', 'us', 'de', 'es', 'fr', 'ca', 'au', 'nl'],
    formFields: [
      { id: 'lenderName', label: 'Långivare', type: 'text', required: true },
      { id: 'lenderID', label: 'Långivare Pers.nr', type: 'text', required: true },
      { id: 'borrowerName', label: 'Låntagare', type: 'text', required: true },
      { id: 'borrowerID', label: 'Låntagare Pers.nr', type: 'text', required: true },
      { id: 'amount', label: 'Lånebelopp (SEK)', type: 'number', required: true },
      { id: 'interest', label: 'Ränta (%)', type: 'number', required: true },
      { id: 'repaymentDate', label: 'Sista betalningsdag', type: 'date', required: true },
    ]
  },
  {
    id: '10',
    title: 'Fullmakt',
    description: 'Ge någon rätten att företräda dig i vissa ärenden.',
    category: DocumentCategory.PRIVAT,
    price: FIXED_PRICE,
    icon: 'file-badge',
    countries: ['se', 'en', 'uk', 'us', 'de', 'es', 'fr', 'ca', 'au', 'nl'],
    formFields: [
      { id: 'giverName', label: 'Fullmaktsgivare', type: 'text', required: true },
      { id: 'giverID', label: 'Fullmaktsgivare Pers.nr', type: 'text', required: true },
      { id: 'receiverName', label: 'Fullmaktshavare (Ombud)', type: 'text', required: true },
      { id: 'receiverID', label: 'Fullmaktshavare Pers.nr', type: 'text', required: true },
      { id: 'scope', label: 'Vad omfattar fullmakten?', type: 'textarea', required: true, placeholder: 'T.ex. hämta paket, sälja bil, bankärenden...' },
      { id: 'validUntil', label: 'Giltig t.o.m.', type: 'date', required: true },
    ]
  },
  {
    id: '21',
    title: 'Framtidsfullmakt',
    description: 'Bestäm vem som ska ta hand om dina angelägenheter om du blir sjuk.',
    category: DocumentCategory.PRIVAT,
    price: FIXED_PRICE,
    icon: 'shield-check',
    popular: true,
    countries: ['se', 'en', 'uk', 'us', 'de', 'es', 'fr', 'ca', 'au', 'nl'],
    formFields: [
      { id: 'giverName', label: 'Fullmaktsgivare (Du)', type: 'text', required: true },
      { id: 'giverID', label: 'Ditt Personnummer', type: 'text', required: true },
      { id: 'receiverName', label: 'Fullmaktshavare (Den du litar på)', type: 'text', required: true },
      { id: 'receiverID', label: 'Fullmaktshavarens Personnummer', type: 'text', required: true },
      { id: 'financial', label: 'Ekonomiska angelägenheter?', type: 'select', required: true, options: ['Ja', 'Nej'] },
      { id: 'personal', label: 'Personliga angelägenheter?', type: 'select', required: true, options: ['Ja', 'Nej'] },
      { id: 'conditions', label: 'Övriga villkor', type: 'textarea', required: false },
    ]
  },
  {
    id: '22',
    title: 'Köpekontrakt Fordon',
    description: 'Avtal vid köp/sälj av begagnad bil, båt eller MC mellan privatpersoner.',
    category: DocumentCategory.PRIVAT,
    price: FIXED_PRICE,
    icon: 'car',
    countries: ['se', 'en', 'uk', 'us', 'de', 'es', 'fr', 'ca', 'au', 'nl'],
    formFields: [
      { id: 'seller', label: 'Säljare', type: 'text', required: true },
      { id: 'sellerID', label: 'Säljare Pers.nr', type: 'text', required: true },
      { id: 'buyer', label: 'Köpare', type: 'text', required: true },
      { id: 'buyerID', label: 'Köpare Pers.nr', type: 'text', required: true },
      { id: 'vehicle', label: 'Fordon (Märke/Modell)', type: 'text', required: true },
      { id: 'regNr', label: 'Registreringsnummer', type: 'text', required: true },
      { id: 'price', label: 'Pris (SEK)', type: 'number', required: true },
      { id: 'condition', label: 'Skick/Fel', type: 'textarea', required: false, placeholder: 'Säljes i befintligt skick. Kända fel: ...' },
    ]
  }
];

export const getIcon = (name: string, className: string = "w-6 h-6") => {
  switch (name) {
    case 'home': return <Home className={className} />;
    case 'briefcase': return <Briefcase className={className} />;
    case 'heart': return <Heart className={className} />;
    case 'building': return <Building2 className={className} />;
    case 'scroll': return <Scroll className={className} />;
    case 'users': return <Users className={className} />;
    case 'lock': return <Lock className={className} />;
    case 'pen-tool': return <PenTool className={className} />;
    case 'gift': return <Heart className={className} />;
    case 'scale': return <Scale className={className} />;
    case 'car': return <Car className={className} />;
    case 'hammer': return <Hammer className={className} />;
    case 'shield-alert': return <ShieldAlert className={className} />;
    case 'shield-check': return <ShieldAlert className={className} />; // Reuse shield
    case 'file-badge': return <FileBadge className={className} />;
    case 'file-minus': return <FileText className={className} />;
    default: return <FileText className={className} />;
  }
};