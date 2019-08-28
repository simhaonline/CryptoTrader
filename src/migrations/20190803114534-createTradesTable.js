function up(db, callback) {
    var query =  
    " CREATE TABLE IF NOT EXISTS " +
    " trades " +
    " (id int AUTO_INCREMENT PRIMARY KEY NOT NULL, " +
    " currency_pair VARCHAR(16) , " +
    " updated_time INT(11) NOT NULL, " +
    " time INT(11) NOT NULL, " +
    " open DECIMAL(10,2) NOT NULL, " +
    " high DECIMAL(10,2) NOT NULL, " +
    " low DECIMAL(10,2) NOT NULL, " +
    " close DECIMAL(10,2) NOT NULL, " +
    " vwap DECIMAL(10,2) , " +
    " volume DECIMAL(14,8) NOT NULL, " +
    " count INT ); " ;


    db.runSql(query, [], callback);
};

function down(db, callback) {
    return null;
};

module.exports.up = up;
module.exports.down = down;