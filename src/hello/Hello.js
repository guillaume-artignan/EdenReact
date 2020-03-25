import React, {Component} from 'react';
import './Hello.css';


           

class Hello extends Component {
    
    constructor(){
        super();
        this.state = {color : "black", compteur : 0};
    }

    compte(){
        this.setState({compteur : this.state.compteur+1});
    }

    render(){
        var nom = this.props.nom;
        var prenom = this.props.prenom;
        var age = this.props.age;

        var style = {};
        style.color = this.state.couleur;
      
        return <div onClick={()=>this.compte()} className="Hello">
                    <h1 style={style}>Hello à {prenom} {nom} à {age} ans {this.state.compteur}</h1>
                </div>;
    }
}

export default Hello;