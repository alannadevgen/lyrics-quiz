import React from 'react';
import {
  Page,
  Navbar,
  NavTitle,
  NavTitleLarge,
  List,
  Button,
  ListInput,
  Block,
  BlockTitle,
  Row,
  Col,
  useStore
} from 'framework7-react';
import store from '../js/store';
// import Equipe from '../components/equipe'; // ne fonctionne pas

// composants
const Equipe = ({nomEquipe}) => <span><b>Equipe</b> : {nomEquipe}</span>;
const Score = ({scoreEquipe}) => <span><b>Score</b> : {scoreEquipe}</span>;
const Manche = ({numManche}) => <h2><b>Manche n°{numManche}</b></h2>;

/* ne fonctionne pas
const nomEquipes = useStore('nomEquipes');
console.log(nomEquipes);

const loadEquipe = () => {
  store.dispatch('getNomEquipes', '0');
};
*/

const getNextManche = () => {
  store.dispatch('incrementManche');
};

const updateScore = () => {
  store.dispatch('incrementScore');
};

const choixEquipe = Math.floor(Math.random() * 2);
// const choixMot = Math.floor(Math.random(useStore('words').length()));
const autreEquipe = Math.abs(choixEquipe-1);

const ManchePage = () => (
  <Page name="manche">
    {/* Top Navbar */}
    <Navbar large>
      <NavTitle>Lyrics Quiz</NavTitle>
      <NavTitleLarge>Lyrics Quiz</NavTitleLarge>
    </Navbar>

    {/* Page content */}
    <Block>
    {/* Information sur la manche en cours */}
    <Manche numManche={useStore('manche')}/>
    <Equipe nomEquipe={useStore('nomEquipes')[choixEquipe]}/>
    <br></br>
    <Score scoreEquipe={useStore('scores')[choixEquipe]}/>
    
    {/* Question */}
    <p>Quelle chanson de quel artiste contient le mot suivant : {useStore('words')[0]} ?</p>    
    
    <List inlineLabels noHairlinesMd>
    <ListInput
      label="Artiste"
      type="text"
      placeholder="Artiste"
      clearButton
    />

    <ListInput
      label="Chanson"
      type="text"
      placeholder="Chanson"
      clearButton
    />

  </List>
  </Block>

  <BlockTitle>Validation de la réponse</BlockTitle>
    <Block strong noHairlinesMd>
      <Row>
        <Col>
          <Button fill color="red" onClick={getNextManche}>
            Proposition non validée
          </Button>
        </Col>
        <Col>
          <Button fill color="green" onClick={getNextManche}>
            Proposition validée
          </Button>
        </Col>
      </Row>
    </Block>

  </Page>
);
export default ManchePage;