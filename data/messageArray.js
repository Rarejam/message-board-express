// const { getUsernames } = require("../db/queries");
const { getAllDetails } = require("../db/queries");
const messagesArray = [
  // {
  //   text: "Hi there!",
  //   user: "Amando",
  //   added: new Date(),
  // },
  // {
  //   text: "Hello World2!",
  //   user: "Charles",
  //   added: new Date(),
  // },
  // {
  //   text: "Hello World3!",
  //   user: "Rarejam",
  //   added: new Date(),
  // },
];

async function loadDetais() {
  messagesArray.length = 0;
  const newDetails = await getAllDetails();
  newDetails.forEach((detail) =>
    messagesArray.push({
      text: detail.message,
      user: detail.username,
      added: detail.date,
    })
  );
}
loadDetais();

// async function loadUsername() {
//   messagesArray.length = 0;
//   const newUsernames = await getUsernames();
//   newUsernames.forEach((user) => {
//     messagesArray.push({
//       text: "this is a text from db",
//       user: user.username,
//       added: new Date().getDate(),
//     });
//   });
// }
// loadUsername();

module.exports = messagesArray;
