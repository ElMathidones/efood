# 🍔 efood

Aplicação web de delivery de comida desenvolvida com React, baseada no layout do Figma da EBAC.

Este projeto simula uma plataforma de restaurantes, permitindo visualizar estabelecimentos, acessar seus cardápios, adicionar produtos ao carrinho e finalizar pedidos.

---

## 🚀 Deploy

🔗 https://efood-cart-redux.vercel.app/

---

## 📌 Funcionalidades

* Listagem de restaurantes
* Visualização de cardápio por restaurante
* Modal com detalhes do produto
* Adição de produtos ao carrinho
* Controle de quantidade de itens
* Remoção de produtos do carrinho
* Cálculo automático do valor total da compra
* Fluxo completo de checkout (entrega + pagamento)
* Finalização de pedido com armazenamento no histórico
* Página de “Meus pedidos”

---

## 🧠 Gerenciamento de estado

O carrinho foi implementado utilizando **Redux Toolkit**, garantindo:

* Estado global compartilhado entre páginas
* Facilidade na manipulação de dados
* Centralização da lógica do carrinho
* Melhor escalabilidade da aplicação

---

## 🛠️ Tecnologias utilizadas

* React
* Vite
* React Router DOM
* Styled Components
* Redux Toolkit
* React Redux
* API REST (mock da EBAC)

---

## 💾 Persistência de dados

* Carrinho persistido no `localStorage`
* Pedidos armazenados localmente para simular histórico

---

## ▶️ Como rodar o projeto

```bash
# instalar dependências
npm install

# rodar em desenvolvimento
npm run dev

# gerar build
npm run build
```

---

## 📖 Layout

Projeto baseado no layout do Figma da EBAC:

https://www.figma.com/file/JjduV2Tg713TzYUUsees8b/efood

---

## 📌 Observação

Este projeto foi desenvolvido como parte dos estudos na EBAC, com foco em:

* React
* Organização de código
* Consumo de API
* Gerenciamento de estado com Redux
