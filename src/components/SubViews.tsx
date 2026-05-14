import React from 'react';
import { ArrowLeft, Download, Printer, Edit3, CheckCircle, Shield, MessageCircle, Info } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Button } from './Layout';

// --- DOCUMENT PREVIEW ---
export const DocumentPreview = ({ content, template, onEdit, onPurchase }: any) => {
  return (
    <div className="py-12 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <div>
          <h2 className="text-3xl font-serif font-bold text-white mb-2">Review your document</h2>
          <p className="text-slate-400">Preview of your generated {template.title}</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={onEdit} className="flex items-center gap-2"><Edit3 className="w-4 h-4" /> Edit</Button>
          <Button onClick={onPurchase} className="flex items-center gap-2">Finalize <Download className="w-4 h-4" /></Button>
        </div>
      </div>
      <div className="bg-white text-slate-900 p-12 rounded-2xl shadow-2xl min-h-[800px] prose prose-slate max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

// --- SUCCESS VIEW ---
export const SuccessView = ({ onReset, content, template }: any) => {
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${template.title.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="py-20 px-6 max-w-4xl mx-auto text-center">
      <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mx-auto mb-8">
        <CheckCircle className="w-10 h-10" />
      </div>
      <h2 className="text-4xl font-serif font-bold text-white mb-4">Document Ready!</h2>
      <p className="text-slate-400 mb-12 text-lg">Your {template.title} has been successfully generated.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Button onClick={handleDownload} className="flex items-center justify-center gap-2 px-10 py-4 text-lg">Download Document</Button>
        <Button variant="secondary" onClick={() => window.print()} className="flex items-center justify-center gap-2 px-10 py-4 text-lg">Print Document</Button>
      </div>
      <button onClick={onReset} className="text-slate-500 hover:text-white transition-colors">Generate another document</button>
    </div>
  );
};

// --- LEGAL VIEW ---
export const LegalView = ({ type, onBack }: any) => {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto">
      <button onClick={onBack} className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back</button>
      <div className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-serif font-bold text-white mb-8 capitalize">{type.replace('-', ' ')}</h1>
        <p className="text-slate-400">Content for {type} goes here. This is a simplified legal view for Veridoca.</p>
      </div>
    </div>
  );
};

// --- HOW IT WORKS ---
export const HowItWorks = ({ onBack }: any) => {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto text-center">
      <button onClick={onBack} className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back</button>
      <h2 className="text-4xl font-serif font-bold text-white mb-12">How it works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { icon: <Search className="w-6 h-6" />, title: "1. Choose Template", desc: "Select from our library of professional legal documents." },
          { icon: <Edit3 className="w-6 h-6" />, title: "2. Fill in Details", desc: "Answer simple questions to customize the document." },
          { icon: <Download className="w-6 h-6" />, title: "3. Download", desc: "Get your ready-to-use document in seconds, for free." }
        ].map((step, i) => (
          <div key={i}>
            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 mx-auto mb-6">{step.icon}</div>
            <h3 className="text-white font-bold mb-3">{step.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
// --- SUPPORT ---
export const Support = ({ onBack }: any) => {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto text-center">
      <button onClick={onBack} className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back</button>
      <h2 className="text-4xl font-serif font-bold text-white mb-12">Support</h2>
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12">
        <MessageCircle className="w-12 h-12 text-amber-500 mx-auto mb-6" />
        <p className="text-xl text-white mb-4">Need help?</p>
        <p className="text-slate-400 mb-8">Contact our support team at support@veridoca.com</p>
        <Button onClick={() => window.location.href = 'mailto:support@veridoca.com'}>Send an Email</Button>
      </div>
    </div>
  );
};
