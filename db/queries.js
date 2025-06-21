const pool = require("./pool");

// async function getUsernames() {
//   const username = await pool.query("SELECT username FROM message_board ");
//   return username.rows;
// }

async function getAllDetails() {
  const details = await pool.query("SELECT * FROM message_board");
  return details.rows;
}
async function deleteDetails() {
  const { deletedDetails } = await pool.query("DELETE FROM message_board");
}
async function inserDetails({ username, text, added }) {
  await pool.query(
    "INSERT INTO message_board (username,message,date) VALUES ($1, $2 , $3)",
    [username, text, added]
  );
}

module.exports = {
  //   getUsernames,
  getAllDetails,
  deleteDetails,
  inserDetails,
};
