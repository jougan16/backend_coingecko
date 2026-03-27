const axios = require("axios")

const BASE = "https://api.coingecko.com/api/v3"

// ==========================
// MARKETS
// ==========================
exports.getMarkets = async () => {

    const res = await axios.get(`${BASE}/coins/markets`, {
        params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 20,
            page: 1
        }
    })

    return res.data
}

// ==========================
// TRENDING
// ==========================
exports.getTrending = async () => {

    const res = await axios.get(`${BASE}/search/trending`)

    return res.data.coins
}

// ==========================
// GLOBAL
// ==========================
exports.getGlobal = async () => {

    const res = await axios.get(`${BASE}/global`)

    return res.data.data
}

// ==========================
// COIN DETAIL
// ==========================
exports.getCoin = async (id) => {

    const res = await axios.get(`${BASE}/coins/${id}`, {
        params: {
            localization: false,
            tickers: false,
            market_data: true
        }
    })

    return res.data
}

// ==========================
// MARKET CHART
// ==========================
exports.getMarketChart = async (coin) => {

    const res = await axios.get(`${BASE}/coins/${coin}/market_chart`, {
        params: {
            vs_currency: "usd",
            days: 30
        }
    })

    return res.data
}