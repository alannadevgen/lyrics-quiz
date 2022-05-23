
import { createStore } from 'framework7/lite';

const store = createStore({
  state: {
    words: []
  },
  getters: {
    words({ state }) {
      return state.words;
    }
  },
  actions: {
    loadWords({ state }, path) {
      state.words = fetch(path).then(response => response.json()).then(words => state.words = words);;
    },
  },
})
export default store;
@