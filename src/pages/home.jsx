import React, {useEffect} from "react";
import {
  Page,
  Navbar,
  NavTitle,
  NavTitleLarge,
  List,
  ListInput,
  Block,
  Button
} from 'framework7-react';
import store from '../js/store';

const getNames = () => {
  store.dispatch('setNomEquipe', [document.getElementById('equipe1').value, document.getElementById('equipe2').value]);
  store.dispatch('chooseWord');
};

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large>
      <NavTitle>Lyrics Quiz</NavTitle>
      <NavTitleLarge>Lyrics Quiz</NavTitleLarge>
    </Navbar>
    
    {/* Page content */}
    
    <Block strong noHairlinesMd>
      <p>Choisissez vos noms d'équipe ! </p>

      <List inlineLabels noHairlinesMd>
        <ListInput
          inputId = 'equipe1'
          label='Equipe n°1'
          type='text'
          placeholder="Nom de l'équipe n°1"
          noStoreData="false"
          clearButton
          required
          validate
        />
        
        <ListInput
          inputId="equipe2"
          label="Equipe n°2"
          type="text"
          placeholder="Nom de l'équipe n°2"
          clearButton
          required
          validate
        />

        
      </List>
      
      <Button
        fill 
        href="/manche"
        onClick={getNames}
      >
        Démarrer une partie
      </Button>
    </Block>
  </Page>
);

export default HomePage;
