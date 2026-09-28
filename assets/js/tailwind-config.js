/* =====================================================
   RR & 3A's Cafe — Tailwind Play CDN config
   Custom palette, fonts, and border radii.
   Loaded after the Tailwind CDN script.
   ===================================================== */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        burgundy:  '#5D3140',
        magenta:   '#CF4173',
        softpink:  '#F39399',
        beige:     '#F6D8BD',
        cream:     '#f3cfb0',
        /* tints / shades derived for hover states */
        'burgundy-dark':  '#4a2533',
        'magenta-dark':   '#b33360',
        'beige-dark':     '#edcaaa',
      },
      fontFamily: {
        heading: ['"Petrona"', 'Georgia', 'serif'],
        body:    ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'organic': '2rem 0.5rem 2rem 0.5rem',
        'organic-alt': '0.5rem 2rem 0.5rem 2rem',
      },
    },
  },
};
