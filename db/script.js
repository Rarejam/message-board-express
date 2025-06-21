const pool = require("./pool");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS message_board (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(20),
  message TEXT,
  date DATE
);

INSERT INTO message_board (username, message, date)
VALUES 
  ('Brian', 'this is a message from Brian', '2025-05-24'),
  ('Amado', 'this is a message from Amado', '2025-04-25'),
  ('Rarejam', 'this is a message from Rarejam', '2025-06-25');
`;

async function main() {
  console.log("seeding...");
  //   seperate the pool declaration from this file so that we can end the call and use pool elsewhere
  await pool.query(SQL);
  await pool.end();
  console.log("done");
}

main();
