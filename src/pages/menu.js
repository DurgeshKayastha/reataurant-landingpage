export function renderMenu() {
  const content = document.querySelector("#content");

  const heading = document.createElement("h1");

  heading.textContent = "Our Menu";

  const paragraph = document.createElement("p");

  paragraph.textContent = "Here's what we're serving today...";

  const starterDiv = document.createElement("div")

  const starterHeading = document.createElement("h2")
  starterHeading.innerHTML = "Starters"

  const starterItem = document.createElement("ul")

  const starters = [
    "Masala Papad",
    "Honey Chili Potatoes",
    "Chicken Lollipop",
    "Paneer Tikka",
    "Hara Bhara Kebab",
    "Chicken Seekh Kebab"
  ];

  starters.forEach((item) =>{
    const li = document.createElement("li");
    li.textContent = item;
    starterItem.appendChild(li);
  })

  starterDiv.appendChild(starterHeading)
  starterDiv.appendChild(starterItem)


  const drinksDiv = document.createElement("div")

  const drinksHeading = document.createElement("h2")
  drinksHeading.textContent = "Drinks"

  const drinks = [
    "Tea",
    "Coffee",
    "Fruit Beer",
    "Mojito",
    "Coca-Cola",
    "Goli Soda"
  ];

  const drinkItem = document.createElement("ul")

  drinks.forEach((item) =>{
    const li = document.createElement("li")
    li.textContent = item;
    drinkItem.appendChild(li)
  })

  drinksDiv.appendChild(drinksHeading)
  drinksDiv.appendChild(drinkItem)


  
 

  content.appendChild(heading);
  content.appendChild(paragraph);
  content.appendChild(starterDiv);
  content.appendChild(drinksDiv)
}