import React, {Component} from 'react';
import './Manga.css';

class Manga extends Component {
    
    render(){
        return <div className="Manga">
                    <h1>Titre : {this.props.titre}</h1>
                </div>;
    }
}

export default Manga;