import React, {Component} from 'react';
import './Hello.css';

class Hello extends Component {
    
    render(){
        var nom = this.props.nom;
        var prenom = this.props.prenom;

        return <h1>Hello à {prenom} {nom}</h1>;
    }
}

export default Hello;