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
const Manche = ({numManche}) => <h1><b>Manche n°{numManche}</b></h1>;
const Equipe = ({nomEquipe}) => <span><b>Equipe</b> : {nomEquipe}</span>;
const Score = ({scoreEquipe}) => <span><b>Score</b> : {scoreEquipe}</span>;
const Question = ({mot}) => <span><b>Quelle chanson de quel artiste contient le mot suivant</b> : {mot} ?</span>;
/* ne fonctionne pas
const nomEquipes = useStore('nomEquipes');
console.log(nomEquipes);
*/

// definition de l'equipe actuelle et de l'adversaire
const actuEquipe = Math.floor(Math.random() * 2);
const autreEquipe = Math.abs(actuEquipe-1);


const getNextManche = () => {
  store.dispatch('incrementManche');
};

const updateScore = ({numEquipe}) => {
  store.dispatch('incrementScore', numEquipe);
};

const NextLevelValidate = () => {
  getNextManche();
  store.dispatch('incrementScore', actuEquipe);
};

const NextLevelUnvalidate = () => {
  getNextManche();
  store.dispatch('incrementScore', autreEquipe);
};


const TestProp = () => {
  const auteur = document.getElementById("Artiste").value;
}

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
    <Row>
      <Col>
        {/* Equipe actuelle */}
        <h2>Equipe actuelle</h2>
        <Equipe nomEquipe={useStore('nomEquipes')[actuEquipe]}/>
        <br></br>
        <Score scoreEquipe={useStore('scores')[actuEquipe]}/>
      </Col>
      <Col>
        {/* Autre équipe */}
        <h2>Autre équipe</h2>
        <Equipe nomEquipe={useStore('nomEquipes')[autreEquipe]}/>
        <br></br>
        <Score scoreEquipe={useStore('scores')[autreEquipe]}/>
      </Col>
    </Row>
    <br></br><br></br>

    {/* Question */}
    <p>Quelle chanson de quel artiste contient le mot suivant : {useStore('words')[Math.floor(Math.random()*useStore('words').length)]} ?</p>    
    
    <List inlineLabels noHairlinesMd>
    <ListInput
      inputId="Artiste"
      label="Artiste"
      type="text"
      placeholder="Artiste"
      clearButton
    />

    <ListInput
      inputId="Chanson"
      label="Chanson"
      type="text"
      placeholder="Chanson"
      clearButton
    />

  </List>
  </Block>

  <Button fill color="blue" onClick={TestProp}>
            Rechercher auteur et titre sur l'API lyrics.ovh
          </Button>

  <Block id="ReponseAPI">
    Résultat de la recherche :
  </Block>

  <BlockTitle>Validation de la réponse</BlockTitle>
    <Block strong noHairlinesMd>
      <Row>
        <Col>
          <Button fill color="red" onClick={NextLevelUnvalidate}>
            Proposition non validée
          </Button>
        </Col>
        <Col>
          <Button fill color="green" onClick={NextLevelValidate}>
            Proposition validée
          </Button>
        </Col>
      </Row>
    </Block>

  </Page>
);
export default ManchePage;