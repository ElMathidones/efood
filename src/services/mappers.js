export function mapProduct(product) {
    return {
        id: product.id,
        name: product.nome,
        description: product.descricao,
        image: product.foto,
        price: product.preco,
        serving: product.porcao
    }}

export function mapRestaurant(restaurant) {
    return {
        id: restaurant.id,
        title: restaurant.titulo,
        category: restaurant.tipo,
        rating: restaurant.avaliacao,
        description: restaurant.descricao,
        cover: restaurant.capa,
        hero: restaurant.capa,
        highlighted: restaurant.destacado,
        products: restaurant.cardapio.map(mapProduct)
    }}
