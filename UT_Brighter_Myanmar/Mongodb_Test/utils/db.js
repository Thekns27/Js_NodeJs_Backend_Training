const {MongoClient} = require("mongodb");
const connStr = "mongodb://localhost:27017/mydb";

let conn;
const connectDb = (cb) => {
     MongoClient.connect(connStr)
     .then(client => {
        conn = client.db();
        cb();
     })
     .catch (err => cb(err));
}
const getConn = () => conn;
module.exports = {
    connectDb,
    getConn
};
