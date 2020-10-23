import React from 'react';
import axios from 'axios';
import Destaque from '../componentes/Destaque';
import Estrenos from '../componentes/Estrenos';
import TituloSeccion from '../componentes/TituloSeccion';
import {connect} from 'react-redux';
import {getEstrenos} from '../redux/actions/moviesActions';

class HomePage extends React.Component {

    state = {
        peliculaDestacada: "",
        proximosEstrenos: []
    }

    componentDidMount() {
        this.props.getEstrenos();
        this.getProximosEstrenos();
    }

    getProximosEstrenos = async () => {
        try {
            const resultados = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=57ce088c0844a8eda6c1e58f3397757c&language=es');
            this.setState({
                proximosEstrenos: resultados.data.results
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    render() {
        return (
            <div>
                <Destaque pelicula={this.props.estrenos.peliculaDestacada} />
                <TituloSeccion>Estrenos:</TituloSeccion>
                <Estrenos peliculas={this.props.estrenos.data} />
                <TituloSeccion>Próximamente:</TituloSeccion>
                <Estrenos peliculas={this.state.proximosEstrenos} />
            </div>
        );
    }
}

function mapStateToProps({test, estrenos}) {
    return {
        test, estrenos
    }
}

export default connect(mapStateToProps, {
    getEstrenos
})(HomePage);