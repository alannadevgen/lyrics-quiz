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

// composants
const Manche = ({numManche}) => <h1><b>Manche n°{numManche}</b></h1>;
const Equipe = ({nomEquipe}) => <span><b>Equipe</b> : {nomEquipe}</span>;
const Score = ({scoreEquipe}) => <span><b>Score</b> : {scoreEquipe}</span>;
const Question = ({mot}) => <span><b>Quelle chanson de quel artiste contient le mot suivant</b> : <span id="mot">{mot}</span> ?</span>;

// incrementer le numero de la manche
const getNextManche = () => {
  store.dispatch('incrementManche');
};

// cas de bonne reponse : + 1 point
const NextLevelValidate = () => {
  getNextManche();
  store.dispatch('chooseWord');
  store.dispatch('incrementScore', store.getters.actuEquipe.value);
  var tmp = store.getters.actuEquipe.value;
  store.dispatch('setActuEquipe', store.getters.autreEquipe.value);
  store.dispatch('setAutreEquipe', tmp);
};

// cas de mauvaise reponse : + 1 point pour l'adversaire
const NextLevelUnvalidate = () => {
  getNextManche();
  store.dispatch('chooseWord');
  store.dispatch('incrementScore', store.getters.autreEquipe.value);
  var tmp = store.getters.actuEquipe.value;
  store.dispatch('setActuEquipe', store.getters.autreEquipe.value);
  store.dispatch('setAutreEquipe', tmp);

};

const TestProp = () => {
  const artiste = document.getElementById("Artiste").value;
  const chanson = document.getElementById("Chanson").value;
  const motATrouver = document.getElementById("mot").innerHTML;
  const url = "https://api.lyrics.ovh/v1/" + artiste + "/" + chanson ;
  fetch(url).then(resp => resp.json())
  .then(json => {
    if (json['error']) {
      document.getElementById("ReponseAPI").innerHTML="Résultat de la recherche : La recherche n'a donné aucun résultat. ";
    } else {
        const lyrics = json['lyrics'];
        const mots = lyrics.split(/[ \n\t\r'.,]/) ;
        var compteur = 0;
        for (let i in mots) {
          if (motATrouver.localeCompare(mots[i]) == 0) {
            compteur += 1;
          } 
        }
        if (compteur>=1) {
          document.getElementById("ReponseAPI").innerHTML="Résultat de la recherche : L'API a trouvé les paroles de la chanson " +
          chanson + " de l'artiste " + artiste + ".<br>" + "Elle contient bien le mot cherché ! Félicitations !" ;
        } else {
          document.getElementById("ReponseAPI").innerHTML="Résultat de la recherche : L'API a trouvé les paroles de la chanson " +
          chanson + " de l'artiste " + artiste + ".<br>" + "Sauf erreur, elle ne contient pas le mot cherché. Désolé." ;
        }
      }
  })
  .catch( () => {
    document.getElementById("ReponseAPI").innerHTML="Il semble que l'API ne réponde pas. Désolé." ;
  });


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
        <h2>Equipe n°1</h2>
        <Equipe nomEquipe={useStore('nomEquipes')[useStore('actuEquipe')]}/>
        <br></br>
        <Score scoreEquipe={useStore('scores')[useStore('actuEquipe')]}/>
      </Col>
      <Col>
        {/* Autre équipe */}
        <h2>Equipe n°2</h2>
        <Equipe nomEquipe={useStore('nomEquipes')[useStore('autreEquipe')]}/>
        <br></br>
        <Score scoreEquipe={useStore('scores')[useStore('autreEquipe')]}/>
      </Col>
    </Row>
    <br></br><br></br>

    {/* Question */}
    <Question mot={useStore('word')} />
    
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