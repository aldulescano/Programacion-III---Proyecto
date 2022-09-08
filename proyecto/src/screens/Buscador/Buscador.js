import React from "react";
import Buscador from "../../components/Buscador/Buscador";
import Listado from "../../components/Listado/Listado";

function ResBuscador(props) {
    let busqueda = props.match.params.id;
    return (
        <React.Fragment>            
            <Buscador/>
            <Listado busqueda={busqueda} funcionalidades={{verTodas: true, formFiltro: false, cargarMas: false, populares: false, busqueda:true}}/>
        </React.Fragment>

    );
}

export default ResBuscador;