const AbstractManager = require("./AbstractManager");

class RamManager extends AbstractManager {
  constructor() {
    super({ table: "ram" });
  }

  insert(item) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      item.title,
    ]);
  }

  update(item) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }

  insertAll(csvData) {
    return this.database.query(
      `TRUNCATE ${this.table}; INSERT INTO ${this.table} (capacity, value) VALUES ?`,
      [csvData]
    );
  }
}

module.exports = RamManager;
