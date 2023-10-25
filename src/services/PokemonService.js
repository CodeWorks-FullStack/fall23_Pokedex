import axios from "axios";
import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { logger } from "../utils/Logger.js";
import { api, pokemon } from "./AxiosService.js";

class PokemonService {
  async getPokemon() {
    const res = await pokemon.get("/pokemon");
    logger.log(res.data);
    AppState.pokemon = res.data.results.map((pokemon) => new Pokemon(pokemon));
    AppState.nextPage = res.data.next;
    AppState.previousPage = res.data.previous;
  }

  async changePage(url) {
    const res = await api.get(url);
    logger.log("CHANGING PAGE", res.data);
    AppState.nextPage = res.data.next;
    AppState.previousPage = res.data.previous;
    AppState.pokemon = res.data.results.map((pokemon) => new Pokemon(pokemon));
  }

  async setActivePokemon(url) {
    const res = await axios.get(url);
    logger.log("SET ACTIVE POKEMON", res.data);
    AppState.activePokemon = new Pokemon(res.data);
  }
}

export const pokemonService = new PokemonService();
