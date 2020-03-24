import React, {Component} from 'react';
import './Hello.css';

class Hello extends Component {
    
    render(){
        var nom = this.props.nom;
        var prenom = this.props.prenom;
        var age = this.props.age;

        return <div className="Hello">
                    <h1>Hello à {prenom} {nom} à {age} ans</h1>
                </div>;
    }
}

export default Hello;