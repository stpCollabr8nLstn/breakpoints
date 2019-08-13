import React from 'react';
import styled from 'styled-components';

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

const Thing1 = styled.h1`
    background: pink;
`;

const Thing2 = styled.div`
    background: rebeccapurple;
`;

const Thing3 = styled.div`
    background: teal;
`;

const Adaptive = () => (
    <>
        <Container>
            <Thing2>Thing 2</Thing2>
            <Thing1>Thing 1</Thing1>
            <Thing3>Thing 3</Thing3>
        </Container>
        <MobileContainer>
            <Thing1>Thing 1</Thing1>
            <Thing2>Thing 2</Thing2>
            <Thing3>Thing 3</Thing3>
        </MobileContainer>
    </>
);

export default Adaptive;