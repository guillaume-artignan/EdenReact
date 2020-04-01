import React, {Component} from 'react';
import './Vignette.css';

class Vignette extends Component {
    
    render(){
        var style = {backgroundImage: "url('"+this.props.image+"')"}
        return <div onClick={()=>this.props.selectionEvent(this.props)} className="Vignette">
                    <div style={style} className="image" ></div>
                    <div className="description">
                        <h2><b>Nom :</b> {this.props.nom}</h2>
                        <h2><b>Nom d'origine :</b> {this.props.nomOrigine}</h2>
                        <h2><b>Origine :</b> {this.props.origine}</h2>
                    </div>
                </div>;
    }
}

export default Vignette;