<template>
  <div @click="setActivePokemon(pokemon.url)" class="text-center">
    {{ pokemon.name }}
  </div>
</template>

<script>
import { Pokemon } from "../models/Pokemon.js";
import { pokemonService } from "../services/PokemonService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: { pokemon: { type: Pokemon, required: true } },
  setup() {
    return {
      async setActivePokemon(url) {
        try {
          await pokemonService.setActivePokemon(url);
        } catch (error) {
          logger.error("[ERROR]", error);
          Pop.error("[ERROR]", error.message);
        }
      },
    };
  },
};
</script>

<style></style>
