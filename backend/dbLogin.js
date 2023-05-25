const mysql = require("mysql2");

const databaseConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
};

const dbLoginConnection = mysql.createConnection({
    ...databaseConfig,
    database: "",
});

dbLoginConnection.query(
    "CREATE DATABASE IF NOT EXISTS registration_form",
    function (err) {
        if (err) throw err;
        console.log("Database registration_form created");

        dbLoginConnection.query("USE registration_form", (err) => {
            if (err) throw err;

            const formTableQuery = `
            CREATE TABLE IF NOT EXISTS login (
                id INT NOT NULL AUTO_INCREMENT,
                email VARCHAR(100) NOT NULL,
                password VARCHAR(100) NOT NULL,
                name VARCHAR(100) NOT NULL,
                surname VARCHAR(100) NOT NULL,
                primary key (id)
            )
            `
        ;

            dbLoginConnection.query(formTableQuery, (err) => {
                if (err) throw err;
                console.log("Login Table created");
            });
        });
    });

module.exports = {
    dbLoginConnection,
};