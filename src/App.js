import React, {Component} from 'react';
import logo from './logo.svg';
import sablier from './sablier.gif';

import './App.css';
import Hello from './hello/Hello'
import Manga from './manga/Manga'
import Vignette from './vignette/Vignette'

class App extends Component {

  constructor(){
    super();
    this.state = {};
    
    
  }

  donneesChargees(donnees){
    donnees.forEach(d => {
      d.active = false;
    });
    this.setState({"tab" : donnees});
  }

  componentDidMount(){
    fetch("http://92.222.69.104/dragon/ball")
      .then((d)=>d.json())
      .then((data)=>this.donneesChargees(data));
  }

  selectionVignette(event){

    this.state.tab.forEach(d=>{
      if(event.nom==d.nom)
        d.active=true;
      else 
        d.active=false;
    })

   
    
    this.setState({"currentVignette":event});

  }
  

  render() {

    
    
    var detail = <div className="detail"></div>;

    if (this.state && this.state.currentVignette){
      detail =  <div className="detail">
                      <h1>Détail sur {this.state.currentVignette.nom}</h1>
                      <div >
                      <h2><b>Nom : </b>{this.state.currentVignette.nom}</h2>
                      <h2><b>Nom d'origine : </b>{this.state.currentVignette.nomOrigine}</h2>
                      <h2><b>Origine: </b>{this.state.currentVignette.origine}</h2>
                      <img src={this.state.currentVignette.image}></img>
                    </div>
                    </div>;
    }
      
    if (this.state.tab){
      console.log(this.state.tab);
      return (
        <div className="App">
        
        {this.state.tab.map((item, i) => <Vignette key={i} active={item.active} nom={item.nom} 
                      nomOrigine={item.nomOrigine} 
                      origine={item.origine}
                      image={item.logo}
                      selectionEvent={this.selectionVignette.bind(this)}></Vignette> )}
          
                {detail}

        </div>
      );  
    }else {
        return <div className="Progress"><img src={sablier}></img></div>;
    }  
  }

}

export default App;
