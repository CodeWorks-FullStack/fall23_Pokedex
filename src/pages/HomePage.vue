<template>
  <div class="container">
    <div class="row">
      <!-- LEFT SIDE -->
      <div v-for="p in pokemon" :key="p.id" class="col-2">
        <Pokemon :pokemon="p" />
      </div>
      <button
        :disabled="!previous"
        class="btn btn-outline-dark"
        @click="changePage(previous)"
      >
        Previous
      </button>
      <button
        :disabled="!next"
        class="btn btn-outline-dark"
        @click="changePage(next)"
      >
        Next
      </button>
      <!-- MIDDLE -->
      <div v-if="activePokemon" class="col-8">
        {{ activePokemon.name }}
      </div>
      <div v-else class="col - 8">Loading...</div>
      <!-- RIGHT -->
      <div class="col-2">test</div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { pokemonService } from "../services/PokemonService.js";
import { logger } from "../utils/Logger.js";
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    onMounted(() => {
      getPokemon();
    });
    async function getPokemon() {
      try {
        await pokemonService.getPokemon();
      } catch (error) {
        logger.error("[ERROR]", error);
        Pop.error("[ERROR]", error.message);
      }
    }
    return {
      pokemon: computed(() => AppState.pokemon),
      activePokemon: computed(() => AppState.activePokemon),
      previous: computed(() => AppState.previousPage),
      next: computed(() => AppState.nextPage),

      async changePage(url) {
        try {
          await pokemonService.changePage(url);
        } catch (error) {
          logger.error("[ERROR]", error);
          Pop.error("[ERROR]", error.message);
        }
      },
    };
  },
};
</script>

<style scoped lang="scss"></style>
