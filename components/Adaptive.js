import React from 'react';
import styled from 'styled-components';
import { Thing1, Thing2, Thing3 } from './Shared';

const MobileContainer = styled.div`
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
        display: none;
    }
`;

const Container = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr;
        div {
            padding: 16px;
            margin: 4px;
            border-radius: 2px;
        }
    }
`;

const Adaptive = () => (
    <>
        <Container>
            <Thing2>Image</Thing2>
            <Thing1><h1>Header</h1></Thing1>
            <Thing3>Content</Thing3>
        </Container>
        <MobileContainer>
            <Thing1><h1>Header</h1></Thing1>
            <Thing2>Image</Thing2>
            <Thing3>Content</Thing3>
        </MobileContainer>
    </>
);

export default Adaptive;