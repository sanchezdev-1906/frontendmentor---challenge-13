// Template for cards
class Card
{
  constructor(data) {
    this.img = data.flags.svg?data.flags.svg:data.flags.png;
    this.name = data.name.common;
    this.population = data.population;
    this.region = data.region;
    this.capital = data.capital[0];
  }
  cardTemplate()
  {
    const div = document.createElement("DIV")
    div.classList.add("card")
    div.innerHTML = `
      <img src="${this.img}" alt="${this.name} flag" class="card__img">
      <div class="card__data">
        <h2 class="card__title">${this.name}</h2>
        <p class="card__details">
          <span class="label">Population: </span><span>${this.population}</span>
          <span class="label">Region: </span><span>${this.region}</span>
          <span class="label">Capital: </span><span>${this.capital}</span>
        </p>
      </div>
  `
    return div
  }
}



