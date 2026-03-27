const cg = require("../services/coingeckoServices")

// ==========================
// HOMEPAGE
// ==========================
exports.getHomepage = async (req, res) => {
    try {

        const markets = await cg.getMarkets()
        const trending = await cg.getTrending()
        const global = await cg.getGlobal()

        res.json({
            global: {
                coins: global.active_cryptocurrencies,
                market_cap: global.total_market_cap.usd,
                btc_dominance: global.market_cap_percentage.btc
            },

            trending: trending.map(c => ({
                id: c.item.id,
                name: c.item.name,
                image: c.item.small
            })),

            markets: markets.map(c => ({
                id: c.id,
                name: c.name,
                image: c.image,
                price: c.current_price,
                change_24h: c.price_change_percentage_24h,
                rank: c.market_cap_rank
            }))
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// ==========================
// COIN DETAIL
// ==========================
exports.getCoin = async (req, res) => {
    try {
        const data = await cg.getCoin(req.params.id)

        res.json({
            id: data.id,
            name: data.name,
            symbol: data.symbol,
            image: data.image.large,
            price: data.market_data.current_price.usd,
            market_cap: data.market_data.market_cap.usd,
            volume: data.market_data.total_volume.usd,
            change_24h: data.market_data.price_change_percentage_24h
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// ==========================
// MARKET CHART
// ==========================
exports.getMarketChart = async (req, res) => {
    try {

        const data = await cg.getMarketChart(req.params.coin)

        const prices = data.prices.map(p => ({
            time: p[0],
            price: p[1]
        }))

        res.json(prices)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}