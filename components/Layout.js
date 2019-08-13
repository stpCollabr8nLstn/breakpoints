import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
    color: #FBEBFB;
    font-size: 36px;
    width: 100%;
    height: 100%;
    overflow: scroll;
    background-image: radial-gradient(
      circle at top left,
      #8A0285,
      #000 50%
    );

    h1, h2, h3, h4 {
        text-align: center;
    }

    h1 {
        text-shadow: 4px 2px 10px #BFFCFC;
    }

    pre {
        max-width: 75%;
        max-height: 75%;
        font-size: 28px;
    }
`;

const SplitLayoutContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 64px;

    img {
        max-width: 100%;
    }

    ul {
        position: relative;
        list-style: none;
        margin-left: 0;
        padding-left: 1.2em;
    }

    li:before {
        content: "🦄";
        position: absolute;
        left: 0;
    }

    li {
        margin: 16px 0 16px 16px;
    }
`;

export default ({ children }) => (
    <Layout>
        {children}
    </Layout>
)

const SplitLayout = ({children}) => (
    <SplitLayoutContainer>
        {children}
    </SplitLayoutContainer>
)

export { SplitLayout }