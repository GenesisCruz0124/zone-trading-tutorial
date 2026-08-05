/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tv-teal': 'var(--teal)',
        'tv-blue': 'var(--blue)',
        'tv-bg': 'var(--bg)',
        'tv-panel': 'var(--panel)',
        'tv-border': 'var(--border)',
        fg: 'var(--fg)',
        'fg-muted': 'var(--fg-muted)',
        'fg-subtle': 'var(--fg-subtle)',
        'warn-bg': 'var(--warn-bg)',
        'warn-border': 'var(--warn-border)',
        'warn-fg': 'var(--warn-fg)',
        'danger-bg': 'var(--danger-bg)',
        'danger-fg': 'var(--danger-fg)',
      },
    },
  },
  plugins: [],
}
