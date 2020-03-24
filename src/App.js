import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './hello/Hello'
import Manga from './manga/Manga'

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
      </div>
    );    
  }

}

export default App;
