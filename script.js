let Country_URL = "https://restcountries.com/v3.1/region/africa";

let button = document.querySelector("button");
let listCountry = document.querySelector(".list-country");
let header = document.querySelector(".header");

button.addEventListener("click", addCountry);

function addCountry() {
  if (listCountry.innerHTML == "") {
    fetch(Country_URL)
      .then(function (reponse) {
        const P_PROMISE = reponse.json();
        return P_PROMISE;
      })
      .then(function (P_PROMISE) {
        P_PROMISE.forEach((country) => {
          let countryContainer = document.createElement("div");
          let flag = document.createElement("img");
          let name = document.createElement("p");
          flag.src = country.flags.png;
          flag.alt = country.flags.alt;
          name.innerText = country.name.common;
          countryContainer.append(flag, name);
          listCountry.appendChild(countryContainer);
          countryContainer.className = "country-container";
          name.className = "nom";
        });
      })
      .catch((e) => (listCountry.innerText = "Une erreur est survenue !!!"));
    button.innerText = "Masquer la liste des pays";
    header.style.boxShadow = "rgb(38, 57, 77) 0px 20px 30px -10px;";
  } else {
    listCountry.innerHTML = "";
    button.innerText = "Afficher la liste des pays";
    header.style.boxShadow =
      "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;";
  }
}
