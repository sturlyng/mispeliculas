import React from 'react';
import axios from 'axios';
import Destaque from '../componentes/Destaque';
import Estrenos from '../componentes/Estrenos';
import TituloSeccion from '../componentes/TituloSeccion';
import {connect} from 'react-redux';
import {getEstrenos, getProximosEstrenos} from '../redux/actions/moviesActions';

class HomePage extends React.Component {

    componentDidMount() {
        this.props.getEstrenos();
        this.props.getProximosEstrenos();
    }

    render() {
        return (
            <div>
                <Destaque pelicula={this.props.estrenos.peliculaDestacada} />
                <TituloSeccion>Estrenos:</TituloSeccion>
                <Estrenos peliculas={this.props.estrenos.data} />
                <TituloSeccion>Próximamente:</TituloSeccion>
                <Estrenos peliculas={this.props.proximos_estrenos.data} />
            </div>
        );
    }
}

function mapStateToProps({test, estrenos, proximos_estrenos}) {
    return {
        test, estrenos, proximos_estrenos
    }
}

export default connect(mapStateToProps, {
    getEstrenos,
    getProximosEstrenos
})(HomePage);