<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/logo-completo-branco.png">
  <img src="assets/logo-completo.png" alt="Akylla Studio" width="320">
</picture>

### Sites, páginas de vendas, lojas virtuais e sistemas sob medida

Atendimento direto com o desenvolvedor · Goiânia/GO e todo o Brasil

[**🌐 Ver o site**](https://akyllastudio.github.io) &nbsp;·&nbsp;
[**💬 Orçamento no WhatsApp**](https://wa.me/5562991657619?text=Ol%C3%A1!%20Vi%20seu%20GitHub%20e%20quero%20um%20or%C3%A7amento.) &nbsp;·&nbsp;
[**🔗 Todos os links**](https://akyllastudio.github.io/links.html)

</div>

---

## Serviços

| Serviço | Para quem | A partir de |
|---|---|---|
| **Página de vendas** | Anúncios, lançamentos, infoprodutos | R$ 900 |
| **Cardápio / catálogo digital** | Restaurantes, lojas, pedidos pelo WhatsApp | R$ 1.200 |
| **Site institucional** | Clínicas, escritórios, prestadores de serviço | R$ 1.800 |
| **Loja virtual** | Lojas que querem vender online com loja própria | R$ 4.500 |
| **Sistema sob medida** | Negócios que cresceram e se perderam nas planilhas | sob consulta |
| **Manutenção mensal** | Hospedagem, backups e pequenas alterações | R$ 150/mês |

Valores e o que está incluso em cada um: [akyllastudio.github.io/#precos](https://akyllastudio.github.io/#precos)

## Produtos próprios no ar

<table>
  <tr>
    <td width="50%" valign="top">
      <a href="https://akyllashop.com"><img src="assets/img/akyllashop.jpg" alt="Akylla Shop"></a>
      <h3><a href="https://akyllashop.com">Akylla Shop</a></h3>
      Loja virtual de tecnologia e acessórios em Goiânia: catálogo, sacola, pagamento via PIX, "Meus pedidos" e atendimento pelo WhatsApp.
    </td>
    <td width="50%" valign="top">
      <a href="https://akyllagestao.com.br"><img src="assets/img/akyllagestao.jpg" alt="Akylla Gestão"></a>
      <h3><a href="https://akyllagestao.com.br">Akylla Gestão</a></h3>
      Sistema online de gestão para comércio e serviços: PDV, caixa, estoque, contas a pagar e receber, agenda e lembretes por WhatsApp.
    </td>
  </tr>
</table>

## Como funciona

1. **Conversa:** entendo seu negócio, seu público e seu objetivo.
2. **Proposta:** escopo, prazo e valor por escrito.
3. **Criação:** você acompanha e aprova cada etapa.
4. **Entrega:** site no ar. Pagamento em 2 etapas: 50% para iniciar e 50% na entrega aprovada.

## Contato

- **WhatsApp:** [(62) 99165-7619](https://wa.me/5562991657619)
- **Site:** [akyllastudio.github.io](https://akyllastudio.github.io)
- **Links e redes:** [akyllastudio.github.io/links.html](https://akyllastudio.github.io/links.html)
- **GitHub:** [@akyllastudio](https://github.com/akyllastudio) · [@Tanattos18](https://github.com/Tanattos18)

---

<details>
<summary><b>Para manutenção do site (técnico)</b></summary>

Site estático (HTML, CSS e JavaScript puro), sem build, publicado pelo GitHub Pages a partir da branch `main`.

### Estrutura

| Arquivo | O que é |
|---|---|
| `index.html` | Página principal |
| `links.html` | Página de links para a bio do Instagram |
| `404.html` | Página de "não encontrado" |
| `js/config.js` | **WhatsApp, redes sociais e e-mail** (vale para todas as páginas) |
| `js/main.js` | Menu do celular e animações |
| `css/style.css` | Estilos; cores e fontes no bloco `:root` |
| `assets/` | Logo, favicons, avatar da organização e imagens |
| `sitemap.xml` / `robots.txt` | Arquivos para o Google indexar o site |

### Como editar

| O que mudar | Onde |
|---|---|
| WhatsApp, Instagram, LinkedIn, Facebook, TikTok, YouTube, e-mail | `js/config.js`, objeto `CONFIG` (rede vazia fica escondida) |
| Textos, preços e projetos | `index.html` (cada seção tem um comentário `<!-- ===== NOME ===== -->`) |
| Cores e fontes | `css/style.css`, bloco `:root` |

### Ver no computador

```bash
python -m http.server 8000
```

Depois abra `http://localhost:8000`.

### Domínio próprio (opcional)

Em **Settings → Pages → Custom domain**, informe o domínio e, no registrador, crie 4 registros `A` (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) e um `CNAME` `www` apontando para `akyllastudio.github.io`.

</details>
