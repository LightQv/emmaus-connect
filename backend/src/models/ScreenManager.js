const AbstractManager = require("./AbstractManager");

class ScreenManager extends AbstractManager {
  constructor() {
    super({ table: "screen" });
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
      `TRUNCATE ${this.table}; INSERT INTO ${this.table} (size, value) VALUES ?`,
      [csvData]
    );
  }
}

module.exports = ScreenManager;
