//buat data definition di database
const client = require("../config/connections");

const queryCreateTableUser = `
CREATE TABLE Users (
    email varchar,
    firstname varchar,
    lastname varchar,
    age int
)`;

client.query(queryCreateTableUser, (err, res) => {
    if (err) {
        console.log(err);
        return;
    }else {
        console.log(`success create table user ${res}`);
        client.end();
  }
});
