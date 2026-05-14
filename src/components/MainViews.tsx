import React, { useState } from 'react';
import { Search, Filter, ArrowRight, Star, Clock, Shield, ArrowLeft, ChevronRight, CheckCircle, FileText } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DOCUMENT_TEMPLATES, getIcon, DocumentCategory } from '../constants';
import { Button } from './Layout';

// --- TEMPLATE LIST ---
export const TemplateList = ({ onSelect }: any) => {
  const { lang } = useParams();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<DocumentCategory | 'all'>('all');

  const currentLang = lang || 'en';
  
  const filteredTemplates = DOCUMENT_TEMPLATES.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || template.category === activeCategory;
    const matchesCountry = !template.countries || template.countries.includes(currentLang);
    return matchesSearch && matchesCategory && matchesCountry;
  });

  return (
    <section id="mallar" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div>
          <h2 className="text-3xl font-serif font-bold text-white mb-2">Document Library</h2>
          <p className="text-slate-500">Choose from {filteredTemplates.length} professional templates</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative flex-grow sm:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search documents..." 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 pl-12 pr-4 text-white focus:border-amber-500 transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map(template => (
          <div key={template.id} onClick={() => onSelect(template)} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/50 transition-all cursor-pointer group">
            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
              {getIcon(template.icon)}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{template.title}</h3>
            <p className="text-slate-400 text-sm mb-6 line-clamp-2">{template.description}</p>
            <div className="flex items-center justify-between pt-6 border-t border-slate-800">
              <span className="text-amber-500 font-bold text-sm">Free</span>
              <ArrowRight className="w-5 h-5 text-slate-700 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- INPUT FORM ---
export const InputForm = ({ template, onBack, onSubmit, isGenerating }: any) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<any>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (isGenerating) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 bg-brand-dark">
        <div className="w-20 h-20 rounded-full border-4 border-slate-800 border-t-amber-500 animate-spin mb-8"></div>
        <h2 className="text-3xl font-serif font-bold mb-3 text-white">{t('form.generating')}</h2>
      </div>
    );
  }

  return (
    <div className="py-12 px-6 max-w-4xl mx-auto">
      <button onClick={onBack} className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors text-sm">
        <ArrowLeft className="w-4 h-4 mr-2" /> {t('form.back')}
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sticky top-24">
            <h2 className="text-xl font-bold text-white mb-2">{template.title}</h2>
            <p className="text-sm text-slate-400 leading-relaxed">{template.description}</p>
          </div>
        </div>
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
            {template.formFields.map((field: any) => (
              <div key={field.id}>
                <label className="block text-sm font-medium text-slate-400 mb-2">{field.label}</label>
                <input 
                  type={field.type === 'date' ? 'date' : 'text'} 
                  required={field.required}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:border-amber-500 outline-none"
                  onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                />
              </div>
            ))}
            <div className="pt-6 border-t border-slate-800 flex justify-end">
              <Button type="submit" className="flex items-center gap-2">
                {t('form.generate')} <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
