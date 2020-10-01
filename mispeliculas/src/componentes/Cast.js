import React from 'react';
import styled from 'styled-components';
import TituloSeccion from '../componentes/TituloSeccion';
import Actor from './Actor'

const Container = styled.div`
    display: flex;
    overflow: scroll;
`

export default ({ cast }) => {
    if (cast) {
        return (
            <div>
                <TituloSeccion>Reparto</TituloSeccion>
                <Container>
                    {
                        cast.map(actor => (
                            <Actor key={actor.id} actor={actor} />
                        ))
                    }
                </Container>
            </div>
        )
    } else {
        return (
            <div>Cargando...</div>
        )
    }
}