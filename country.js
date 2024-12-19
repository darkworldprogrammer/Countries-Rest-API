const countryName = new URLSearchParams(location.search).get("name");
const countryContainer = document.querySelector(".country-details");
const flagImg = document.querySelector(".flag");
const countryNames = document.querySelector(".country-name");
const textFirst = document.querySelector(".text-first");
const textSecond = document.querySelector(".borders");
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
// const border1 = document.querySelector(".border1");
// const border2 = document.querySelector(".border2");
// const border3 = document.querySelector(".border3");

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => {
    return res.json();
  })
  .then(([country]) => {
    // console.log(country);
    flagImg.src = country.flags.svg;
    countryNames.innerText = country.name?.common;
    if (!country.borders) {
      const a =
        (borderCountriesText.innerHTML = `<h3>ohh! ${country.name?.common} has no any border country..</h3>`);
      borderCountriesText.style.color = `red`;
    }

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
    // if (!country.borders) {
    //   borderCountriesText.removeChild(borderCountryH2);
    //   borderCountriesText.removeChild(textSecond);
    // }

    // if (country.borders[0]) {
    //   border1.innerText = country.borders[0];
    // } else {
    //   textSecond.removeChild(border1);
    // }
    // if (country.borders[1]) {
    //   border2.innerText = country.borders[1];
    // } else {
    //   textSecond.removeChild(border2);
    // }
    // if (country.borders[2]) {
    //   border3.innerText = country.borders[2];
    // }
    // else {
    //   textSecond.removeChild(border3);
    // }
    
    country.borders.forEach((border)=>{
      fetch(`https://restcountries.com/v3.1/alpha/${border}`)
      .then((res)=>res.json())
      .then(([countriesBorders])=>{
        // console.log(countriesBorders.name);
        const borderCountriesTag = document.createElement('a')
        borderCountriesTag.classList.add('border')
        console.log(countriesBorders.name);
        borderCountriesTag.innerText = countriesBorders.name.common
        borderCountriesTag.href =`/country.html?name=${countriesBorders.name.common}`
        textSecond.append(borderCountriesTag)
      })
    })

  })
  .catch((err) => {
    console.dir(err);
  });
