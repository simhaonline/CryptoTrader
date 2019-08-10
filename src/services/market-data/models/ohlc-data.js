const Connection = require('../../../models/connection');

function insertOHLC(timeCode, params) {
    const query =
        " INSERT INTO ohlc_" + timeCode +" (currency_pair, time, endtime, open, high, low, close, vwap, volume, count ) " +
        " VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?); ";

    return Connection.query(query, params);
}


module.exports.insertOHLC = insertOHLC;