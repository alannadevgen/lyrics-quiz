import React from 'react';
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
          label="Equipe n°1"
          type="text"
          placeholder="Nom d'équipe"
          clearButton
        />

        <ListInput
          label="Equipe n°2"
          type="text"
          placeholder="Nom d'équipe"
          clearButton
        />
      </List>

      <Button fill href="/manche">Démarrer une partie</Button>
    </Block>

  </Page>
);
export default HomePage;