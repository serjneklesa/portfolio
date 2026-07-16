// Matrix decode effect: text assembles itself out of random symbols (white)
(function () {
  const SYMBOLS = "!<>-_\\/[]{}=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function scramble(el, duration) {
    const text = el.dataset.text || el.textContent;
    el.dataset.text = text;
    if (reduced) { el.textContent = text; return; }
    const start = performance.now();
    function frame(now) {
      const p = Math.min(1, (now - start) / duration);
      const reveal = Math.floor(text.length * p);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        if (i < reveal || text[i] === " ") out += text[i];
        else out += SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      }
      el.textContent = out;
      if (p < 1) requestAnimationFrame(frame);
      else el.textContent = text;
    }
    requestAnimationFrame(frame);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".matrix").forEach((el, i) => {
      setTimeout(() => scramble(el, 1200), 200 + i * 180);
      // replay on hover (of the element or its link)
      const target = el.closest("a") || el;
      target.addEventListener("mouseenter", () => scramble(el, 700));
    });
  });
})();
