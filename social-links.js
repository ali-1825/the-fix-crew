const socialLinks = [
  {
    className: 'social-instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/thefixcrew.official/?hl=en',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/></svg>'
  },
  {
    className: 'social-facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61594676083529',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.4 21v-8.2h2.75l.41-3.2H13.4V7.56c0-.93.26-1.56 1.59-1.56h1.69V3.14A22.5 22.5 0 0 0 14.22 3c-2.43 0-4.1 1.49-4.1 4.23V9.6H7.36v3.2h2.76V21h3.28Z"/></svg>'
  },
  {
    className: 'social-tiktok',
    label: 'TikTok',
    href: 'https://www.tiktok.com/@thefixcrew.official',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.5V2h-4.02v13.67a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6.05.88.14V8.8a7.05 7.05 0 1 0 6.04 6.97V9.12a8.8 8.8 0 0 0 5.14 1.65V6.75a4.8 4.8 0 0 1-1.37-.06Z"/></svg>'
  },
  {
    className: 'social-whatsapp',
    label: 'WhatsApp The Fix Crew at 0309 7862739',
    href: 'https://wa.me/923097862739',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.86 9.86 0 0 0-8.47 14.91L2 22l5.22-1.37A9.95 9.95 0 0 0 12.04 22 10 10 0 0 0 12.04 2Zm0 18a8 8 0 0 1-4.08-1.12l-.29-.17-3.1.81.83-3.02-.19-.31A8 8 0 1 1 12.04 20Zm4.39-5.99c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.62.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"/></svg>'
  }
];

const socialRail = document.createElement('nav');
socialRail.className = 'social-rail';
socialRail.setAttribute('aria-label', 'Social media and contact');

socialLinks.forEach(({ className, label, href, icon }) => {
  const link = document.createElement('a');
  link.className = className;
  link.href = href;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', label);
  link.innerHTML = icon;
  socialRail.appendChild(link);
});

document.body.appendChild(socialRail);
