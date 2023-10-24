export class Pokemon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.url = data.url;
    this.moves = data.moves;
    this.types = data.types;
    this.height = data.height;
    this.weight = data.weight;
    this.image = data.sprites?.other["official-artwork"].front_default;
    this.speciesUrl = data.species?.url;
  }
}
