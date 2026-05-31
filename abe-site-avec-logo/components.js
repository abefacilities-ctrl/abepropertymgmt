// ═══════════════════════════════
// ABE — COMPOSANTS PARTAGÉS
// ═══════════════════════════════

function renderHeader(activePage) {
  const pages = [
    { href: 'index.html', label: 'Accueil', id: 'accueil' },
    { href: 'services.html', label: 'Services', id: 'services' },
    { href: 'marketplace.html', label: 'Marketplace', id: 'marketplace' },
    { href: 'reservation.html', label: 'Réservation', id: 'reservation' },
    { href: 'blog.html', label: 'Blog', id: 'blog' },
    { href: 'portail.html', label: 'Portail Client', id: 'portail' },
  ];

  const navLinks = pages.map(p => `
    <a href="${p.href}" class="nav-link ${activePage === p.id ? 'active' : ''}">${p.label}</a>
  `).join('');

  const mobileLinks = pages.map(p => `
    <a href="${p.href}" class="${activePage === p.id ? 'active' : ''}">${p.label}</a>
  `).join('');

  document.getElementById('header-placeholder').innerHTML = `
    <header>
      <a class="logo" href="index.html">
        <img src="abe-logo.svg" alt="ABE Property Management"/>
      </a>
      <nav>
        ${navLinks}
        <a href="contact.html" class="nav-link nav-cta ${activePage === 'contact' ? 'active' : ''}">Nous contacter</a>
      </nav>
      <button class="hamburger" onclick="toggleMobileNav()" id="hamburger">
        <span></span><span></span><span></span>
      </button>
    </header>
    <div class="mobile-nav" id="mobile-nav">
      ${mobileLinks}
      <a href="contact.html" class="nav-cta">Nous contacter</a>
    </div>
  `;
}

function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <div class="footer-brand-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M9 21V12h6v9"/><path d="M12 3L8 8h8L12 3z"/></svg>
            </div>
            <div>
              <div class="footer-brand-name">ABE PROPERTY MGMT</div>
              <div class="footer-brand-sub">SAS — Paris 8e</div>
            </div>
          </div>
          <p class="footer-desc">Votre partenaire global en facility management, gestion immobilière et services aux entreprises en Île-de-France.</p>
          <div class="footer-contact">
            <a href="#"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 1C5.24 1 3 3.24 3 6c0 4 5 9 5 9s5-5 5-9c0-2.76-2.24-5-5-5z"/><circle cx="8" cy="6" r="1.5"/></svg> 25 rue de Ponthieu, 75008 Paris</a>
            <a href="mailto:abe.facilities@gmail.com"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3" width="14" height="10" rx="1.5"/><path d="M1 4l7 5 7-5"/></svg> abe.facilities@gmail.com</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Services</div>
          <div class="footer-links">
            <a href="services.html">Facility Management</a>
            <a href="services.html">Gestion immobilière</a>
            <a href="services.html">Dératisation</a>
            <a href="services.html">Sécurité incendie</a>
            <a href="services.html">Formations SST</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Navigation</div>
          <div class="footer-links">
            <a href="marketplace.html">Marketplace</a>
            <a href="reservation.html">Réservation</a>
            <a href="blog.html">Blog</a>
            <a href="portail.html">Portail Client</a>
            <a href="contact.html">Contact</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Entreprise</div>
          <div class="footer-links">
            <a href="about.html">À propos</a>
            <a href="contact.html">Nous contacter</a>
            <a href="mentions.html">Mentions légales</a>
            <a href="mentions.html">CGV</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 ABE Property MGMT — SIREN 931 133 847 — Stanislas Riva</p>
        <p>Siège : 25 rue de Ponthieu, 75008 Paris — Tous droits réservés</p>
      </div>
    </footer>

    <a class="wa-float" href="https://wa.me/33766632597?text=Bonjour%20Stanislas%2C%20je%20souhaite%20un%20devis%20ABE%20Property%20Management" target="_blank">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.535 5.874L0 24l6.335-1.507A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.017-1.378l-.36-.213-3.728.887.928-3.618-.234-.372A9.818 9.818 0 1112 21.818z"/></svg>
    </a>
    <div class="toast" id="toast"></div>
  `;
}

function toggleMobileNav() {
  document.getElementById('mobile-nav').classList.toggle('open');
}

function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'toast show';
  if (type === 'success') t.style.background = '#16a34a';
  else t.style.background = '#1b1b1b';
  setTimeout(() => t.className = 'toast', 2500);
}
