import React from "react";
import FuncFilho from './fFilho';

function FuncPai () {
    return (
        <div>
            <h2>Borá lá aprendendendo passar com a Function</h2><br/>
            <FuncFilho Dados = " Estou recebendo os dados do componente Pai"/>
        </div>
    );
}

export default FuncPai