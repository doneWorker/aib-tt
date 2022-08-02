export const fetchCoins = async (limit = 10) => {
    const url = `${process.env.REACT_APP_API_URL}/coins/markets?per_page=${limit}&vs_currency=eur`

    try {
    const resp = await fetch(url)
    const coins = await resp.json()
        return [coins, false]
    } catch (e) {
        return [null, false]
    }
}

export const fetchCoin = async (id) => {
    const url = `${process.env.REACT_APP_API_URL}/coins/${id}`

    try {
    const resp = await fetch(url)
    const coin = await resp.json()
        return [coin, false]
    } catch (e) {
        return [null, false]
    }
}