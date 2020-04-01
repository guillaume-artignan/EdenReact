import React, {Component} from 'react';
import './Vignette.css';

class Vignette extends Component {
    
    constructor(props){
        super(props);
        
    }

    render(){

        var style = {backgroundImage: "url('"+this.props.image+"')"}
        var style2 = {};
        this.active = this.props.active ? this.props.active : false;
        if (this.active)
            style2 = {backgroundColor : "lightgreen"};

        return <div style={style2} onClick={()=>this.props.selectionEvent(this.props)} className="Vignette">
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