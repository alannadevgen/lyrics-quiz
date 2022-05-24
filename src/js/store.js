
import { value } from 'dom7';
import { createStore } from 'framework7/lite';

const store = createStore({
  state: {
    words: [],
    word : "",
    manche: 1,
    scores: [0, 0],
    nomEquipes: [],
    actuEquipe: 0,
    autreEquipe: 1
  },
  getters: {
    words({ state }) {
      return state.words;
    },
    word({ state }) {
      return state.word;
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
    },
    actuEquipe({ state }) {
      return state.actuEquipe;
    },
    autreEquipe({ state }) {
      return state.autreEquipe;
    }
  },
  actions: {
    // enregistrer les mots
    loadWords({ state }, path) {
      fetch(path).then(resp => resp.json())
      .then(json => {
        state.words = json.map( indice => indice["word"] );
      });
    },

    // incrementer le score d'un point d'une equipe
    incrementScore({ state }, numEquipe){
      state.scores[numEquipe] += 1;
    },

    // numero de la manche
    incrementManche({ state }){
      state.manche += 1;
    },
    
    chooseWord({state}){
      state.word = state.words[Math.floor(Math.random()*state.words.length)];
    },

    // enregistrer le nom d'equipe dans le store
    setNomEquipe({ state }, nom){
      state.nomEquipes = nom; 
    },

    // enregistrer l'actuelle equipe
    setActuEquipe({ state }, actuEquipe){
      state.actuEquipe = actuEquipe; 
    },

    // enregistrer l'autre equipe
    setAutreEquipe({ state }, autreEquipe){
      state.autreEquipe = autreEquipe; 
    }
  },
})
export default store;