import React, {Component} from "react";

export default class ComponenteDoTeste extends Component{
    render(){
        return (
            <React.Fragment>
            <h1>{this.props.nome}</h1>
            <h2>{this.props.idade}</h2>
            </React.Fragment>
        );
    }
}