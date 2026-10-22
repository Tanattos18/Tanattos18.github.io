# Portfólio Empresarial — Akylla Studio

Página de apresentação dos meus serviços como desenvolvedor web: sites, páginas de vendas, lojas virtuais e sistemas sob medida.

Site estático (HTML, CSS e JavaScript puro), sem build, hospedado no GitHub Pages.

## Projetos em destaque

- **[Akylla Shop](https://akyllashop.com)**: loja virtual de tecnologia e acessórios em Goiânia
- **[Akylla Gestão](https://akyllagestao.com.br)**: sistema online de gestão para comércio e serviços

## Como editar

| O que mudar | Onde |
|---|---|
| WhatsApp, Instagram e LinkedIn | `js/main.js`, objeto `CONFIG` no topo |
| Textos, preços e projetos | `index.html` (cada seção tem um comentário `<!-- ===== NOME ===== -->`) |
| Cores e fontes | `css/style.css`, bloco `:root` no topo |
| Logo e favicon | `assets/logo-marca.png` (símbolo), `assets/logo-completo*.png` (logo inteiro), `assets/favicon*.png` |
| Avatar da organização no GitHub | `assets/avatar-organizacao.png` |
| Prints dos projetos | `assets/img/` |

## Ver no computador

Abra o `index.html` no navegador, ou rode um servidor local:

```bash
python -m http.server 8000
```

## Publicar no GitHub Pages

1. Envie os arquivos para a branch `main`.
2. No GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `(root)`**.
3. Em 1–2 minutos o site fica em `https://akyllastudio.github.io/`.
4. (Opcional) Domínio próprio: em **Settings → Pages → Custom domain**, informe o domínio e crie no seu registrador um registro `CNAME` apontando para `akyllastudio.github.io`.
