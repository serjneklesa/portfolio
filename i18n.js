// EN/DE translations + language switcher
(function () {
  const I18N = {
    en: {
      "nav.selectedwork": "Selected Work",
      "nav.home": "Home",
      "page.home": "Home",
      "contact.h": "Contact",
      "hero.title": "Serj Neklesa is a multimedia designer, videographer, and marketing specialist based in <em>Vienna</em>.",
      "hero.lede": "Creating visual content and digital experiences that connect brands with their audiences.",
      "exp.eyebrow": "Experience",
      "skills.eyebrow": "Skills &amp; Tools",
      "exp.une.meta": "2026–Present <span class=\"dot\">·</span> Marketing Manager &amp; Content Creator",
      "exp.une.loc": "Vienna, Austria",
      "exp.fc.meta": "2024–2026 <span class=\"dot\">·</span> Marketing Manager",
      "exp.fc.loc": "Vienna, Austria",
      "exp.mgu.meta": "2021–2023 <span class=\"dot\">·</span> Special Projects Specialist",
      "exp.mgu.loc": "Kyiv, Ukraine",
      "lets.eyebrow": "Let's Create",
      "lets.text": "Hi! Got an idea, a brand, or just a feeling?<br><em>Let's create something together.</em>",
      "lets.cta": "Say hello ↗",
      "sw.h1": "Selected Work",
      "sw.sub": "Nine years of design for television, live events, and artists — from broadcast graphics to brand content.",
      "sw.categories": "Categories",
      "cat.digital.meta": "Illustration &amp; Graphics",
      "cat.video.meta": "Filming &amp; Post-Production",
      "cat.social.meta": "Content Strategy &amp; Creation",
      "meta.focus": "Focus",
      "meta.years": "Years",
      "meta.based": "Based in",
      "meta.focus.value": "Visual storytelling / strong brand identity",
      "meta.years.value": "2016 — Present",
      "meta.based.value": "Vienna, Austria <span class=\"dot\">·</span> since 2024",
      "meta.artists": "Artists",
      "meta.artists.value": "20+ Collaborations",
      "meta.format": "Format",
      "ac.sub": "Cover art and video work for musicians — from show finals to official releases.",
      "da.sub": "Illustration, graphics, and visual experiments.",
      "vp.sub": "Filming, editing, and post-production for brands and broadcast.",
      "sm.sub": "Content strategy and creation for social platforms.",
    },
    de: {
      "nav.selectedwork": "Ausgewählte Arbeiten",
      "nav.home": "Startseite",
      "page.home": "Startseite",
      "contact.h": "Kontakt",
      "hero.title": "Serj Neklesa ist Multimedia-Designer, Videograf und Marketing-Spezialist mit Sitz in <em>Wien</em>.",
      "hero.lede": "Visueller Content und digitale Erlebnisse, die Marken mit ihrem Publikum verbinden.",
      "exp.eyebrow": "Berufserfahrung",
      "skills.eyebrow": "Skills &amp; Tools",
      "exp.une.meta": "2026–heute <span class=\"dot\">·</span> Marketing Manager &amp; Content Creator",
      "exp.une.loc": "Wien, Österreich",
      "exp.fc.meta": "2024–2026 <span class=\"dot\">·</span> Marketing Manager",
      "exp.fc.loc": "Wien, Österreich",
      "exp.mgu.meta": "2021–2023 <span class=\"dot\">·</span> Specialist für Sonderprojekte",
      "exp.mgu.loc": "Kiew, Ukraine",
      "lets.eyebrow": "Lass uns loslegen",
      "lets.text": "Hi! Du hast eine Idee, eine Marke oder einfach ein Gefühl?<br><em>Lass uns gemeinsam etwas erschaffen.</em>",
      "lets.cta": "Sag Hallo ↗",
      "sw.h1": "Ausgewählte Arbeiten",
      "sw.sub": "Neun Jahre Design für Fernsehen, Live-Events und Künstler — von Broadcast-Grafik bis Brand-Content.",
      "sw.categories": "Kategorien",
      "cat.digital.meta": "Illustration &amp; Grafik",
      "cat.video.meta": "Dreh &amp; Postproduktion",
      "cat.social.meta": "Content-Strategie &amp; -Produktion",
      "meta.focus": "Fokus",
      "meta.years": "Jahre",
      "meta.based": "Standort",
      "meta.focus.value": "Visuelles Storytelling / starke Markenidentität",
      "meta.years.value": "2016 — heute",
      "meta.based.value": "Wien, Österreich <span class=\"dot\">·</span> seit 2024",
      "meta.artists": "Künstler",
      "meta.artists.value": "20+ Kollaborationen",
      "meta.format": "Format",
      "ac.sub": "Cover-Art und Videoarbeiten für Musiker — von Show-Finals bis zu offiziellen Releases.",
      "da.sub": "Illustration, Grafik und visuelle Experimente.",
      "vp.sub": "Dreh, Schnitt und Postproduktion für Marken und Broadcast.",
      "sm.sub": "Content-Strategie und -Produktion für soziale Plattformen.",
    },
  };

  function currentLang() {
    try {
      const saved = localStorage.getItem("sn-lang");
      if (saved === "en" || saved === "de") return saved;
    } catch (e) {}
    return (navigator.language || "").toLowerCase().startsWith("de") ? "de" : "en";
  }

  function apply(lang) {
    const dict = I18N[lang] || I18N.en;
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const val = dict[el.dataset.i18n];
      if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll("[data-setlang]").forEach(btn => {
      btn.classList.toggle("is-active", btn.dataset.setlang === lang);
    });
  }

  function setLang(lang) {
    try { localStorage.setItem("sn-lang", lang); } catch (e) {}
    apply(lang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-setlang]").forEach(btn => {
      btn.addEventListener("click", () => setLang(btn.dataset.setlang));
    });
    apply(currentLang());
  });
})();
