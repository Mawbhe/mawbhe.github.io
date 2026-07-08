// Add new lemmas by appending an object with:
// name and formula.
window.siteLemmas = [
  {
    name: "Definition - Continuity",
    formula: "\\( \\forall \\epsilon > 0, \\exists \\delta > 0 : |x-c| < \\delta \\Rightarrow |f(x)-f(c)| < \\epsilon \\)"
  },
  {
    name: "Inequality - Cauchy-Schwarz",
    formula: "\\( |\\langle x, y \\rangle| \\leq \\|x\\|\\,\\|y\\| \\)"
  },
  {
    name: "Inequality - Jensen",
    formula: "\\( \\varphi(\\mathbb{E}[X]) \\leq \\mathbb{E}[\\varphi(X)] \\)"
  },
  {
    name: "Inequality - Hoeffding",
    formula: "\\( \\mathbb{P}(|\\bar{X}-\\mathbb{E}[X]| \\geq t) \\leq 2\\exp\\!\\left(-\\frac{2nt^2}{(b-a)^2}\\right) \\)"
  },
  {
    name: "Inequality - Fenchel-Young",
    formula: "\\( \\langle x, y \\rangle \\leq f(x) + f^*(y) \\)"
  },
  {
    name: "Inequality - Young",
    formula: "\\( ab \\leq \\frac{a^p}{p} + \\frac{b^q}{q} \\quad \\text{with } \\frac{1}{p}+\\frac{1}{q}=1 \\)"
  },
  {
    name: "Theorem - Banach Fixed Point",
    formula: "\\( d(Tx, Ty) \\leq \\kappa d(x, y), \\ 0 < \\kappa < 1 \\Rightarrow T \\text{ has a unique fixed point} \\)"
  },
  {
    name: "Inequality - Markov",
    formula: "\\( \\mathbb{P}(X \\geq a) \\leq \\frac{\\mathbb{E}[X]}{a} \\quad \\text{for } X \\geq 0 \\)"
  },
  {
    name: "Inequality - Chebyshev",
    formula: "\\( \\mathbb{P}(|X-\\mu| \\geq k\\sigma) \\leq \\frac{1}{k^2} \\)"
  },
  {
    name: "Theorem - Kantorovich-Rubinstein Duality",
    formula: "\\( W_1(\\mu, \\nu) = \\sup_{\\|f\\|_{\\mathrm{Lip}} \\leq 1} \\int f\\, d(\\mu-\\nu) \\)"
  },
  {
    name: "Definition - Pushforward Measure",
    formula: "\\( T_{\\#}\\mu(B) = \\mu(T^{-1}(B)) \\)"
  },
  {
    name: "Theorem - Change of Variables",
    formula: "\\( \\int_{\\mathbb{R}^d} f(T(x))|\\det \\nabla T(x)|\\,dx = \\int_{\\mathbb{R}^d} f(y)\\,dy \\)"
  },
  {
    name: "Definition - L-Lipschitz Continuity",
    formula: "\\( \\|f(x)-f(y)\\| \\leq L\\|x-y\\| \\)"
  },
  {
    name: "Lemma - Descent Lemma",
    formula: "\\( f(y) \\leq f(x) + \\langle \\nabla f(x), y-x \\rangle + \\frac{L}{2}\\|y-x\\|^2 \\)"
  },
  {
    name: "Identity - Bias-Variance Decomposition",
    formula: "\\( \\mathbb{E}[(\\hat{f}(x)-f(x))^2] = \\operatorname{Bias}(\\hat{f}(x))^2 + \\operatorname{Var}(\\hat{f}(x)) + \\sigma^2 \\)"
  },
  {
    name: "Theorem - Gibbs' Inequality",
    formula: "\\( D_{\\mathrm{KL}}(P\\|Q) \\geq 0 \\)"
  },
  {
    name: "Theorem - Monge-Kantorovich Duality",
    formula: "\\( W_c(\\mu,\\nu) = \\sup_{\\varphi(x)+\\psi(y) \\leq c(x,y)} \\left( \\int \\varphi\\,d\\mu + \\int \\psi\\,d\\nu \\right) \\)"
  },
  {
    name: "Definition - Convex Function",
    formula: "\\( f(\\lambda x + (1-\\lambda)y) \\leq \\lambda f(x) + (1-\\lambda)f(y) \\)"
  },
  {
    name: "Rule - Bayes",
    formula: "\\( p(y\\mid x) = \\frac{p(x\\mid y)p(y)}{p(x)} \\)"
  },
  {
    name: "Inequality - Triangle",
    formula: "\\( \\|x+y\\| \\leq \\|x\\| + \\|y\\| \\)"
  }
];
