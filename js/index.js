import data from "./data.js";

const user = JSON.parse(data);

const container = document.getElementById("cards-container");

for (let i = 0; i < user.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <img src="${user[i].picture.large}">
  <h1>${user[i].name.last}, ${user[i].name.first}</h1>
  <h2>Edad: ${user[i].dob.age}</h2>
  <h3>${user[i].location.city}, ${user[i].location.state} - ${user[i].location.country}
  <h4>Email: ${user[i].email}</4>`;

  container.appendChild(card);
}