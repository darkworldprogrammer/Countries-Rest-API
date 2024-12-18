const countriesContainer = document.querySelector(".countries-container");
fetch(`https://restcountries.com/v3.1/all`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((country) => {
      const population = country.population.toLocaleString();
      const capital = country.capital ? country.capital.join(", ") : "N/A";
      const countryCard = document.createElement("a");
      countryCard.classList.add("country-card");
      countryCard.href = `/country.html?name=${country.name.common}`;
      countryCard.innerHTML = `
      <div class="country-img">
            <img src="${country.flags.svg}" alt="" />
          </div>
          <div class="card-text">
            <h3 class="card-title">${country.name.common}</h3>
            <p><b>Population: </b>${population}</p>
            <p><b>Region: </b>${country.region}</p>
            <p><b>Capital: </b>${capital}</p>
          </div>
      `;
      countriesContainer.append(countryCard);
    });
  });
