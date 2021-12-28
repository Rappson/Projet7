const app = require('../app')
const connection = app.connection;

exports.signup = (req, res, next) => {
    console.log(req);
    console.log(req.body);
}

exports.login = connection.query(
    'SELECT * FROM user',
    function(err, result, fields){
        console.log(result);
    }
)

