const db = require('../config/db');

exports.deleteLikes = async (req) => {
    // delete les likes pour eviter les doublons
    let sql = `delete from likes where user_id = ${req.body.userId} AND post_id = ${req.body.post_id}`
    return db.execute(sql)
};

