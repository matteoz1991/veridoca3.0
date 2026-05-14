import React, { useState, useEffect } from 'react';
import { Globe, X, Check, Cookie, Shield, MessageCircle, Info, Home, FileText, ChevronRight, Menu, ExternalLink } from 'lucide-react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

// --- BUTTON ---
export const Button = ({ children, onClick, className = '', type = 'button', variant = 'primary', disabled = false }: any) => {
  const baseStyles = "px-6 py-3 rounded-xl font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  const variants: any = {
    primary: "bg-amber-500 hover:bg-amber-600 text-brand-dark shadow-lg shadow-amber-500/20",
    secondary: "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700",
    outline: "bg-transparent border-2 border-slate-700 hover:border-amber-500 text-slate-300 hover:text-white"
  };
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// --- HEADER ---
export const Header = ({ onHome, onHowItWorks, onSupport }: any) => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'se', label: 'Sverige (SE)', flag: '🇸🇪' },
    { code: 'en', label: 'Global (EN)', flag: '🌐' },
    { code: 'uk', label: 'United Kingdom', flag: '🇬🇧' },
    { code: 'us', label: 'United States', flag: '🇺🇸' },
    { code: 'de', label: 'Deutschland', flag: '🇩🇪' },
    { code: 'es', label: 'España', flag: '🇪🇸' },
    { code: 'fr', label: 'France', flag: '🇫🇷' },
    { code: 'ca', label: 'Canada', flag: '🇨🇦' },
    { code: 'au', label: 'Australia', flag: '🇦🇺' },
    { code: 'nl', label: 'Nederland', flag: '🇳🇱' }
  ];

  const currentLangObj = languages.find(l => l.code === (lang || 'en')) || languages[1];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-lg border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <button onClick={onHome} className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:rotate-6 transition-transform">
              <Shield className="w-6 h-6 text-brand-dark" />
            </div>
            <span className="text-2xl font-serif font-bold text-white tracking-tight">Veridoca</span>
          </button>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={onHowItWorks} className="text-slate-400 hover:text-white font-medium transition-colors text-sm">{t('nav.howItWorks')}</button>
            <button onClick={onSupport} className="text-slate-400 hover:text-white font-medium transition-colors text-sm">{t('nav.support')}</button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <button className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 px-3 py-2 rounded-lg text-sm text-slate-300 transition-all">
              <span>{currentLangObj.flag}</span>
              <span className="hidden sm:inline">{currentLangObj.code.toUpperCase()}</span>
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-2 grid grid-cols-1 gap-1">
              {languages.map(l => (
                <button key={l.code} onClick={() => navigate(`/${l.code}`)} className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800 rounded-lg text-xs text-slate-400 hover:text-white transition-colors">
                  <span>{l.flag}</span> {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// --- HERO ---
export const Hero = ({ onBrowse }: any) => {
  const { t } = useTranslation();
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl pointer-events-none opacity-50"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 text-xs font-bold uppercase tracking-widest mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> {t('hero.trust')}
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
          {t('hero.title')}
        </h1>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={onBrowse} className="w-full sm:w-auto h-14 px-10 text-lg">
            {t('hero.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};

// --- FOOTER ---
export const Footer = ({ onLegalView, onSupport, onHowItWorks }: any) => {
  const { t } = useTranslation();
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-brand-dark" />
              </div>
              <span className="text-xl font-serif font-bold text-white tracking-tight">Veridoca</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              Making professional legal documents accessible to everyone, for free.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4">
              <li><button onClick={onHowItWorks} className="text-slate-500 hover:text-white transition-colors text-sm">{t('nav.howItWorks')}</button></li>
              <li><button onClick={onSupport} className="text-slate-500 hover:text-white transition-colors text-sm">{t('nav.support')}</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onLegalView('terms')} className="text-slate-500 hover:text-white transition-colors text-sm">Terms of Service</button></li>
              <li><button onClick={() => onLegalView('privacy')} className="text-slate-500 hover:text-white transition-colors text-sm">Privacy Policy</button></li>
            </ul>
          </div>
        </div>
        <div className="text-center border-t border-slate-900 pt-10">
          <p className="text-slate-600 text-xs">© {new Date().getFullYear()} Veridoca Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// --- COOKIE BANNER ---
export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) setIsVisible(true);
  }, []);
  if (!isVisible) return null;
  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-1/2 md:-translate-x-1/2 md:max-w-2xl z-[100] animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-center gap-6">
        <div className="bg-amber-500/10 p-3 rounded-xl"><Cookie className="w-6 h-6 text-amber-500" /></div>
        <div className="flex-grow text-center md:text-left">
          <h4 className="text-white font-bold mb-1">We respect your privacy</h4>
          <p className="text-slate-400 text-xs leading-relaxed">We use cookies to enhance your experience and analyze traffic. By clicking "Accept", you agree to our use of cookies.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <Button variant="secondary" className="flex-1 text-xs py-2" onClick={() => setIsVisible(false)}>Decline</Button>
          <Button className="flex-1 text-xs py-2" onClick={() => { localStorage.setItem('cookie-consent', 'true'); setIsVisible(false); }}>Accept All</Button>
        </div>
      </div>
    </div>
  );
};

// --- COUNTRY DETECTOR ---
export const CountryDetector = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    const countryMap: Record<string, string> = { 'sv': 'se', 'de': 'de', 'es': 'es', 'fr': 'fr', 'nl': 'nl' };
    const detected = countryMap[browserLang];
    if (detected && detected !== (lang || 'en') && !sessionStorage.getItem(`dismiss_${browserLang}`)) {
      setSuggestion(browserLang);
      setTimeout(() => setIsVisible(true), 1500);
    }
  }, [lang]);
  if (!suggestion || !isVisible) return null;
  return (
    <div className="fixed bottom-6 right-6 w-96 z-[100] animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="bg-brand-dark/95 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-5 shadow-2xl">
        <h3 className="text-white font-semibold mb-2">Switch to your local version?</h3>
        <p className="text-slate-400 text-sm mb-5 leading-relaxed">We noticed you're visiting from {suggestion.toUpperCase()}.</p>
        <div className="flex gap-3">
          <Button className="flex-1 text-xs" onClick={() => navigate(`/${suggestion === 'sv' ? 'se' : suggestion}`)}>Switch</Button>
          <Button variant="secondary" className="flex-1 text-xs" onClick={() => { setIsVisible(false); sessionStorage.setItem(`dismiss_${suggestion}`, 'true'); }}>Stay here</Button>
        </div>
      </div>
    </div>
  );
};

// --- AD SLOT ---
export const AdSlot = ({ id, className = "" }: { id: string, className?: string }) => (
  <div className={`bg-slate-800/20 border border-slate-800 rounded-lg flex items-center justify-center p-4 text-[10px] text-slate-600 uppercase tracking-widest ${className}`}>
    Annons - AdSense Placeholder [${id}]
  </div>
);

// --- SEO METADATA ---
export const SEOMetadata = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const baseUrl = "https://veridoca.com";
  const currentPath = location.pathname;
  const locales = ['se', 'uk', 'us', 'de', 'es', 'fr', 'ca', 'au', 'nl'];
  const title = (t('hero.title') || 'Legal Documents') + " | Veridoca";
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="Professional legal documents made simple." />
      <link rel="canonical" href={`${baseUrl}${currentPath}`} />
      <link rel="alternate" href={baseUrl} hrefLang="x-default" />
      {locales.map((locale) => (
        <link key={locale} rel="alternate" href={`${baseUrl}/${locale}`} hrefLang={locale} />
      ))}
    </Helmet>
  );
};
