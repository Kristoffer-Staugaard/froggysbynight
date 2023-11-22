let drinksarray = [
    ["img/margarita.png", "Margarita", "105 kr,-"],
    ["img/strawberry.png", "Strawberry daiquiri", "85 kr,-"], 
    ["img/brumble.png", "Brumble", "130 kr,-"],
    ["img/martini.png", "Martini", "105 kr,-"],
    ["img/pinacolada.png", "Pinacolada", "85 kr,-"],
    ["img/mojito.png", "Mojito", "105 kr,-"],
    ["img/high-c.png", "High-C", "110 kr,-"],
    ["img/moscow-mule.png", "Moscow Mule", "90 kr,-"],
    ["img/aperol-spritz.png", "Aperol Spritz", "105 kr,-"],
    ["img/dark-and-stormy.png", "Dark And Stormy", "90 kr,-"],
    ["img/espresso-martini.png", "Espresso Martini", "120 kr,-"],
    ["img/pornstar-martini.png", "Pornstar martini", "105 kr,-"],
   ];

   let select_element = document.getElementById("overskrift-og-tekst");
   drinksarray.forEach(drink => {
       select_element.innerHTML += "<div class='drinksection'><p class='text-styling-H3'>" + drink[1] + "</p><p class='text-styling-pris'>" + drink[2] + "</p><img class='drinkskortbilleder' src='" + drink[0] + "'></div>";
  });
   
  // for (let i = 0; i < drinksarray.length; i++) {
//       let drink = drinksarray[i];
  //     select_element.innerHTML += "<div class='drinksection'><p class='text-styling-H3'>" + drink[1] + "</p><p class='text-styling-pris'>" + drink[2] + "</p><img class='drinkskortbilleder' src='" + drink[0] + "'></div>";
      