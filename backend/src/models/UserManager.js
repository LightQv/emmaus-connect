const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (name, email, hashed_password, role) VALUES(?,?,?,?)`,
      [user.name, user.email, user.hashed_password, user.role]
    );
  }

  update(user) {
    return this.database.query(
      `UPDATE ${this.table} set name = ?, email = ?, role = ? WHERE id = ?`,
      [user.name, user.email, user.role, user.id]
    );
  }

  updatePassword(user) {
    return this.database.query(
      `UPDATE ${this.table} set hashed_password = ? WHERE id = ?`,
      [user.hashed_password, user.id]
    );
  }

  findByEmailWithPassword(email) {
    return this.database.query(`SELECT * FROM ${this.table} where email = ?`, [
      email,
    ]);
  }
}

module.exports = userManager;
