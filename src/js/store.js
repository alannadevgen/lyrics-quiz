
import { value } from 'dom7';
import { createStore } from 'framework7/lite';

const store = createStore({
  state: {
    words: [],
    manche: 1,
    scores: [0, 0],
    nomEquipes: [],
    actuEquipe: Math.floor(Math.random() * 2),
    autreEquipe: Math.abs(actuEquipe-1)
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
    },
    auteur({ state }) {
      return state.auteur;
    },
    titre({ state }) {
      return state.titre;
    }
  },
  actions: {
    loadWords({ state }, path) {
      fetch(path).then(resp => resp.json())
      .then(json => {
        state.words = json.map( indice => indice["word"] );
      });
    },
    incrementScore({ state }, numEquipe){
      state.scores[numEquipe] += 1;
    },
    incrementManche({ state }){
      state.manche += 1;
    },
    getNomEquipes({ state }, index){
      state.nomEquipes[index];
    },
    loadLyrics({ state }, auteur, titre){
      url = "https://api.lyrics.ovh/v1/" + auteur + titre;
    },
    setNomEquipe({ state }, nom){
      state.nomEquipes = nom; 
    }
  },
})
export default store;