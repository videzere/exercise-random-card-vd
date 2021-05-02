export const buildCard = () => {
  let cards = document.querySelector("#app");
  cards.classList.add(
    "d-flex",
    "flex-row",
    "justify-content-center",
    "align-items-center"
  );
  cards.style.height = "100vh";

  let card = document.createElement("div");
  card.classList.add(
    "container",
    "d-flex",
    "flex-column",
    "justify-content-between",
    "p-3"
  );
  card.style.height = "35em";
  card.style.width = "23em";
  card.style.backgroundColor = "white";
  card.style.borderRadius = "1em";

  let suitup = document.createElement("div");
  suitup.classList.add("d-flex", "flex-row", "justify-content-start");
  suitup.style.fontSize = "6rem";

  let suitnumber = document.createElement("div");
  suitnumber.classList.add("d-flex", "flex-row", "justify-content-center");
  suitnumber.style.fontSize = "800%";

  let suitdown = document.createElement("div");
  suitdown.classList.add(
    "d-flex",
    "flex-row",
    "justify-content-end",
    "fa-flip-vertical"
  );
  suitdown.style.fontSize = "6rem";

  let suit = [
    '<span style="color: Tomato;">♥</span>',
    '<span style="color: Tomato;">♦</span>',
    '<span style="color: black;">♣</span>',
    '<span style="color: black;">♠</span>'
  ];
  let number = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let randomSuit = Math.floor(Math.random() * suit.length);
  let randomNumber = Math.floor(Math.random() * number.length);

  suitup.innerHTML = suit[randomSuit];
  suitnumber.innerHTML = number[randomNumber];
  suitdown.innerHTML = suit[randomSuit];

  card.appendChild(suitup);
  card.appendChild(suitnumber);
  card.appendChild(suitdown);

  cards.appendChild(card);
};
