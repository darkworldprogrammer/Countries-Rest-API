const countryName = new URLSearchParams(location.search).get("name");
const countryContainer = document.querySelector(".country-details");
const flagImg = document.querySelector(".flag");
const countryNames = document.querySelector(".country-name");
const textFirst = document.querySelector(".text-first");
const textSecond = document.querySelector(".p");
const nativeName = document.querySelector(".nativename");
const populationText = document.querySelector("#population");
const population = document.querySelector(".population");
const regionText = document.querySelector("#region");
const region = document.querySelector(".region");
const subRegionText = document.querySelector("#subregion");
const subRegion = document.querySelector(".subregion");
const capitalText = document.querySelector("#capital");
const capital = document.querySelector(".capital");
const domainText = document.querySelector("#domain");
const domain = document.querySelector(".domain");
const currencyText = document.querySelector("#currency");
const currency = document.querySelector(".currency");
const languageText = document.querySelector("#language");
const language = document.querySelector(".language");
const borderCountriesText = document.querySelector(".border-country");
const borderCountryH2 = document.querySelector(".h2");
const border1 = document.querySelector(".border1");
const border2 = document.querySelector(".border2");
const border3 = document.querySelector(".border3");

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => {
    return res.json();
  })
  .then(([country]) => {
    console.log(country);

    flagImg.src = country.flags.svg;
    countryNames.innerText = country.name?.common;

    if (country.name.nativeName) {
      nativeName.innerText = Object.values(country.name.nativeName)[0].official;
    } else {
      nativeName.innerText = country.name?.common;
    }
    if (country.population) {
      population.innerText = country.population.toLocaleString();
    } else {
      textFirst.removeChild(populationText);
    }
    if (country.region) {
      region.innerText = country.region;
    } else {
      textFirst.removeChild(regionText);
    }
    if (country.subregion) {
      subRegion.innerText = country.subregion;
    } else {
      textFirst.removeChild(subRegionText);
    }
    if (country.capital) {
      capital.innerText = Object.values(country.capital).join(", ");
    } else {
      textFirst.removeChild(capitalText);
    }
    if (country.tld) {
      domain.innerText = country.tld.join(", ");
    } else {
      textSecond.removeChild(domainText);
    }
    if (country.currencies) {
      currency.innerText = Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(", ");
    } else {
      textSecond.removeChild(currencyText);
    }
    if (country.languages) {
      language.innerText = Object.values(country.languages).join(", ");
    } else {
      textSecond.removeChild(languageText);
    }
    if (!country.borders) {
      borderCountriesText.removeChild(borderCountryH2);
      borderCountriesText.removeChild(textSecond);
    }
    if (country.borders[0]) {
      border1.innerText = country.borders[0];
    } else {
      textSecond.removeChild(border1);
    }
    if (country.borders[1]) {
      border2.innerText = country.borders[1];
    } else {
      textSecond.removeChild(border2);
    }
    if (country.borders[2]) {
      border3.innerText = country.borders[2];
    } else {
      textSecond.removeChild(border3);
    }
  
  })
  .catch((err) => {
    console.dir(err);
  });

//////////////=======
// countryContainer.innerHTML = `
//                    <img class="flag" src="${country.flags.svg}" alt="" />
//     <div class="details-text">
//       <h1 class="country-name">${country.name?.common}</h1>
//       <div class="all-details">
//         <div>
//           <p><b>Native name: </b>${country.name.nativeName?.eng?.official}</p>
//           <p><b>population: </b>${country.population.toLocaleString()}</p>
//           <p><b>region: </b>${country.region}</p>
//           <p><b>sub region: </b>${country.subregion}</p>
//           <p><b>capital: </b>${country.capital}</p>
//         </div>
//         <div>
//           <p><b>Top Level Domain: </b>${country.tld}</p>
//           <p><b>Currencies: </b>${country.currencies?.INR?.symbol}</p>
//           <p><b>Languages: </b>${country.languages.eng}</p>
//         </div>
//       </div>
//       <div class="border-country">
//         <h2>Border Countries:</h2>
//         <div class="p">
//           <p>${country.borders[0]}</p>
//           <p>${country.borders[1]}</p>
//           <p>${country.borders[2]}</p>
//           <p>${country.borders[3]}</p>
//           <p>${country.borders[4]}</p>
//         </div>
//       </div>
//     </div>
// `;
