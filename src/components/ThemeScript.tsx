// Initierar tema före paint för att undvika FOUC
export default function ThemeScript() {
  const code = `(() => { try { const s = localStorage.getItem('theme'); const t = s || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); document.documentElement.dataset.theme = t; } catch(_){} })();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}


