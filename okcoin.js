var OKCoin = require('okcoin');

// Test public data APIs
var publicClient = new OKCoin();



publicClient.getKline(console.log, 'btc_usd', '1hour', 99000000000000, 1400021090000);


// get BTCUSD ticker
//publicClient.getTicker(console.log, 'btc_usd');

// get BTCUSD order book
//publicClient.getDepth(console.log, 'btc_usd');

// get trades defaulting to BTCUSD
//publicClient.getTrades(console.log);


