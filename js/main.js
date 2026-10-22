// Menu no celular
const botaoMenu = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");
botaoMenu.addEventListener("click", () => {
  // o menu começa logo abaixo do cabeçalho (a faixa de aviso muda essa altura)
  menu.style.top = `${document.querySelector(".topo").getBoundingClientRect().bottom}px`;
  const aberto = menu.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", aberto);
  document.body.classList.toggle("sem-rolagem", aberto);
});
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", false);
    document.body.classList.remove("sem-rolagem");
  })
);

// Sombra no cabeçalho ao rolar
const topo = document.querySelector(".topo");
const marcarRolagem = () => topo.classList.toggle("rolado", window.scrollY > 10);
window.addEventListener("scroll", marcarRolagem, { passive: true });
marcarRolagem();

// Animação de entrada das seções
const observador = new IntersectionObserver(
  (entradas) =>
    entradas.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visivel");
        observador.unobserve(e.target);
      }
    }),
  { threshold: 0.12 }
);
document.querySelectorAll(".cartao, .dor, .projeto, .diferencial, .passos li, .plano, .garantia, details").forEach((el) => {
  el.classList.add("revelar");
  observador.observe(el);
});

document.getElementById("ano").textContent = new Date().getFullYear();
