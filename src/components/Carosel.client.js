import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const CaroselRoot = styled.div`
    overflow: hidden;
    overflow-x: scroll;
    width: 100%;
    height: 100%;
`;
const CaroselWrap = styled.div`
    display: flex;
`;
const CaroselCard = styled.div``;

export default function Carosel({ children }) {
    const rootRef = useRef();
    const wrapRef = useRef();

    useEffect(() => {}, []);
    const _children = React.Children.map(children, (child, index) => {
        return <CaroselCard>{child}</CaroselCard>;
    });
    return (
        <CaroselRoot ref={rootRef}>
            <CaroselWrap ref={wrapRef}>{_children}</CaroselWrap>
        </CaroselRoot>
    );
}
