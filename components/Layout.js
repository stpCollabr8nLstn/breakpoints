import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
    box-sizing: border-box;
    padding: 40px;

    font-size: 36px;

    h1, h2, h3, h4 {
        text-align: center;
    }

    code {
        max-width: 100%;
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