const API_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'

export async function fetchRestaurants() {
    const response = await fetch(API_URL)

    if (!response.ok) {
        throw new Error('Não foi possível carregar os restaurantes')
    }

    const data = await response.json()
    return data
}
