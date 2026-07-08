(function () {
  var lemmas = window.siteLemmas || [];

  if (!lemmas.length) {
    return;
  }

  function typeset(node) {
    if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
      window.MathJax.typesetPromise([node]).catch(function () {
        return;
      });
    }
  }

  function render(card, index) {
    var lemma = lemmas[index];
    var body = card.querySelector("[data-lemma-body]");
    var name = card.querySelector("[data-lemma-name]");

    if (body) {
      body.textContent = lemma.formula;
    }

    if (name) {
      name.textContent = "- " + lemma.name;
    }

    typeset(card);
  }

  function attach(card) {
    render(card, Math.floor(Math.random() * lemmas.length));
  }

  function init() {
    var cards = document.querySelectorAll("[data-lemma-card]");
    cards.forEach(attach);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
