import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DocumentTemplate, UserInputData } from './types';
import { fillTemplate } from './services/templateService';

// Components
import { Header, Hero, Footer, CookieBanner, CountryDetector, SEOMetadata, AdSlot } from './components/Layout';
import { TemplateList, InputForm } from './components/MainViews';
import { DocumentPreview, SuccessView, LegalView, HowItWorks, Support } from './components/SubViews';

function AppContent() {
  const { lang } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [view, setView] = useState<'home' | 'form' | 'preview' | 'success' | 'legal' | 'how-it-works' | 'support'>('home');
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | 'cookies'>('privacy');
  const [selectedTemplate, setSelectedTemplate] = useState<DocumentTemplate | null>(null);
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Sync i18n language with route parameter
  useEffect(() => {
    if (lang) {
      const languageMap: Record<string, string> = {
        'se': 'sv',
        'uk': 'en',
        'us': 'en',
        'de': 'de',
        'es': 'es',
        'fr': 'fr',
        'ca': 'en',
        'au': 'en',
        'nl': 'nl'
      };
      const targetLang = languageMap[lang] || 'en';
      if (i18n.language !== targetLang) {
        i18n.changeLanguage(targetLang);
      }
    } else {
      // Root path is Global English
      if (i18n.language !== 'en') {
        i18n.changeLanguage('en');
      }
    }
  }, [lang, i18n]);

  // Scroll to top when view or location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, location.pathname]);

  const handleSelectTemplate = (template: DocumentTemplate) => {
    setSelectedTemplate(template);
    setView('form');
  };

  const handleFormSubmit = async (data: UserInputData) => {
    if (!selectedTemplate) return;
    
    setIsGenerating(true);
    
    // Simulate a brief generation delay for UX feel
    setTimeout(() => {
      try {
        const content = fillTemplate(selectedTemplate.id, data, lang || 'en');
        setGeneratedContent(content);
        setView('preview');
      } catch (error) {
        alert(t('common.error_generating') || "Något gick fel vid sammanställningen. Försök igen.");
      } finally {
        setIsGenerating(false);
      }
    }, 800);
  };

  const handleLegalView = (type: 'privacy' | 'terms' | 'cookies') => {
    setLegalType(type);
    setView('legal');
  };

  const resetFlow = () => {
    setSelectedTemplate(null);
    setGeneratedContent('');
    setView('home');
    if (view !== 'home') {
      const basePath = lang ? `/${lang}` : '';
      navigate(basePath || '/');
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-100 bg-brand-dark">
      <SEOMetadata />
      <CountryDetector />
      
      <Header 
        onHome={resetFlow} 
        onHowItWorks={() => setView('how-it-works')}
        onSupport={() => setView('support')}
      />

      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero onBrowse={() => {
              document.getElementById('mallar')?.scrollIntoView({ behavior: 'smooth' });
            }} />
            <TemplateList onSelect={handleSelectTemplate} />
              <div className="max-w-4xl mx-auto">
                <AdSlot id="home-bottom-large" className="h-64" />
              </div>
          </>
        )}

        {view === 'form' && selectedTemplate && (
          <InputForm 
            template={selectedTemplate}
            onBack={resetFlow}
            onSubmit={handleFormSubmit}
            isGenerating={isGenerating}
          />
        )}

        {view === 'preview' && selectedTemplate && (
          <DocumentPreview 
            content={generatedContent}
            template={selectedTemplate}
            onEdit={() => setView('form')}
            onPurchase={() => setView('success')}
          />
        )}

        {view === 'success' && selectedTemplate && (
          <SuccessView 
            onReset={resetFlow}
            content={generatedContent}
            template={selectedTemplate}
          />
        )}

        {view === 'legal' && (
          <LegalView 
            type={legalType}
            onBack={resetFlow}
          />
        )}

        {view === 'how-it-works' && (
          <HowItWorks 
            onBack={resetFlow}
            onBrowse={resetFlow}
          />
        )}

        {view === 'support' && (
          <Support 
            onBack={resetFlow}
          />
        )}
      </main>

      <Footer 
        onLegalView={handleLegalView} 
        onSupport={() => setView('support')}
        onHowItWorks={() => setView('how-it-works')}
      />
      <CookieBanner />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppContent />} />
      <Route path="/:lang" element={<AppContent />} />
    </Routes>
  );
}
