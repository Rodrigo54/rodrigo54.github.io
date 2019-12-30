export default function getThemeColor() {
  const theme = globalThis.__theme;
  if (theme === 'light') { return '#fff'; }
  if (theme === 'dark') { return '#16202c'; }
}
