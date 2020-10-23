import React from 'react';
import styled from 'styled-components';

const Contenedor = styled.div`
    position: fixed;
    width: 100%;
    height: 75px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    justify-content: space-between;
    >h3{
        margin-left: 20px;
    }
`

const Fecha = styled.div`

`

export default ({fecha}) => (
    <Contenedor>
        <h3>That's my Movie</h3>
        <Fecha>{fecha.toLocaleString()}</Fecha>
    </Contenedor>
)