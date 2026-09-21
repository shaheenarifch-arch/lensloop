const AFFILIATE_LINK = 'https://www.awin1.com/awclick.php?gid=601694&mid=124966&awinaffid=3067297&linkid=4764140&clickref=';
const BANNERS = [
  'https://www.awin1.com/cread.php?s=4742718&v=124966&q=601646&r=3067297',
  'https://www.awin1.com/cread.php?s=4742696&v=124966&q=601645&r=3067297',
  'https://www.awin1.com/cread.php?s=4742695&v=124966&q=601644&r=3067297'
];
const CONTACT_EMAIL = 'agents@getservices.ai';
const CONTACT_PHONE = '313-729-1534';
 
function enhanceDimaProductGrid() {
  const dimaImage = document.querySelector('img[src*="dimaeyewear.com"]');
  if (!dimaImage) return;
 
  const section = dimaImage.closest('section');
  const grid = dimaImage.closest('.wrap')?.querySelector('div[style*="repeat(auto-fit,minmax(210px"]');
  if (!section || !grid) return;
 
  section.classList.add('dima-shop-section');
  grid.classList.add('dima-product-grid');
  grid.querySelectorAll('article').forEach((card) => {
    card.classList.add('dima-product-card');
    const productLink = card.querySelector('a[href*="awin1.com"]');
    const productName = card.querySelector('h3')?.textContent.trim() || 'Dima Eyewear frame';
    const details = card.querySelector('div[style*="padding:16px"]');
 
    if (productLink) productLink.setAttribute('aria-label', `View ${productName} at Dima Eyewear`);
    if (details && !details.querySelector('.dima-shop-button')) {
      const button = document.createElement('a');
      button.href = 'https://www.awin1.com/cread.php?awinmid=128033&awinaffid=3067297';
      button.target = '_blank';
      button.rel = 'sponsored noopener nofollow';
      button.className = 'dima-shop-button';
      button.textContent = 'Shop now →';
      details.appendChild(button);
    }
  });
 
  if (!document.getElementById('dima-commerce-styles')) {
    const style = document.createElement('style');
    style.id = 'dima-commerce-styles';
    style.textContent = `
      .dima-shop-section { padding-top: 42px !important; }
      .dima-shop-section .section-head { align-items: center; margin-bottom: 24px; }
      .dima-shop-section .section-head > div { flex: 1 1 520px; }
      .dima-shop-section .section-head .btn { flex: none; }
      .dima-product-grid { display: grid !important; grid-template-columns: repeat(4, minmax(0, 1fr)) !important; gap: 16px !important; }
      .dima-product-card { display: flex; flex-direction: column; min-width: 0; transition: transform .2s ease, box-shadow .2s ease; }
      .dima-product-card:hover { transform: translateY(-3px); box-shadow: 0 10px 24px rgba(22,35,46,.1); }
      .dima-product-card > a:first-child { background: #f5f1e9; }
      .dima-product-card > a:first-child img { aspect-ratio: 1 / 1.08 !important; object-fit: cover !important; }
      .dima-product-card > div { flex: 1; display: flex; flex-direction: column; }
      .dima-product-card h3 { font-size: 1.1rem; }
      .dima-product-card .go { margin-top: auto; width: fit-content; }
      .dima-shop-button { display: block; margin-top: 14px; padding: 10px 12px; border-radius: var(--radius); background: var(--ink); color: var(--paper); text-align: center; text-decoration: none; font-size: .88rem; font-weight: 600; }
      .dima-shop-button:hover { background: var(--amber); color: var(--ink); }
      @media (max-width: 900px) { .dima-product-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; } }
      @media (max-width: 520px) { .dima-product-grid { grid-template-columns: 1fr 1fr !important; gap: 10px !important; } .dima-product-card > div { padding: 12px !important; } .dima-product-card p { font-size: .82rem !important; } .dima-shop-section .section-head .btn { width: 100%; justify-content: center; } }
    `;
    document.head.appendChild(style);
  }
}
 
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-aff]').forEach((el) => {
    el.setAttribute('href', AFFILIATE_LINK);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'sponsored noopener nofollow');
  });
 
  document.querySelectorAll('a[href*="awin1.com"]').forEach((el) => {
    el.setAttribute('rel', 'sponsored noopener nofollow');
    el.setAttribute('target', '_blank');
  });
 
  enhanceDimaProductGrid();
 
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav.primary');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.textContent = open ? 'Close' : 'Menu';
      toggle.setAttribute('aria-expanded', String(open));
    });
 
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.textContent = 'Menu';
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
 
  if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      img.decoding = 'async';
    });
  }
});
