import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './hello/Hello'
import Manga from './manga/Manga'
import Vignette from './vignette/Vignette'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Hello nom="ARTIGNAN" prenom="Guillaume" age="18"></Hello>
          <Manga titre="Boruto"></Manga>
          <Hello nom="DI SALVO" prenom="Alexis" age="17"></Hello>
          <Hello nom="GAILLARD" prenom="Loan" age="17"></Hello>
          <Hello nom="NAYER" prenom="Jalil" age="17"></Hello>
          <Hello nom="GRIFFOULIERE" prenom="Léo" age="17"></Hello>
          <Vignette nom="Son Goku" nomOrigine="孫悟空" origine="Saiyan" image="https://i.pinimg.com/originals/3b/7a/9b/3b7a9b76d75738cb83dd8e984a0fb44a.png" ></Vignette>
          <Vignette nom="Son Gohan" nomOrigine="孫悟飯" origine="Saiyan et Terrien" image="https://vignette.wikia.nocookie.net/dragonball/images/b/bc/Adult_gohan.png/revision/latest?cb=20170601162208&path-prefix=fr" ></Vignette>
      </div>
    );    
  }

}

export default App;
