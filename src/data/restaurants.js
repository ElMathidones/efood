const restaurants = [
  {
    id: 1,
    title: 'Hioki Sushi',
    category: 'Japonesa',
    rating: 4.9,
    description:
      'Peças frescas, combinados especiais e uma experiência completa da culinária japonesa.',
    cover: '/assets/sushi-cover.webp',
    hero: '/assets/sushi-hero.webp',
    products: [
      {
        id: 101,
        name: 'Combo Sushi Premium',
        description:
          'Seleção especial com sashimis, niguiris e hot rolls preparados na hora.',
        image: '/assets/sushi-combo.webp',
        price: 59.9,
        serving: 'serve 2 pessoas'
      },
      {
        id: 102,
        name: 'Hot Roll Especial',
        description: 'Hot rolls crocantes com recheio cremoso e molho da casa.',
        image: '/assets/hot-roll.webp',
        price: 34.9,
        serving: 'serve 1 pessoa'
      },
      {
        id: 103,
        name: 'Temaki Salmão',
        description: 'Temaki de salmão fresco com cebolinha e cream cheese.',
        image: '/assets/temaki.webp',
        price: 27.9,
        serving: 'serve 1 pessoa'
      },
      {
        id: 104,
        name: 'Yakissoba',
        description: 'Macarrão oriental com legumes salteados e molho especial.',
        image: '/assets/yakissoba.webp',
        price: 39.9,
        serving: 'serve 2 pessoas'
      },
      {
        id: 105,
        name: 'Guioza',
        description: 'Pastéis orientais recheados e grelhados na medida certa.',
        image: '/assets/guioza.webp',
        price: 24.9,
        serving: 'serve 1 pessoa'
      },
      {
        id: 106,
        name: 'Missoshiru',
        description: 'Tradicional sopa japonesa preparada com tofu e cebolinha.',
        image: '/assets/missoshiru.webp',
        price: 16.9,
        serving: 'serve 1 pessoa'
      }
    ]
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    rating: 4.8,
    description:
      'Massas artesanais, pizzas clássicas e receitas italianas com muito sabor.',
    cover: '/assets/italian-cover.webp',
    hero: '/assets/italian-hero.webp',
    products: [
      {
        id: 201,
        name: 'Pizza Marguerita',
        description: 'Molho de tomate, mussarela derretida, manjericão fresco e azeite.',
        image: '/assets/pizza-marguerita.webp',
        price: 60.9,
        serving: 'serve 2 a 3 pessoas'
      },
      {
        id: 202,
        name: 'Spaghetti al Limone',
        description: 'Massa fresca com molho delicado de limão siciliano e parmesão.',
        image: '/assets/spaghetti.webp',
        price: 47.9,
        serving: 'serve 1 pessoa'
      },
      {
        id: 203,
        name: 'Risoto de Funghi',
        description: 'Arroz arbóreo cremoso com mix de cogumelos e toque de vinho branco.',
        image: '/assets/risoto.webp',
        price: 52.9,
        serving: 'serve 1 pessoa'
      },
      {
        id: 204,
        name: 'Lasanha Bolonhesa',
        description: 'Camadas generosas de massa, molho bolonhesa, queijo e bechamel.',
        image: '/assets/lasanha.webp',
        price: 48.9,
        serving: 'serve 1 pessoa'
      },
      {
        id: 205,
        name: 'Gnocchi ao Pesto',
        description: 'Nhoque macio servido com molho pesto fresco e parmesão ralado.',
        image: '/assets/gnocchi.webp',
        price: 44.9,
        serving: 'serve 1 pessoa'
      },
      {
        id: 206,
        name: 'Tiramisu',
        description: 'Sobremesa italiana clássica com café, mascarpone e cacau.',
        image: '/assets/tiramisu.webp',
        price: 24.9,
        serving: 'serve 1 pessoa'
      }
    ]
  },
  {
    id: 3,
    title: 'Brasa Burger House',
    category: 'Hambúrguer',
    rating: 4.7,
    description:
      'Hambúrgueres artesanais, combos caprichados e molhos especiais.',
    cover: '/assets/burger-cover.webp',
    hero: '/assets/burger-hero.webp',
    products: [
      {
        id: 301,
        name: 'Classic Burger',
        description: 'Pão brioche, carne artesanal, queijo, alface, tomate e molho da casa.',
        image: '/assets/classic-burger.webp',
        price: 32.9,
        serving: 'serve 1 pessoa'
      },
      {
        id: 302,
        name: 'Bacon Supreme',
        description: 'Hambúrguer com bacon crocante, cheddar cremoso e cebola caramelizada.',
        image: '/assets/bacon-burger.webp',
        price: 38.9,
        serving: 'serve 1 pessoa'
      },
      {
        id: 303,
        name: 'Batata Rústica',
        description: 'Porção de batata rústica com páprica e molho especial.',
        image: '/assets/batata-rustica.webp',
        price: 18.9,
        serving: 'serve 2 pessoas'
      },
      {
        id: 304,
        name: 'Onion Rings',
        description: 'Anéis de cebola crocantes, dourados e muito saborosos.',
        image: '/assets/onion-rings.webp',
        price: 17.9,
        serving: 'serve 2 pessoas'
      },
      {
        id: 305,
        name: 'Milkshake de Chocolate',
        description: 'Milkshake cremoso com calda intensa de chocolate.',
        image: '/assets/milkshake.webp',
        price: 21.9,
        serving: 'serve 1 pessoa'
      },
      {
        id: 306,
        name: 'Combo Brasa',
        description: 'Hambúrguer, batata e bebida em um combo completo.',
        image: '/assets/combo-burger.webp',
        price: 46.9,
        serving: 'serve 1 pessoa'
      }
    ]
  },
  {
    id: 4,
    title: 'Mexicana Caliente',
    category: 'Mexicana',
    rating: 4.6,
    description:
      'Tacos, burritos e pratos intensos com sabor marcante.',
    cover: '/assets/mexican-cover.webp',
    hero: '/assets/mexican-hero.webp',
    products: [
      {
        id: 401,
        name: 'Taco de Carne',
        description: 'Taco recheado com carne temperada, queijo e molho picante.',
        image: '/assets/taco.webp',
        price: 24.9,
        serving: 'serve 1 pessoa'
      },
      {
        id: 402,
        name: 'Burrito Supreme',
        description: 'Burrito generoso com carne, arroz, feijão, queijo e guacamole.',
        image: '/assets/burrito.webp',
        price: 31.9,
        serving: 'serve 1 pessoa'
      },
      {
        id: 403,
        name: 'Nachos',
        description: 'Nachos crocantes com cheddar, sour cream e pimenta jalapeño.',
        image: '/assets/nachos.webp',
        price: 22.9,
        serving: 'serve 2 pessoas'
      },
      {
        id: 404,
        name: 'Quesadilla',
        description: 'Tortilla recheada com queijo, frango e temperos mexicanos.',
        image: '/assets/quesadilla.webp',
        price: 27.9,
        serving: 'serve 1 pessoa'
      },
      {
        id: 405,
        name: 'Churros',
        description: 'Churros crocantes servidos com doce de leite.',
        image: '/assets/churros.webp',
        price: 16.9,
        serving: 'serve 1 pessoa'
      },
      {
        id: 406,
        name: 'Guacamole Bowl',
        description: 'Guacamole fresco com toque de limão e nachos artesanais.',
        image: '/assets/guacamole.webp',
        price: 19.9,
        serving: 'serve 2 pessoas'
      }
    ]
  },
  {
    id: 5,
    title: 'Doce Encanto',
    category: 'Sobremesas',
    rating: 4.9,
    description:
      'Sobremesas artesanais, bolos e doces para finalizar bem o dia.',
    cover: '/assets/dessert-cover.webp',
    hero: '/assets/dessert-hero.webp',
    products: [
      {
        id: 501,
        name: 'Cheesecake de Frutas Vermelhas',
        description: 'Cheesecake cremosa com cobertura intensa de frutas vermelhas.',
        image: '/assets/cheesecake.webp',
        price: 19.9,
        serving: 'serve 1 pessoa'
      },
      {
        id: 502,
        name: 'Brownie com Sorvete',
        description: 'Brownie quentinho com sorvete de creme e calda de chocolate.',
        image: '/assets/brownie.webp',
        price: 22.9,
        serving: 'serve 1 pessoa'
      },
      {
        id: 503,
        name: 'Petit Gateau',
        description: 'Bolo quente com recheio cremoso e sorvete.',
        image: '/assets/petit-gateau.webp',
        price: 24.9,
        serving: 'serve 1 pessoa'
      },
      {
        id: 504,
        name: 'Mousse de Maracujá',
        description: 'Sobremesa leve, cremosa e refrescante.',
        image: '/assets/mousse-maracuja.webp',
        price: 14.9,
        serving: 'serve 1 pessoa'
      },
      {
        id: 505,
        name: 'Torta de Limão',
        description: 'Base crocante, creme de limão e merengue delicado.',
        image: '/assets/torta-limao.webp',
        price: 17.9,
        serving: 'serve 1 pessoa'
      },
      {
        id: 506,
        name: 'Cappuccino Especial',
        description: 'Café cremoso com canela e espuma aveludada.',
        image: '/assets/cappuccino.webp',
        price: 12.9,
        serving: 'serve 1 pessoa'
      }
    ]
  },
  {
    id: 6,
    title: 'Roma D’Oro',
    category: 'Italiana',
    rating: 4.7,
    description:
      'Sabores clássicos e atendimento acolhedor para uma experiência completa.',
    cover: '/assets/roma-cover.webp',
    hero: '/assets/roma-hero.webp',
    products: [
      {
        id: 601,
        name: 'Pizza Pepperoni',
        description: 'Pizza saborosa com pepperoni crocante e queijo.',
        image: '/assets/pepperoni.webp',
        price: 63.9,
        serving: 'serve 2 pessoas'
      },
      {
        id: 602,
        name: 'Cannoli',
        description: 'Doce italiano recheado com creme suave.',
        image: '/assets/cannoli.webp',
        price: 22.9,
        serving: 'serve 1 pessoa'
      },
      {
        id: 603,
        name: 'Ravioli de Ricota',
        description: 'Massa recheada servida com molho pomodoro.',
        image: '/assets/ravioli.webp',
        price: 45.9,
        serving: 'serve 1 pessoa'
      },
      {
        id: 604,
        name: 'Pizza Quatro Queijos',
        description: 'Queijos selecionados derretidos sobre massa artesanal.',
        image: '/assets/quatro-queijos.webp',
        price: 62.9,
        serving: 'serve 2 pessoas'
      },
      {
        id: 605,
        name: 'Fettuccine Alfredo',
        description: 'Massa envolvida em molho cremoso e parmesão.',
        image: '/assets/fettuccine.webp',
        price: 42.9,
        serving: 'serve 1 pessoa'
      },
      {
        id: 606,
        name: 'Bruschetta',
        description: 'Pão italiano com tomate, alho, azeite e manjericão.',
        image: '/assets/bruschetta.webp',
        price: 19.9,
        serving: 'serve 1 pessoa'
      }
    ]
  }
]

export default restaurants
