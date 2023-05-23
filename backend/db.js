const mysql = require("mysql2");

const databaseConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
};

const dbConnection = mysql.createConnection({
    ...databaseConfig,
    database: "",
});

dbConnection.query(
    "CREATE DATABASE IF NOT EXISTS registration_form",
    function (err) {
        if (err) throw err;
        console.log("Database registration_form created");

        dbConnection.query("USE registration_form", (err) => {
            if (err) throw err;

            const formTableQuery = `
            CREATE TABLE IF NOT EXISTS clients (
                id INT NOT NULL AUTO_INCREMENT,
                name VARCHAR(100) NOT NULL,
                surname VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                phone VARCHAR(100) NOT NULL,
                primary key (id)
            )
            `
        ;

            dbConnection.query(formTableQuery, (err) => {
                if (err) throw err;
                console.log("Clients' Table created");
            });
        });
    });

module.exports = {
    dbConnection,
};

