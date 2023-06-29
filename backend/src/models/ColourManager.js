const AbstractManager = require("./AbstractManager");

class ColourManager extends AbstractManager {
  constructor() {
    super({ table: "colour" });
  }

  // drop() {
  //   return this.database.query(
  //     `DROP TABLE IF EXISTS emmaus_connect.${this.table}`
  //   );
  // }

  // create() {
  //   this.database.query(
  //     `CREATE TABLE IF NOT EXISTS emmaus_connect.${this.table} (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(45) NOT NULL, coef DECIMAL(3,2) NOT NULL)`
  //   );
  // }

  insertAll(csvData) {
    return this.database.query(
      `TRUNCATE ${this.table}; INSERT INTO ${this.table} (name, coef) VALUES ?`,
      [csvData]
    );
  }
}

module.exports = ColourManager;
