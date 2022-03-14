import React, {Component}  from "react";
import Filho from "./Filho";

class Pai extends Component {

    state = {
        texto: 'Componente Pai <Classe>!!'
    }
    render() {
        return (
            <div>
                <h1>{this.state.texto}</h1>
                <Filho Dados = "Estou recebendo dados pelo Pai"/>
            </div>
            
        );
    }
}


export default Pai;

