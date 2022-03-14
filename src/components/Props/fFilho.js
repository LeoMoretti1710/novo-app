import React from "react";

function FuncFilho (props) {
    return (
        <div>
            Componente Filho <br/>
            {props.Dados}
        </div>
    );
}

export default FuncFilho;