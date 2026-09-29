/* =====================================================
   RR & 3A's Cafe — Tailwind Play CDN config
   Custom palette and fonts.
   Loaded after the Tailwind CDN script.
   ===================================================== */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        burgundy:  '#47231A',
        magenta:   '#C23E32',
        terracotta:'#D57A4E',
        beige:     '#FFF1DE',
        cream:     '#FBDCC0',
        /* tints / shades derived for hover states */
        'burgundy-dark':  '#341A12',
        'magenta-dark':   '#9C2F26',
        'beige-dark':     '#F6D9B4',
      },
      fontFamily: {
        heading: ['"Poppins"', 'system-ui', 'sans-serif'],
        body:    ['"Manrope"', 'system-ui', 'sans-serif'],
      },
    },
  },
};
