import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

/**
 * Clean English / Hindi (EN / HI) language toggle button.
 * Uses Google Translate behind the scenes while providing a sleek custom UI.
 */
export function TranslateWidget() {
  const [currentLang, setCurrentLang] = useState<'en' | 'hi'>('en');

  // Detect current language from cookie on mount
  useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)googtrans=\/en\/([a-z]+)/);
    if (match && match[1] === 'hi') {
      setCurrentLang('hi');
    } else {
      setCurrentLang('en');
    }
  }, []);

  // Initialize Google Translate script
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'hi,en',
            autoDisplay: false,
          },
          'google_translate_element_hidden'
        );
      }
    };

    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit();
    }
  }, []);

  const switchLanguage = (lang: 'en' | 'hi') => {
    if (lang === currentLang) return;
    setCurrentLang(lang);

    const cookieVal = lang === 'hi' ? '/en/hi' : '/en/en';
    const host = window.location.hostname;
    
    // Set cookies for current domain and root path
    document.cookie = `googtrans=${cookieVal}; path=/;`;
    document.cookie = `googtrans=${cookieVal}; path=/; domain=.${host};`;
    document.cookie = `googtrans=${cookieVal}; path=/; domain=${host};`;

    // Try finding and updating the hidden google select box
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event('change', { bubbles: true }));
    } else {
      // If select is not yet in DOM, reload to apply cookie
      window.location.reload();
    }
  };

  return (
    <div className="flex items-center gap-1.5">
      {/* Hidden google translate mount point */}
      <div id="google_translate_element_hidden" className="hidden" aria-hidden="true" />

      {/* Language Toggle Button Pill */}
      <div
        className="inline-flex items-center rounded-full bg-forest-800/80 p-0.5 border border-forest-600/60 shadow-inner text-xs font-medium"
        role="group"
        aria-label="Language selection"
      >
        <button
          type="button"
          onClick={() => switchLanguage('en')}
          className={`flex items-center gap-1 rounded-full px-2.5 py-0.5 transition-all ${
            currentLang === 'en'
              ? 'bg-saffron text-white shadow-sm font-semibold'
              : 'text-cream/80 hover:text-white'
          }`}
          title="Switch to English"
        >
          <Globe className="h-3 w-3" />
          <span>EN</span>
        </button>

        <button
          type="button"
          onClick={() => switchLanguage('hi')}
          className={`flex items-center gap-1 rounded-full px-2.5 py-0.5 transition-all ${
            currentLang === 'hi'
              ? 'bg-saffron text-white shadow-sm font-semibold'
              : 'text-cream/80 hover:text-white'
          }`}
          title="हिन्दी में बदलें"
        >
          <span>हिन्दी</span>
        </button>
      </div>
    </div>
  );
}
