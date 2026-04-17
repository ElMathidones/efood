const RESTAURANTS_API_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'
const CHECKOUT_API_URL = 'https://api-ebac.vercel.app/api/efood/checkout'

export async function fetchRestaurants() {
    const response = await fetch(RESTAURANTS_API_URL)

    if (!response.ok) {
        throw new Error('Não foi possível carregar os restaurantes')
    }

    return await response.json()
}

export async function postCheckout(payload) {
    const response = await fetch(CHECKOUT_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })

    if (!response.ok) {
        throw new Error('Não foi possível finalizar o pedido')
    }

    return await response.json()
}
