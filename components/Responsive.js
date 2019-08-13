import React from 'react';
import styled from 'styled-components';
import { Thing1, Thing2, Thing3 } from './Shared';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    div {
        padding: 16px;
        margin: 4px;
        border-radius: 2px;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const Responsive = () => (
    <Container>
        <Thing1><h1>Header</h1></Thing1>
        <Thing2>Image</Thing2>
        <Thing3>Content</Thing3>
    </Container>
);

export default Responsive;