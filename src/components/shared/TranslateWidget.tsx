/**
 * Google Translate wrapper (prompt §1 — EN / HI / GU toggle).
 * Renders the Gadget so the dropdown appears at the page level. The
 * inline CSS in index.css keeps it visually unobtrusive.
 */
export function TranslateWidget() {
  return (
    <div
      className="flex items-center"
      dangerouslySetInnerHTML={{
        __html: `
          <div id="google_translate_element"></div>
          <script type="text/javascript">
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,hi,gu',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
              }, 'google_translate_element');
            }
          </script>
          <script
            type="text/javascript"
            src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
            async
          ></script>
        `,
      }}
    />
  );
}
