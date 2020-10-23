import React from 'react';
import {connect} from 'react-redux'
import Destaque from '../componentes/Destaque';
import Cast from '../componentes/Cast';
import {getCreditos, getPeliculaDetalle} from '../redux/actions/moviesActions'

class PeliculaDetalle extends React.Component {

    state = {
        pelicula: ""
    }

    componentDidMount() {
        const { peliculaid } = this.props.match.params;
        this.props.getPeliculaDetalle(peliculaid);
        this.props.getCreditos(peliculaid);
    }

    render() {
        return (
            <div>
                <Destaque pelicula={this.props.pelicula_detalle.data}></Destaque>
                <Cast cast={this.props.creditos.data}></Cast>
            </div>
        )
    }
}

function mapStateToProps({creditos, pelicula_detalle}) {
    return {
        creditos, pelicula_detalle
    }
}

export default connect(mapStateToProps, {
    getCreditos, getPeliculaDetalle
})(PeliculaDetalle);