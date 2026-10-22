// ============================================================
//  CONFIGURAÇÃO: edite seus contatos aqui (vale para o site todo)
// ============================================================
const CONFIG = {
  // Só números, com DDI 55 + DDD. Ex: "5562999999999"
  whatsapp: "5562900000000",
  instagram: "https://instagram.com/seu_usuario",
  linkedin: "https://linkedin.com/in/seu_usuario",
};

// Links de WhatsApp: cada botão leva a mensagem do seu data-whatsapp
document.querySelectorAll("[data-whatsapp]").forEach((el) => {
  const msg = encodeURIComponent(el.dataset.whatsapp || "");
  el.href = `https://wa.me/${CONFIG.whatsapp}?text=${msg}`;
  el.target = "_blank";
  el.rel = "noopener";
});

// Redes sociais
document.querySelectorAll("[data-rede]").forEach((el) => {
  const url = CONFIG[el.dataset.rede];
  if (url) el.href = url;
});

// Menu no celular
const botaoMenu = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");
botaoMenu.addEventListener("click", () => {
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
document.querySelectorAll(".cartao, .projeto, .passos li, .plano, details").forEach((el) => {
  el.classList.add("revelar");
  observador.observe(el);
});

document.getElementById("ano").textContent = new Date().getFullYear();
