import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './hello/Hello'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Hello nom="ARTIGNAN" prenom="Guillaume"></Hello>
          <Hello nom="DI SALVO" prenom="Alexis"></Hello>
          <Hello nom="GAILLARD" prenom="Loan"></Hello>
          <Hello nom="NAYER" prenom="Jalil"></Hello>
          <Hello nom="GRIFFOULIERE" prenom="Léo"></Hello>
      </div>
    );    
  }

}

export default App;
