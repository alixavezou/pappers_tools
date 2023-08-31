const db = require('./msql_db');

// Insert a new user
// db.query("INSERT INTO users (name, email) VALUES (?, ?)", ['Poupounet Doe', 'ignacio@example.com'], (err, results) => {
//   if (err) throw err;
//   console.log('User inserted:', results.insertId);
// });

// db.query("INSERT INTO users (name, email) VALUES (?, ?)", ['Toto Doe', 'toto@example.com'], (err, results) => {
//   if (err) throw err;
//   console.log('User inserted:', results.insertId);
// });


// Retrieve all users
// db.query("SELECT * FROM users", (err, rows) => {
//   if (err) throw err;
//   console.log('Users:', rows);
// });

// Update user name by ID
// db.query("UPDATE users SET name = ? WHERE id = ?", ['Alix Doe', 3], (err, results) => {
//   if (err) throw err;
//   console.log('User updated:', results.affectedRows);
// });

// Afficher tous les users
// db.query("SELECT * FROM users", (err, rows) => {
//   if (err) throw err;
//   console.log('Users:', rows);
// });

const selectQuery = `SELECT users.*
FROM users
JOIN company ON users.company_id = company.id
WHERE company.name = 'Coca';
`

db.query(selectQuery, (err, rows) => {
  if (err) throw err;
  console.log('Users from Pappers:', rows);
});

// Delete user by ID
// db.query("DELETE FROM users WHERE id = ?", [1], (err, results) => {
//   if (err) throw err;
//   console.log('User deleted:', results.affectedRows);
// });

db.end();
