import React from 'react';
import axios from 'axios';
import Destaque from '../componentes/Destaque';
import Estrenos from '../componentes/Estrenos';
import TituloSeccion from '../componentes/TituloSeccion';

class HomePage extends React.Component {

    state = {
        peliculas: [],
        peliculaDestacada: "",
        proximosEstrenos: []
    }

    componentDidMount() {
        this.getData();
        this.getProximosEstrenos();
    }

    getData = async () => {
        try {
            const resultados = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=57ce088c0844a8eda6c1e58f3397757c&language=es');
            this.setPeliculaDestacada(resultados.data.results);
            this.setState({
                peliculas: resultados.data.results
            })
        } catch (error) {
            console.log(error.message)
        }
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

    setPeliculaDestacada(peliculas) {
        const peliculaDestacada = peliculas[Math.floor(Math.random() * peliculas.length)];
        this.setState({
            peliculaDestacada
        })
    }

    render() {
        return (
            <div>
                <Destaque pelicula={this.state.peliculaDestacada} />
                <TituloSeccion>Estrenos:</TituloSeccion>
                <Estrenos peliculas={this.state.peliculas} />
                <TituloSeccion>Próximamente:</TituloSeccion>
                <Estrenos peliculas={this.state.proximosEstrenos} />
            </div>
        );
    }
}

export default HomePage;