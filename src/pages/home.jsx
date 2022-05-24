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
          id = 'equipe1'
          label='Equipe n°1'
          type='text'
          placeholder="Nom de l'équipe n°1"
          noStoreData="false"
          clearButton
          required
          validate
        >
          {/*{store.dispatch('setNomEquipe', nomEquipe1)}*/}
        </ListInput>
        <ListInput
          inputId="equipe2"
          value="equipe2"
          label="Equipe n°2"
          type="text"
          placeholder="Nom de l'équipe n°2"
          clearButton
          required
          validate
        >
          {/*{store.dispatch('setNomEquipe', {nom : nomEquipe1})}*/}
        </ListInput>

        
      </List>
      
      <Button fill href="/manche">Démarrer une partie</Button>
    </Block>
    
    {useEffect(() => {
      console.log(document.getElementById('equipe1').label);
      console.log(document.getElementById('equipe2').value);
    }, [])}

  </Page>
);

export default HomePage;

// const eq1 = document.getElementById('equipe1');
// var eq2 = document.getElementById('equipe2');
// console.log(eq1);
// console.log(eq2);


