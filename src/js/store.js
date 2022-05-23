
import { createStore } from 'framework7/lite';

const store = createStore({
  state: {
    words: [],
    manche,
    scores: [],
    nomEquipes: []
  },
  getters: {
    words({ state }) {
      return state.words;
    },
    manche({ state }) {
      return state.manche;
    },
    scores({ state }) {
      return state.scores;
    },
    nomEquipes({ state }) {
      return state.nomEquipes;
    }
  },
  actions: {
    loadWords({ state }, path) {
      state.words = fetch(path).then(response => response.json()).then(words => state.words = words);
    },
    incrementScore({ state }, numEquipe){
      state.scores[numEquipe] += 1;
    },
    incrementManche({ state }, numManche){
      state.manche[numManche] += 1;
    }
  },
})
export default store;