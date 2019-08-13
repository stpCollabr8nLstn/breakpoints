import React from 'react';
import { Breakpoint, BreakpointProvider, setDefaultBreakpoints } from 'react-socks';
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

setDefaultBreakpoints([
    { mobile: 0 },
    { tablet: 401 },
    { desktop: 768}
]);

const Demo = () => (
    <BreakpointProvider>
        
        <Breakpoint desktop>
            <Container>
                <Thing1><h1>Header</h1></Thing1>
                <Thing2>Image</Thing2>
                <Thing3>Content</Thing3>
            </Container>
        </Breakpoint>
            
        <Breakpoint tablet down>
            <Container>
                <Thing2>Image</Thing2>
                <Thing1><h1>Header</h1></Thing1>
                <Thing3>Content</Thing3>
            </Container>
        </Breakpoint>
        
    </BreakpointProvider>
);

export default Demo;
